import { Component } from '@angular/core';



@Component({
  selector: 'journal-home',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent {

title: string;
date: string;
journal:string;
entry: string
 
getValues(){
  this.journal = document.getElementById('journal');
  this.date = document.getElementById('date');
  this.title = document.getElementById('title');
  }


}


