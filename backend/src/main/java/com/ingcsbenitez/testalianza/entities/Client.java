package com.ingcsbenitez.testalianza.entities;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Data;

@Data
@Entity
public class Client {
    
    @Id
    private String sharedKey;
    @Column
    private String name;
    @Column
    private String email;
    @Column
    private String phone;
    @Column
    private LocalDate dataAdded;
    @Column
    private LocalDate startDate;
    @Column
    private LocalDate endDate;

}
