import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.css']
})
export class EventoDetalheComponent implements OnInit {
  eventoDetalhado;

  detalhes_evento = [
    {
      id: 1,
      responsavel: "João da Silva"
    },
    {
      id: 2, 
      responsavel: "Rafaela"
    },
    {
      id: 3,
      responsavel: "Lara"
    }
  ]
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    let id;    
    this.route.paramMap.subscribe(params => {
      id = params.get('eventoId');
    })  

    this.detalhes_evento.forEach(evento => {
      if (evento.id == id) {
        this.eventoDetalhado = evento;
      }
    })

  }

}
