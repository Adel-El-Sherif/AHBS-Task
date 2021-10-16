import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbPaginationConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  providers: [NgbPaginationConfig] // add NgbPaginationConfig to the component providers
})
export class PaginatorComponent implements OnInit {

  @Input() page = 4;
  @Input() collectionSize = 70;
  @Input() page_size = 0;
  @Input() paginator: any;
  pageSizes: number[] = [];
  @Input() isLoading = false;
  @Output() paginate: EventEmitter<any> = new EventEmitter();

  constructor(config: NgbPaginationConfig) { 
    // customize default values of pagination's used by this component tree
    config.size = 'sm';
    config.boundaryLinks = true;
  }

  ngOnInit(): void {
  }

  pageChange(num: number) {
    this.paginator.current_page = num;
    this.paginate.emit(this.paginator);
  }

  sizeChange(page_size: any) {
    this.paginator.current_page = 1;
    this.paginate.emit(this.paginator);
    this.paginator.per_page = page_size;
  }


}
