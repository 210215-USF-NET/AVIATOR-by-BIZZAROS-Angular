import { Component, OnInit } from '@angular/core';
import { ScriptGetService } from 'src/app/services/script-get.service';
import { ScriptSaveService } from 'src/app/services/script-save.service';

@Component({
  selector: 'app-pilot-script',
  templateUrl: './pilot-script.component.html',
  styleUrls: ['./pilot-script.component.css']
})
export class PilotScriptComponent implements OnInit {

  constructor(private sget:ScriptGetService) { }

  ngOnInit(): void {
  }

}
