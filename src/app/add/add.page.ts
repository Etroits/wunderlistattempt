import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  taskName: any = '';
  taskList = [];

  constructor() { }

  ngOnInit() {
  }
addTask(){
  if(this.taskName.lenght > 0){
    let task = this.taskName;
    this.taskList.push(task);
    this.taskName= '';
  }
}
}
