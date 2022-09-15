import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getClients(){
    return this.http.get<any>("http://localhost:8080/client/gets")
  }

  getClient(key: string){
    return this.http.get<any>("http://localhost:8080/client/get?key=" + key)
  }

  saveClient(client: any){
    return this.http.post<any>("http://localhost:8080/client/save",client)
  }

  deleteClient(client: any){
    return this.http.post<any>("http://localhost:8080/client/delete",client)
  }

}
