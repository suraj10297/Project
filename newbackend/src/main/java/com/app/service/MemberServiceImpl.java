package com.app.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.custom_excs.MemberHandlingException;
import com.app.dao.LoginRepository;
import com.app.dao.MemberRepository;
import com.app.dao.MembershipRepository;
import com.app.dao.TrainerRepository;
import com.app.dto.MemberUpdateDTO;
import com.app.pojos.Login;
import com.app.pojos.Member;
import com.app.pojos.Role;
import com.app.pojos.Trainer;
@Service
@Transactional
public class MemberServiceImpl implements IMemberService{
	@Autowired
	private MemberRepository memberRepo;
	@Autowired
	private LoginRepository loginRepo;
	@Autowired
	private MembershipRepository membershipRepo;
	@Autowired
	private TrainerRepository trainerRepo;

	
	
	LocalDate today = LocalDate.now();
	public MemberServiceImpl() {
		// TODO Auto-generated constructor stub
	}
	
	@Override
	public Member signUp(Member member) {
		System.out.println("in service");
		 List<Login> emails = loginRepo.findAll();
		 for (Login login : emails) {
			if(login.getUmtEmail().equals(member.getMemberEmail()))
			//	return 	"Email already exists";
				return null;
		}
		 System.out.println("emails"+emails);
		Login login = new Login();
		login.setUmtEmail(member.getMemberEmail());
		login.setUmtPassword(member.getMemberPassword());
		login.setUmtRole(Role.MEMBER);
		//login.setUmtMemberId(member.getId());
		
		//userRepo.save(user.getMembers().add(member));
		if(member.getMembershipId()==1) {
			
			LocalDate addThirtyDays = today.plusDays(30);
			member.setEndOfMembershipDate(addThirtyDays);
		}
		else if(member.getMembershipId()==2) {
			
			LocalDate addSixtyDays = today.plusDays(60);
			member.setEndOfMembershipDate(addSixtyDays);
		}
		else if(member.getMembershipId()==3) {
			
			LocalDate addNintyDays = today.plusDays(90);
			member.setEndOfMembershipDate(addNintyDays);
		}
		member.setLogin(login);
		//code by Giridhar
		Trainer trainer=trainerRepo.findById(1).orElseThrow();
		member.setSelectedTrainer(trainer);
		//commented by Giridhar
		//Integer mId=memberRepo.findId();
		//System.out.println("in Tid"+mId);
		return memberRepo.save(member);
		//return "Welcome to gym";
	}
	
	/*@Override
	public Member signUp(Member member) {
		System.out.println("in service");
		 List<Login> emails = loginRepo.findAll();
		 for (Login login : emails) {
			if(login.getUmtEmail().equals(member.getMemberEmail()))
			//	return 	"Email already exists";
				return null;
		}
		 System.out.println("emails"+emails);
		Login login = new Login();
		login.setUmtEmail(member.getMemberEmail());
		login.setUmtPassword(member.getMemberPassword());
		login.setUmtRole(Role.MEMBER);
		
		//userRepo.save(user.getMembers().add(member));
		if(member.getMembershipId()==1) {
			
			LocalDate addThirtyDays = today.plusDays(30);
			member.setEndOfMembershipDate(addThirtyDays);
		}
		else if(member.getMembershipId()==2) {
			
			LocalDate addSixtyDays = today.plusDays(60);
			member.setEndOfMembershipDate(addSixtyDays);
		}
		else if(member.getMembershipId()==3) {
			
			LocalDate addNintyDays = today.plusDays(90);
			member.setEndOfMembershipDate(addNintyDays);
		}
		member.setLogin(login);
		Integer mId=memberRepo.findId();
		System.out.println("in Tid"+mId);
		return memberRepo.save(member);
		//return "Welcome to gym";
	}*/
	
	
	public Member getProfile(Integer id) {
		memberRepo.findById(id);
		return memberRepo.findById(id).orElseThrow(() -> new MemberHandlingException("Invalid member Id!!!!"));
	}
	@Override
	public List<Member> getAllMembersWithSpecificTrainer(Integer trainerId) {
		
		return memberRepo.getAllMembers(trainerId);
	}
	
	@Override
	public void deleteMemberDetails(Integer memberId) {
		
		boolean exists = memberRepo.existsById(memberId);
		if (!exists)
			throw new ResourceNotFoundException("Invalid user id!!!!!");	
	}
	
	@Override
	public Member updateMemberDetails(Integer memberId, MemberUpdateDTO memberUpdateDTO) {
		System.out.println("in update "+memberUpdateDTO);
		//fetch exsiting details from the db
		Member memberDetails=memberRepo.findById(memberId).get();
		System.out.println("member dtls from db "+memberDetails);
		//=> userDetails : PERSISTENT POJO
		//copy updated user details coming from request payload ---> User details 
		BeanUtils.copyProperties(memberUpdateDTO, memberDetails, "joiningDate","memberEmail");
		memberDetails.setId(memberId);
		System.out.println("updated user dtls "+memberDetails);
		//Login login = new Login();
		//login.setUmtPassword(memberUpdateDTO.getMemberPassword());
		//memberDetails.setLogin(login);
		
		loginRepo.updateLogin(memberUpdateDTO.getMemberPassword(),Role.MEMBER);
		return memberDetails;
	}
}
