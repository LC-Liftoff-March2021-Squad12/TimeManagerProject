import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'journal-home',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent {
  public details: journalEntry[];
private entry: journalEntry;
private title:string;
private date: string;
private body:string;
private entries: journalEntry; 

constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  ///http.get<journalEntry[]>(baseUrl + 'journalEntry').subscribe(result => {
   // this.details = result;
 // }, error => console.error(error));
}

getValues(){
  this.body = (<HTMLInputElement>document.getElementById('body')).value;
  this.title = (<HTMLInputElement>document.getElementById('title')).value;
  this.date = (<HTMLInputElement>document.getElementById('date')).value;

//  console.log(this.journal + this.title + this.date);
  this.entry = { title: this.title, body: this.body, date: this.date };

  this.http.post<any>(this.baseUrl + 'journalEntry',this.entry).subscribe(result => {
    this.entry = result;
  }, error => console.error(error));
}
}

interface journalEntry {
  title: string;
  body: string;
  date: string;
  // id: number; 
}


