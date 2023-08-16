import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy {
  @Input() user : User = {
    lastName: '',
    name: '',
    age: 0,
    photo: '',
  }
  @Output() toFavs = new EventEmitter<User>()
  counter = 0;
  clearNumber: number | undefined;
  constructor() { console.log('constructor: antes de montarse, por unica vez, no asincrono') }
  ngOnChanges() { console.log('ngOnChanges: antes de montarse, con cada cambio') }
  ngOnInit() {
    console.log('ngOnInit: antes de mmontarse, maneja hijos, asincrono')
    this.clearNumber = window.setInterval(()=>{
      this.counter+=1
      //console.log(this.counter);
    },1000)
  }
  ngAfterViewInit() { console.log('ngAfterViewInit: despues de montarse, maneja hijos') }
  ngOnDestroy() {
    console.log('ngOnDestroy: al desmontarse')
    window.clearInterval(this.clearNumber)
  }
  addToFavs() {
    this.toFavs.emit(this.user)
  }
}
