package fr.azteck.vote.repository;

import fr.azteck.vote.model.User;
import fr.azteck.vote.model.Vote;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface VoteRepository extends JpaRepository<Vote, Long> {
    Optional<User> findByCandidat(User candidat);
    Optional<User> findByUser(User user);
}
