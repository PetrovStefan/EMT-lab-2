package mk.ukim.finki.emtlab2.model;

import lombok.Data;

import javax.persistence.*;

// using Lombok to save time for all functions

@Data
@Entity
public class Author {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private String name;

    private String surname;

    // For the enums of available countries
    @ManyToOne
    private Country country;

    public Author() {
    }

    public Author(String name, String surname, Country country) {
        this.name = name;
        this.surname = surname;
        this.country = country;
    }
}
