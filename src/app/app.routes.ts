import { Routes } from '@angular/router';
import { ListaPessoasComponent } from './lista-pessoas/lista-pessoas.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: 'table-grid', component: ListaPessoasComponent }
];

/*
@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ]
})
*/