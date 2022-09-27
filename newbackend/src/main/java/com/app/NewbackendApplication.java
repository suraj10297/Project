package com.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
//@ComponentScan(basePackages= {"com.app.controller"})
public class NewbackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(NewbackendApplication.class, args);
	}

}
