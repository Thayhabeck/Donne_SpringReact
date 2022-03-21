package com.site.donne.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.site.donne.entities.Area;

@Repository
public interface AreaRepository extends JpaRepository<Area, Long>{

}
