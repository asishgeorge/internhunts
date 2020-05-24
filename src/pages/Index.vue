<template>
  <q-page class="flex flex-center">

    <div class="container">
      <div class="row">
        <div class="col">
          <h2 class="text-center">Internhunts</h2>
        </div>
      </div>

      <div>

        <search />

      </div>

    </div>
  </q-page>
</template>

<script>
import search from 'components/Search.vue'
export default {
  name: 'PageIndex',
  components: {
    search
  }
}
</script>
<style lang="stylus" scoped>
.container {
  width: 80%;
  margin: 0 auto;
  padding: 0px;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*='col-'] {
    width: 100%;
  }

  .container {
    width: 100%;
  }
}
</style>
