<template>
  <el-dialog
      title="afasfafa"
      v-model="modalVisibility"
      width="30%"
      :before-close="closeModal">
    <div>
      <component :is="modals[modalProperties.type]" :modalProperties="modalProperties" />
    </div>
  </el-dialog>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import modals from './modals'

export default {
  name: 'ModalBasic',
  components: { ...modals },
  data() {
    return { modals }
  },
  computed: {
    ...mapState('utilities', ['modalVisibility', 'modalProperties']),
  },
  methods: {
    ...mapMutations('utilities', ['SET_MODAL_VISIBILITY']),
    closeModal() {
      this.SET_MODAL_VISIBILITY()
    }
  }
}
</script>