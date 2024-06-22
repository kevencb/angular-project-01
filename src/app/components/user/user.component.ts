import { Component, Input, Output, EventEmitter, output} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})

export class UserComponent {
  @Input({required: true}) id!:string;
  @Input({required:true}) avatar!:string;
  @Input({required:true}) name!:string;

  @Output() selected = new EventEmitter()
  selectedWithOutput = output<string>(); //*** New way output ***

  get imagePath(){
    return 'assets/users/' + this.avatar;
  }

  onSelectUser(){
    this.selected.emit(this.id)
    this.selectedWithOutput.emit(this.id) //*** New way output ***
  }

}