import { Component, OnInit } from '@angular/core';
import { FormGroup, FormsModule} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AppComponent } from 'src/app/app.component';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  data={
    to:"",
    subject:"",
    message:""
  }
  constructor(private email:BackendService, private snak:MatSnackBar) { }

  ngOnInit(): void {
  }

 
  dosubmit(){

    
    console.log("Submited");
    console.log("data",this.data);
    if(this.data.to=='' || this.data.subject=='')
    {
      this.snak.open("Field can't be Empty !!","OK");
      return;
    }
    this.email.sendEmail(this.data).subscribe((response)=>{
      console.log(response);
    },
    error=>{
      console.log(error);
    });
    
  }
}
