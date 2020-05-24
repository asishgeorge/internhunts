<template>
  <div class="col-3 q-ma-sm shadow-1">
    <q-card
      class="my-card"
      flat
      bordered
    >
      <q-card-section vertical>
        <q-card-section class="q-pt-xs">
          <div class="text-overline text-orange">{{intern.source}}</div>
          <div class="text-h5 q-mt-sm q-mb-xs"><a
              target="_blank"
              :href="intern.productURL"
              class="href"
            >{{intern.product}}</a></div>
          <div class="text-subtitle"><a
              target="_blank"
              :href="intern.companyURL"
              class="href"
            >by {{intern.companyName}}</a></div>
        </q-card-section>

        <q-separator />
        <q-card-section>
          <div class="text-caption text-grey">
            <span>
              Duration : {{intern.duration}}
            </span><br>
            <span>
              Internship Start Date : {{intern.startDate}}
            </span><br>
            <span>
              Incentives : {{intern.incentives}}
            </span><br>
            <span>
              Posted On : {{intern.postedOn}}
            </span><br>

            <span>
              Apply By : {{intern.applyBy}}
            </span><br>
          </div>
        </q-card-section>
      </q-card-section>

      <q-separator class="absolute-bottom q-mb-xl" />
      <q-card-actions class="absolute-bottom ">

        <q-btn
          flat
          color="primary"
          class="q-ml-sm"
        >
          <a
            class="href text-primary"
            :href="intern.productURL"
            target="_blank"
          >
            View More
          </a>
        </q-btn>
      </q-card-actions>
    </q-card>

  </div>
</template>

<script>
export default {
  name: 'WorkCard',
  props: ['intern']
}
</script>

<style>
.href {
  text-decoration: none;
  color: black;
}

.my-card {
  width: 100%;
  max-width: 350px;
  height: 400px;
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