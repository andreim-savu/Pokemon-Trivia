import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { POKEMON } from 'src/app/data/pokemon';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  pokemons = POKEMON;

  constructor(private db: AngularFirestore, private router: Router) { }

  ngOnInit(): void {
    // for (let pokemon of this.pokemons) {
    //   this.db.collection("pokemon").doc(pokemon.name).set({id: pokemon.id, name: pokemon.name});
    // }
    // for (let pokemon of this.pokemons) {
    //   for (let entry in pokemon.pokedexEntries) {
    //     this.db.collection("pokemon").doc(pokemon.name).collection("pokedexEntries").doc(entry).set({entry: pokemon.pokedexEntries[entry]});
    //   }
    // }
    // this.getList().subscribe(res => {
    //   let a = res.map( (e: any) => {
    //     return {
    //       idd: e.payload.doc.id,
    //       ...e.payload.doc.data()
    //     } 
    //   })
    //   console.log( a);
    // })

    // this.getPkm("squirtle").subscribe(res => {
    //   console.log("@@@@@@@@@@");
    //   console.log(res);
    //   console.log("@@@@@@@@@@");
    // })

    this.getPkmDesc("squirtle").subscribe(res => {
      let a = res.map((e: any) => {
        return {
          ...e.payload.doc.data()
        }
      });

      for (let x of a) {
        console.log(x);
      }
    });
  }

  getShinyOdd(): number {
    return Math.floor(Math.random() * 10);
  }

  getList() {
    return this.db.collection("pokemon").snapshotChanges();
  }

  getPkm(id) {
    return this.db.collection("pokemon").doc(id).valueChanges();
  }

  getPkmDesc(id) {
    return this.db.collection(`pokemon/${id}/pokedexEntries`).snapshotChanges();
  }
}
