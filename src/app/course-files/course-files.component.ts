import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../services/course.service';
import {COURSE} from '../database/courses';
import { Location } from '@angular/common';
import {files, FILE} from '../database/files';
import {NOTE} from '../database/note';
import {LINK, links} from '../database/links';

@Component({
  selector: 'app-course-files',
  templateUrl: './course-files.component.html',
  styleUrls: ['./course-files.component.css']
})
export class CourseFilesComponent implements OnInit {

  courses: COURSE;
  files: FILE[];
  links: LINK[];
  notes: NOTE;


  constructor(private route: ActivatedRoute,
              private courseService: CourseService,
              private location: Location) { }

  ngOnInit(): void {
    this.getCourse();
    this.getFiles();
    this.getLinks()
  }

  getCourse(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.courseService.getCourse(name)
      .subscribe(courses => this.courses = courses);
  }

  getFiles(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.courseService.getCourseFiles(name).subscribe(files => this.files = files);
  }

  getLinks(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.courseService.getCourseLinks(name).subscribe(links => this.links = links);
  }

  goBack(): void {
    this.location.back();
  }

}
