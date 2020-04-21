import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../models/student';


export const Students: Student[] =
  [
    {
      name: 'Rob Steele',
      age: 25,
      sex: 'Male',
      course: 'Master of Computer Applications'
    },
    {
      name: 'Bonnibel Bubblegum',
      age: 19,
      sex: 'Female',
      course: 'Bio-chemistry'
    },
    {
      name: 'John DeYoung',
      age: 35,
      sex: 'Male',
      course: 'PMP'
    },
    {
      name: 'Gary Coolman',
      age: 32,
      sex: 'Male',
      course: 'PMP'
    },
    {
      name: 'Diane Kurant',
      age: 35,
      sex: 'Female',
      course: 'Spring Boot'
    }
  ];


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }

  getStudents(): Observable<Student[]> {
    return of(Students);
  }

  getColumns(): string[] {
    return ['name', 'age', 'sex', 'course']
  }

  getStudentListByParams(page: number, rows: number): Observable<Student[]> {

    return of(Students.slice(page, page + rows));
  }
}
