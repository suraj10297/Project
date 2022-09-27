package com.app.service;

import com.app.dto.LoginRequest;
import com.app.pojos.Login;

public interface ILoginService {
	Login authenticateCustomer(String email,String pwd);
}
