import { defineStore } from "pinia";
import { ref } from "vue";

// argumento 1: nombre de la store, Argumento 2: las cosas que vamos a exportar
export const useNoteStore = defineStore('notes', () => {

    interface Note {
        id: string;
        title: string;
        marked: boolean;
    }

    const notes = ref<Note[]>([]);

    const createId = () => {
        return Date.now().toString(36) + Math.random().toString(36).slice(2)
    }

    const addNote = (title: string) => {
        notes.value.unshift({
            id: createId(),
            title: title,
            marked: false
        })
    };

    return {
        notes,
        addNote
    };
}, {
    // hacer que persista la información en el servidor local
    persist: true
});