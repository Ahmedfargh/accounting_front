<template>
  <div class="card">
    <div class="card-header d-flex justify-content-between p-3 pt-2">
      <div
        class="icon icon-md icon-shape bg-gradient-dark shadow-dark text-center border-radius-lg"
      >
        <i class="material-symbols-rounded opacity-10"></i>
      </div>
      <div class="text-start pt-1">
        <h4 class="mb-0">
          {{ mainHeader }}
        </h4>
        <p class="text-sm mb-0 text-capitalize">{{ this.data.Value }}</p>
      </div>
    </div>
    <hr class="dark horizontal my-0" />
    <div class="card-footer p-3">
      <p class="mb-0 text-start">
        <span class="text-success text-sm font-weight-bolder ms-1">{{
          this.data.LastRead
        }}</span
        >{{ explaination_text }}
      </p>
    </div>
  </div>
</template>
<script>
import config from "../../../config.js";
export default {
  beforeMount: function () {
    this.Update();
  },
  onMounted: function () {
    setInterval(this.Update(), this.updateRate);
  },
  data() {
    return {
      url: config.backendurl,
      returnedData: [],
      updateRate: 1,
      mainHeader: this.total_header,
      explaination_text: this.explaination,
      last_period: "",
      data: [],
    };
  },
  props: {
    url_link: {
      type: String,
      required: true,
    },
    total_header: {
      type: String,
      required: true,
    },
    explaination: {
      type: String,
      required: true,
    },
  },
  methods: {
    Update: function () {
      const axios = require("axios");
      axios
        .get(this.url + this.url_link, {
          body: {
            jwt: localStorage.getItem("token"),
          },
        })
        .then((Res) => {
          console.log(Res);
          this.data = Res.data;
        });
    },
  },
};
</script>
