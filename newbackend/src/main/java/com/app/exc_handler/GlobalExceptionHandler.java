package com.app.exc_handler;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.app.custom_excs.LoginHandlingException;
import com.app.custom_excs.MemberHandlingException;
import com.app.custom_excs.TrainerHandlingException;
import com.app.dto.ErrorResponse;
@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
	@ExceptionHandler(LoginHandlingException.class)
	public ResponseEntity<ErrorResponse> handleLoginHandlingException(LoginHandlingException e)
	{
		System.out.println("in login handler exc");
		return new ResponseEntity<>(new ErrorResponse("Invalid Login", e.getMessage()), HttpStatus.UNAUTHORIZED);
	}
	
	@ExceptionHandler(MemberHandlingException.class)
	public ResponseEntity<ErrorResponse> MemberHandlingException(MemberHandlingException e)
	{
		System.out.println("in login handler exc");
		return new ResponseEntity<>(new ErrorResponse("Member not available",e.getMessage()), HttpStatus.UNAUTHORIZED);
	}

}
