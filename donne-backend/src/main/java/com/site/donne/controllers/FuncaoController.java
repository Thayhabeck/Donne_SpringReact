package com.site.donne.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.site.donne.entities.Funcao;
import com.site.donne.repositories.FuncaoRepository;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/funcao/{id}")
public class FuncaoController {

	@Autowired
	FuncaoRepository funcaoRepository;

	// GET
	@GetMapping
	public ResponseEntity<List<Funcao>> findAll() {

		List<Funcao> funcoes = funcaoRepository.findAll();
		return ResponseEntity.ok().body(funcoes);
	}

	// GET by ID
	@GetMapping(value = "/{id}")
	public ResponseEntity<Funcao> findById(@PathVariable Long id) {

		Funcao funcao = funcaoRepository.findById(id).get();
		return ResponseEntity.ok().body(funcao);
	}

	// CREATE
	@PostMapping
	public Funcao create(@RequestBody Funcao funcao) {
		return funcaoRepository.save(funcao);
	}

	// UPDATE
	@PutMapping("{id}")
	public ResponseEntity<Funcao> update(@PathVariable Long id, @RequestBody Funcao funcaoDetails) {
		Funcao updateFuncao = funcaoRepository.findById(id).get();

		updateFuncao.setNomeFuncao(funcaoDetails.getNomeFuncao());

		funcaoRepository.save(updateFuncao);

		return ResponseEntity.ok(updateFuncao);
	}

	// DELETE
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> delete(@PathVariable Long id) {
		Funcao funcao = funcaoRepository.findById(id).get();

		funcaoRepository.delete(funcao);

		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}
