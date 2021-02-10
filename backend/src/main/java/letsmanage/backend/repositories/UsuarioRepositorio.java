package letsmanage.backend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import letsmanage.backend.models.Usuario;

@Repository
public interface UsuarioRepositorio extends JpaRepository<Usuario, Integer>{
     
    @Query(value = "SELECT u.name,u.id FROM Usuario u WHERE u.type IN(2,3)",nativeQuery = true)
    List<Usuario> findByUsuarioAtribuir();

    @Query(value = "SELECT u.name,u.id,u.password,u.type FROM Usuario u WHERE u.name = ?1 AND u.password = ?2",nativeQuery = true)
    Usuario findLogin(String usuario,String password);
    
}
