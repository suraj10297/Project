package com.app.dto;

public class LoginRequest {
	
	private String umtEmail;
	private String umtPassword;
	
	public LoginRequest() {
		System.out.println("in ctor"+getClass().getName());
	}

	public LoginRequest(String umtEmail, String umtPassword) {
		super();
		this.umtEmail = umtEmail;
		this.umtPassword = umtPassword;
	}

	public String getUmtEmail() {
		return umtEmail;
	}

	public void setUmtEmail(String umtEmail) {
		this.umtEmail = umtEmail;
	}

	public String getUmtPassword() {
		return umtPassword;
	}

	public void setUmtPassword(String umtPassword) {
		this.umtPassword = umtPassword;
	}

	@Override
	public String toString() {
		return "LoginRequest [umtEmail=" + umtEmail + ", umtPassword=" + umtPassword + "]";
	}
	
}

