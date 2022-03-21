package com.site.donne.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.site.donne.entities.Parceiro;

@Repository
public interface ParceiroRepository extends JpaRepository<Parceiro, Long>{
	
	Optional<Parceiro> findByEmail(String email);
}
