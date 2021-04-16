package mk.ukim.finki.emtlab2.model.exceptions;

public class AuthorNotFoundException extends RuntimeException {
    public AuthorNotFoundException(Long id) {
        super(String.format("Author %d does not exist", id));
    }
}
