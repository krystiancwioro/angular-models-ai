import {Component, OnInit} from '@angular/core';
import {YmlService} from '../../services/yml.service';
import {saveAs} from 'file-saver';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {

  nameModel: any = '';
  tableModels: {};

  table = [
    {
      name: 'model_ko.1.01.01',
      status: 'ready'
    },
    {
      name: 'model_ko.1.01.02',
      status: 'corrupted'
    },
    {
      name: 'model_ko.1.01.03',
      status: 'staging'
    },
    {
      name: 'model_ko.1.01.04',
      status: 'new'
    }
  ];


  constructor(private yml: YmlService) {
  }

  ngOnInit(): void {
    const models = this.yml.getAllModels().subscribe();
    if (Object.keys(models) !== null) {
      this.tableModels = models;
    }
  }

  refresh(): void {
    window.location.reload();
  }

  getReport(nameModel): any {
    this.yml.getModelReport(nameModel).subscribe(blob => console.log('bl' + blob));
  }

  deleteModel(nameMode): any {
    this.yml.deleteModel(nameMode).subscribe();
    this.ngOnInit();
  }

  getStatus(nameModel): any {
    this.yml.getModelStatus(this.nameModel).subscribe();
  }

}
