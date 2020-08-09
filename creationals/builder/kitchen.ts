import { SandwichBuilder } from "./builders/sandwich.builder";

export class Kitchen {

    makeSandwich(builder: SandwichBuilder) {
        builder.openBread();
        builder.insertIngredients();
        builder.closeBread();

        builder.getSandwich();
    }

}