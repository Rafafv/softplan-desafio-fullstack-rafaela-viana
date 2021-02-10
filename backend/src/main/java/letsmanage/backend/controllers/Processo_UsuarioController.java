package letsmanage.backend.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import letsmanage.backend.models.Processo_Usuario;
import letsmanage.backend.repositories.Processo_UsuarioRepositorio;

@RestController
@RequestMapping("/api/processoUsuario")
@CrossOrigin
public class Processo_UsuarioController {
    
    @Autowired
    private Processo_UsuarioRepositorio processoUsuarioRepositorio;

    @GetMapping("/GetProcessosUsuario")
    public List<Processo_Usuario> GetProcessosUsuario(){

        return processoUsuarioRepositorio.findProcessos();
    }

    @PostMapping("/GetProcessoPendente")
    public List<Processo_Usuario> GetProcessoPendente(@RequestBody Processo_Usuario ProcessoUsuario) {
         return processoUsuarioRepositorio.findProcessoUsuario(ProcessoUsuario.getUsuario());
    }

    @PostMapping("/PostProcessoUsuario")
    public Processo_Usuario PostProcessoUsuario(@RequestBody Processo_Usuario processoUsuario) {
        return processoUsuarioRepositorio.save(processoUsuario);
     
    }

    @PutMapping("/PutProcessoUsuario")
    public void PutProcessoUsuario(@RequestBody Processo_Usuario ProcessoUsuario){
     //   System.out.print(ProcessoUsuario);
         processoUsuarioRepositorio.putProcessoUsuarioPendente(ProcessoUsuario.getDescription(),ProcessoUsuario.getUsuario(),ProcessoUsuario.getProcesso(),ProcessoUsuario.getIdprocesso_usuario());

    }
    
}
