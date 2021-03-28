import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
declare var ParseEngine: any;
declare var CacheEngine: any;
declare var FileManagement: any;
@Component({
  selector: 'app-script',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './script.component.html',
  styleUrls: ['./script.component.css']
})

export class ScriptComponent implements OnInit {
  // form: FormGroup;
  // error: String;
  // userId: Number;
  // fr: any;
  // resultFile: any;

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {
   // new ParseEngine().display(".Content");
    let resultFile = "";
   // new FileManagement().getScreenplay("https://cryptoart20210310221023.azurewebsites.net/xml/reformschool.xml");
    // this.form = this.formBuilder.group({
    //   avatar: ['']
    // });
    // if (CacheEngine.getCache("Processed")) {
    //   new ParseEngine().process("",false);
    // }

  }
  
  // onFileChange(event) {

  //   if (event.target.files.length > 0) {
  //     const file = event.target.files[0];
  //     this.form.get('avatar').setValue(file);
  //     let Result: any = ""
  //     console.log(this.form.get('avatar').value);
  //     let fr = new FileReader();
  //     fr.readAsText(this.form.get('avatar').value);
  //     fr.onload = res => {
  //       Result = (res.target as FileReader).result;
  //       new ParseEngine().process(Result,true);
  //     };
  //   }



  //   }
  }
