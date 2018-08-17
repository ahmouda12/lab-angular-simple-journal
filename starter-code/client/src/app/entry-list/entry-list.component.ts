import { Component, OnInit } from '@angular/core';
import { EntryListService} from '../entry-list.service'

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [EntryListService]
})
export class EntryListComponent implements OnInit {

  entryLists: any;

  constructor( private entryList: EntryListService) { }

  ngOnInit() {
    // console.log(this.entryList);
    this.entryList.getList()
      .subscribe((entryLists) => {
        this.entryLists = entryLists;
      })
  }

}
