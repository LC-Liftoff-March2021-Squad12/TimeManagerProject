import { Component } from '@angular/core';


@Component({
  selector: 'journal-home',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})

 
 

export class JournalComponent {
title = '';
date = '';
journal = '';
entries=[];

  getValues(){
    this.title = document.getElementById('title').value + ' ';
    this.date = document.getElementById('date').value;
    this.journal = document.getElementById('journal').value;
  }


}
