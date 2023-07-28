package com.example.demo.Services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.Repository.AdminRepo;
import com.example.demo.Model.Admin;


@Service
public class AdminService {
	@Autowired
	private AdminRepo repo;
	
	
		public String Loginadmin(String email, String password) {
			Admin adminx = repo.findByEmail(email);
			if (adminx == null) {
				return "Invalid User !";
			} else {
				if (adminx.getPassword().equals(password)) {
					return "Login Successful !";
				} else {
					return "Invalid Password";
				}
			}
		}
	
		public Admin addAdmin(Admin admin) {
			return repo.save(admin);
		}
	
}