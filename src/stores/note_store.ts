import { defineStore } from "pinia";
import { ref } from "vue";

// argumento 1: nombre de la store, Argumento 2: las cosas que vamos a exportar
export const useNoteStore = defineStore('notes', () => {
    const notes = ref([
        {
            id: '1',
            title: 'Ir al doctor',
            marked: false
        },
        {
            id: '2',
            title: 'Contraseña del wifi: 23456',
            marked: false
        },
    ]);

    return {
        notes,
    };
})