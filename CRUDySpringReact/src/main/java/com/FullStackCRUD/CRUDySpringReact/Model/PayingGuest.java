package com.FullStackCRUD.CRUDySpringReact.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class PayingGuest 
{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int pgId;
	private String pgName;
	private String pgEmail;
	private String pgAddress;
	private String pgNumber;
	public int getPgId() {
		return pgId;
	}
	public void setPgId(int pgId) {
		this.pgId = pgId;
	}
	public String getPgName() {
		return pgName;
	}
	public void setPgName(String pgName) {
		this.pgName = pgName;
	}
	public String getPgEmail() {
		return pgEmail;
	}
	public void setPgEmail(String pgEmail) {
		this.pgEmail = pgEmail;
	}
	public String getPgAddress() {
		return pgAddress;
	}
	public void setPgAddress(String pgAddress) {
		this.pgAddress = pgAddress;
	}
	public String getPgNumber() {
		return pgNumber;
	}
	public void setPgNumber(String pgNumber) {
		this.pgNumber = pgNumber;
	}
	public PayingGuest(int pgId, String pgName, String pgEmail, String pgAddress, String pgNumber) {
		super();
		this.pgId = pgId;
		this.pgName = pgName;
		this.pgEmail = pgEmail;
		this.pgAddress = pgAddress;
		this.pgNumber = pgNumber;
	}
	@Override
	public String toString() {
		return "PayingGuest [pgId=" + pgId + ", pgName=" + pgName + ", pgEmail=" + pgEmail + ", pgAddress=" + pgAddress
				+ ", pgNumber=" + pgNumber + "]";
	}
	public PayingGuest() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
