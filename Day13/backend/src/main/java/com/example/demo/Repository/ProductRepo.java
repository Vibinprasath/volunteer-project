package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.demo.Model.Product;

public interface ProductRepo extends JpaRepository<Product, Long> {
    @Query(value = "SELECT COUNT(*) FROM product", nativeQuery = true)
    int getProductCount();
}