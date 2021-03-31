import { Component, OnInit,Input } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SceneDisplayComponent } from '../scene-display/scene-display.component'
import { FileSaveService } from '../../services/file-save.service';
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
  fileName: string="";
  @Input('master') name: string;
  constructor(private formBuilder: FormBuilder,private fileSave:FileSaveService) { }
  
  ngOnInit() {
    if (CacheEngine.getCache("Processed")) {
      SceneNav.Populate(document.querySelector(".navScene"), CacheEngine.getCache("Processed"));
    }
    this.form = this.formBuilder.group({
      character: ['']
    });
    
  }
  
  onSave() {
 
  }
  submitForm(event) {
    var formData: any = new FormData();
    formData.append("UserID", "1");
    formData.append("File", this.form.get('character').value);
    formData.append("PilotID", "3");
    formData.append("FileName", "a2"+this.form.get('character').value.name);
    formData.append("FileDescription", SceneNav.Gather().desc);
    formData.append("ParsedId", SceneNav.Gather().id);
    
    this.fileSave.SaveFile(formData).subscribe(
      (response) => { SceneNav.ShowFile((response as any).fileURL, true); console.log(response) },
      (error) => console.log(error)
    )
  }
  onFileChange(event) {
   // return;
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
       
      this.form.get('character').setValue(file);
      let Result: any = "";
      this.submitForm(event);
      console.log(this.form.get('character').value);
      let fr = new FileReader();
      Result = fr.readAsDataURL(file);
      fr.onloadend = res => {
        var myImage = new Image();  
      };
    }

}
