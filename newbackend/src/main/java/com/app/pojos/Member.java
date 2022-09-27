package com.app.pojos;
import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
@Entity
@Table(name="members")
public class Member {
	@Id //mandatory
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String memberName;
	
	private String memberAddress;
	
	private String memberContact;
	
	private String memberEmail;
	
	
	private String memberPassword;
	
	private Integer memberAge;
	
	private String gender;
	@JsonDeserialize(as = LocalDate.class)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate joiningDate;
	@JsonDeserialize(as = LocalDate.class)
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate endOfMembershipDate;
	@ManyToOne
	@JoinColumn(name = "trainer_id")
	@JsonIgnoreProperties("members")
	private Trainer selectedTrainer;
	
	@NotNull(message = "Please enter id")
	private Integer membershipId;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="login_id")
	@JsonIgnore
	private Login login;
	
	
	public Member() {
		System.out.println("in ctor"+getClass().getName());
	}
	public Member(Integer id, String memberName, String memberAddress, String memberContact, String memberEmail,
			String memberPassword, Integer memberAge, String gender, LocalDate joiningDate, LocalDate endOfMembershipDate) {
		this.id = id;
		this.memberName = memberName;
		this.memberAddress = memberAddress;
		this.memberContact = memberContact;
		this.memberEmail = memberEmail;
		this.memberPassword = memberPassword;
		this.memberAge = memberAge;
		this.gender = gender;
		this.joiningDate = joiningDate;
		this.endOfMembershipDate = endOfMembershipDate;
	}

	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
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
	public String getMemberEmail() {
		return memberEmail;
	}
	public void setMemberEmail(String memberEmail) {
		this.memberEmail = memberEmail;
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
	public LocalDate getJoiningDate() {
		return joiningDate;
	}
	public void setJoiningDate(LocalDate joiningDate) {
		this.joiningDate = joiningDate;
	}
	public LocalDate getEndOfMembershipDate() {
		return endOfMembershipDate;
	}
	public void setEndOfMembershipDate(LocalDate endOfMembershipDate) {
		this.endOfMembershipDate = endOfMembershipDate;
	}
	public Trainer getSelectedTrainer() {
		return selectedTrainer;
	}
	public void setSelectedTrainer(Trainer selectedTrainer) {
		this.selectedTrainer = selectedTrainer;
	}
	
	public Integer getMembershipId() {
		return membershipId;
	}
	public void setMembershipId(Integer membershipId) {
		this.membershipId = membershipId;
	}
	
	
	public Login getLogin() {
		return login;
	}
	public void setLogin(Login login) {
		this.login = login;
	}
	@Override
	public String toString() {
		return "member Id"+id+" [memberName=" + memberName + ", memberAddress=" + memberAddress + ", memberContact="
				+ memberContact + ", memberEmail=" + memberEmail + ", memberPassword=" + memberPassword + ", memberAge="
				+ memberAge + ", gender=" + gender + ", joiningDate=" + joiningDate + ", endOfMembershipDate="
				+ endOfMembershipDate + "]";
	}
	
}
