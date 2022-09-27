package com.app.dto;

import java.util.List;

import com.app.pojos.Member;
import com.app.pojos.Trainer;

public class TrainersDTO {
	private List<Trainer> trainers;
	public TrainersDTO() {
	
	}
	public TrainersDTO(List<Trainer> trainers) {
		super();
		this.trainers = trainers;
	}
	public List<Trainer> getTrainers() {
		return trainers;
	}
	public void setTrainers(List<Trainer> trainers) {
		this.trainers = trainers;
	}
	
	
	
}
