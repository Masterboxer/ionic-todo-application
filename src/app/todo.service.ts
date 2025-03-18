import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ITodo } from './todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todoItemsSubject = new BehaviorSubject<ITodo[]>([]);
  todoItems$ = this.todoItemsSubject.asObservable();

  addTodo(todoTitle: string, todoSubTitle: string, todoDescription: string) {
    this.todoItemsSubject.next([
      ...this.todoItemsSubject.value,
      {
        id: this.todoItemsSubject.value.length + 1,
        todoTitle: todoTitle,
        todoSubTitle: todoSubTitle,
        todoDescription: todoDescription,
        createdDate: new Date(),
      },
    ]);
  }

  deleteTodo(id: number) {
    const updatedTodos = this.todoItemsSubject.value.filter(
      (todo) => todo.id !== id
    );
    this.todoItemsSubject.next(updatedTodos);
  }
}
