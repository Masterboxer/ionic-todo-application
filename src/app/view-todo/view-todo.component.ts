import { Component, inject, OnInit } from '@angular/core';
import {
  IonCard,
  IonCardTitle,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonBadge,
  IonIcon,
} from '@ionic/angular/standalone';
import { TodoService } from '../todo.service';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { trashOutline } from 'ionicons/icons';

@Component({
  selector: 'app-view-todo',
  templateUrl: './view-todo.component.html',
  styleUrls: ['./view-todo.component.scss'],
  imports: [
    IonIcon,
    IonCardTitle,
    IonCard,
    IonIcon,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent,
    IonBadge,
    CommonModule,
  ],
})
export class ViewTodoComponent {
  constructor() {
    addIcons({ trashOutline });
  }
  public todoService = inject(TodoService);
}
