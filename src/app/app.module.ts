import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavComponent } from './nav-component/nav.component';
import { ContentComponent } from './content-component/content.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsAppService } from './services/news-app.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule, MatToolbarModule, MatListModule, MatCardModule } from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContentComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule
  ],
  providers: [NewsAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
