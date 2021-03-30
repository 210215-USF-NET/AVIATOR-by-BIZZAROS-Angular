import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pilot } from 'src/app/models/pilot';
import { user } from 'src/app/models/user';
import { PilotRESTService } from 'src/app/services/pilot-rest.service';
import { parseIsolatedEntityName } from 'typescript';

@Component({
  selector: 'app-add-pilot',
  templateUrl: './add-pilot.component.html',
  styleUrls: ['./add-pilot.component.css']
})
export class AddPilotComponent implements OnInit {
  newpilot: pilot;
  producer: user;
  constructor(private pilotService: PilotRESTService, private router: Router) { 
    this.newpilot =
    {
      pilotName: '',
      Producer: 
      {
        ID: 1,
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNumb: 0,
        pilots: []
      },
      producerID: 1,
      pilotDescription: ''
    }
    this.producer=
    {
      ID: 1,
      FirstName: '',
      LastName: '',
      Email: '',
      PhoneNumb: 0,
      pilots: []
    }
    this.newpilot.Producer = producer;
  }


  ngOnInit(): void {
  }
  onSubmit(): void{
    this.pilotService.AddPilot(this.newpilot).subscribe( 
      (pilot)=> { alert(`New pilot was added.`);
      this.router.navigate(['']);}
    );
  }
}
