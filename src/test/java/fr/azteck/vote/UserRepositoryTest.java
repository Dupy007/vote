package fr.azteck.vote;

import fr.azteck.vote.model.User;
import fr.azteck.vote.repository.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.time.LocalDate;

import static org.assertj.core.api.Assertions.assertThat;

@ActiveProfiles("test")
@SpringBootTest
public class UserRepositoryTest {

    @Autowired
    private UserRepository userRepository;

    @Test
    public void shouldPersistUserWithCreateAndUpdateDate() {
        User user = new User()
                .setFirstname("Alice")
                .setLastname("Dupont")
                .setBirthdate(LocalDate.of(1995, 5, 10));

        userRepository.save(user);

        assertThat(user.getId()).isGreaterThan(0);
        assertThat(user.getCreateDate()).isNotNull();
        assertThat(user.getUpdateDate()).isNotNull();
    }
}
