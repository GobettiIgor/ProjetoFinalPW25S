package br.edu.utfpr.projetoMusicStore.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "categoria")
@Data
@EqualsAndHashCode(of = "id")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Categoria {
    public Categoria(String name) {
        this.nome = name;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nome", nullable = false)
    private String nome;
}
