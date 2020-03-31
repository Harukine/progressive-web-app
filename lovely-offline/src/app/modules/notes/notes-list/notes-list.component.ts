import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DataService} from '../../core/data.service';

interface Note {
  id: string;
  title: string;
  content: string;
}

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})

export class NotesListComponent implements OnInit {
  notes$: Observable<Note[]>;
  isDbLoading$;

  constructor(private db: DataService) {
  }

  ngOnInit() {
    this.notes$ = this.db.getNotes();
    this.isDbLoading$ = this.db.isLoading$;
  }

}
