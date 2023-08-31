import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-info-matricula',
  templateUrl: './info-matricula.component.html',
  styleUrls: ['./info-matricula.component.css'],
})
export class InfoMatriculaComponent {
  name: string = '';
  age: number = 0;

  constructor(private http: HttpClient) {}

  submitForm() {
    const payload = {
      name: this.name,
      age: this.age
    };

    this.http.post('http://localhost:8080/submit-transaction', payload)
      .subscribe(
        (response: any) => {
          console.log('Transaction submitted:', response);
        },
        (error: any) => {
          console.error('Error submitting transaction:', error);
        }
      );
  }
}
