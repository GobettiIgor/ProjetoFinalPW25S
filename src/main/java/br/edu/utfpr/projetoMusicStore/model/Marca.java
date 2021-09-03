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
public class Marca {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String descricao;
}
