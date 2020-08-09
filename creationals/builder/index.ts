import { Kitchen } from "./kitchen"
import { HamburguerBuilder } from "./builders/hamburguer.builder";
import { FishburguerBuilder } from "./builders/fishburguer.builder";

const run = () => {
    const kitchen = new Kitchen();

    kitchen.makeSandwich(new HamburguerBuilder());
    kitchen.makeSandwich(new FishburguerBuilder());
}

run();