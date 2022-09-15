import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: [
  ]
})
export class ClientesComponent implements OnInit {

  public clientsList: any;

  constructor(private clientSevice : ClientService) { }

  ngOnInit(): void {

    this.clientSevice.getClients().subscribe( res => {
      console.log('====================================');
      console.log(res);
      console.log('====================================');

      this.clientsList = res;
    })

  }

  onSubmit(form: NgForm){

      if (form.valid){
        const date = new Date();
        form.value.dateAdded = date.toISOString();
        form.value.key = form.value.name.toLowerCase();
        this.clientSevice.saveClient(form.value).subscribe();
      }

  }



}
