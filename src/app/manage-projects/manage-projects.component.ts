import { Component, Inject, OnInit  } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { DatePipe, NgFor } from '@angular/common';
import { ManageProjectService } from '../manage-project.service';

@Component({
  selector: 'app-manage-projects',
  standalone: true,
  imports: [MatDialogModule, MatGridListModule, MatCardModule, DatePipe, NgFor],
  templateUrl: './manage-projects.component.html',
  styleUrl: './manage-projects.component.css'
})
export class ManageProjectsComponent implements OnInit {

  projects: any[] = [];
  itemProperties: any[] = [
    { label: 'ID', key: 'id' },
    { label: 'Title', key: 'title' },
    { label: 'Description', key: 'description' },
    { label: 'Status', key: 'status' },
    { label: 'Assignee', key: 'assignee' },
    { label: 'Assigned To', key: 'assignedTo' },
    { label: 'Deadline', key: 'deadline' },
  ];

  constructor(
    private projectService: ManageProjectService,
    public dialogRef: MatDialogRef<ManageProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((projects) => {
      this.projects = projects;
    });
  }
  onClose(): void {
    this.dialogRef.close();
  }
}
