import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientModel } from 'src/app/models/client.model';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styles: [
  ]
})
export class ClientesComponent implements OnInit {

  public clientsList: ClientModel[] = [];

  public client: ClientModel = new ClientModel("","","","");

  constructor(private clientSevice : ClientService) { }

  ngOnInit(): void {

    this.clientSevice.getClients().subscribe( res => {
      console.log('====================================');
      console.log(res);
      console.log('====================================');

      this.clientsList = res;
    })

  }

  setClient(client: ClientModel){
    this.client = client;
  }

  onSubmit(form: NgForm){

      if (form.valid){
        const date = new Date();
        this.client.dataAdded = date.toISOString();

        this.client.sharedKey = this.client.name.replace(" ","").toLowerCase();
        console.log(this.client);

        this.clientSevice.saveClient(this.client).subscribe( res => {
            this.clientSevice.getClients().subscribe()
        });
      }

  }

  onSubmitModify(form: NgForm){

    if (form.valid){
      this.clientSevice.saveClient(this.client).subscribe( res => {
          this.clientSevice.getClients().subscribe()
      });
    }

}

  deleteClient(){

    this.clientSevice.deleteClient(this.client).subscribe( res => {
      this.clientSevice.getClients().subscribe()
    })

  }

  search(formSearch: NgForm){
    if( formSearch.value.sharedKey != null )
      this.clientSevice.getClient(formSearch.value.sharedKey).subscribe(
        res => {
          this.clientsList = []
          this.clientsList.push(res)
        }
      )
  }





}
