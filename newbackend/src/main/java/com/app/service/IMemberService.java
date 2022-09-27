package com.app.service;

import java.util.List;

import com.app.dto.MemberUpdateDTO;
import com.app.pojos.Member;

public interface IMemberService {
	
	Member signUp(Member member);
	
    Member getProfile(Integer id);
    
    List<Member> getAllMembersWithSpecificTrainer(Integer trainerId);
    
    void deleteMemberDetails(Integer memberId);
    
    Member updateMemberDetails(Integer memberId,MemberUpdateDTO member);
}
