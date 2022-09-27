package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ResponseDTO;
import com.app.pojos.Membership;
import com.app.service.IMembershipService;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("gym")
public class MembershipController {
	@Autowired
	private IMembershipService membershipSer;
	public MembershipController() {
		// TODO Auto-generated constructor stub
	}
	@GetMapping("/getallmemberships")
	public ResponseEntity<?> getAllMemberships(){
		System.out.println("in getAllTrainers ");
		return new ResponseEntity<>(membershipSer.getAllMemberships(), HttpStatus.OK);
	}
	@PostMapping("/addmembership")
	public ResponseDTO<?> addMemberships(@RequestBody Membership request){
	System.out.println("in getAllTrainers "+request);
	return new ResponseDTO<>(HttpStatus.OK,"Membership Added",membershipSer.addMemberships(request));
	}
	
	@DeleteMapping("delete/{membershipId}")
	public ResponseDTO<?> deleteUserDetails(@PathVariable Integer membershipId) {
		System.out.println("in del user dtls " + membershipId);
		try {
			membershipSer.deleteMembershipDetail(membershipId);
			return new ResponseDTO<>(HttpStatus.OK, "Membership details deleted", null);
		} catch (RuntimeException e){
			System.out.println("err in delete " + e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Membership details deletion failed", null);
		}
	}
	@GetMapping("getamount/{membershipId}")
	public ResponseEntity<?> getMembershipAmountById(@PathVariable Integer membershipId){
		System.out.println("in getMembershipAmountById "+membershipId);
		return new ResponseEntity<>(membershipSer.getMembershipAmountById(membershipId), HttpStatus.OK);
	}
	
}