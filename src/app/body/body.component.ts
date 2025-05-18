import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  public welcome = "Welcome Nithin Arya!";
  public imgUrl = "https://picsum.photos/200/300/?blur=2";
  public defaultValue = "Nithin Arya";
  public stValue = "ngModel";

  eventListener(e:Event){
    const input = e.target as HTMLInputElement;
    this.defaultValue = input.value;
    console.log(input.value);
  }

}
