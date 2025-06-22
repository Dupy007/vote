package fr.azteck.vote.service;

import fr.azteck.vote.model.User;
import fr.azteck.vote.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
     @Autowired
    private UserRepository repository;

    public List<User> findAll() {
        return repository.findAll();
    }

    public User find(Long id) {
        return repository.findById(id).orElse(null);
    }

    public User save(User data) {
        return repository.save(data);
    }

    public User findByUsername(String value) {
        return repository.findByLastnameOrFirstname(value,value).orElse(null);
    }
    public void delete(User data) {
        repository.delete(data);
    }
}
