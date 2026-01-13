<template>
    <div>
        <form class="note-form">
            <input type="text" class="note-title" placeholder="Nueva nota" v-model="title">
            <button class="create-btn" @click.prevent="handleSubmit">+</button>
        </form>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useNoteStore } from '../stores/note_store';

    const title = ref('');

    const note_store = useNoteStore();

    const handleSubmit = () => {
        note_store.addNote(title.value);

        title.value = '';
    }

</script>

<style scoped>
    .note-form{
        width: 400px;
        background-color: lightgreen;
        border: 3px solid darkblue;
        padding: 20px 30px;
        margin-bottom: 20px;
        display: flex;
        justify-content: space-between;
        transition: all 0.2s;

        .note-title{
            background-color: transparent;
            border: none;
            font-size: 1.2rem;
            font-weight: bold;
        }

        .create-btn{
            width: 30px;
            height: 30px;
            font-size: 1.5rem;
            background-color: green;
            color: white;
            display: flex;
            align-items: center;
        }

        .create-btn:hover{
            background-color: darkgreen;
        }

        .create-btn:active{
            background-color: green;
        }
    }

    .note-form:hover{
        border: 3px solid black;
        box-shadow: 0 0 10px;
    }

</style>