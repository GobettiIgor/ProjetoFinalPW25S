package br.edu.utfpr.projetoMusicStore.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table
@Data
@EqualsAndHashCode(of = "id")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Produto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private int cd_item;

    @Column(nullable = false, length = 60)
    private String nome;

    @Column(length = 255)
    private String descricao;

    @Column(nullable = false)
    private double preco;

    @Column(nullable = false)
    private double precoAnt;

    @Column(nullable = false)
    private String caminhoImg;

    @ManyToOne
    @JoinColumn(name = "marca_prod_id", referencedColumnName = "id")
    private Marca marca;

    @ManyToOne
    @JoinColumn(name = "categoria_prod_id", referencedColumnName = "id")
    private Categoria categoria;
}
