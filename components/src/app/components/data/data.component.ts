import { Component,Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnChanges {
  @Input() lastName = ''
  @Input() name = ''
  age = 0
  @Input('age')
  set changeAge(newAge:number) {
    this.age = newAge;
    console.log('solo cambio de edad: '+newAge);
  }
  @Input() photo = ''
  defaultPhoto = 'https://cdn-icons-png.flaticon.com/512/1077/1077114.png'
  isValidPhoto() {
    this.photo = this.defaultPhoto
    this.sendDefaultPhoto.emit(this.photo)
  }
  @Output() sendDefaultPhoto = new EventEmitter<string>()
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    //va tras todos los cambios
    console.log('ngOnChanges: '+this.name);
  }
}
