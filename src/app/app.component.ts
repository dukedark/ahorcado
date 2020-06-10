import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  palabra = 'FUTURO';
  palabraOculta = '';
  intentos = 0;
  gano = false;
  perdio = false;
  letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  title = 'ahorcado';
  constructor() {
    this.palabraOculta = '_ '.repeat(this.palabra.length);
  }

  ganoPerdio() {
    const palabraArr = this.palabraOculta.split(' ');
    const palabraEvaluar = palabraArr.join('');
    if (palabraEvaluar === this.palabra) {
      this.gano = true;
      console.log('GANASTE' + this.gano)
    }
    if (this.intentos >= 10) {
      this.perdio = true;
      console.log('PERDISTE'+ this.perdio)

    }
  }
  comprobar(letra) {
    this.exiteLetra(letra);
    let palabraOcultaArr = this.palabraOculta.split(' ');
    for (let i = 0; i < this.palabra.length; i++) {
      if (this.palabra[i] === letra) {
        palabraOcultaArr[i] = letra;
      }
    }
    this.palabraOculta = palabraOcultaArr.join(' ');
    this.ganoPerdio();
  }

  exiteLetra(letra) {
    if (this.palabra.indexOf(letra) >= 0) {
    } else {
      this.intentos++
    }
  }
}
