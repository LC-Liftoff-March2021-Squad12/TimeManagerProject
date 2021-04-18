import { Component,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'journal-home',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})

export class JournalComponent {
  public details: JournalEntry[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl:string){
    http.get<JournalEntry[]>(baseUrl + 'JournalEntry').subscribe(result =>{
      this.details = result;
    }, error => console.error(error)
    )
  }
}

 interface JournalEntry {
    title: string;
    date: string;
    journalEntry: string;
 }








