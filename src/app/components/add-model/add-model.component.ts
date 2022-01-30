import {Component, OnInit} from '@angular/core';
import {YmlService} from '../../services/yml.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-model',
  templateUrl: './add-model.component.html',
  styleUrls: ['./add-model.component.scss']
})
export class AddModelComponent implements OnInit {

  loading = false;
  file: File = null;

  constructor(private yml: YmlService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onChange(event) {
    this.file = event.target.files[0];
  }

  onUpload() {
    this.loading = !this.loading;
    this.yml.upload(this.file).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {
          this.loading = false;
          this.router.navigate(['models']);
        }
      }
    );
  }

}
