<script setup lang="ts">
import type { MovieType } from './classes/movie';
import { api } from './datafetching/getmovies';
import FirstMovieComponent from './components/fistmoviecomponent.vue';
import { initLazyLoad } from './lazyextensions/imagelazyloading';

initLazyLoad();
</script>

<script lang="ts">
const url: string = 'https://www.omdbapi.com/?i=tt3896198&apikey=2f180c84';
const data: MovieType = await api<MovieType>(url);
console.log(data);
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>Json</p>
  <p>{{ data.Awards }}</p>
  <pre>{{ data.Poster }}</pre>
  <FirstMovieComponent :movie="data" />
</template>

<style scoped></style>
