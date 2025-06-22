package fr.azteck.vote.model;

public interface WinnerProjection {
    Long getId();
    Long getCandidatId();
    String getFirstname();
    String getLastname();
    Long getPoints();
    Long getRang();
    default String result(){
        return getFirstname() + " " + getLastname() + " a gagné " + getPoints() + " point(s) et est au rang "+getRang();
    }
}