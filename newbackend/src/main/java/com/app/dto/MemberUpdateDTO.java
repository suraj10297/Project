package com.app.dto;

public class MemberUpdateDTO {
	
	
	private String memberName;
	private String memberAddress;
	private String memberContact;
	private String memberPassword;
	private Integer memberAge;
	private String gender;
	
	public MemberUpdateDTO() {
		// TODO Auto-generated constructor stub
	}

	public MemberUpdateDTO(String memberName, String memberAddress, String memberContact,
			String memberPassword, Integer memberAge, String gender) {
		super();
		this.memberName = memberName;
		this.memberAddress = memberAddress;
		this.memberContact = memberContact;
		this.memberPassword = memberPassword;
		this.memberAge = memberAge;
		this.gender = gender;
	}

	public String getMemberName() {
		return memberName;
	}

	public void setMemberName(String memberName) {
		this.memberName = memberName;
	}

	public String getMemberAddress() {
		return memberAddress;
	}

	public void setMemberAddress(String memberAddress) {
		this.memberAddress = memberAddress;
	}

	public String getMemberContact() {
		return memberContact;
	}

	public void setMemberContact(String memberContact) {
		this.memberContact = memberContact;
	}

	public String getMemberPassword() {
		return memberPassword;
	}


	public void setMemberPassword(String memberPassword) {
		this.memberPassword = memberPassword;
	}

	public Integer getMemberAge() {
		return memberAge;
	}

	public void setMemberAge(Integer memberAge) {
		this.memberAge = memberAge;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	
}
