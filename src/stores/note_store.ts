import { defineStore } from "pinia";
import { ref } from "vue";

// argumento 1: nombre de la store, Argumento 2: las cosas que vamos a exportar
export const useNoteStore = defineStore('notes', () => {

    interface Note {
        id: string;
        title: string;
        marked: boolean;
    }

    const API_URL = 'https://ca808ae4b21347dc6ef6.free.beeceptor.com/api/notes/';

    const notes = ref<Note[]>([]);

    const loading = ref(false);

    const error = ref(false);

    const createId = () => {
        return Date.now().toString(36) + Math.random().toString(36).slice(2)
    }

    const getNotes = async () => {
        try {

            loading.value = true

            const response = await fetch(API_URL);
            const data = await response.json();
            notes.value = data.reverse();

            loading.value = false;

            error.value = false;


        } catch (e) {
            loading.value = false;

            error.value = true;
        }
    };

    const addNote = async (title: string) => {
        const newNote = {
            id: createId(),
            title,
            marked:false
        }

        try{

            await fetch(API_URL, {
                method: 'POST',
                body: JSON.stringify(newNote)
            })

            getNotes();

        }catch (e){
            error.value = true;
        }
    };

    return {
        notes,
        error,
        loading,
        addNote,
        getNotes,
    };
});