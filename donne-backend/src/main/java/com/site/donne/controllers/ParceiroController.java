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

import com.site.donne.entities.Parceiro;
import com.site.donne.repositories.ParceiroRepository;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/parceiro")
public class ParceiroController {

	@Autowired
	ParceiroRepository parceiroRepository;

	// GET
	@GetMapping
	public ResponseEntity<List<Parceiro>> findAll() {

		List<Parceiro> parceiros = parceiroRepository.findAll();
		return ResponseEntity.ok().body(parceiros);
	}

	// GET by ID
	@GetMapping(value = "/{id}")
	public ResponseEntity<Parceiro> findById(@PathVariable Long id) {

		Parceiro parceiro = parceiroRepository.findById(id).get();
		return ResponseEntity.ok().body(parceiro);
	}

	// GET by EMAIL
	@GetMapping(value = "/email/{email}")
	public ResponseEntity<Parceiro> findByEmail(@PathVariable String email) {

		Parceiro parceiro = parceiroRepository.findByEmail(email).get();
		return ResponseEntity.ok().body(parceiro);
	}

	// CREATE
	@PostMapping
	public Parceiro create(@RequestBody Parceiro parceiro) {
		return parceiroRepository.save(parceiro);
	}

	// UPDATE
	@PutMapping("{id}")
	public ResponseEntity<Parceiro> update(@PathVariable Long id, @RequestBody Parceiro parceiroDetails) {
		Parceiro updateParceiro = parceiroRepository.findById(id).get();

		updateParceiro.setNome(parceiroDetails.getNome());
		updateParceiro.setEmail(parceiroDetails.getEmail());
		updateParceiro.setCnpj(parceiroDetails.getCnpj());
		updateParceiro.setSenha(parceiroDetails.getSenha());
		updateParceiro.setArea_atuacao(parceiroDetails.getArea_atuacao());

		parceiroRepository.save(updateParceiro);

		return ResponseEntity.ok(updateParceiro);
	}

	// DELETE
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> delete(@PathVariable Long id) {
		Parceiro parceiro = parceiroRepository.findById(id).get();

		parceiroRepository.delete(parceiro);

		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@GetMapping(value = "/auth")
	public ResponseEntity<Boolean> auth(@RequestParam String email, @RequestParam String senha) {

		Optional<Parceiro> optParceiro = parceiroRepository.findByEmail(email);
		if (optParceiro.isEmpty()) {
			return ResponseEntity.ok().body(false);
		}

		Parceiro parceiro = optParceiro.get();
		boolean valid = senha.equals(parceiro.getSenha());

		return ResponseEntity.ok().body(valid);
	}

}
