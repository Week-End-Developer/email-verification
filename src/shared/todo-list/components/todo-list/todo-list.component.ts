import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from '../../models/periodic-element.model';
import Swal, { SweetAlertResult } from 'sweetalert2';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

    //
    public ELEMENT_DATA?: PeriodicElement[];
    public displayedColumns?: string[]

    public ELEMENT_DATA_Copy?: PeriodicElement[];

    //
    public dataSource = new MatTableDataSource<PeriodicElement>();

    //
    constructor() { }

    //
    public async ngOnInit() {
        this.ELEMENT_DATA = [
            { id: 11, item: 'Hydrogen', date: new Date() },
            { id: 22, item: 'Helium', date: new Date() },
            { id: 33, item: 'Lithium', date: new Date() },
            { id: 44, item: 'Beryllium', date: new Date() },
            { id: 55, item: 'Boron', date: new Date() },
            { id: 66, item: 'Carbon', date: new Date() },
            { id: 77, item: 'Nitrogen', date: new Date() },
            { id: 88, item: 'Oxygen', date: new Date() },
            { id: 99, item: 'Fluorine', date: new Date() },
        ];

        this.ELEMENT_DATA_Copy = JSON.parse(JSON.stringify(this.ELEMENT_DATA));
        this.displayedColumns = ['item', 'date', 'operation'];
    }

    public async onFillTheTableClick() {
        this.ELEMENT_DATA = JSON.parse(JSON.stringify(this.ELEMENT_DATA_Copy));
        this.dataSource.data = this.ELEMENT_DATA!;
    }

    public onRemoveClick(element: PeriodicElement) {
        Swal.fire({
            title: 'Are you sure you want to delete ?',
            text: `${element.item}`,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: 'No',
            customClass: {
                actions: 'my-actions',
                cancelButton: 'order-1 right-gap',
                confirmButton: 'order-2',
                denyButton: 'order-3',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const idx = this.ELEMENT_DATA?.findIndex(x => x.id == element.id);
                if (idx != null && idx > -1) {
                    this.ELEMENT_DATA?.splice(idx!, 1);
                    this.dataSource.data = this.ELEMENT_DATA!;
                }
                Swal.fire(element.item + ' ' + 'deleted!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('It has been canceled.', '', 'info')
            }
        })

    }
}


