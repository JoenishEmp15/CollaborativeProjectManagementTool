import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageProjectService {

  constructor() { }

  getProjects(): Observable<any[]> {
    // Mock data for demonstration purposes
    const projects: any[] = [
      { id: 1, title: 'Project A', description: 'Description of Project A', status: 'In Progress', assignee: 'User A', assignedTo: 'Team A', deadline: new Date('2024-01-31') },
      { id: 2, title: 'Project B', description: 'Description of Project B', status: 'Completed', assignee: 'User B', assignedTo: 'Team B', deadline: new Date('2024-02-15') },
      { id: 3, title: 'Project A', description: 'Description of Project A', status: 'In Progress', assignee: 'User A', assignedTo: 'Team A', deadline: new Date('2024-01-31') },
      { id: 4, title: 'Project B', description: 'Description of Project B', status: 'Completed', assignee: 'User B', assignedTo: 'Team B', deadline: new Date('2024-02-15') },
    // Add more project data as needed
    ];
    return of(projects);
  }
}
