import { Score } from "./models/score.model";

const run = () => {
    Score.loadNotes();

    Score.getNote('Do').draw();
    Score.getNote('Re').draw();
    Score.getNote('Mi').draw();
    Score.getNote('Fa').draw();
    Score.getNote('Fa').draw();
    Score.getNote('Fa').draw();
    Score.getNote('Do').draw();
    Score.getNote('Re').draw();
    Score.getNote('Do').draw();
    Score.getNote('Re').draw();
    Score.getNote('Re').draw();
    Score.getNote('Re').draw();
}

run();