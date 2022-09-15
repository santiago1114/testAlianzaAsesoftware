package com.ingcsbenitez.testalianza.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ingcsbenitez.testalianza.dao.ClientRepo;
import com.ingcsbenitez.testalianza.entities.Client;

@RequestMapping("/client")
@CrossOrigin(allowedHeaders = "*", origins = "*")
@RestController
public class ClientController {

    @Autowired
    private ClientRepo clientRepo;
    
    @GetMapping("/gets")
    public Iterable<Client> getClients() {
        return clientRepo.findAll();
    }

    @GetMapping("/get")
    public Client getClient(@RequestParam String key) {
        return clientRepo.findById(key).get();
    }

    @PostMapping("/save")
    public Client saveClient(@RequestBody Client client) {
        return clientRepo.save(client);
    }

    @PostMapping("/delete")
    public void deleteClient(@RequestBody Client client) {
        clientRepo.deleteById(client.getSharedKey());
    }

}
