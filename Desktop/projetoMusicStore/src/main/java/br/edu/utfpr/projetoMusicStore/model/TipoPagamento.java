package br.edu.utfpr.projetoMusicStore.model;

public enum TipoPagamento {
    CARTAOCREDITO("Cartão de Crédito"), AVISTA("À vista"), CARTAODEBITO("Cartão de Débito");

    private String descricao;

    TipoPagamento(String descricao){
        this.descricao = descricao;
    }

    private String getDescricao(){
        return descricao;
    }
}
