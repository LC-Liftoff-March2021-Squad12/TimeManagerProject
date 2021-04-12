import { Component } from '@angular/core';


@Component({
  selector: 'journal-home',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})

 
 

export class JournalComponent {

  getValues(){
    document.getElementById('entry1').innerHTML = 
     document.getElementById('title').nodeValue;
  }
}
