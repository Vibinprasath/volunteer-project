package com.example.demo.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.Model.Admin;
public interface AdminRepo extends JpaRepository<Admin, Long> {

	Admin findByEmail(String email);

}