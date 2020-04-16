import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskEntryComponent } from './task-entry/task-entry.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
import { SettingsComponent } from './settings/settings.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TaskTableComponent } from './task-table/task-table.component';
import { MatTableModule } from '@angular/material';

const appRoutes: Routes = [
  { path: 'create-task', component: TaskEntryComponent },
  { path: 'view-tasks', component: ViewTasksComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'xview-tasks', component: TaskTableComponent},
  { path: '**', component: SettingsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TaskEntryComponent,
    ViewTasksComponent,
    SettingsComponent,
    TaskTableComponent
  ],
  imports: [
    RouterModule.forRoot( appRoutes ),
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
