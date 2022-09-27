package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.hibernate.validator.constraints.Length;
@Entity
@Table(name="memberships")
public class Membership {
	@Id //mandatory
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@NotBlank(message = "Name is required")
	@Length(min = 3, max = 15, message = "Invalid len of Name")
	@Column(length = 20)
	private String membershipName;
	
	private Integer membershipAmount;
	
	private String membershipPeriod;
	
	
	public Membership() {
		System.out.println("in ctor"+getClass().getName());
	}

	public Membership(Integer id ,String membershipName, Integer membershipAmount, String membershipPeriod) {
		this.id = id;
		this.membershipName = membershipName;
		this.membershipAmount = membershipAmount;
		this.membershipPeriod = membershipPeriod;
	}

	public String getMembershipName() {
		return membershipName;
	}

	public void setMembershipName(String membershipName) {
		this.membershipName = membershipName;
	}

	public Integer getMembershipAmount() {
		return membershipAmount;
	}

	public void setMembershipAmount(Integer membershipAmount) {
		this.membershipAmount = membershipAmount;
	}

	public String getMembershipPeriod() {
		return membershipPeriod;
	}

	public void setMembershipPeriod(String membershipPeriod) {
		this.membershipPeriod = membershipPeriod;
	}
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "Membership [membershipName=" + membershipName + ", membershipAmount=" + membershipAmount
				+ ", membershipPeriod=" + membershipPeriod + "]";
	}
	
}
