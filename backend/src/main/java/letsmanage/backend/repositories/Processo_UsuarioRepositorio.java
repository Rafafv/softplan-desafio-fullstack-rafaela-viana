package letsmanage.backend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import letsmanage.backend.models.Processo_Usuario;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface Processo_UsuarioRepositorio extends JpaRepository<Processo_Usuario, Integer>{

    @Query(value="SELECT p.description,pu.processo,pu.idprocesso_usuario,pu.usuario FROM Processo_Usuario pu JOIN Processo p ON p.id = pu.processo WHERE pu.usuario = ?1 AND pu.description IS NULL ",nativeQuery = true)
    List<Processo_Usuario> findProcessoUsuario(String usuario);

    @Transactional
    @Query("UPDATE Processo_Usuario SET description = ?1 WHERE usuario = ?2 AND processo = ?3 AND idprocesso_usuario = ?4")
    @Modifying
    void putProcessoUsuarioPendente(String description,String usuario,Integer processo,Integer idprocesso_usuario);

    @Query(value = "SELECT p.description,pu.idprocesso_usuario,pu.usuario,pu.processo FROM Processo_Usuario pu JOIN Processo p ON p.id = pu.processo", nativeQuery = true)
    List<Processo_Usuario> findProcessos();
}
