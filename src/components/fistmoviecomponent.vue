<template>
  <div class="movie-container">
    <div v-if="movie" class="movie-card">
      <h2>{{ movie.Title }}</h2>
      <p><strong>Director:</strong> {{ movie.Director }}</p>
      <p><strong>Release Year:</strong> {{ movie.Year }}</p>
      <p><strong>Genre:</strong> {{ movie.Genre }}</p>
      <p><strong>Rating:</strong> {{ movie.imdbRating }}/10</p>
      <p><strong>Description:</strong> {{ movie.Plot }}</p>
      <img class="lazy" :data-src="movie.Poster" />
    </div>
    <div v-else class="no-movie">
      <p>No movie data available</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { Movie } from '../classes/movie';

export default defineComponent({
  name: 'FirstMovieComponent',
  props: {
    movie: {
      type: Object as PropType<Movie>,
      required: false,
      default: null
    }
  }
});
</script>

<style scoped>
.movie-container {
  padding: 20px;
}

.movie-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.movie-card h2 {
  margin-top: 0;
  color: #333;
}

.movie-card p {
  margin: 10px 0;
  color: #666;
}

.no-movie {
  padding: 20px;
  text-align: center;
  color: #999;
}
</style>
