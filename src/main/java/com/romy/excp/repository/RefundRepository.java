package com.romy.excp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.romy.excp.model.Refund;

@Repository
public interface RefundRepository extends JpaRepository<Refund, Long> {
	
}
