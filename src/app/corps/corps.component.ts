import { Component, OnInit } from '@angular/core';
import { TestModel } from 'src/Models/test-model';
import { ApiEniSortirService } from 'src/Services/api-eni-sortir.service';

@Component({
  selector: 'app-corps',
  templateUrl: './corps.component.html',
  styleUrls: ['./corps.component.css']
})
export class CorpsComponent implements OnInit {
  villeDeMySql: TestModel = new TestModel;
  public ville: TestModel= new TestModel('salut', '1234');
  constructor(private apiService: ApiEniSortirService) { }

  ngOnInit(){
    this.apiService.testGet().subscribe(value => this.villeDeMySql=value);
    this.apiService.testPost(this.ville).subscribe();  
      
  }

}
