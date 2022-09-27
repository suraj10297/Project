package com.app.pojos;
import javax.persistence.*;

@Entity
@Table(name="logins")
public class Login {
	@Id //mandatory
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	@Column(length = 20,unique = true)
	private String umtEmail;
	@Column(length = 20,nullable = false)
	private String umtPassword;
	@Enumerated(EnumType.STRING)
	private Role umtRole;
	
	//@JoinColumn(name="memberId")
	
	
	
	
	
	

	public Login() {
		System.out.println("in ctor"+getClass().getName());
	}

	public Login(Integer id, String umtEmail, String umtPassword, Role umtRole) {
		super();
		this.id = id;
		this.umtEmail = umtEmail;
		this.umtPassword = umtPassword;
		this.umtRole = umtRole;
	}
	
	

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getUmtEmail() {
		return umtEmail;
	}

	public void setUmtEmail(String umtEmail) {
		this.umtEmail = umtEmail;
	}

	public String getUmtPassword() {
		return umtPassword;
	}

	public void setUmtPassword(String umtPassword) {
		this.umtPassword = umtPassword;
	}

	public Role getUmtRole() {
		return umtRole;
	}

	public void setUmtRole(Role umtRole) {
		this.umtRole = umtRole;
	}
	
	@Override
	public String toString() {
		return "Login [id=" + id + ", umtEmail=" + umtEmail + ", umtPassword=" + umtPassword + ", umtRole=" + umtRole
				+ "]";
	}

//	public void setUmtMemberId(Integer memberId) {
//		this.UmtMemberId = memberId;
//		// TODO Auto-generated method stub
//		
//	}
	
}
