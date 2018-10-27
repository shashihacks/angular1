import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PrimeService {
  primeNumbers=[];
  constructor(private http:Http) {
  }
  // postPrimes(url,post) {
  //   this.http.post(url, post)
  //   .subscribe(response=>{
  //     console.log(response._body)
  //       this.primeNumbers = JSON.parse(response._body);
       
  //     })
  //     return this.primeNumbers;
  // }
}
