package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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

import com.app.dto.MemberUpdateDTO;
import com.app.dto.ResponseDTO;
import com.app.pojos.Member;
import com.app.service.IMemberService;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("gym")
public class MemberController {
	@Autowired
	private IMemberService memberSer;
	 public MemberController() {
		// TODO Auto-generated constructor stub
	}
	
	 @PostMapping("/signup")
		public Member signUp(@RequestBody Member request){
			System.out.println("in signUp "+request);
			//Login authenticateCustomer = loginService.authenticateCustomer(request.getUmtEmail(), request.getUmtPassword());
			//System.out.println("con"+authenticateCustomer);
			return memberSer.signUp(request);
			//return new ResponseEntity<>(memberSer.signUp(request), HttpStatus.CREATED);
		//return ResponseEntity.ok(authenticateCustomer);
		}
		/*
		public ResponseDTO<?> signUp(@RequestBody Member request){
			System.out.println("in signUp "+request);
			//Login authenticateCustomer = loginService.authenticateCustomer(request.getUmtEmail(), request.getUmtPassword());
			//System.out.println("con"+authenticateCustomer);
			return new ResponseDTO<>(HttpStatus.CREATED,"Sign up successfully",memberSer.signUp(request));
			//return new ResponseEntity<>(memberSer.signUp(request), HttpStatus.CREATED);
	 
	 
	/*@PostMapping("/signup")
	public ResponseDTO<?> signUp(@RequestBody Member request){
		System.out.println("in signUp "+request);
		//Login authenticateCustomer = loginService.authenticateCustomer(request.getUmtEmail(), request.getUmtPassword());
		//System.out.println("con"+authenticateCustomer);
		return new ResponseDTO<>(HttpStatus.CREATED,"Sign up successfully",memberSer.signUp(request));
		//return new ResponseEntity<>(memberSer.signUp(request), HttpStatus.CREATED);
	//return ResponseEntity.ok(authenticateCustomer);
	}*/
	@GetMapping("getmemberbyid/{memberId}")
	public ResponseEntity<?> getProfileById(@PathVariable Integer memberId){
		System.out.println("in getmemberbyid "+memberId);
		return new ResponseEntity<>(memberSer.getProfile(memberId), HttpStatus.OK);
	}
	
	@GetMapping("getallmembers/{trainerId}")
	public ResponseDTO<?> getAllMembersWithSpecificTrainer(@PathVariable Integer trainerId){
		System.out.println("in getmemberbyid "+trainerId);
		List<Member> list = memberSer.getAllMembersWithSpecificTrainer(trainerId);
		if(list.size()==0) {
			return new ResponseDTO<>(HttpStatus.OK,"Not Available members",list);
		}
		return new ResponseDTO<>(HttpStatus.OK,"Available members",list);
	}
	@DeleteMapping("/{memberId}")
	public ResponseDTO<?> deleteMemberDetails(@PathVariable Integer memberId) {
		System.out.println("in del user dtls " + memberId);
		try {
			memberSer.deleteMemberDetails(memberId);
			return new ResponseDTO<>(HttpStatus.OK, "Member details deleted successfullly with all Workoutplans", null);
		} catch (RuntimeException e) {
			System.out.println("err in delete " + e);
			return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Member details deletion failed", null);
		}
	}
	@PutMapping("/update/{memberId}")
	public ResponseDTO<?> updateUserDetails(@PathVariable Integer memberId, @RequestBody MemberUpdateDTO memberUpdateDTO) {
		System.out.println("in rest : update details " + memberId + " " + memberUpdateDTO);
		return new ResponseDTO<>(HttpStatus.OK, "Updated member details",
				memberSer.updateMemberDetails(memberId, memberUpdateDTO));
	}
}
	