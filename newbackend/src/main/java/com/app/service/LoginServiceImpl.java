package com.app.service;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_excs.LoginHandlingException;
import com.app.dao.LoginRepository;
import com.app.dto.LoginRequest;
import com.app.pojos.Login;
@Service
@Transactional
public class LoginServiceImpl implements ILoginService {
	//dependency dao i/f
	@Autowired
	private LoginRepository loginRepo;
	
	
	@Override
	public Login authenticateCustomer(String email, String pwd) {
		
		return loginRepo.validateLogin(email, pwd).orElseThrow(() -> new LoginHandlingException("Invalid Credentials"));
	}

}
