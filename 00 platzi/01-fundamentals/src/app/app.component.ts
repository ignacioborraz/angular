import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'commerce';
  name = 'igna';
  age = 33;
  photo = 'https://as1.ftcdn.net/v2/jpg/01/65/63/94/1000_F_165639425_kRh61s497pV7IOPAjwjme1btB8ICkV0L.jpg';
  person = {
    title: 'commerce',
    name: 'igna',
    age: 33,
    photo: 'https://as1.ftcdn.net/v2/jpg/01/65/63/94/1000_F_165639425_kRh61s497pV7IOPAjwjme1btB8ICkV0L.jpg'
  };
  form = {
    lastName: '',
    name: '',
    age: 18,
    photo: ''
  };
  languages: string[] = ['angular','react','vue'];
  newLanguage: string = '';
  btnDisable = true;
  show = true;
  user: User = {name:'',lastName:'',mail:'',photo:'',password:'',country:''};
  users: User[] = [{name: "Ignacio",lastName: "Borraz",mail: "igna@mh.com",photo: "https://www.cinemascomics.com/wp-content/uploads/2020/06/poder-darth-vader.jpg",password: "Hola1234",country: "Argentina"},{name: "Cinthia",lastName: "Di Risio",mail: "cin@mh.com",photo: "https://static.wikia.nocookie.net/fma/images/2/26/MouthyMei.JPG/revision/latest?cb=20111223205242&path-prefix=es",password: "Hola1234",country: "Argentina"},{name: "Franco",lastName: "Sosa",mail: "fran@mh.com",photo: "https://i.pinimg.com/originals/42/04/77/4204771e1c54c2b9afa36f668261e7bd.gif",password: "Hola1234",country: "Argentina"}];
  counter: number = 0;
  box = { width:'50',height:'50',color:'black' }
  handleClick() {
    this.btnDisable = !this.btnDisable
  };
  handleAge() {
    this.person.age += 10
  };
  handleScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  };
  handleText(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  };
  handleIf() {
    this.show = !this.show;
  };
  addLanguage() {
    this.languages.push(this.newLanguage)
    this.newLanguage = ''
  };
  deleteLanguage(i:number) {
    this.languages.splice(i,1)
  }
  addUser() {
    this.users.push(this.user)
    this.user = {name:'',lastName:'',mail:'',photo:'',password:'',country:''};
  };
  deleteUser(i:number) {
    this.users.splice(i,1)
  }
}
