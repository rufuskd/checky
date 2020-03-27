import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskEntryComponent } from './task-entry/task-entry.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'create-task', component: TaskEntryComponent },
  { path: 'view-tasks', component: TaskEntryComponent },
  { path: '**', component: TaskEntryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TaskEntryComponent
  ],
  imports: [
    RouterModule.forRoot( appRoutes ),
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
