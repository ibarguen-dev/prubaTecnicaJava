import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { PeopleLowInfo } from '../../../shared/model/peopleLowInfo';
import { QuerysService } from '../../../shared/Services/querys.service';
import { SearchModalComponent } from '../../../shared/components/search-modal/search-modal.component';
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FilterPeoplePipe } from '../../../shared/pipe/FilterPeople/filter-people.pipe';
import { NotificationService } from '../../../shared/Services/notification.service';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NzTableModule,
    SearchModalComponent,
    NgbTypeaheadModule,
    NgbPaginationModule,
    FilterPeoplePipe,
  ],
  providers: [QuerysService, FilterPeoplePipe, NotificationService],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  sortField: string = '';
  ListPeoples: any[] = [];
  page = 1;
  collectionSize: any;
  searchText: string = '';

  constructor(
    private querysService: QuerysService,
    private notificationService: NotificationService
  ) {}
  ngOnInit(): void {
    this.getAllPeople();
  }

  getAllPeople() {
    this.querysService.getAllPeople().subscribe({
      next: (response) => {
        this.saveList(response);
      },
      error: (err) => {
        this.notificationService.createNotification(
          'Error',
          'Hubo un error en el servidor'
        );
      },
    });
  }

  saveList(list: any[]) {
    this.ListPeoples = [...list];
  }

  applyFilters(ev: any) {
    this.filterPeople(ev.numerDocument, ev.TypeDocument);
  }

  filterPeople(numberD: number, TypeD: string) {
    this.querysService.findPeopleByDocumentFilter(numberD, TypeD).subscribe({
      next: (response) => {
        if ([...response].length === 0) {
          this.notificationService.createNotification(
            'Error Documuento',
            'dato no existe.'
          );
          return;
        }

        this.saveList(response);
      },
      error: (err) => {
        this.notificationService.createNotification(
          'Error',
          'Hubo un error en el servidor'
        );
      },
    });
  }

  sort(field: string) {
    console.log(field);
    this.sortField = field;
    console.log(
      this.ListPeoples.sort((a, b) => (a[field] > b[field] ? 1 : -1))
    );
  }
}
