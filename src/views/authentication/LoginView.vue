<template class="login">
  <div class="container my-auto" id="centered">
    <HeadComponent />

    <div class="row">
      <div class="col-lg-4 col-md-8 col-12 mx-auto">
        <div class="card z-index-0 fadeIn3 fadeInBottom">
          <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
            <div
              class="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1"
            >
              <h4 class="text-white font-weight-bolder text-center mt-2 mb-0">
                Sign in
              </h4>
              <div class="row mt-3">
                <div class="col-2 text-center ms-auto">
                  <a class="btn btn-link px-3" href="javascript:;">
                    <i class="fa fa-facebook text-white text-lg"></i>
                  </a>
                </div>
                <div class="col-2 text-center px-1">
                  <a class="btn btn-link px-3" href="javascript:;">
                    <i class="fa fa-github text-white text-lg"></i>
                  </a>
                </div>
                <div class="col-2 text-center me-auto">
                  <a class="btn btn-link px-3" href="javascript:;">
                    <i class="fa fa-google text-white text-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body">
            <form role="form" class="text-start">
              <div class="input-group input-group-outline my-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control" v-model="email" />
              </div>
              <div class="input-group input-group-outline mb-3">
                <label class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  v-model="password"
                />
              </div>
              <div
                class="form-check form-switch d-flex align-items-center mb-3"
              >
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="rememberMe"
                  checked
                />
                <label class="form-check-label mb-0 ms-3" for="rememberMe"
                  >Remember me</label
                >
              </div>
              <div class="text-center">
                <button
                  type="button"
                  class="btn bg-gradient-dark w-100 my-4 mb-2"
                  @click="handleLogin()"
                >
                  Sign in
                </button>
              </div>
              <p class="mt-4 text-sm text-center">
                Don't have an account?
                <a
                  href="../pages/sign-up.html"
                  class="text-primary text-gradient font-weight-bold"
                  >Sign up</a
                >
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeadComponent from "../../components/HeadComponent.vue";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async handleLogin() {
      // Handle login logic here
      console.log("Email:", this.email);
      console.log("Password:", this.password);
      const axios = require("axios");
      const config_ = require("../../../config.js");
      console.log({
        email: this.email,
        password: this.password,
      });
      axios
        .get(config_.backendurl + "api/v1/signin", {
          params: {
            email: this.email,
            password: this.password,
          },
        })
        .then((response) => {
          console.log(response.data);
          const login_status = response.data["loging_status"];
          if (login_status == "_DONE_") {
            localStorage.setItem("token", response.data["token"]);
            localStorage.setItem("account", response.data["user"]);
            this.$router.push({ name: "dashboard" });
          } else {
            alert("failed");
          }
        })
        .catch((error) => {
          console.log(error);
          alert("failed");
        });
    },
  },
  components: {
    HeadComponent,
  },
};
</script>
<style scoped>
#centered {
  position: absolute;

  transform: translateX(25%) translateY(50%);
}
</style>
