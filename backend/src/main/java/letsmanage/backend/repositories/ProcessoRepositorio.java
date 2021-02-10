package letsmanage.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import letsmanage.backend.models.Processo;

@Repository
public interface ProcessoRepositorio extends  JpaRepository<Processo, Integer> {
    
}
