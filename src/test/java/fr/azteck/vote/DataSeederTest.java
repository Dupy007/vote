package fr.azteck.vote;

import fr.azteck.vote.model.Candidat;
import fr.azteck.vote.model.User;
import fr.azteck.vote.model.Vote;
import fr.azteck.vote.model.WinnerProjection;
import fr.azteck.vote.repository.CandidatRepository;
import fr.azteck.vote.repository.UserRepository;
import fr.azteck.vote.repository.VoteRepository;
import net.datafaker.Faker;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Collections;
import java.util.List;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

@SpringBootTest
public class DataSeederTest {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private CandidatRepository candidatRepository;
    @Autowired
    private VoteRepository voteRepository;
    private final int nbCandidat = 10;

    @Test
    public void shouldPersistData() {
        Faker faker = new Faker();
        for (int i = 0; i < 50; i++) {
            User user = new User()
                    .setFirstname(faker.name().firstName())
                    .setLastname(faker.name().lastName())
                    .setBirthdate(faker.timeAndDate().birthday());

            userRepository.save(user);

            assertThat(user.getCreateDate()).isNotNull();
            assertThat(user.getUpdateDate()).isNotNull();
        }
        List<User> users = userRepository.findAll();
        Collections.shuffle(users);
        List<User> candidatUsers = users.stream().limit(nbCandidat).toList();
        for (User user : candidatUsers) {
            Candidat candidat = new Candidat().setUser(user);
            candidatRepository.save(candidat);
            assertThat(candidat.getCreateDate()).isNotNull();
            assertThat(candidat.getUpdateDate()).isNotNull();
        }
        List<Candidat> candidats = candidatRepository.findAll();
        for (User user : users) {
            Collections.shuffle(candidats);
            Vote vote = new Vote().setUser(user).setCandidat(candidats.getFirst());
            voteRepository.save(vote);
            assertThat(vote.getCreateDate()).isNotNull();
            assertThat(vote.getUpdateDate()).isNotNull();
        }
    }
    @Test
    public void printWinner() {
        List<WinnerProjection> result =candidatRepository.results();
        for (WinnerProjection winnerProjection : result) {
            System.out.println(winnerProjection.result());
        }
    }
}