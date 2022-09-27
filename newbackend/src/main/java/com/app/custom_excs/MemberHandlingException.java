package com.app.custom_excs;

public class MemberHandlingException extends RuntimeException{
	private static final long serialVersionUID = 1L;
	public MemberHandlingException(String errMesg) {
		super(errMesg);
	}
}
