import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PilotRESTServiceService } from 'src/app/services/pilot-restservice.service';

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
