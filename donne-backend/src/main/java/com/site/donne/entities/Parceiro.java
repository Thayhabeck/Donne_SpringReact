package com.site.donne.entities;

import java.io.Serializable;
import java.util.Objects;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Parceiro implements Serializable{
	
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long idParceiro;
	
	String nome;
	String cnpj;
	String email;
	String senha;
	
	@ManyToOne
	@JoinColumn(name = "id_area")
	Area area_atuacao;
	
	public Parceiro() {
	}
	
	public Parceiro(Long idParceiro, String nome, String cnpj, String email, String senha, Area area_atuacao) {
		this.idParceiro = idParceiro;
		this.nome = nome;
		this.cnpj = cnpj;
		this.email = email;
		this.senha = senha;
		this.area_atuacao = area_atuacao;
	}

	public Long getIdParceiro() {
		return idParceiro;
	}

	public void setIdParceiro(Long idParceiro) {
		this.idParceiro = idParceiro;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCnpj() {
		return cnpj;
	}

	public void setCnpj(String cnpj) {
		this.cnpj = cnpj;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}

	public Area getArea_atuacao() {
		return area_atuacao;
	}

	public void setArea_atuacao(Area area_atuacao) {
		this.area_atuacao = area_atuacao;
	}

	@Override
	public int hashCode() {
		return Objects.hash(idParceiro);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Parceiro other = (Parceiro) obj;
		return Objects.equals(idParceiro, other.idParceiro);
	}
	
	
	

}
