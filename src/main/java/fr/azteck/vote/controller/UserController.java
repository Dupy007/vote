package fr.azteck.vote.controller;

import fr.azteck.vote.model.User;
import fr.azteck.vote.repository.UserRepository;
import fr.azteck.vote.service.UserService;
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
public class UserController {
    private User model;
    @Autowired
    private UserRepository repository;
    @Autowired
    private UserService service;

    @GetMapping("/users")
    public List<User> get() {
        return service.findAll();
    }


    @GetMapping("/users/{id}")
    public User user(@PathVariable long id) {
        model = service.find(id);
        if (model != null) {
            return model;
        }
        throw new EntityNotFoundException();
    }

    @PostMapping("/users")
    public ResponseEntity<?> save(@Valid @RequestBody User data, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            return ResponseEntity.badRequest().body(bindingResult.getAllErrors().stream().map(DefaultMessageSourceResolvable::getDefaultMessage));
        }
        model = service.save(data);
        if (model != null) {
            return ResponseEntity.ok(service.find(model.getId()));
        }
        return ResponseEntity.internalServerError().body("Unsaved");
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<?> edit(@PathVariable long id,@Valid @RequestBody User data, BindingResult bindingResult,HttpServletRequest request) {
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
    @DeleteMapping("/users/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable long id) {
        model = service.find(id);
        if (model != null) {
            service.delete(model);
            return ResponseEntity.ok(true);
        }
        throw new EntityNotFoundException();
    }
}
