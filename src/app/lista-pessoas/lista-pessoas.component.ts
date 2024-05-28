import { DecimalPipe } from '@angular/common';
import { Component, Directive, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { Pessoa } from './pessoa';
import { PESSOAS } from './pessoas';



@Component({
	selector: 'lista-pessoas',
	standalone: true,
	imports: [ FormsModule, NgbTypeaheadModule, NgbPaginationModule],
	templateUrl: './lista-pessoas.component.html',
	styleUrl: './lista-pessoas.component.css'
})
export class ListaPessoasComponent {

	page = 1;
	pageSize = 4;
	collectionSize = PESSOAS.length;
	pessoas = PESSOAS;

	constructor() {
		this.refreshPessoas();
	}

	refreshPessoas() {
		this.pessoas = PESSOAS.map((pessoa, i) => ({ id: i + 1, ...pessoa })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}

}

