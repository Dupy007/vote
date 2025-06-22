package fr.azteck.vote.controller;

import fr.azteck.vote.model.Candidat;
import fr.azteck.vote.model.WinnerProjection;
import fr.azteck.vote.repository.CandidatRepository;
import fr.azteck.vote.service.CandidatService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.DefaultMessageSourceResolvable;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RequestMapping("/api")
@RestController
public class CandidatController {
    private Candidat model;
    @Autowired
    private CandidatRepository repository;
    @Autowired
    private CandidatService service;

    @GetMapping("/candidat")
    public List<Candidat> get() {
        return service.findAll();
    }


    @GetMapping("/candidat/{id}")
    public Candidat user(@PathVariable long id) {
        model = service.find(id);
        if (model != null) {
            return model;
        }
        throw new EntityNotFoundException();
    }

    @GetMapping("/result/{id}")
    public WinnerProjection result(@PathVariable long id) {
        model = service.find(id);
        if (model != null) {
            return repository.results().stream().filter(winnerProjection -> winnerProjection.getCandidatId().equals(model.getId())).toList().getFirst();
        }
        throw new EntityNotFoundException();
    }

    @GetMapping("/result")
    public List<WinnerProjection> results() {
        return repository.results();
    }

    @PostMapping("/candidat")
    public ResponseEntity<?> save(@Valid @RequestBody Candidat data, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return ResponseEntity.badRequest().body(bindingResult.getAllErrors().stream().map(DefaultMessageSourceResolvable::getDefaultMessage));
        }
        model = service.save(data);
        if (model != null) {
            return ResponseEntity.ok(service.find(model.getId()));
        }
        return ResponseEntity.internalServerError().body("Unsaved");
    }

    @PutMapping("/candidat/{id}")
    public ResponseEntity<?> edit(@PathVariable long id, @Valid @RequestBody Candidat data, BindingResult bindingResult, HttpServletRequest request) {
        if (bindingResult.hasErrors()) {
            return ResponseEntity.badRequest().body(bindingResult.getAllErrors().stream().map(DefaultMessageSourceResolvable::getDefaultMessage));
        }
        model = service.find(id);
        if (model != null) {
            data.setId(model.getId());
            service.save(data);
            return ResponseEntity.ok(data);
        }
        throw new EntityNotFoundException();
    }

    @DeleteMapping("/candidat/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable long id) {
        model = service.find(id);
        if (model != null) {
            repository.delete(model);
            return ResponseEntity.ok(true);
        }
        throw new EntityNotFoundException();
    }
}
