package com.site.donne.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
public class Area implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long idArea;
	
	String nomeArea;
	
	@JsonIgnore
	@OneToMany(mappedBy = "area_atuacao")
	List<Parceiro> parceiros = new ArrayList<Parceiro>();
	
	public Area() {
	}
	
	public Area(Long idArea, String nomeArea) {
		this.idArea = idArea;
		this.nomeArea = nomeArea;
	}
	
	

	public List<Parceiro> getParceiros() {
		return parceiros;
	}

	public Long getIdArea() {
		return idArea;
	}

	public void setIdArea(Long idArea) {
		this.idArea = idArea;
	}

	public String getNomeArea() {
		return nomeArea;
	}

	public void setNomeArea(String nomeArea) {
		this.nomeArea = nomeArea;
	}

	@Override
	public int hashCode() {
		return Objects.hash(idArea);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Area other = (Area) obj;
		return Objects.equals(idArea, other.idArea);
	}
	
	
}
