<script setup lang="ts">
import type { Movie } from './classes/movie';
import { api, MovieDataProvider } from './helpers/MovieDataProvider';
import FirstMovieComponent from './components/fistmoviecomponent.vue';
import { initLazyLoad } from './helpers/imagelazyloading';
import { Plot } from './enums/Plot';
import { MovieType } from './enums/MovieType';

</script>

<script lang="ts">
const url: string = 'https://www.omdbapi.com/?i=tt3896198&apikey=2f180c84';
const data: Movie = await api<Movie>(url);
let data2: Movie[] = [];
try {
  data2 = await MovieDataProvider.GetMovies('black', MovieType.Movie, null, 1, Plot.Full);
} catch (error) {
  console.error('Error fetching movies by year:', error);
}
console.log(data);

initLazyLoad();
</script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>
  <p>Json</p>
  <p>{{ data.Awards }}</p>
  <pre>{{ data2 }}</pre>
  <FirstMovieComponent :movie="data" />
  <div v-for="item of data2" :key="item.imdbID">
    <FirstMovieComponent :movie="item" />
  </div>
</template>

<style scoped></style>
