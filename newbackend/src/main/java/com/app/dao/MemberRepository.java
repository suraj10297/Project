package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.Member;
@Repository
public interface MemberRepository extends JpaRepository<Member,Integer>{
	//@Query("select c from Member c left outer join fetch c.workoutPlans s join c.payments p where c.id=:id")
	//get profile of member with trainer
	@Query("select c from Member c join fetch c.selectedTrainer where c.id=:id")
	Optional<Member> findById(@Param("id")Integer id);
	
	//get all member with  with specific trainer
	@Query("select c from Member c join fetch c.selectedTrainer where c.selectedTrainer.id=:trainerId")
	List<Member> getAllMembers(@Param("trainerId")Integer trainerId);
	
	@Query(value="SELECT id from members ORDER BY id DESC LIMIT 1;",nativeQuery = true)
	Integer findId();
	
}
