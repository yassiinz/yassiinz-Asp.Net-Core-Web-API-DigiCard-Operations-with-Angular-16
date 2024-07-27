import { Component } from '@angular/core';

@Component({
  selector: 'app-delivrance',
  templateUrl: './delivrance.component.html',
  styleUrls: ['./delivrance.component.css']
})
export class DelivranceComponent {
  showForm1 = false;
  showForm2 = false;

  toggleForm(form: string, event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (form === 'form1') {
      this.showForm1 = isChecked;
      if (isChecked) this.showForm2 = false;
    } else if (form === 'form2') {
      this.showForm2 = isChecked;
      if (isChecked) this.showForm1 = false;
    }
  }
}
