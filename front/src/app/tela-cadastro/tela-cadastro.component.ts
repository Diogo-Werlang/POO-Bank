import { Component, input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Correntista } from '../model/correntista';
import { CorrentistaService } from '../correntista.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tela-cadastro',
  standalone: true,
  imports: [InputTextModule, ButtonModule, FormsModule],
  templateUrl: './tela-cadastro.component.html',
  styleUrl: './tela-cadastro.component.css'
})
export class TelaCadastroComponent {
  dadosCadastrais = new Correntista();

  constructor(
    private service: CorrentistaService
  ) {}
 
clickSalvar(): void {
  this.service.cadastrar(this.dadosCadastrais).subscribe ( resposta => {
    alert("Cadastrado com sucesso!");
  })
}
}

  