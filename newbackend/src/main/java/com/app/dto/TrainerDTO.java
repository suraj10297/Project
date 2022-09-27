package com.app.dto;

public class TrainerDTO {
	private Integer id;
	private String trainerName;
	private String trainerContact;
	private String trainerAddress;
	private String trainerEmail;
	private Integer trainerAge;
	private String trainerGender;
	
	public TrainerDTO() {
	}
	public TrainerDTO(Integer id, String trainerName, String trainerContact, String trainerAddress, String trainerEmail,
			Integer trainerAge, String trainerGender) {
		super();
		this.id = id;
		this.trainerName = trainerName;
		this.trainerContact = trainerContact;
		this.trainerAddress = trainerAddress;
		this.trainerEmail = trainerEmail;
		this.trainerAge = trainerAge;
		this.trainerGender = trainerGender;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
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
	
	
}
