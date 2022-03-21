package com.site.donne.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.site.donne.entities.Donne;

@Repository
public interface DonneRepository extends JpaRepository<Donne, Long>{

	Optional<Donne> findByEmail(String email);

}
