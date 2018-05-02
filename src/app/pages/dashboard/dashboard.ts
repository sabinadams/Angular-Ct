import { Component } from '@angular/core';

@Component({
  selector: 'dashboard',
  template: `
    <div class="dashboard">
      <h2>World Wide Sires</h2>
      <h2><i>"Customer Tools"</i></h2>
      <h3>Industry leading tools for industry leading customers</h3>
      <div class="nav-buttons">
        <button class="nav-button">Check out our Sire Directory</button>
        <button class="nav-button">Go to World Wide Sires, Ltd.</button>
      </div>
      <div style="width:100%;">
      <breedcounts></breedcounts>
      </div>
    </div>
  `,
  styleUrls: ['./dashboard.scss']
})

export class DashboardPage {
     
}
