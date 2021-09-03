package br.edu.utfpr.projetoMusicStore.service.impl;

import br.edu.utfpr.projetoMusicStore.model.Categoria;
import br.edu.utfpr.projetoMusicStore.repository.CategoriaRepository;
import br.edu.utfpr.projetoMusicStore.service.CategoriaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class CategoriaServiceImpl extends CrudServiceImpl<Categoria, Long> implements CategoriaService{

    @Autowired
    private CategoriaRepository categoriaRepository;

    @Override
    protected JpaRepository<Categoria, Long> getRepository() {
        return categoriaRepository;
    }
}
