package com.romy.excp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "refunds")
public class Refund {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "refund_name")
	private String name;

	@Column(name = "refund_description")
	private String description;

	@Column(name = "refund_amount")
	private Long amount;

	@Column(name = "refund_remaining_amount")
	private Long remaining_amount;

	@Column(name = "refund_installments")
	private int installments;

	@Column(name = "refund_remaining_installments")
	private int remaining_installments;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Long getAmount() {
		return amount;
	}

	public void setAmount(Long amount) {
		this.amount = amount;
	}

	public Long getRemaining_amount() {
		return remaining_amount;
	}

	public void setRemaining_amount(Long remaining_amount) {
		this.remaining_amount = remaining_amount;
	}

	public int getInstallments() {
		return installments;
	}

	public void setInstallments(int installments) {
		this.installments = installments;
	}

	public int getRemaining_installments() {
		return remaining_installments;
	}

	public void setRemaining_installments(int remaining_installments) {
		this.remaining_installments = remaining_installments;
	}

	@Override
	public String toString() {
		return "Refund [id=" + id + ", name=" + name + ", description=" + description + ", amount=" + amount
				+ ", remaining_amount=" + remaining_amount + ", remaining_installments=" + remaining_installments + "]";
	}

}
