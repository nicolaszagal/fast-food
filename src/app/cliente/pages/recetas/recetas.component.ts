import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit{

    data: any = [
        {
            id: 1,
            title: "Receta 1",
            description: "Descripcion de la receta 1",
            image: "https://www.cocinavital.mx/wp-content/themes/cocinavital2019/images/404.gif",
        },
        {
            id: 2,
            title: "Receta 2",
            description: "Descripcion de la receta 2",
            image: "https://www.cocinavital.mx/wp-content/themes/cocinavital2019/images/404.gif",
        },
        {
            id: 3,
            title: "Receta 3",
            description: "Descripcion de la receta 3",
            image: "https://www.cocinavital.mx/wp-content/themes/cocinavital2019/images/404.gif",

        },
        {
            id: 4,
            title: "Receta 4",
            description: "Descripcion de la receta 4",
            image: "https://www.cocinavital.mx/wp-content/themes/cocinavital2019/images/404.gif",
        }

    ];
    constructor() {
    }

    ngOnInit() {
        console.log("recetas component on init");
    }
}
