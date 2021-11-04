import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  readonly dados= [
    ['Janeiro', 10],
    ['Fevereiro',20],
    ['Março', 30],
    ['Abril',40],
    ['Maio', 50],
    ['Junho', 60]
  ]

  constructor() { }

  obterDados(): Observable<any>{
    return new Observable(observable => {
      observable.next(this.dados)
      observable.complete()
    })
  }
}
