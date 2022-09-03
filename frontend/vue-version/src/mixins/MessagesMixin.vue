<script lang="ts">
export default {
  name: 'MessagesMixin',
  data() {
    return {
      $message: {},
      $router: {},
    } as any
  },
  methods: {
    errorMessage(error: any) {
      this.$message({
        type: 'error',
        message: error.message,
      });
      if (error.response.status === UNAUTHORIZED) this.$router.push({ name: 'Login' });
    },
    successMessage(success: any) {
      this.$message({
        type: 'success',
        message: success.message,
      });
    }
  }
};
</script>
