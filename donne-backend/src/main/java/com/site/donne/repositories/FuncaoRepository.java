package com.site.donne.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.site.donne.entities.Funcao;

@Repository
public interface FuncaoRepository extends JpaRepository<Funcao, Long>{

}
