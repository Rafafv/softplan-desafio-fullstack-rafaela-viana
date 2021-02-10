package letsmanage.backend.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Processo_Usuario {
         
    @Id
    @GeneratedValue
    private int idprocesso_usuario;
    
    private int processo;
    private String usuario;
    private String description;
   
}
