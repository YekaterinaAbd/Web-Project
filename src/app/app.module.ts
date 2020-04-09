import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainWaveComponent } from './main-wave/main-wave.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CourseFilesComponent } from './course-files/course-files.component';
import { FilePDFComponent } from './file-pdf/file-pdf.component';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { AccountComponent } from './account/account.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MainWaveComponent,
    MainFooterComponent,
    MainHeaderComponent,
    CoursesListComponent,
    CourseFilesComponent,
    FilePDFComponent,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxExtendedPdfViewerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
