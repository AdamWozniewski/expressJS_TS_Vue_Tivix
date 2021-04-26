<template>
  <el-row>
    <el-col :span="24">
      <h2>Search Video</h2>
      <el-divider />
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="24">
      <el-input
          placeholder="Please input title"
          suffix-icon="el-icon-search"
          v-model="title"
          clearable>
      </el-input>
      <el-divider />
    </el-col>
    <el-col :span="24">
      <el-select
        v-model="selectedVideoType"
        placeholder="Select type"
        class="w-full"
        clearable>
        <el-option
            v-for="type in videoTypes"
            :key="type"
            :label="type"
            :value="type">
        </el-option>
      </el-select>
      <el-divider />
    </el-col>
    <el-col :span="24">
      <el-date-picker
          v-model="year"
          type="year"
          placeholder="Pick a year">
      </el-date-picker>
      <el-divider />
    </el-col>
    <el-col :span="24">
      <el-button icon="el-icon-search" type="primary" :disabled="!title" @click="search">Search</el-button>
    </el-col>
  </el-row>
  <el-divider />
  <el-row v-if="videos?.imdbID">
    <el-col>
      <el-card class="box-card">
        <img :src="videos.Poster" alt="">
        <div>
          <h3>{{ videos.Title }}</h3>
        </div>
        <p><el-tag type="primary">{{ videos.imdbID }}</el-tag></p>
        <div>
          <el-button @click="videoDetail">See more</el-button>
        </div>
      </el-card>
    </el-col>
  </el-row>
  <el-row v-else>
    <el-col :span="24">
      <el-empty description="Empty" />
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapMutations } from 'vuex';
import VideoService from "@/services/VideoService";

interface VideoSearch {
  videos: object;
  $message: any;
  title: string;
  videoTypes: string[];
  selectedVideoType: string;
  year: string;
}

export default defineComponent({
  data() {
    return {
      videos: {},
      $message: {},
      title: '',
      videoTypes: ['movie', 'series', 'episode'],
      selectedVideoType: '',
      year: '',
    } as VideoSearch;
  },
  methods: {
    ...mapMutations('utilities', ['SET_MODAL_VISIBILITY', 'SET_MODAL_PROPS']),
    videoDetail() {
      this.SET_MODAL_VISIBILITY(true)
      this.SET_MODAL_PROPS({
        title: 'Video detail',
        type: 'VideoDetail',
        video: this.videos,
      });
    },
    async search() {
      const video = {
        t: this.title,
        y: this.year && new Date(this.year).getFullYear(),
        type: this.selectedVideoType
      }
      try {
        const data: any = await VideoService.findVideo(video);
        if (data.Error) {
          this.$message({
            type: 'error',
            message: data.Error,
          });
          this.videos = {};
        } else this.videos = data;
      } catch (error) {
        this.$message({
          type: 'error',
          message: error,
        });
      }
    }
  }
});
</script>