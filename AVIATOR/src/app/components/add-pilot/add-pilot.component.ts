import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pilot } from 'src/app/models/pilot';
import { PilotRESTService } from 'src/app/services/pilot-rest.service';

@Component({
  selector: 'app-add-pilot',
  templateUrl: './add-pilot.component.html',
  styleUrls: ['./add-pilot.component.css']
})
export class AddPilotComponent implements OnInit {
  newpilot: pilot;
  constructor(private pilotService: PilotRESTService, private router: Router) { 
    this.newpilot =
    {
      name: '',
      producer: 
      {
        ID: 0,
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNumb: 0,
        pilots: []
      },
      producerID: 0,
      description: ''

    }
  }

  ngOnInit(): void {
  }
  onSubmit(): void{
    this.pilotService.AddPilot(this.newpilot).subscribe(
      (pilot)=> { alert(`${pilot.name} was added.`);}
    )
  }
}
