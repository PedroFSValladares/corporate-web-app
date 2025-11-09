import {ChangeDetectorRef, Component, ElementRef, input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {FuncionarioResumido} from '../../model/FuncionarioResumido';
import {FuncionarioService} from '../../services/funcionario-service/funcionario-service';
import {RouterLink} from '@angular/router';
import {BasicInput} from '../../inputs/basic-input/basic-input';
import {BasicSelector} from '../../inputs/basic-selector/basic-selector';
import {CargoService} from '../../services/cargo-service/cargo-service';
import {SelectorOption} from '../../inputs/basic-selector/SelectorOption';
import {NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listar-funcionario-component',
  imports: [
    RouterLink,
    BasicInput,
    BasicSelector,
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu,
    NgbDropdownItem,
  ],
  templateUrl: './listar-funcionario-component.html',
  styleUrl: './listar-funcionario-component.css'
})
export class ListarFuncionarioComponent implements OnInit {
  constructor(
    private funcionarioService: FuncionarioService,
    private cargoService: CargoService,
    private cdr: ChangeDetectorRef) {
  }

  @ViewChildren(BasicInput, {read:  ElementRef})
  formInputs: QueryList<ElementRef> = new QueryList<ElementRef>();
  @ViewChildren(BasicSelector, {read:  ElementRef})
  formSelectors: QueryList<ElementRef> = new QueryList<ElementRef>();

  funcionarios : FuncionarioResumido[] = [];
  cargos : SelectorOption[] = []
  status: SelectorOption[] = [
    new SelectorOption("true", "Ativo"),
    new SelectorOption("false", "Inativo")
  ];
  paginaAtual: FuncionarioResumido[] = [];
  numeroPaginaAtual: number = 1;
  qntdResgistrosAMostrar: number = 10;
  pageOffset: number = 1;
  qntdPaginas: number[] = [];
  paginationEnabled: boolean = false;

  buscarFuncionarios(event: PointerEvent): void {
    event.preventDefault();
    this.funcionarioService.obterTodosOsFuncionarios().subscribe(response => {
      this.funcionarios = response.data
      this.paginaAtual = this.funcionarios.slice(this.pageOffset - 1, this.numeroPaginaAtual * this.qntdResgistrosAMostrar);
      this.paginationEnabled = true;
      this.qntdPaginas = []
      for(let i = 1; i <= this.funcionarios.length / 10; i++) {
        this.qntdPaginas.push(i);
      }
      if(this.funcionarios.length % 10 > 0){
        this.qntdPaginas.push(Math.trunc(this.funcionarios.length / 10) + 1);
      }
      this.cdr.detectChanges();
    })
  }

  limparPesquisa(event: PointerEvent): void {
    event.preventDefault();
    this.funcionarios = [];
    this.paginaAtual = [];
    this.formInputs.forEach(input => {input.nativeElement.querySelector('input').value = ''});
    this.formSelectors.forEach(input => {input.nativeElement.querySelector('select').value = ''});
    this.paginationEnabled = false;
    this.pageOffset = 1;
    this.numeroPaginaAtual = 1;
    this.qntdResgistrosAMostrar = 10;
  }

  carregarCargos(): void{
      this.cargoService.obterCargos().subscribe({
        next: (result) => {
          this.cargos = result.data.map(item => {
            return new SelectorOption(item.id.toString(), item.nome)
          })
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error(error);
        }
      })
  }

  paginar(event: PointerEvent, pagina : number): void {
    event.preventDefault();
    this.pageOffset = (pagina * this.qntdResgistrosAMostrar) - this.qntdResgistrosAMostrar;
    this.numeroPaginaAtual = pagina;
    this.paginaAtual = this.funcionarios.slice(this.pageOffset, pagina * this.qntdResgistrosAMostrar);
  }

  ngOnInit(): void {
    this.carregarCargos();
  }
}
