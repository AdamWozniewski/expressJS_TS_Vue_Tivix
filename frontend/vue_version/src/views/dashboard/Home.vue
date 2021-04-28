<template>
  <el-container>
    <p>{{ $t('message') }}</p>
    <el-aside width="200px">
      <el-menu :default-openeds="['1']">
        <el-menu-item :key="index" v-for="({ name, exact, icon, title }, index) in matchedRoutes">
          <i :class="icon" />
          <router-link :to="{ name }" :exact="exact">{{ title }}</router-link>
        </el-menu-item>
        <el-divider />
        <el-menu-item @click="logout">
          <i class="el-icon-video-pause" />
          Logout
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <el-dropdown>
          <el-avatar icon="el-icon-user-solid"></el-avatar>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="userProfile">User Profile</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
  <ModalBasic />
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import AuthService from '@/services/AuthService';
import routes from '@/router/routes';
import ModalBasic from '@/components/ModalBasic.vue';

export default {
  components: { ModalBasic },
  data() {
    return {
      routes,
    }
  },
  computed: {
    ...mapState('user', ['user']),
    matchedRoutes() {
      if (this.user?.roles?.includes('admin')) return this.routes;
      else return this.routes.filter(route => route?.visible !== 'admin');
      // return this.routes;
    }
  },
  mounted() {
    console.log(this)
    this.getUserProfile();
  },
  methods: {
    ...mapMutations('utilities', ['SET_MODAL_VISIBILITY', 'SET_MODAL_PROPS']),
    ...mapMutations('user', ['SET_USER']),
    userProfile() {
      this.SET_MODAL_VISIBILITY(true)
      this.SET_MODAL_PROPS({
        title: 'User Information',
        type: 'UserInformation',
      })
    },
    async getUserProfile() {
      try {
        this.SET_USER(await AuthService.getUser());
      } catch (error) {
        this.$message({
          type: 'error',
          message: 'Error download user info',
        });
      }
    },
    async logout() {
      try {
        await AuthService.logout();
        this.SET_USER();
        this.$message({
          type: 'success',
          message: 'Logout success',
        });
      } catch (e) {
        this.$message({
          type: 'error',
          message: 'Logout error',
        });
      } finally {
        this.$router.push({ name: 'Login' });
      }
    },
  }
};
</script>