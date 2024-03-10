import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { RecepieService } from '../../recepie.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  id: number;
  editMode = false;
  basicform: FormGroup;

  constructor(private recepieService: RecepieService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.editMode = params['id'] != null;
    })
    this.initForm()
  }

  onSubmit() {
    if(this.editMode){
      this.recepieService.updateRecepie(this.id,this.basicform.value)
    }else{
      this.recepieService.AddRecepie(this.basicform.value)
    }
    this.basicform.reset()
  }
  onCancel(){
    this.router.navigate(['../'])
  }

  initForm() {
    let recepieName = ''
    let recepieDescription = ''
    let recepieImagepath = ''
    let recepieIngridents = new FormArray([])
    if (this.editMode) {
      const recepie = this.recepieService.getRecepiebyID(this.id)
      recepieName = recepie.name
      recepieDescription = recepie.description
      recepieImagepath = recepie.imagePath
      if (recepie['ingridents']) {
        for (let ingrident of recepie.ingridents) {
          recepieIngridents.push(new FormGroup({
            'name': new FormControl(ingrident.name,[Validators.required]),
            'amount': new FormControl(ingrident.amount,[Validators.required])
          }))
        }
      }
    }

    this.basicform = new FormGroup({
      'name': new FormControl(recepieName,[Validators.required]),
      'description': new FormControl(recepieDescription,[Validators.required]),
      'imagePath': new FormControl(recepieImagepath,[Validators.required]),
      'ingridents': recepieIngridents
    })
  }
  onAddIngrident(){
    (<FormArray>this.basicform.get('ingridents')).push(new FormGroup({
      'name': new FormControl(null,[Validators.required]),
      'amount': new FormControl(null,[Validators.required,Validators.pattern(/^[0-9]+[1-9]*$/)])
    }))
  }
  onRemoveCOntrol(){
    (<FormArray>this.basicform.get('ingridents')).removeAt(this.id)
  }

}
