import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  loading = false;
  submitted = false;


  constructor(
    private formBuilder: FormBuilder,

) {
    // redirect to home if already logged in
  
}
   

   ngOnInit() {
 
}

}
