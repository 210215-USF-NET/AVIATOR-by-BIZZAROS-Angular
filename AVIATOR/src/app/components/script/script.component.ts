import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
declare var ParseEngine: any;
declare var CacheEngine: any;
declare var FileManagement: any;
declare var form: FormGroup;
@Component({
  selector: 'app-script',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './script.component.html',
  styleUrls: ['./script.component.css']
})

export class ScriptComponent implements OnInit {


  constructor(private formBuilder: FormBuilder) {
 
  }
  form : FormGroup;
  error: String;
  userId: Number;
  fr: any;
  resultFile: any;
  ngOnInit() {
   // new ParseEngine().display(".Content");
    let resultFile = "";
   // new FileManagement().getScreenplay("https://cryptoart20210310221023.azurewebsites.net/xml/reformschool.xml");
   this.form = this.formBuilder.group({
      screenplay: ['']
    });
    if (CacheEngine.getCache("Processed")) {
      new ParseEngine().process("",false);
    }

  }
  
  onFileChange(event) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('screenplay').setValue(file);
      let Result: any = ""
      console.log(this.form.get('screenplay').value);
      let fr = new FileReader();
      fr.readAsText(this.form.get('screenplay').value);
      fr.onload = res => {
        Result = (res.target as FileReader).result;
        new ParseEngine().process(Result,true);
      };
      
    }



    }
  }
