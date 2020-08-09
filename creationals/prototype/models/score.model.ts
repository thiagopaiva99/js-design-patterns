import { Do } from './do.model';
import { Re } from './re.model';
import { Mi } from './mi.model';
import { Fa } from './fa.model';
import { Sol } from './sol.model';
import { La } from './la.model';
import { Si } from './si.model';
import { Note } from './note.model';

export class Score {

    private static notes: Map<string, Note> = new Map();

    static loadNotes() {
        const doNote = new Do();
        this.notes.set('Do', doNote);

        const reNote = new Re();
        this.notes.set('Re', reNote);

        const miNote = new Mi();
        this.notes.set('Mi', miNote);

        const faNote = new Fa();
        this.notes.set('Fa', faNote);

        const solNote = new Sol();
        this.notes.set('Sol', solNote);

        const laNote = new La();
        this.notes.set('La', laNote);

        const siNote = new Si();
        this.notes.set('Si', siNote);
    }

    static getNote(name: string): Note {
        const note = this.notes.get(name);

        return note.clone();
    }

}