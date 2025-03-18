import { Component, inject, OnInit } from '@angular/core';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonContent,
  IonInput,
} from '@ionic/angular/standalone';
import { TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
  imports: [
    IonInput,
    IonContent,
    IonCardTitle,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    FormsModule,
  ],
})
export class AddTodoComponent {
  todoTitle = '';
  todoSubTitle = '';
  todoDescription = '';

  public todoService = inject(TodoService);

  addTodo(todoTitle: string, todoSubTitle: string, todoDescription: string) {
    this.todoService.addTodo(todoTitle, todoSubTitle, todoDescription);

    this.todoTitle = '';
    this.todoSubTitle = '';
    this.todoDescription = '';
  }
}
