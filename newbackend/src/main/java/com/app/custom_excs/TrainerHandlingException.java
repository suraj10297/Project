package com.app.custom_excs;

public class TrainerHandlingException extends RuntimeException{
	private static final long serialVersionUID = 1L;
	public TrainerHandlingException(String errMesg) {
		super(errMesg);
	}
}
