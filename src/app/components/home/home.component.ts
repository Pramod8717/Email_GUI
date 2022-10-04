import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private snak:MatSnackBar) { }

  ngOnInit(): void {
  }

  btnClick(){
    console.warn("btn click");
      this.snak.open("Hello Welcome this app","cancel")
  }

}
