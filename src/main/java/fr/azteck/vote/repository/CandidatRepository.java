package fr.azteck.vote.repository;

import fr.azteck.vote.model.Candidat;
import fr.azteck.vote.model.User;
import fr.azteck.vote.model.WinnerProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface CandidatRepository extends JpaRepository<Candidat, Long> {
    Optional<User> findByUser(User user);
    @Query(nativeQuery = true,value = "select ROW_NUMBER() OVER (ORDER BY COUNT(v.candidat_id) DESC) AS rang, u.* ,count(v.candidat_id) as points, v.candidat_id as candidatId from vote v join candidat c on c.id = v.candidat_id join users u on u.id = c.user_id group by v.candidat_id order by count(v.candidat_id) desc")
    List<WinnerProjection> results();
}
