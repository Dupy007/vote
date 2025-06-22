package fr.azteck.vote.repository;

import fr.azteck.vote.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByLastnameOrFirstname(String lastname, String firstname);
    List<User> findByLastname(String lastname);
    List<User> findByFirstname(String firstname);
    List<User> findByBirthdate(LocalDate birthdate);
}
