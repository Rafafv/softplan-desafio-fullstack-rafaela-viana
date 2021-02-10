package letsmanage.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import letsmanage.backend.models.Usuario;
import letsmanage.backend.repositories.UsuarioRepositorio;

@RestController
@RequestMapping("/api/usuario")
@CrossOrigin
public class UsuarioController {
    
    @Autowired
    private UsuarioRepositorio usuarioRepositorio;

    @GetMapping("/")
    public List<Usuario> GetUsuarios(){
        return usuarioRepositorio.findAll();
    }

    @GetMapping("/GetById/{id}")
    public Usuario GetUsuario(@PathVariable Integer id) {
        return usuarioRepositorio.findById(id).orElse(null);
    }

    @GetMapping("/GetAtribuir")
    public List<Usuario> GetAtribuir() {
        return usuarioRepositorio.findByUsuarioAtribuir();
    }

    @PostMapping("/Login")
    public Usuario PostLogin(@RequestBody Usuario usuario) {
      return usuarioRepositorio.findLogin(usuario.getName(),usuario.getPassword());
    }

    @PostMapping("/PostUsuario")
    public Usuario PostUsuario(@RequestBody Usuario usuario) {
       return usuarioRepositorio.save(usuario);
    }
    
    @PutMapping("/PutUsuario")
    public Usuario PutUsuario(@RequestBody Usuario usuario){
        Usuario antigoUsuario = usuarioRepositorio.findById(usuario.getId()).orElse(null);

        antigoUsuario.setName(usuario.getName());
        antigoUsuario.setPassword(usuario.getPassword());
        antigoUsuario.setType(usuario.getType());

        return usuarioRepositorio.save(antigoUsuario);
    }

    @DeleteMapping("/{id}")
    public Integer DeleteUsuario(@PathVariable Integer id) {
        usuarioRepositorio.deleteById(id);

        return id;
    }


}
