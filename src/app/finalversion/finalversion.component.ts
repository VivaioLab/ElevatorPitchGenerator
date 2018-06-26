import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';


@Component({
  
  selector: 'app-finalversion',
  templateUrl: './finalversion.component.html',
  styleUrls: ['./finalversion.component.css'],
  exportAs: 'child'
})
export class FinalversionComponent implements OnInit {

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { 
    
  }
  saveChanges()
  {
    
  }

  
  ngOnInit() {
  }

  

}

