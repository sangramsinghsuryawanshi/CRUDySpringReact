package com.FullStackCRUD.CRUDySpringReact.Service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.FullStackCRUD.CRUDySpringReact.Model.PayingGuest;

public interface PayingGuestServiceControl 
{	
	public String isSave(PayingGuest PG);
	public List<PayingGuest> isFindAll();
	public ResponseEntity<String> idUpdate(int pgId,PayingGuest PG);
	public PayingGuest isGetById(int pgId);
	public ResponseEntity<String> isDeleteById(int pgId);
	public ResponseEntity<PayingGuest> FindByEmail(String pgEmail);
}
