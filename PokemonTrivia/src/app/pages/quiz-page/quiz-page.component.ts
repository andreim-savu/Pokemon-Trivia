import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent implements OnInit {

  pokemonNames = [];
  remainingNames = [];
  questionAnswered = false;

  answers = [];
  correctAnswer: string = null;

  currentEntry: string;

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.getPokemonNames();
  }


  getPokemonNames() {
    return this.db.collection("pokemon").snapshotChanges().subscribe(res => {
      let pokemons = res.map((e: any) => {
        return {
          name: e.payload.doc.id
        }
      });

      for (let pokemon of pokemons) {
        this.pokemonNames.push(pokemon.name);
        this.remainingNames.push(pokemon.name);
      }

      this.setQuestion();
    });
  }

  setQuestion() {
    this.answers = [];
    this.correctAnswer = null;
    this.currentEntry = null;

    const index = Math.floor(Math.random() * this.remainingNames.length);
    const pokemon = this.remainingNames[index];
    
    return this.db.collection(`pokemon/${pokemon}/pokedexEntries`).snapshotChanges().subscribe(res => {
      let descriptions = res.map((e: any) => {
        return {
          ...e.payload.doc.data()
        }
      });

      console.log(pokemon);
      this.currentEntry = descriptions[Math.floor(Math.random() * descriptions.length)].entry;
      this.correctAnswer = pokemon;

      this.pokemonNames.sort(() => Math.random() - 0.5);

      for (let i = 0; i < 3; i++) {
        if (this.pokemonNames[i] === this.correctAnswer) { 
          this.answers.push(this.pokemonNames[i + 4]);
          continue;
        }
        this.answers.push(this.pokemonNames[i]);
      }
      this.answers.push(pokemon);

      this.answers.sort(() => Math.random() - 0.5);

      this.remainingNames.splice(index, 1);
      this.questionAnswered = false;
    });
  }

  answerQuestion(value) {
    if (this.questionAnswered) { return; }
    this.questionAnswered = true;
    if (value === this.correctAnswer) { this.currentEntry = "Correct!" }
    else { this.currentEntry = "Wrong!" }

    setTimeout(() => {
      this.setQuestion();
    }, 3000);
  }
}
