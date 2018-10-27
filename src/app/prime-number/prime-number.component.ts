import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PrimeService } from '../prime.service';

@Component({
  selector: 'app-prime-number',
  templateUrl: './prime-number.component.html',
  styleUrls: ['./prime-number.component.css']
})
export class PrimeNumberComponent implements OnInit {
  primes: Array<Number> = [];
  private url: string = "http://localhost:9998/mydata"
  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSubmit(formdata) {
    console.log(formdata.value.first_number, formdata.value.second_number)
    let post = { "first_number": formdata.value.first_number, "second_number": formdata.value.second_number }
    this.http.post(this.url, post)
      .subscribe(response => {
        console.log(response._body)
        this.primes = JSON.parse(response._body);
        console.log(typeof (this.primes))
      })
    formdata.reset();
  }

}
