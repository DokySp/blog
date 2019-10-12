<template>
  <div>
    <button @click="getAPI">
      asdf
    </button>
    {{ txt }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      txt: ''
    }
  },
  methods: {
    async getAPI () {
      const r = await this.$axios.get('/api')
      this.txt = r.data
    }
  }
}
</script>

<style>

</style>
