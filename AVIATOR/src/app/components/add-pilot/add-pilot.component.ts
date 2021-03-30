import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { pilot } from 'src/app/models/pilot';
import { user } from 'src/app/models/user';
import { PilotRESTService } from 'src/app/services/pilot-rest.service';
import { UserRESTService } from 'src/app/services/user-rest.service';
import { parseIsolatedEntityName, textChangeRangeIsUnchanged } from 'typescript';

@Component({
  selector: 'app-add-pilot',
  templateUrl: './add-pilot.component.html',
  styleUrls: ['./add-pilot.component.css']
})
export class AddPilotComponent implements OnInit {
  newpilot: pilot;
  producer: user;
  constructor(private pilotService: PilotRESTService, private userService: UserRESTService, private router: Router, public auth: AuthService) { 
    this.producer=
    {
      userName: '',
      id: 1,
      firstName: '',
      lastName: '',
      email: '',
      phoneNumb: 0,
      pilots: []
    }
    this.newpilot =
    {
      id: 0,
      pilotName: '',
      Producer: 
      {
        userName: '',
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        phoneNumb: 0,
        pilots: []
      },
      producerID: 0,
      pilotDescription: ''
    }

    //this.newpilot.producerID = this.producer.id;
  }


  ngOnInit(): void {this.auth.user$.subscribe (
    user =>
    this.userService.GetUserByEmail(user.email).subscribe
    (
      foundUser =>
      {
        this.producer = foundUser;
      }
    )
  );
  //this.newpilot.Producer = this.producer; //Doesn't work? According to dev tools my account is being fetched.
  }
  onSubmit(): void{
    this.newpilot.producerID = this.producer.id;; //Also doesn't work.
    //I think the issue is that it's only sending the form data we send it
    //Not any code I write here. The fix is probably somehow writing the logic into the form?
    this.pilotService.AddPilot(this.newpilot).subscribe( 
      (pilot)=> { alert('New pilot was added.');
      this.router.navigate(['']);}
    );
  }
}
