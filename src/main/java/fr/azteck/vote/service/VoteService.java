package fr.azteck.vote.service;

import fr.azteck.vote.model.Vote;
import fr.azteck.vote.model.User;
import fr.azteck.vote.repository.VoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VoteService {
    @Autowired
    private VoteRepository repository;

    public List<Vote> findAll() {
        return repository.findAll();
    }

    public Vote find(Long id) {
        return repository.findById(id).orElse(null);
    }
    public User findByUser(User data) {
        return repository.findByUser(data).orElse(new User());
    }
    public User findByCandidat(User data) {
        return repository.findByCandidat(data).orElse(new User());
    }
    public Vote save(Vote data) {
        return repository.save(data);
    }
    public void delete(Vote data) {
        repository.delete(data);
    }

}
