<template>
    <div>
        <HeaderComponent/>
        <section id="notes-page">
            <h2>Notes</h2>

            <ul class="note-list">
                <li v-for="note in note_store.notes" :key="note.id" class="title">
                    <NoteCard :note="note"/>
                </li>
            </ul>
        </section>

    </div>
</template>

<script setup>
import HeaderComponent from '../components/Header-component.vue';
import NoteCard from '../components/NoteCard.vue';
import { useNoteStore } from '../stores/note_store';

    const note_store = useNoteStore();

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
        }
    }
</style>