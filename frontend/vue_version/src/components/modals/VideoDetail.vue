<template>
  <div>
    <img :src="video.Poster" alt="poster">
    <h2>{{ video.Title }}</h2>
    <h4>{{ video.imdbID }}</h4>
    <span>{{ video.Type }}</span>
    <span>{{ video.Released }}</span>
    <span>{{ video.Country }}</span>
    <el-divider />
    <p>{{ video.Plot }}</p>
    <el-divider />
    <el-button type="primary" @click="saveToFavourities(video.imdbID)">Add to Favourities</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapMutations, mapState } from 'vuex';
import FavouritesService from '@/services/FavouritesService';

interface VideoDetail {
  $message: any;
  video: object,
}

export default defineComponent({
  data() {
    return {
      video: {},
      $message: {},
    } as VideoDetail;
  },
  mounted() {
    console.log(this.modalProperties.video)
    this.video = { ...this.modalProperties.video };
  },
  computed: {
    ...mapState('user', ['user']),
    ...mapState('utilities', ['modalProperties']),
  },
  methods: {
    ...mapMutations('user', ['SET_USER_VIDEOS']),
    async saveToFavourities(imdbID: string) {
      try {
        this.SET_USER_VIDEOS(await FavouritesService.addFavourities(imdbID));
        this.$message({
          type: 'success',
          message: 'Adding Successfull'
        });
      } catch (error) {
        this.$message({
          type: 'error',
          message: error
        });
      }
    },
  },
});
</script>

<!--Actors: "Malgorzata Kozuchowska, Mateusz Pawlowski, Adam Zdrójkowski, Tomasz Karolak"-->
<!--Awards: "1 nomination."-->
<!--Country: "Poland"-->
<!--Director: "N/A"-->
<!--Genre: "Comedy"-->
<!--Language: "Polish"-->
<!--Metascore: "N/A"-->
<!--Plot: "Ludwik and Natalia are struggling with upbringing their 3 sons."-->
<!--Poster: "https://m.media-amazon.com/images/M/MV5BNDEzNTgzNTI4NV5BMl5BanBnXkFtZTgwMTk2ODExNDE@._V1_SX300.jpg"-->
<!--Rated: "N/A"-->
<!--Ratings: [{Source: "Internet Movie Database", Value: "6.0/10"}]-->
<!--Released: "02 Mar 2011"-->
<!--Response: "True"-->
<!--Runtime: "25 min"-->
<!--Title: "Rodzinka.pl"-->
<!--Type: "series"-->
<!--Writer: "N/A"-->
<!--Year: "2011–2020"-->
<!--imdbID: "tt1973695"-->
<!--imdbRating: "6.0"-->
<!--imdbVotes: "529"-->
<!--totalSeasons: "13"-->