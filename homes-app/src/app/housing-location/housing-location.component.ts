import { HousingLocation } from "./../housinglocation";
import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
@Component({
  selector: "app-housing-location",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation.photo"
        alt="Exterior photo of {{ housingLocation.name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>
    </section>
  `,
  styleUrls: ["./housing-location.component.css"],
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation; //The exclamation point is called the non-null assertion operator and it tells the TypeScript compiler that the value of this property won't be null or undefined
}
