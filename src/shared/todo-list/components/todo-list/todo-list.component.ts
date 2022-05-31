import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from '../../models/periodic-element.model';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

    //
    public ELEMENT_DATA?: PeriodicElement[];
    public displayedColumns?: string[]

    //
    public dataSource = new MatTableDataSource<PeriodicElement>();

    //
    constructor() { }

    //
    public async ngOnInit() {
        this.ELEMENT_DATA = [
            { item: 'Hydrogen', date: new Date() },
            { item: 'Helium', date: new Date() },
            { item: 'Lithium', date: new Date() },
            { item: 'Beryllium', date: new Date() },
            { item: 'Boron', date: new Date() },
            { item: 'Carbon', date: new Date() },
            { item: 'Nitrogen', date: new Date() },
            { item: 'Oxygen', date: new Date() },
            { item: 'Fluorine', date: new Date() },

        ];

        this.displayedColumns = ['item', 'date', 'operation'];
    }

    public async onFillTheTableClick() {
        this.dataSource.data = this.ELEMENT_DATA!;
    }
}


