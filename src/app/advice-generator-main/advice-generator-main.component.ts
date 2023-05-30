import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-advice-generator-main',
  templateUrl: './advice-generator-main.component.html',
  styleUrls: ['./advice-generator-main.component.css'],
})
export class AdviceGeneratorMainComponent implements OnInit {
  private data: any = [];
  id: number = 0;
  advice: string = '';
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getAdvice();
  }
  getAdvice() {
    const APIurl = 'https://api.adviceslip.com/advice';
    this.http.get(APIurl).subscribe((res) => {
      this.data = res;
      this.id = this.data.slip.id;
      this.advice = this.data.slip.advice;
    });
  }
}
