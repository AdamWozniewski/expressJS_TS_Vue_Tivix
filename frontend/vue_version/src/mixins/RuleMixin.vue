
<script>
export default {
  name: 'RuleMixin',
  data() {
    const validatePass = (rule, value, callback)  => {
      if (!value) {
        callback(new Error('Please input the password'));
      } else {
        if (this.ruleForm.pass) {
          this.$refs.ruleForm.validateField('pass');
        }
        callback();
      }
    };
    const confirmPass = (rule, value, callback) => {
      if (!value) {
        callback(new Error('Please input the password again'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('Two inputs don\'t match!'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        email: '',
        name: '',
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        email: [
          { required: true, message: 'Please input email address', trigger: 'blur' },
          { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
        ],
        checkPass: [{ validator: confirmPass, trigger: 'blur' }],
        name: [
          { required: true, message: 'Please input name', trigger: 'blur' },
        ]
      }
    }
  },
}
</script>
