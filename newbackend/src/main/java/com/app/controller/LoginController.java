package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dao.LoginRepository;
import com.app.dto.LoginRequest;
import com.app.pojos.Login;
import com.app.service.ILoginService;
@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("gym")
public class LoginController {
	//dependency service
	@Autowired
	private ILoginService loginService;
	@Autowired
	private LoginRepository loginRepo;

	public LoginController() {
		System.out.println("in a ctor"+getClass().getName());
	}
	@PostMapping("/login")
	public ResponseEntity<?> authenticateCustomer(@RequestBody LoginRequest request){
		System.out.println("in auth"+request);
		Login authenticateCustomer = loginService.authenticateCustomer(request.getUmtEmail(), request.getUmtPassword());
		//System.out.println("con"+authenticateCustomer);
		
		//return new ResponseEntity<>(loginService.authenticateCustomer(request.getUmtEmail(), request.getUmtPassword()), HttpStatus.OK);
	return ResponseEntity.ok(authenticateCustomer);
		
	}
	@GetMapping("/d")
	public List<Login> getAllMember(){
		return loginRepo.findAll();
	}
	

}