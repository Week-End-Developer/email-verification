import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListRoutingModule } from './todo-list.routing.module';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        TodoListComponent
    ],
    imports: [
        CommonModule,
        TodoListRoutingModule,
        MatTableModule,
        MatIconModule,
        MatButtonModule,
        HttpClientModule
    ],
    exports: [],
    providers: [],
})
export class TodoListModule { }