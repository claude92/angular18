import { HousingLocation } from "./../housinglocation";
import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-housing-location",
  standalone: true,
  imports: [CommonModule],
  template: ` <p>housing-location works!</p> `,
  styleUrls: ["./housing-location.component.css"],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation; //The exclamation point is called the non-null assertion operator and it tells the TypeScript compiler that the value of this property won't be null or undefined
}
