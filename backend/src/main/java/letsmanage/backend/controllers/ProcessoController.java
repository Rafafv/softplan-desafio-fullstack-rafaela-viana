package letsmanage.backend.controllers;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import letsmanage.backend.models.Processo;
import letsmanage.backend.repositories.ProcessoRepositorio;

@RestController
@RequestMapping("/api/processo")
@CrossOrigin
public class ProcessoController {
    
    @Autowired
    private ProcessoRepositorio processoRepositorio;

    @GetMapping("/")
    public List<Processo> GetProcessos(){
        return processoRepositorio.findAll();
    }

    @GetMapping("/GetProcessoId/{id}")
    public Processo GetProcessoId(@PathVariable Integer id) {
        return processoRepositorio.findById(id).orElse(null);
    }

    @PostMapping("/PostProcesso")
    public Processo PostProcesso(@RequestBody Processo processo) {
        return processoRepositorio.save(processo);
     
    }
    

}
