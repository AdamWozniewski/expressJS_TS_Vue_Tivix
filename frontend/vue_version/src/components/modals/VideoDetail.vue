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

type VideoDetail = {
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
          message: 'Adding Successfull',
        });
      } catch (error) {
        this.$message({
          type: 'error',
          message: error,
        });
      }
    },
  },
});
</script>
