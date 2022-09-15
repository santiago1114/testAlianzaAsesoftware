package com.ingcsbenitez.testalianza.dao;

import org.springframework.data.repository.CrudRepository;

import com.ingcsbenitez.testalianza.entities.Client;


public interface ClientRepo extends CrudRepository<Client, String>{
    
}
