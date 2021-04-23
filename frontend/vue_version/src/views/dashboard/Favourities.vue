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
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div style="padding: 14px;">
          <h3>Yummy hamburger</h3>
          <h4>
            <el-tag>imdbID: {{ video }}</el-tag>
          </h4>
          <el-button type="danger" icon="el-icon-delete" circle @click="deleteVideoFromFavourites(video)" />
          <div class="bottom">
            <time class="time">28.04.1992</time>
            <el-button type="text" class="button">Operating</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState } from 'vuex';
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
    async deleteVideoFromFavourites(imdbID: string) {
      try {
        await FavouritesService.removeFavourities(imdbID);
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
        // const data = await Promise.all([
        //     this.user.videos.map(async (imdbID: string) => await FavouritesService.getFavourities(imdbID))
        // ])
        this.videos = this.user.videos;
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
  }
});
</script>
