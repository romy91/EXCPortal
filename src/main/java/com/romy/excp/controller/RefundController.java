package com.romy.excp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.romy.excp.exception.ResourceNotFoundException;
import com.romy.excp.model.Refund;
import com.romy.excp.repository.RefundRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class RefundController {

	@Autowired
	private RefundRepository refundRepository;

	@GetMapping("/refunds")
	public List<Refund> getAllRefunds() {
		return refundRepository.findAll();
	}

	@GetMapping("/refunds/{id}")
	public ResponseEntity<Refund> getEmployeeById(@PathVariable(value = "id") Long refundId)
			throws ResourceNotFoundException {
		Refund refund = refundRepository.findById(refundId)
				.orElseThrow(() -> new ResourceNotFoundException("Refund not found for this id :: " + refundId));
		return ResponseEntity.ok().body(refund);
	}

	@PostMapping("/refunds")
	public Refund createRefund(@Valid @RequestBody Refund refund) {
		return refundRepository.save(refund);
	}

	@PutMapping("/refunds/{id}")
	public ResponseEntity<Refund> updateRefund(@PathVariable(value = "id") Long refundId,
			@Valid @RequestBody Refund refundDetails) throws ResourceNotFoundException {

		Refund refund = refundRepository.findById(refundId)
				.orElseThrow(() -> new ResourceNotFoundException("Refund not found for this id :: " + refundId));

		refund.setName(refundDetails.getName());
		refund.setAmount(refundDetails.getAmount());
		refund.setDescription(refundDetails.getDescription());
		refund.setInstallments(refundDetails.getInstallments());
		refund.setRemaining_installments(refundDetails.getRemaining_installments());
		refund.setRemaining_amount(refundDetails.getRemaining_amount());

		final Refund updatedRefund = refundRepository.save(refund);
		return ResponseEntity.ok(updatedRefund);
	}

	@DeleteMapping("/refunds/{id}")
	public Map<String, Boolean> deleteRefund(@PathVariable(value = "id") Long refundId)
			throws ResourceNotFoundException {
		Refund employee = refundRepository.findById(refundId)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + refundId));

		refundRepository.delete(employee);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
}
