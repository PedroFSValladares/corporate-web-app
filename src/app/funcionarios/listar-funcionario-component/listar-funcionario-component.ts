import {ChangeDetectorRef, Component, ElementRef, QueryList, ViewChildren} from '@angular/core';
import {FuncionarioResumido} from '../../model/FuncionarioResumido';
import {FuncionarioService} from '../../services/funcionario-service/funcionario-service';
import {RouterLink} from '@angular/router';
import {CargoSelector} from '../../inputs/cargo-selector/cargo-selector';
import {BasicInput} from '../../inputs/basic-input/basic-input';
import {ApiResponse} from '../../model/ApiResponse';

@Component({
  selector: 'app-listar-funcionario-component',
  imports: [
    RouterLink,
    CargoSelector,
    BasicInput,
  ],
  templateUrl: './listar-funcionario-component.html',
  styleUrl: './listar-funcionario-component.css'
})
export class ListarFuncionarioComponent {
  constructor(
    private funcionarioService: FuncionarioService,
    private cdr: ChangeDetectorRef) {
  }

  @ViewChildren(BasicInput, {read:  ElementRef}) formInputs: QueryList<ElementRef> = new QueryList<ElementRef>();
  funcionarios : FuncionarioResumido[] = [];

  buscarFuncionarios(event: Event): void {
    event.preventDefault();
    this.funcionarioService.obterTodosOsFuncionarios().subscribe(response => {
      this.funcionarios = response.data

      this.cdr.detectChanges();
      console.log(this.funcionarios);
    })
  }

  limparPesquisa(event: Event): void {
    event.preventDefault();
    this.funcionarios = [];
    this.formInputs.forEach(input => {console.log(input.nativeElement.querySelector('input').value = '')});
  }
}
