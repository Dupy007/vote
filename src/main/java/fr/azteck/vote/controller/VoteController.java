package fr.azteck.vote.controller;

import fr.azteck.vote.model.Vote;
import fr.azteck.vote.repository.VoteRepository;
import fr.azteck.vote.service.VoteService;
import jakarta.persistence.EntityNotFoundException;
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
public class VoteController {
    private Vote model;
    @Autowired
    private VoteRepository repository;
    @Autowired
    private VoteService service;

    @GetMapping("/vote")
    public List<Vote> get() {
        return service.findAll();
    }


    @GetMapping("/vote/{id}")
    public Vote user(@PathVariable long id) {
        model = service.find(id);
        if (model != null) {
            return model;
        }
        throw new EntityNotFoundException();
    }

    @PostMapping("/vote")
    public ResponseEntity<?> save(@Valid @RequestBody Vote data, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return ResponseEntity.badRequest().body(bindingResult.getAllErrors().stream().map(DefaultMessageSourceResolvable::getDefaultMessage));
        }
        model = service.save(data);
        if (model != null) {
            return ResponseEntity.ok(service.find(model.getId()));
        }
        return ResponseEntity.internalServerError().body("Unsaved");
    }
    @PutMapping("/vote/{id}")
    public Vote updateVote(Long id, Vote data) {
        throw new UnsupportedOperationException("Mise à jour non autorisée.");
    }

    @DeleteMapping("/vote/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable long id) {
        model = service.find(id);
        if (model != null) {
            repository.delete(model);
            return ResponseEntity.ok(true);
        }
        throw new EntityNotFoundException();
    }
}
