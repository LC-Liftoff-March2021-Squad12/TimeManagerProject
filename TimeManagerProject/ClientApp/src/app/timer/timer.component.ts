import { Component, ViewChild} from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent{
  @ViewChild('cd', {static: false}) private countdown: CountdownComponent;
  
 }


