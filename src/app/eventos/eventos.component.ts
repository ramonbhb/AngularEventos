import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})

export class EventosComponent implements OnInit {

  eventos = [ 
    { 
      id: 1,
      nome: "Aula do Ramon e da Rafa",
      data: "05/08/2021",
      horario: "19h",
      img: "https://soualuno.una.br/wp-content/uploads/2018/08/Una-01.png",
      localizacao: {
          cidade: "Belo Horizonte",
          pais: "Brasil",
          logradouro: "Rua dos bobos nº 0"
      }
    },
    {  
      id: 2,
      nome: "Campeonato de Fifa",
      data: "06/08/2021",
      horario: "16h",
      img: "https://s2.glbimg.com/f5UpJFXD2wQR3-HMNa927HxTd7c=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/r/7/mSrPjAQTq0uFHNHiBjpQ/fifa-21-intros.jpg",
      localizacao: {
          cidade: "Tokyo",
          pais: "Japão",
          logradouro: "Takhish mahaki, 120"
      }
    },
    {  
      id: 3,
      nome: "Campeonato LOL",
      data: "07/08/2021",
      horario: "18h",
      img: "https://www.liq.com.br/wp-content/uploads/2019/03/league-of-legends.png",
      localizacao: {
        cidade: "New York",
        pais: "Estados Unidos",
        logradouro: "Wall Street, 20"        
      }
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  receberAtualizacao(eventoNovo) {
    this.eventos.forEach(evento => {
      if (evento.nome == "Campeonato de Fifa") {
          evento.nome = eventoNovo.novoNome;
          evento.localizacao = eventoNovo.localizacao;
      }
    })    
  }
}
