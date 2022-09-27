package com.app.controller;

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

import com.app.dto.ResponseDTO;
import com.app.dto.TrainerUpdateDTO;
import com.app.pojos.Trainer;
import com.app.service.ITrainerService;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
@RequestMapping("trainer")
public class TrainerController {
	@Autowired
	private ITrainerService trainerSer;
	public TrainerController() {
		// TODO Auto-generated constructor stub
	}
	@GetMapping("/getalltrainers")
	public ResponseEntity<?> getAllTrainers(){
		System.out.println("in getAllTrainers ");
		return new ResponseEntity<>(trainerSer.getAllTrainers(), HttpStatus.OK);
}

@GetMapping("/getalltrainerss")
public ResponseEntity<?> getAllTrainerss(){
	System.out.println("in getAllTrainers ");
	return new ResponseEntity<>(trainerSer.getAllTrainerss(), HttpStatus.OK);
}
@PostMapping("/addtrainer")
public ResponseDTO<?> addTrainer(@RequestBody Trainer trainer){
	System.out.println("in addTrainer "+trainer);
	//Login authenticateCustomer = loginService.authenticateCustomer(request.getUmtEmail(), request.getUmtPassword());
	//System.out.println("con"+authenticateCustomer);
	return new ResponseDTO<>(HttpStatus.CREATED,"trainer added successfully",trainerSer.addTrainer(trainer));
	//return new ResponseEntity<>(memberSer.signUp(request), HttpStatus.CREATED);
//return ResponseEntity.ok(authenticateCustomer);
}
@DeleteMapping("/{trainerId}")
public ResponseDTO<?> deleteTrainerDetails(@PathVariable Integer trainerId){
	System.out.println("in del user dtls " + trainerId);
	try {
		trainerSer.deleteTrainerDetaild(trainerId);
		return new ResponseDTO<>(HttpStatus.OK, "Trainer details deleted", null);
	} catch (RuntimeException e) {
		System.out.println("err in delete " + e);
		return new ResponseDTO<>(HttpStatus.INTERNAL_SERVER_ERROR, "Trainer details deletion failed", null);
	}
}
@PutMapping("/update/{trainerId}")
public ResponseDTO<?> updateUserDetails(@PathVariable Integer trainerId, @RequestBody TrainerUpdateDTO trainerUpdateDTO) {
	System.out.println("in rest : update details " + trainerId + " " + trainerUpdateDTO);
	return new ResponseDTO<>(HttpStatus.OK, "Updated Trainer Details",
			trainerSer.updateTrainerDetails(trainerId, trainerUpdateDTO));
}
}
