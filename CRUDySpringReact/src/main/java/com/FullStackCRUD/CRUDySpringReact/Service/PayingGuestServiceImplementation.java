package com.FullStackCRUD.CRUDySpringReact.Service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.FullStackCRUD.CRUDySpringReact.Model.PayingGuest;
import com.FullStackCRUD.CRUDySpringReact.Repository.PayingGuestRepo;

@Service
public class PayingGuestServiceImplementation implements PayingGuestServiceControl 
{
	private final PayingGuestRepo PGR;
	
	public PayingGuestServiceImplementation(PayingGuestRepo pGR) {
		super();
		PGR = pGR;
	}

	@Override
	public String isSave(PayingGuest PG) 
	{
		if(PGR!=null)
		{
			PGR.save(PG);
			return "Data Inserted Successfully..";
		}
		return "Invalid Credits.";
	}

	@Override
	public List<PayingGuest> isFindAll() {
		return PGR.findAll();
	}

	@Override
	public ResponseEntity<String> idUpdate(int pgId,PayingGuest PG) 
	{
		PayingGuest PG1 = PGR.findById(pgId).orElse(null);
		if(PG1!=null)
		{
			PG1.setPgName(PG.getPgName());
			PG1.setPgEmail(PG.getPgEmail());
			PG1.setPgAddress(PG.getPgAddress());
			PG1.setPgNumber(PG.getPgNumber());
			PGR.save(PG1);
			return ResponseEntity.ok("Guest updated successfully.");
		}
		 return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Guest with ID " + pgId + " not found.");
	}

	@Override
	public PayingGuest isGetById(int pgId) 
	{	
		return PGR.findById(pgId).orElse(null);
	}

	@Override
	public ResponseEntity<String> isDeleteById(int pgId) {
		PayingGuest guest = PGR.findById(pgId).orElse(null);
	    if (guest!=null) 
	    {
	        PGR.deleteById(pgId);
	        return ResponseEntity.ok("Guest deleted successfully.");
	    } 
	    else
	    {
	        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Guest not found.");
	    }
	}

	@Override
	public ResponseEntity<PayingGuest> FindByEmail(String pgEmail) 
	{
		PayingGuest PG = PGR.findByPgEmail(pgEmail);
		if(PG!=null)
		{
			return ResponseEntity.ok(PG);
		}
		else
		{
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
		}
	}
	
}
