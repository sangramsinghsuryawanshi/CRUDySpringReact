package com.FullStackCRUD.CRUDySpringReact.RestController;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.FullStackCRUD.CRUDySpringReact.Model.PayingGuest;
import com.FullStackCRUD.CRUDySpringReact.Service.PayingGuestServiceControl;

@RestController
@RequestMapping("/CRUDySpringReact")
@CrossOrigin(origins = "http://localhost:3000")
public class PayingGuestRestController 
{
	private PayingGuestServiceControl PGSC;

	public PayingGuestRestController(PayingGuestServiceControl pGSC) {
		super();
		PGSC = pGSC;
	}
	
	@PostMapping("/create")
	public String isCreatedData(@RequestBody PayingGuest PG)
	{
		return PGSC.isSave(PG);
	}
	@GetMapping("/GetAll")
	public List<PayingGuest> isGetAll()
	{
		return PGSC.isFindAll();
	}
	@GetMapping("/Get/{pgId}")
    public PayingGuest getGuestById(@PathVariable int pgId) {
        PayingGuest guest =PGSC.isGetById(pgId) ;  
        if (guest != null) 
        {
            return guest;  
        } 
        else 
        {
            return null;  
        }
    }
	@PutMapping("/Update/{pgId}")
	public ResponseEntity<String> isUpdateSuccess(@PathVariable int pgId, @RequestBody PayingGuest PG)
	{
		return PGSC.idUpdate(pgId, PG);
	}
	@DeleteMapping("/Delete/{pgId}")
	public ResponseEntity<String> isPGDeleted(@PathVariable int pgId)
	{
		return PGSC.isDeleteById(pgId);
	}
	@GetMapping("/searchByEmail")
	public ResponseEntity<PayingGuest> searchByEmail(@RequestParam("pgEmail") String pgEmail) 
	{
	        return PGSC.FindByEmail(pgEmail);
	}
}
