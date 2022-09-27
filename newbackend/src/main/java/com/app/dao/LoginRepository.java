package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.Login;
import com.app.pojos.Role;

@Repository
public interface LoginRepository extends JpaRepository<Login, Integer> {
	//finder method for email,pass
	@Query("select l from Login l where l.umtEmail=:email and l.umtPassword=:pwd")
	Optional<Login> validateLogin(@Param("email")String email, @Param("pwd")String pwd);
	
	@Modifying
	@Query("update Login l set l.umtPassword=:pwd where umtRole=:role")
	void updateLogin(@Param("pwd")String pwd, @Param("role")Role role);
	
}
