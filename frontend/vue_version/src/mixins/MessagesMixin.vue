<script>
export default {
  name: 'MessagesMixin',
  methods: {
    errorMessage(error) {
      this.$message({
        type: 'error',
        message: error.message,
      });
      if (error.response.status === 401) this.$router.push({ name: 'Login' });
    },
  }
};
</script>
