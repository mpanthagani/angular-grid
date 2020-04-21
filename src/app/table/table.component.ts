import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../services/students.service';
import { Observable } from 'rxjs';
import { Student } from '../models/student';
import { Page } from '../models/page';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  students: Student[];
  columns: string[];
  itemsPerPage = 5;
  postsPerPage: number[] = [5, 10, 15];
  page: Page;
  isLoading = true;
  maxPages: number;

  constructor(private studentService: StudentsService) { }

  ngOnInit() {
    this.columns = this.studentService.getColumns();
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
      this.maxPages = data.length / this.itemsPerPage;
      this.page = new Page();
      this.page.page = 1;
      this.page.itemsPerPage = this.itemsPerPage;
    });
  }

  pageChanged(event) {
    console.log(event);
    this.page = event.page;
    this.itemsPerPage = event.itemsPerPage;
    this.loadStudentsByPage(this.page.page, this.itemsPerPage);
  }

  loadStudentsByPage(page: number, rows: number) {

    this.isLoading = true;
    this.studentService.getStudentListByParams(page, rows).subscribe(data => {
      this.students = data;
      this.isLoading = false;
    }, error => {
      this.isLoading = false;
      console.log(error);
    });
  }

}
