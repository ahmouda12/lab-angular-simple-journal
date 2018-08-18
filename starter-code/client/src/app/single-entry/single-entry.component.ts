import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntryListService } from '../entry-list.service';

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css'],
  providers: [EntryListService]
})
export class SingleEntryComponent implements OnInit {

  singleEntry: any= {};

  constructor( 
    private route: ActivatedRoute,
    private entryList: EntryListService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getSingleEntry(params['id']);
    })
  }

  getSingleEntry(id) {
    this.entryList.get(id)
      .subscribe((singleEntry) => {
        this.singleEntry = singleEntry;
      });
  }

}
