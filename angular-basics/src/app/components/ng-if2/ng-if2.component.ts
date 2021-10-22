import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if2',
  templateUrl: './ng-if2.component.html',
  styleUrls: ['./ng-if2.component.css']
})
export class NgIf2Component implements OnInit {
  data: any;

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{
      this.data = "cargada";
    }, 3000);
  }

}
