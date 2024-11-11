import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgbDropdown, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
@Component({
  selector: 'app-search-modal',
  standalone: true,
  imports: [NgbDropdownModule, NgbDropdown, ReactiveFormsModule, FormsModule],
  templateUrl: './search-modal.component.html',
  styleUrl: './search-modal.component.css',
})
export class SearchModalComponent implements OnInit {
  @Output() search = new EventEmitter<any>();
  @Output() resert = new EventEmitter<any>();
  @ViewChild('myDrop', { static: false }) myDrop!: NgbDropdown;
  filterForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.inicializeForm();
  }

  inicializeForm(): FormGroup {
    return (this.filterForm = this.fb.group({
      numerDocument: [''],
      TypeDocument: [''],
    }));
  }

  applyFilters(): void {
    this.search.emit(this.filterForm.value);
    this.myDrop.close();
  }

  close(): void {
    this.myDrop.close();
  }

  reset(): void {
    this.filterForm.reset();
    this.resert.emit();
  }
}
