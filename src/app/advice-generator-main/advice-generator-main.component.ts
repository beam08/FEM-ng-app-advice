import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-advice-generator-main',
  templateUrl: './advice-generator-main.component.html',
  styleUrls: ['./advice-generator-main.component.css'],
})
export class AdviceGeneratorMainComponent implements OnInit {
  isClicked = false;

  private data: any = [];
  id: number = 0;
  advice: string = '';
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.getAdvice();
  }


  onButtonClick() {
     // Reset the animation class after 700ms (0.7 seconds)
  }

  getAdvice() {
    this.isClicked = true;
    setTimeout(() => {
      this.isClicked = false;
    }, 700);
    const APIurl = 'https://api.adviceslip.com/advice';
    this.http.get(APIurl).subscribe((res) => {
      this.data = res;
      this.id = this.data.slip.id;
      this.advice = this.data.slip.advice;
    });
  }
}
