package com.FullStackCRUD.CRUDySpringReact.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.FullStackCRUD.CRUDySpringReact.Model.PayingGuest;

public interface PayingGuestRepo extends JpaRepository<PayingGuest, Integer>
{
	public PayingGuest findByPgEmail(String pgEmail);

}
