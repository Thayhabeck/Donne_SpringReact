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
public class Funcao implements Serializable{
	

	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long idFuncao;
	
	String nomeFuncao;
	
	@JsonIgnore
	@OneToMany(mappedBy = "funcao")
	List<Donne> donnes = new ArrayList<Donne>();
	
	public Funcao() {
	}
	
	public Funcao(Long idFuncao, String nomeFuncao) {
		this.idFuncao = idFuncao;
		this.nomeFuncao = nomeFuncao;
	}
	
	

	public List<Donne> getDonnes() {
		return donnes;
	}

	public Long getIdFuncao() {
		return idFuncao;
	}

	public void setIdFuncao(Long idFuncao) {
		this.idFuncao = idFuncao;
	}

	public String getNomeFuncao() {
		return nomeFuncao;
	}

	public void setNomeFuncao(String nomeFuncao) {
		this.nomeFuncao = nomeFuncao;
	}

	@Override
	public int hashCode() {
		return Objects.hash(idFuncao);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Funcao other = (Funcao) obj;
		return Objects.equals(idFuncao, other.idFuncao);
	}
	

}
