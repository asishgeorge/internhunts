<template>
  <div class="row">
    <div class="col-10 tb">
      <q-input
        rounded
        outlined
        v-model="t"
        placeholder="Enter the area of Internship you are looking for."
      />
    </div>
    <div class="col-2 text-center bn">

      <q-btn
        color="primary "
        label="Search"
        class="text-center"
        outline
        rounded
        size="lg"
        icon="search"
        v-on:click="searched()"
      ></q-btn>

    </div>

  </div>
</template>

<script>

export default {
  name: 'Search',
  data () {
    return {
      t: ''
    }
  },
  methods: {
    searched () {
      if (this.t !== '') {
        const p = this.t.trim().replace(' ', '-')
        this.$router.push({ name: 'results', params: { data: p } })
      } else {
        alert('Enter some search parameters')
      }

    }
  }

}
</script>

<style scoped>
@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*="col-"] {
    width: 100%;
  }

  .container {
    width: 100%;
  }
  .tb {
    padding: 10px;
  }

  .bn {
    padding: 10px;
  }
}
</style>