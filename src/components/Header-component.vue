<template>
    <div>
        <header class="header">
            <h1 class="title">Notes Page</h1>

            <nav>
                <ul class="nav-list">
                    <li class="link">
                        <router-link to="/">Home</router-link>
                    </li>
                    <li class="link">
                        <router-link to="/notes">Notes</router-link>
                    </li>
                </ul>
            </nav>
        </header>

    </div>
</template>

<script setup>

</script>

<style scoped>
    .header{
        background-color: #000022;
        color: white;
        padding: 30px;
        text-align: center;

        .title{
            margin: 0;
        }

        .nav-list{
            display: flex;
            justify-content: space-around;

            .link{
                color: white;
                text-decoration: none;
            }
        }
    }

</style>