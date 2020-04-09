import { Component, OnInit } from '@angular/core';
import {COURSE} from '../database/courses';
import {CourseService} from '../services/course.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  courses: COURSE[];
  private x: HTMLElement;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(): void {
    this.courseService.getCourses()
      .subscribe(courses => this.courses = courses);
  }

  showFieldset(id: string) {
    console.log('hey');
    let x;
    x = document.getElementById(id);
    if (x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
      x.style.margin =  'auto auto 40px';
    }
  }
}
