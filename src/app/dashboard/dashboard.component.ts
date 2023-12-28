import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { DatePipe, NgFor } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialog } from '@angular/material/dialog';
import { ManageProjectsComponent } from '../manage-projects/manage-projects.component';
import { ManageProjectService } from '../manage-project.service';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatCardModule, MatListModule, DatePipe, NgFor, MatGridListModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  projects: any[] = [];

  tasks: any[] = [
    { title: 'Task 1', status: 'In Progress' },
    { title: 'Task 2', status: 'Completed' },
    // Add more task data as needed
  ];

  notifications: any[] = [
    { message: 'New task assigned', timestamp: new Date() },
    { message: 'Project deadline approaching', timestamp: new Date() },
    // Add more notification data as needed
  ];

  constructor(private dialog: MatDialog, private projectService: ManageProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }
  
    openDetailsDialog(project: any): void {
      const dialogRef = this.dialog.open(ManageProjectsComponent, {
        width: '100vh',
        height: '90vh',
        data: project,
      });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
