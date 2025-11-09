import {ChangeDetectorRef, Component, input, OnInit} from '@angular/core';
import {CargoResumido} from '../../model/CargoResumido';
import {CargoService} from '../../services/cargo-service/cargo-service';

@Component({
  selector: 'app-cargo-selector',
  imports: [],
  templateUrl: './cargo-selector.html',
  styleUrl: './cargo-selector.css'
})
export class CargoSelector implements OnInit {

  constructor(
    private cargoService: CargoService,
    private cdr: ChangeDetectorRef) {
  }
  ngOnInit(): void {
      this.cargoService.obterCargos().subscribe({
        next: response => {
          this.itens = response.data;
          this.cdr.detectChanges();
        },
        error: error => {
          console.error(error);
        }
      })
  }
  label = input<string>();
  inputName = input<string>();
  inputId = input<string>();
  itens: CargoResumido[] = [];
}
