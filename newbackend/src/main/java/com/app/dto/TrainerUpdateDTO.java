package com.app.dto;

public class TrainerUpdateDTO {

	private String trainerName;
	private String trainerContact;
	private String trainerAddress;
	private String trainerPassword;
	private Integer trainerAge;
	private String trainerGender;
	
	public TrainerUpdateDTO() {
		// TODO Auto-generated constructor stub
	}

	public TrainerUpdateDTO(String trainerName, String trainerContact, String trainerAddress, String trainerPassword,
			Integer trainerAge, String trainerGender) {
		super();
		this.trainerName = trainerName;
		this.trainerContact = trainerContact;
		this.trainerAddress = trainerAddress;
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

	public String getTrainerPassword() {
		return trainerPassword;
	}

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

	@Override
	public String toString() {
		return "TrainerUpdateDTO [trainerName=" + trainerName + ", trainerContact=" + trainerContact
				+ ", trainerAddress=" + trainerAddress + ", trainerPassword=" + trainerPassword + ", trainerAge="
				+ trainerAge + ", trainerGender=" + trainerGender + "]";
	}
	
}
