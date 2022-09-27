package com.app.custom_excs;

public class LoginHandlingException extends RuntimeException {


	private static final long serialVersionUID = 1L;
	public LoginHandlingException(String errMesg) {
		super(errMesg);
	}
}
