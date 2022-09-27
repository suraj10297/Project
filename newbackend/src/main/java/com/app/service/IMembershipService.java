package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.pojos.Membership;

public interface IMembershipService {
	List<Membership> getAllMemberships();
	Membership addMemberships(Membership memberships);
	void deleteMembershipDetail(Integer membershipId);
	Optional<Membership> getMembershipAmountById(	Integer membershipId);
}
