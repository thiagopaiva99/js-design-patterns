import { Sandwich } from "../models/sandwich.model";

export abstract class SandwichBuilder {

    abstract openBread(): void;
    abstract insertIngredients(): void;
    abstract closeBread(): void;
    abstract getSandwich(): Sandwich;

}