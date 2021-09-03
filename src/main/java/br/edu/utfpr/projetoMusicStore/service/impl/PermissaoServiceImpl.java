package br.edu.utfpr.projetoMusicStore.service.impl;

import br.edu.utfpr.projetoMusicStore.model.Permissao;
import br.edu.utfpr.projetoMusicStore.repository.PermissaoRepository;
import br.edu.utfpr.projetoMusicStore.service.PermissaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class PermissaoServiceImpl extends CrudServiceImpl<Permissao, Long>
        implements PermissaoService {

    @Autowired
    private PermissaoRepository permissaoRepository;

    @Override
    protected JpaRepository<Permissao, Long> getRepository() {
        return permissaoRepository;
    }
}