package com.site.donne.controllers;

import java.util.List;
import java.util.Optional;

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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.site.donne.entities.Donne;
import com.site.donne.repositories.DonneRepository;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/donne")
public class DonneController {

	@Autowired
	DonneRepository donneRepository;

	// GET
	@GetMapping
	public ResponseEntity<List<Donne>> findAll() {

		List<Donne> donnes = donneRepository.findAll();
		return ResponseEntity.ok().body(donnes);
	}

	// GET by ID
	@GetMapping(value = "/{id}")
	public ResponseEntity<Donne> findById(@PathVariable Long id) {

		Donne donne = donneRepository.findById(id).get();
		return ResponseEntity.ok().body(donne);
	}

	// GET by EMAIL
	@GetMapping(value = "/email/{email}")
	public ResponseEntity<Donne> findByEmail(@PathVariable String email) {

		Donne donne = donneRepository.findByEmail(email).get();
		return ResponseEntity.ok().body(donne);
	}

	// CREATE
	@PostMapping
	public Donne create(@RequestBody Donne donne) {
		return donneRepository.save(donne);
	}

	// UPDATE
	@PutMapping("{id}")
	public ResponseEntity<Donne> update(@PathVariable Long id, @RequestBody Donne donneDetails) {
		Donne updateDonne = donneRepository.findById(id).get();

		updateDonne.setNome(donneDetails.getNome());
		updateDonne.setEmail(donneDetails.getEmail());
		updateDonne.setCpf(donneDetails.getCpf());
		updateDonne.setSenha(donneDetails.getSenha());
		updateDonne.setFuncao(donneDetails.getFuncao());

		donneRepository.save(updateDonne);

		return ResponseEntity.ok(updateDonne);
	}

	// DELETE
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> delete(@PathVariable Long id) {
		Donne donne = donneRepository.findById(id).get();

		donneRepository.delete(donne);

		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@GetMapping(value = "/auth")
	public ResponseEntity<Boolean> auth(@RequestParam String email, @RequestParam String senha) {

		Optional<Donne> optDonne = donneRepository.findByEmail(email);
		if (optDonne.isEmpty()) {
			return ResponseEntity.ok().body(false);
		}

		Donne donne = optDonne.get();
		boolean valid = senha.equals(donne.getSenha());

		return ResponseEntity.ok().body(valid);
	}

}
