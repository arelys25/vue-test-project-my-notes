<template>
    <div>
        <HeaderComponent/>
        <section id="notes-page">
            <h2>Notes</h2>

            <h2 v-if="note_store.loading">Cargando...</h2>
            <h2 v-else-if="note_store.error">Algo ha ido mal :(</h2>
            <ul class="note-list" v-else>
                <li class="title">
                    <CreateNote/>
                </li>
                <li v-for="note in note_store.notes" :key="note.id" class="title">
                    <NoteCard :note="note"/>
                </li>
                <li v-if="!note_store.notes.length" class="empty-msg">
                    <h2>No hay nada que mostrar. ¡Crea tu primera Nota!</h2>
                </li>
            </ul>
        </section>

    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import CreateNote from '../components/Create-note.vue';
import HeaderComponent from '../components/Header-component.vue';
import NoteCard from '../components/NoteCard.vue';
import { useNoteStore } from '../stores/note_store';

    const note_store = useNoteStore();

    // cuando se monte la vista, llamaremos a la funcion getNOtes y esa funcion hará una petición a la API para obtrener los datos
    onMounted(async () => {
        await note_store.getNotes();
    })

</script>

<style scoped>
    #notes-page{
        padding: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .title {
            margin-bottom: 50px;
            text-align: center;
        }

        .note-list{
            background-image: url('/assets/cork.jpg');
            border: 10px solid brown;
            width: 70%;
            min-width: 450px;
            padding: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;

            .empty-msg{
                text-align: center;
                font-size: 1.5rem;
            }
        }
    }
</style>