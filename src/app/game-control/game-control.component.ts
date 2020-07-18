import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  i:number=0;
  even:boolean;
  odd:boolean;
  interval;
  @Output() intervalFired = new EventEmitter<number>();
  lastNumber = 0 ;

  constructor() {
    setInterval(() => {

    })
   }

  ngOnInit(): void {
  }

  onStartGame()
  {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    },1000)
  }

  onPauseGame()
  {
    clearInterval(this.interval);
  }

}
