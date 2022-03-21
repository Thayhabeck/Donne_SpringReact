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
public class Donne implements Serializable{

	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long idDonne;
	
	String nome;
	String cpf;
	String email;
	String senha;
	
	@ManyToOne
	@JoinColumn(name = "id_funcao")
	Funcao funcao;
	
	public Donne() {
	}
	
	public Donne(Long idDonne, String nome, String cpf, String email, String senha, Funcao funcao) {
		this.idDonne = idDonne;
		this.nome = nome;
		this.cpf = cpf;
		this.email = email;
		this.senha = senha;
		this.funcao = funcao;
	}

	public Long getIdDonne() {
		return idDonne;
	}

	public void setIdDonne(Long idDonne) {
		this.idDonne = idDonne;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
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

	public Funcao getFuncao() {
		return funcao;
	}

	public void setFuncao(Funcao funcao) {
		this.funcao = funcao;
	}

	@Override
	public int hashCode() {
		return Objects.hash(idDonne);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Donne other = (Donne) obj;
		return Objects.equals(idDonne, other.idDonne);
	}
	
	

}
