package com.app.service;

import java.util.List;

import com.app.dto.TrainerDTO;
import com.app.dto.TrainerUpdateDTO;
import com.app.pojos.Trainer;

public interface ITrainerService {
	List<TrainerDTO> getAllTrainers();
	List<Trainer> getAllTrainerss();
	Trainer addTrainer(Trainer trainer);
	void deleteTrainerDetaild(Integer TrainerId);
	Trainer updateTrainerDetails(Integer trainerId,TrainerUpdateDTO trainer);
	
}
