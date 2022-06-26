<script lang="ts">
export default {
  name: 'MessagesMixin',
  methods: {
    errorMessage(error: any) {
      this.$message({
        type: 'error',
        message: error.message,
      });
      if (error.response.status === 401) this.$router.push({ name: 'Login' });
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
