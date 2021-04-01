import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pilot } from 'src/app/models/pilot';
import { PilotRESTService } from 'src/app/services/pilot-rest.service';
import { ScriptGetService } from 'src/app/services/script-get.service';

declare var CacheEngine: any;
declare var ParseEngine: any;
@Component({
  selector: 'app-pilot-details',
  templateUrl: './pilot-details.component.html',
  styleUrls: ['./pilot-details.component.css']
})
export class PilotDetailsComponent implements OnInit {
  pilot: pilot;
  constructor(private pilotService: PilotRESTService, private route: ActivatedRoute, private sget: ScriptGetService,
    private router: Router) {
  this.pilot =
  {
    id: 0,
    producer:
    {
      userName: '',
      firstName: '',
      lastName: '',
      email: '',
      phoneNumb: 0,
      id: 0,
      pilots: []
    },
    producerID: 0,
    pilotName: '',
    pilotDescription: '',
    script:
    {
      id : 0,
      scriptwriter: 
      {
        userName: '',
        firstName: '',
        lastName: '',
        email: '',
        phoneNumb: 0,
        id: 0,
        pilots: []
      },
      scriptwriterID: 0,
      pilotID: 0,
      scriptURL :''
    },
    scenes: [],
    files: []
  }
  }

  ngOnInit(): void {
  this.route.queryParams.subscribe(
    params =>{
      this.pilotService.GetPilot(params.pilot).subscribe(
        foundPilot => { this.pilot = foundPilot; CacheEngine.pilot=this.pilot.id;}
    )}
  )}  
  onGet(event){
    this.router.navigate(['script']
    , {queryParams: {script: this.pilot.script.id}}
    );
  }
  //write script
  // onGet(event) {
  //   this.sget.getScript(3).subscribe(x => this.sget.getContent(x.script.scriptURL).subscribe(y => new ParseEngine().ProcessSaved(y)))
  // };
}

