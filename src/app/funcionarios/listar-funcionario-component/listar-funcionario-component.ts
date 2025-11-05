import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {routes} from '../../app.routes';
import {FuncionarioResumido} from '../../model/FuncionarioResumido';

@Component({
  selector: 'app-listar-funcionario-component',
  imports: [],
  templateUrl: './listar-funcionario-component.html',
  styleUrl: './listar-funcionario-component.css'
})
export class ListarFuncionarioComponent {

  constructor(private httpClient: HttpClient) { }

  obterFuncionarios(){
    this.httpClient.get<FuncionarioResumido>("rh/api/funcionarios").subscribe()
  }
}
