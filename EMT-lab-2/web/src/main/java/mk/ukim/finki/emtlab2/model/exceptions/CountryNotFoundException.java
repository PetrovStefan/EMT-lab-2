package mk.ukim.finki.emtlab2.model.exceptions;

public class CountryNotFoundException extends RuntimeException {
    public CountryNotFoundException(Long id){
        super(String.format("Country %d does not exist.", id));
    }
}
