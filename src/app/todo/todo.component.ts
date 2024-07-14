import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  idx: number,
  title: string,
  isComplete: boolean,
};

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myTasks: Task[] = [
    {
      idx: 0,
      title: 'Learn Angular Basics',
      isComplete: true
    },
    {
      idx: 1,
      title: 'Make todos',
      isComplete: true
    },
    {
      idx: 2,
      title:'Make respective backend',
      isComplete: false
    },
    {
      idx: 3,
      title: 'Integrate mongoDB :)',
      isComplete: false,
    }
  ];

  todo_str: string | null = null;

  addTask = () => {
    if (this.todo_str) {
      this.myTasks.push({
        idx: this.myTasks.length == 0? 
          0 : 
          this.myTasks[this.myTasks.length -1].idx +1,
        title: this.todo_str,
        isComplete: false
      });
      console.log(this.myTasks);
    }
  };

  completeTask = (idx: number) => {
    this.myTasks = this.myTasks.map((task) => {
      if (task.idx == idx) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });
  };

  removeTask = (idx: number) => {
    this.myTasks = this.myTasks.filter((task) => task.idx != idx);
  }
}
