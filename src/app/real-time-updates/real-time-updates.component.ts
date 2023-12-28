import { Component } from '@angular/core';
import { DatePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-real-time-updates',
  standalone: true,
  imports: [DatePipe, NgFor],
  templateUrl: './real-time-updates.component.html',
  styleUrl: './real-time-updates.component.css'
})
export class RealTimeUpdatesComponent {
  updates: any[] = [];
}
