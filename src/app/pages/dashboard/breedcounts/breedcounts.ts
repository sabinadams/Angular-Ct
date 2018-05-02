import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../shared/services/dataService'

@Component({
    selector: 'breedcounts',
    template: `
        <div class="countContainer">
            <div *ngFor="let group of counts" class="group">
                <div class="groupHead">
                    {{group.groupName}} | {{group.count}}
                </div>
                <div class="subCat" *ngFor="let breed of group.breeds">
                    {{breed.breedName}} | {{breed.count}}
                </div>
            </div>
        </div>
    `,
    styleUrls: ['./breedcounts.scss']
})

export class BreedCountsComponent implements OnInit {
    constructor( private dataService: DataService ){}
    counts = [];
    ngOnInit() {
        this.dataService.getCounts().subscribe( res => {
            this.counts = [
                { groupName: 'active', count: res.active, breeds: res.breeds.active},
                { groupName: 'proven', count: res.proven, breeds: res.breeds.proven},
                { groupName: 'gforce', count: res.gforce, breeds: res.breeds.gforce}
            ]
        })
    }

}
    