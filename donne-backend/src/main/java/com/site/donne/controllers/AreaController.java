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

import com.site.donne.entities.Area;
import com.site.donne.repositories.AreaRepository;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/area-atuacao/{id}")
public class AreaController {

	@Autowired
	AreaRepository areaRepository;

	// GET
	@GetMapping
	public ResponseEntity<List<Area>> findAll() {

		List<Area> areas = areaRepository.findAll();
		return ResponseEntity.ok().body(areas);
	}

	// GET by ID
	@GetMapping(value = "/{id}")
	public ResponseEntity<Area> findById(@PathVariable Long id) {

		Area area = areaRepository.findById(id).get();
		return ResponseEntity.ok().body(area);
	}

	// CREATE
	@PostMapping
	public Area create(@RequestBody Area area) {
		return areaRepository.save(area);
	}

	// UPDATE
	@PutMapping("{id}")
	public ResponseEntity<Area> update(@PathVariable Long id, @RequestBody Area areaDetails) {
		Area updateArea = areaRepository.findById(id).get();

		updateArea.setNomeArea(areaDetails.getNomeArea());

		areaRepository.save(updateArea);

		return ResponseEntity.ok(updateArea);
	}

	// DELETE
	@DeleteMapping("{id}")
	public ResponseEntity<HttpStatus> delete(@PathVariable Long id) {
		Area area = areaRepository.findById(id).get();

		areaRepository.delete(area);

		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

}
