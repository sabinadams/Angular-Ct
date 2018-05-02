import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/dataService'

@Component({
  selector: 'advancedsearch',
  template: `
    <bulllisting 
      *ngIf="cols.length"
      [data]="data"
      [cols]="cols"></bulllisting>
  `,
  styleUrls: ['./advancedsearch.scss']
})

export class AdvancedSearchPage {
  constructor( private dataService: DataService ) {}
  cols: any = [];
  data: any = [];
  ngOnInit() {
    this.dataService.search().subscribe( res => {
      this.data = res['results']
      this.cols = Object.keys(res['results'][0]).map(key => {
          return {prop: key, label: key, width: '150'}
      })
    })  
  }
}
