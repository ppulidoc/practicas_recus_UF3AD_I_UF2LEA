import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Component({
  selector: 'app-exerisis',
  templateUrl: './exerisis.component.html',
  styleUrls: ['./exerisis.component.css']
})
export class ExerisisComponent {
  constructor(private http: HttpClient) {
    //this.ex2();
    //this.ex4()
    //this.ex5()
    //this.ex6()
    //this.ex7();
    this.ex8();
  }

  //escrito en el node.js
  ex2(){
    this.http.get<any>("http://localhost:3080/api/clients").subscribe((clients) => {
      console.log(clients); // JSON sencer
      console.log(clients.name); // Camp del JSON
    })
  }

  //coge los datos de la base de datos
  ex4(){
    this.http.get<any>("http://localhost:3080/api/recDocs").subscribe((document) => {
      console.log(document); // JSON sencer
    })
  }

  ex5(){
      const data = { nom: 'ADRIAAAAA' };
      this.http.post<any>('http://localhost:3080/api/anadir', data).subscribe(

      );
  }

  ex6(){
    const data = {
      nom:  'ALBERTO',
      edat: 19,
      altura: 189
    }
    this.http.post<any>('http://localhost:3080/api/modifCamps', data ).subscribe(
    );
  }

  ex7(){
    this.http.get<any>("http://localhost:3080/api/jedis").subscribe((jedis) => {
      console.log(jedis); // JSON sencer
      console.log(jedis.name); // Camp del JSON
    })
  }
  ex8(){
    this.http.get<any>("http://localhost:3080/api/exJsonPath").subscribe( (llibres) => {
      console.log(llibres); // JSON sencer
    });
  }
}
