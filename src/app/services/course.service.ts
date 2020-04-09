import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {COURSE, courses} from '../database/courses';
import {files} from '../database/files';
import {links} from '../database/links';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses(): Observable<COURSE[]> {
    return of(courses);
  }

  getCourse(name: string) {
    return of(courses.find(hero => hero.short_name === name));
  }

  getCourseFiles(name: string) {
    return of(files.filter(file => file.course_name === name));
  }
  getCourseLinks(name: string) {
    return of(links.filter(link => link.course === name));
  }

}
