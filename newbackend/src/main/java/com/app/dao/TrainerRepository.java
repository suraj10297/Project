package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.app.pojos.Trainer;

@Repository
public interface TrainerRepository extends JpaRepository<Trainer,Integer>{
	@Query("select t from Trainer t left outer join fetch t.members")
	List<Trainer> getAllTrainers();
	@Query("select t from Trainer t left outer join fetch t.members")
	List<Trainer> getAllTrainerss();
	@Query(value="SELECT id from trainers ORDER BY id DESC LIMIT 1;",nativeQuery = true)
	Integer findId();
}
