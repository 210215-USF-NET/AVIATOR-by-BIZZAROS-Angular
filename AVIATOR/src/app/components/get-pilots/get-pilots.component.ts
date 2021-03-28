import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PilotRESTService } from 'src/app/services/pilot-rest.service';

@Component({
  selector: 'app-get-pilots',
  templateUrl: './get-pilots.component.html',
  styleUrls: ['./get-pilots.component.css']
})
export class GetPilotsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}
