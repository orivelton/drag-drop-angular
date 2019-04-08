import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos = [
    {
      name: 'Angular',
      category: 'Web Development'
    },
    {
      name: 'Flexbox',
      category: 'Web Development'
    },
    {
      name: 'iOS',
      category: 'App Development'
    },
    {
      name: 'Java',
      category: 'Software development'
    }
  ];

  completed = [];


  onDrop(event: CdkDragDrop<string[]>) {
    event.previousContainer === event.container ?
    moveItemInArray(
      event.container.data,
      event.previousIndex,
      event.currentIndex
    )
    :
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }
}
