import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'journal-home',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent {
private body: journalEntry;
private title:string;
private date: string;
private journal:string;
private entries: journalEntry; 

constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  http.get<journalEntry[]>(baseUrl + 'journalEntry').subscribe(result => {
    console.log(result);
  }, error => console.error(error));
}

getValues(){
  this.journal = (<HTMLInputElement>document.getElementById('journal')).value;
  this.title = (<HTMLInputElement>document.getElementById('title')).value;
  this.date = (<HTMLInputElement>document.getElementById('date')).value;

//  console.log(this.journal + this.title + this.date);
  this.body = {title: this.title, journal: this.journal, date: this.date};
  this.http.post(this.baseUrl + 'journalEntry',this.body).subscribe(result => {
    console.log(result);
  }, error => console.error(error));
console.log(this.baseUrl + 'journalEntry',this.body);
}
}

interface journalEntry {
  title: string;
  journal: string;
  date: string;
  // id: number; 
}


