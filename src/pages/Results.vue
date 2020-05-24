<template>
  <q-page>
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="work_outline"
          to="/"
        />

        <q-toolbar-title>
          Internhunts
        </q-toolbar-title>

        <q-btn
          flat
          dense
          label="Search"
          icon="search"
          to="/"
          class="q-px-lg"
        />
      </q-toolbar>
    </q-header>

    <div
      v-if="this.error === ''"
      class="container"
    >
      <div class="row q-pa-md justify-center">
        <WorkCard
          v-for="internship in d"
          :key="internship.productURL"
          :intern="internship"
        />
      </div>
    </div>
    <div
      v-else
      class="container text-center"
    >
      <div class="vertical-middle sorry">
        <p>
          <img
            src="~assets/sad.svg"
            style="width:30vw;max-width:150px;"
          >
        </p>
        <p class="q-mt-xl">{{this.error}}</p>
      </div>
    </div>

  </q-page>
</template>

<script>
import WorkCard from "components/WorkCard.vue"
import {
  Loading,

  // optional!, for example below
  // with custom spinner
  QSpinnerGears
} from 'quasar'
// import search from 'components/Search.vue'

import axios from "axios"
export default {

  name: 'Result',
  data () {
    return {
      d: [],
      error: ''
    }
  },
  components: { WorkCard },
  mounted () {
    const key = this.$route.params.data;
    if (key) {
      // console.log(key);
      Loading.show({
        spinner: QSpinnerGears,
        message: 'Your Internships are loading.. Hang on...',
        // other props
      })

      const url = "https://internhunts.web.app/get/"
      const local = 'http://localhost:5000/get/'

      axios.get(url + key)
        .then((r) => {
          if (r.status === 200) {
            this.d = r.data
            Loading.hide()
          }
        })
        .catch((e) => {

          this.error = "Some Error Occured. We are unable to fetch your data. Please try later."
          console.log(e);
          Loading.hide()
        })
    } else {
      console.log("No Key Exist");

    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  width: 80%;
}
.contain {
  margin: 20px;
}

.sorry {
  padding-top: 200px;
}

@media only screen and (max-width: 768px) {
  /* For mobile phones: */
  [class*="col-"] {
    width: 100%;
  }

  .container {
    width: 100%;
  }
}
</style>