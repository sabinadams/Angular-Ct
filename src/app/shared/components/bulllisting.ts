import { Component, Input } from '@angular/core';

@Component({
  selector: 'bulllisting',
  template: `
    <el-table [model]="data" style="width: 100%;" height="700">
      <el-table-column 
        *ngFor="let col of cols"
        model-key="{{col.prop}}" 
        label="{{col.label}}" 
        width="{{col.width}}">
      </el-table-column>
    </el-table>
  `
})

export class BullListingComponent {
  @Input() data: any;
  @Input() cols: any; 
}
