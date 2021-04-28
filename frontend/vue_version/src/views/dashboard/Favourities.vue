<template>
  <el-row>
    <el-col :span="24">
      <h2>Favourites Video</h2>
      <el-divider />
    </el-col>
  </el-row>
  <el-row :gutter="20">
    <el-col class="mb-10" :span="6" v-for="(video, index) in videos" :key="index">
      <el-card :body-style="{ padding: '0px' }">
        <img :src="video.Poster" class="image">
        <div style="padding: 14px;">
          <h3>{{ video.Title }}</h3>
          <h4>
            <el-tag>imdbID: {{ video.imdbID }}</el-tag>
          </h4>
          <el-button type="danger" icon="el-icon-delete" circle @click="deleteVideoFromFavourites(video.imdbID)" />
          <div class="bottom">
            <time class="time">{{ video.Released }}</time>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {mapMutations, mapState} from 'vuex';
import FavouritesService from '@/services/FavouritesService';

interface Favourities {
  videos: object[];
  $message: any;
}

export default defineComponent({
  data() {
    return {
      videos: [],
      $message: {},
    } as Favourities;
  },
  computed: {
    ...mapState('user', ['user']),
  },
  methods: {
    ...mapMutations('user', ['SET_USER_VIDEOS']),
    async deleteVideoFromFavourites(imdbID: string) {
      try {
        this.SET_USER_VIDEOS(await FavouritesService.removeFavourities(imdbID))
        this.$message({
          type: 'success',
          message: 'Delete success',
        });
      } catch ({ message }) {
        this.$message({
          type: 'error',
          message,
        });
      } finally {
        await this.fetchVideos();
      }
    },
    async fetchVideos() {
      try {
        const data = await Promise.all([...this.user.videos.map(async (imdbID: string) => await FavouritesService.getFavourities(imdbID))]);
        this.videos = data;
      } catch (error) {
        this.$message({
          type: 'error',
          message: error,
        });
      }
    }
  },
  mounted() {
    this.user.videos.length && this.fetchVideos();
  },
});
</script>
