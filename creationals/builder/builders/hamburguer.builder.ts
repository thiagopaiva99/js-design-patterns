import { SandwichBuilder } from "./sandwich.builder";
import { Sandwich } from "../models/sandwich.model";
import { Hamburguer } from "../models/hamburguer.model";

export class HamburguerBuilder extends SandwichBuilder {

    private hamburguer: Sandwich = new Hamburguer();

    openBread() {
        console.log('open the hamburguer bread.');
    }

    insertIngredients() {
        console.log('insert meal and cheese.');
    }

    closeBread() {
        console.log('close the bread.');
    }

    getSandwich(): Sandwich {
        console.log('hamburguer id done!');
        return this.hamburguer;
    }

}