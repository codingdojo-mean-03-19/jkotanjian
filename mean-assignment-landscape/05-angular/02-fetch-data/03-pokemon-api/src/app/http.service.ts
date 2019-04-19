import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  constructor(private _http: HttpClient) {
  	this.getPokemon();
	} 
	getPokemon() {
		let pokemon = this._http.get<PokeData>('https://pokeapi.co/api/v2/pokemon/12/');
		pokemon.subscribe(poke => {
			for (var i of poke.abilities) {
				console.log("Got a pokemon and " + i.ability.name + " is one ability");	
			}	
			this.getCount(poke.abilities[0].ability.url);
			this.getCount(poke.abilities[1].ability.url);
		});
	}
	getCount(url) {
		let pokemon = this._http.get<Count>(url);
		pokemon.subscribe(poke => {
			console.log(poke.pokemon.length + " pokemons have the " + poke.name + " ability");
		});
	}
}		
	

interface PokeData {
	abilities: Array<Ability>
}
interface Ability {
	ability: {
		name: String,
		url: String
	}
}
interface Count {
	name: String,
	pokemon: Array<Pokemon>
}
interface Pokemon {
	length: number
}