# Pagination

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.15.

Pagination is used ngx-pagination package.It is very easy to use.

# Usage

1. Install Pagination

npm install ngx-pagination --save

2. Import Module in App Module

  import {NgxPaginationModule} from 'ngx-pagination';

  @NgModule({
      imports: [NgxPaginationModule], // <-- include it in your app module
      declarations: [MyComponent],
      bootstrap: [MyComponent]
  })

 3. In Template
     <ul>
        <li *ngFor="let item of collection | paginate: { itemsPerPage: 10, currentPage: p }"> ... </li>
      </ul>

    <pagination-controls (pageChange)="p = $event"></pagination-controls>
    
  4. In Component
    
    p: number = 1;
    collection: any[] = someArrayOfThings; 

# Happy Coding

