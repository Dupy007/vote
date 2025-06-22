package fr.azteck.vote.service;

import fr.azteck.vote.model.Candidat;
import fr.azteck.vote.model.User;
import fr.azteck.vote.repository.CandidatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CandidatService {
    @Autowired
    private CandidatRepository repository;

    public List<Candidat> findAll() {
        return repository.findAll();
    }

    public Candidat find(Long id) {
        return repository.findById(id).orElse(null);
    }
    public User findByUser(User data) {
        return repository.findByUser(data).orElse(new User());
    }

    public Candidat save(Candidat data) {
        return repository.save(data);
    }

    public void delete(Candidat data) {
        repository.delete(data);
    }


}
