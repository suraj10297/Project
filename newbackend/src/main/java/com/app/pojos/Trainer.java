package com.app.pojos;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
@Entity
@Table(name="Trainers")
public class Trainer {
	@Id //mandatory
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private String trainerName;
	
	private String trainerContact;
	
	private String trainerAddress;
	
	private String trainerEmail;
	
	
	private String trainerPassword;
	private Integer trainerAge;
	
	private String trainerGender;
	@OneToMany(mappedBy = "selectedTrainer",cascade = CascadeType.ALL,orphanRemoval = true)
    @JsonIgnoreProperties("selectedTrainer")
	//@JsonIgnore
	private List<Member> members = new ArrayList<>();
	@OneToOne(cascade = CascadeType.ALL)
	@JsonIgnoreProperties("login_id")
	@JoinColumn(name="login_id")
	//@JsonIgnore
	private Login login;
	
	
	
	public Trainer() {
		System.out.println("in ctor"+getClass().getName());
	}
	
	public Trainer(Integer id, String trainerName, String trainerContact, String trainerAddress, String trainerEmail,
			String trainerPassword, Integer trainerAge, String trainerGender) {
		this.id = id;
		this.trainerName = trainerName;
		this.trainerContact = trainerContact;
		this.trainerAddress = trainerAddress;
		this.trainerEmail = trainerEmail;
		this.trainerPassword = trainerPassword;
		this.trainerAge = trainerAge;
		this.trainerGender = trainerGender;
	}

	public String getTrainerName() {
		return trainerName;
	}

	public void setTrainerName(String trainerName) {
		this.trainerName = trainerName;
	}

	public String getTrainerContact() {
		return trainerContact;
	}

	public void setTrainerContact(String trainerContact) {
		this.trainerContact = trainerContact;
	}

	public String getTrainerAddress() {
		return trainerAddress;
	}

	public void setTrainerAddress(String trainerAddress) {
		this.trainerAddress = trainerAddress;
	}

	public String getTrainerEmail() {
		return trainerEmail;
	}

	public void setTrainerEmail(String trainerEmail) {
		this.trainerEmail = trainerEmail;
	}
	@JsonIgnore
	public String getTrainerPassword() {
		return trainerPassword;
	}
	@JsonProperty
	public void setTrainerPassword(String trainerPassword) {
		this.trainerPassword = trainerPassword;
	}

	public Integer getTrainerAge() {
		return trainerAge;
	}

	public void setTrainerAge(Integer trainerAge) {
		this.trainerAge = trainerAge;
	}

	public String getTrainerGender() {
		return trainerGender;
	}

	public void setTrainerGender(String trainerGender) {
		this.trainerGender = trainerGender;
	}
	@JsonIgnore
	public List<Member> getMembers() {
		return members;
	}
	@JsonProperty
	public void setMembers(List<Member> members) {
		this.members = members;
	}
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Login getLogin() {
		return login;
	}

	public void setLogin(Login login) {
		this.login = login;
	}

	@Override
	public String toString() {
		return "Trainer [id=" + id + ", trainerName=" + trainerName + ", trainerContact=" + trainerContact
				+ ", trainerAddress=" + trainerAddress + ", trainerEmail=" + trainerEmail + ", trainerPassword="
				+ trainerPassword + ", trainerAge=" + trainerAge + ", trainerGender=" + trainerGender + "]";
	}


//	@Override
//	public String toString() {
//		return "Trainer Id"+id+" [trainerName=" + trainerName + ", trainerContact=" + trainerContact + ", trainerAddress="
//				+ trainerAddress + ", trainerEmail=" + trainerEmail + ", trainerPassword=" + trainerPassword
//				+ ", trainerAge=" + trainerAge + ", trainerGender=" + trainerGender + "]";
//	}

}
