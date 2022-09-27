package com.app.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.LoginRepository;
import com.app.dao.TrainerRepository;
import com.app.dto.TrainerDTO;
import com.app.dto.TrainerUpdateDTO;
import com.app.pojos.Login;
import com.app.pojos.Role;
import com.app.pojos.Trainer;
@Service
@Transactional
public class TrainerServiceImpl implements ITrainerService{
	@Autowired
	private TrainerRepository trainerRepo;
	@Autowired
	private LoginRepository loginRepo;
	@Override
	public List<TrainerDTO> getAllTrainers() {
		List<TrainerDTO> list = new ArrayList<>();
		for (Trainer t : trainerRepo.findAll()) {
			TrainerDTO trainerDTO = new TrainerDTO(t.getId(),t.getTrainerName(),
					t.getTrainerContact(),t.getTrainerAddress(),t.getTrainerEmail(),
					t.getTrainerAge(),t.getTrainerGender());
			list.add(trainerDTO);
		}
		System.out.println("dto list " + list);
		return list;
		
	}
	@Override
	public List<Trainer> getAllTrainerss() {
		// TODO Auto-generated method stub
		return trainerRepo.getAllTrainerss();
	}
	
	@Override
	public Trainer addTrainer(Trainer trainer ) {
//		System.out.println("in service");
//		 List<Login> emails = loginRepo.findAll();
//		 for (Login login : emails) {
//			if(login.getUmtEmail().equals(trainer.getTrainerEmail()))
//				return 	"Email already exists";
//		}
//		 System.out.println("emails"+emails);
		Login login = new Login();
		login.setUmtEmail(trainer.getTrainerEmail());
		login.setUmtPassword(trainer.getTrainerPassword());
		login.setUmtRole(Role.TRAINER);

		trainer.setLogin(login);
	    Integer tId=trainerRepo.findId();
		System.out.println("in Tid"+tId);
		trainerRepo.save(trainer);
		Trainer ts= trainerRepo.save(trainer);
		return ts;
	}
	@Override
	public void deleteTrainerDetaild(Integer TrainerId) {
		boolean exists = trainerRepo.existsById(TrainerId);
		if (!exists)
			throw new ResourceNotFoundException("Invalid user id!!!!!");
		trainerRepo.deleteById(TrainerId);
		return;
		
	}
	@Override
	public Trainer updateTrainerDetails(Integer trainerId, TrainerUpdateDTO trainerUpdateDTO) {
		
		System.out.println("in update "+trainerUpdateDTO);
		//fetch exsiting details from the db
		Trainer trainerDetails=trainerRepo.findById(trainerId).get();
		System.out.println("member dtls from db "+trainerDetails);
		//=> userDetails : PERSISTENT POJO
		//copy updated user details coming from request payload ---> User details 
		BeanUtils.copyProperties(trainerUpdateDTO, trainerDetails, "joiningDate","memberEmail");
		trainerDetails.setId(trainerId);
		System.out.println("updated user dtls "+trainerDetails);
		//Login login = new Login();
		//login.setUmtPassword(memberUpdateDTO.getMemberPassword());
		//memberDetails.setLogin(login);
		
		loginRepo.updateLogin(trainerUpdateDTO.getTrainerPassword(),Role.TRAINER);
		return trainerDetails;
	}
	
}
