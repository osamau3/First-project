import { Component  } from '@angular/core';
import { dataStorageService } from '../shared/data-storage.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private dataStorage : dataStorageService){

  }
  onSaveData(){
    this.dataStorage.storeRecipe()
    .subscribe(
      (response : Response) => {
        console.log(response);
      }
    );
  }
  onFetchData(){
    this.dataStorage.getRecipes();
  }
}
