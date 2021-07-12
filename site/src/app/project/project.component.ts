import { Component, ContentChild, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() title = '';
  @Input() description = '';
  @Input() show = false;
  @Input() link = '';
  constructor() { }

  ngOnInit(): void { }

  public toggleCodeVisibility(): void {
    this.show = !this.show;
  }
}
