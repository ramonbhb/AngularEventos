import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import * as EventEmitter from 'node:events';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {
  @Input() localizacao;
  @Output() atualizarLocalizacao = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  atualizaLocalizacao() {
    let evento = {
        nomeOld: "Campeonato de Fifa",
        novoNome: "Campeonato de Fifa 21",
        localizacao: { 
          cidade: "São Paulo",
          pais: "Brasil",
          logradouro: "Rua nova, 11000"
        }
    }
    this.atualizarLocalizacao.emit(evento);
  }

}
