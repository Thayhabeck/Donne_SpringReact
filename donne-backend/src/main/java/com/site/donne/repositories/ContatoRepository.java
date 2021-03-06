package com.site.donne.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.site.donne.entities.Contato;

@Repository
public interface ContatoRepository extends JpaRepository<Contato, Long>{

}
