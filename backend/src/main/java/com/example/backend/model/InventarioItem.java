package com.example.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Table(name = "inventarioItem")
public class InventarioItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "item_id")
    private Item item;

    @ManyToOne
    @JoinColumn(name = "inventario_id")
    private Inventario inventario;

    private Integer quantidade;
}
