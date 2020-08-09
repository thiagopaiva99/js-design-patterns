import { SandwichBuilder } from "./sandwich.builder";
import { Fishburguer } from "../models/fishburguer.model";
import { Sandwich } from "../models/sandwich.model";

export class FishburguerBuilder extends SandwichBuilder {
    
    private fishburguer: Sandwich = new Fishburguer();

    openBread() {
        console.log('open the fishburguer bread.');
    }

    insertIngredients() {
        console.log('insert meal and cheese.');
    }

    closeBread() {
        console.log('close the bread.');
    }

    getSandwich(): Sandwich {
        console.log('fishburguer id done!');
        return this.fishburguer;
    }

}