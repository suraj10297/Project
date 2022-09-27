package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.MembershipRepository;
import com.app.pojos.Membership;
@Service
@Transactional
public class MembershipServiceImpl implements IMembershipService{
	
	@Autowired
	private MembershipRepository membershipRepo;
	
	@Override
	public List<Membership> getAllMemberships() {
		
		return membershipRepo.findAll();
	}

	@Override
	public Membership addMemberships(Membership memberships) {
		
		return membershipRepo.save(memberships);
	}

	@Override
	public void deleteMembershipDetail(Integer membershipId) {
		// check if user id exists
				boolean exists = membershipRepo.existsById(membershipId);
				if (!exists)
					throw new ResourceNotFoundException("Invalid user id!!!!!");
				membershipRepo.deleteById(membershipId);
				return;
		
	}

	@Override
	public Optional<Membership> getMembershipAmountById(Integer membershipId) {
		
		return membershipRepo.findById(membershipId);
	}
	

}
