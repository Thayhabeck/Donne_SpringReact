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

import com.site.donne.entities.Contato;
import com.site.donne.repositories.ContatoRepository;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/contato/{id}")
public class ContatoController {

	@Autowired
	ContatoRepository contatoRepository;

	// GET
	@GetMapping
	public ResponseEntity<List<Contato>> findAll() {

		List<Contato> contatos = contatoRepository.findAll();
		return ResponseEntity.ok().body(contatos);
	}

	// GET by ID
	@GetMapping(value = "/{id}")
	public ResponseEntity<Contato> findById(@PathVariable Long id) {

		Contato contato = contatoRepository.findById(id).get();
		return ResponseEntity.ok().body(contato);
	}

	// CREATE
	@PostMapping
	public Contato create(@RequestBody Contato contato) {
		return contatoRepository.save(contato);
	}

	// UPDATE
	@PutMapping("{id}")
	public ResponseEntity<Contato> update(@PathVariable Long id, @RequestBody Contato contatoDetails) {
		Contato updateContato = contatoRepository.findById(id).get();

		updateContato.setNome(contatoDetails.getNome());
		updateContato.setEmail(contatoDetails.getEmail());
		updateContato.setMensagem(contatoDetails.getMensagem());

		contatoRepository.save(updateContato);

		return ResponseEntity.ok(updateContato);
	}

	// DELETE
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> delete(@PathVariable Long id) {
		Contato contato = contatoRepository.findById(id).get();

		contatoRepository.delete(contato);

		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}
