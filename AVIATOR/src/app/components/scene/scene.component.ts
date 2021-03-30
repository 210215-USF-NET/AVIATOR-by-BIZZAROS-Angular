import { Component, OnInit,Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SceneDisplayComponent } from '../scene-display/scene-display.component'
declare var ParseEngine: any;
declare var SceneNav: any;
declare var CacheEngine: any;
@Component({
  selector: 'app-scene',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.css'],
})
export class SceneComponent implements OnInit {
  form: FormGroup;
  error: String;
  userId: Number;
  fr: any;
  resultFile: any;
  @Input('master') name: string;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    if (CacheEngine.getCache("Processed")) {
      SceneNav.Populate(document.querySelector(".navScene"), CacheEngine.getCache("Processed"));
    }
    this.form = this.formBuilder.group({
      character: ['']
    });
    
  }
  
  onSave() {
    //send To dataSave Service
    //CacheEngine.getCache("Processed");
  }

  onFileChange(event) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('character').setValue(file);
      let Result: any = ""
      console.log(this.form.get('character').value);
      let fr = new FileReader();
      Result = fr.readAsDataURL(file);
      fr.onloadend = res => {
        var myImage = new Image(); // Creates image object
        console.log(res); // Assigns converted image to image object
        // Draws the image on canvas

        SceneNav.ShowFile(res.srcElement["result"].toString(), true);
      };
    }


  }
}
