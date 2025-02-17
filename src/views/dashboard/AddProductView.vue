<template>
  <div>
    <MainHead />
    <navBar />
    <SideBar />
    <div class="card container">
      <div class="card-header">
        <h1>اضافه منتج</h1>
      </div>
      <div class="card-body row">
        <div class="row col-lg-6 col-md-6 col-xs-12 col-sm-12 mb-3">
          <div class="input-group">
            <input
              type="text"
              name=""
              id=""
              v-model="Name"
              class="form-control"
            />
            <span class="col-sm-2 col-form-label"> اسم المنتج </span>
          </div>
        </div>
        <div class="row col-lg-6 col-md-6 col-xs-12 col-sm-12 mb-3">
          <div class="input-group mb-3">
            <select class="form-control" id="" v-model="supplier">
              <option
                v-show="suppliers"
                v-for="sup in this.suppliers"
                :key="sup._id"
                :value="sup._id"
              >
                {{ sup.name }}
              </option>
            </select>
            <span class="col-sm-2 col-form-label"> المورد</span>
          </div>
        </div>
        <div class="row col-lg-6 col-md-6 col-xs-12 col-sm-12 mb-3">
          <div class="input-group mb-3">
            <input
              type="number"
              name=""
              id=""
              class="form-control"
              v-model="sellPrice"
            />
            <span class="col-sm-2 col-form-label"> سعر البيع </span>
          </div>
        </div>
        <div class="row col-lg-6 col-md-6 col-xs-12 col-sm-12 mb-3">
          <div class="input-group mb-3">
            <input
              type="number"
              name=""
              id=""
              class="form-control"
              v-model="price"
            />
            <span class="col-sm-2 col-form-label"> سعر الشراء </span>
          </div>
        </div>
        <div class="row col-lg-6 col-md-6 col-xs-12 col-sm-12 mb-3">
          <div class="input-group mb-3">
            <select class="form-control" id="" v-model="category">
              <option
                v-show="categories"
                v-for="cat in categories"
                :key="cat._id"
                :value="cat._id"
              >
                {{ cat.name }}
              </option>
            </select>
            <span class="col-sm-2 col-form-label">القسم </span>
          </div>
        </div>
        <div class="row col-2 mb-3">
          <button class="btn btn-success" @click="saveProduct()">
            <i class="material-symbols-rounded opacity-10">Save</i>
          </button>
        </div>
      </div>
    </div>
    <div class="card container mt-2">
      <div class="card-header row">
        <h3 class="text-center col-lg-3 col-md-3 col-sm-12 col-xs-12">
          المنتجات
        </h3>
        <div
          class="input-group mb-3 col-lg-9 col-md-9 col-sm-12 col-xs-12"
          style="width: 30%"
        >
          <h3 class="text-center col-12">البحث</h3>
          <span class="input-group-addon centerd" id="basic-addon1"
            >الاسم
          </span>
          <input
            type="text"
            class="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
      <div class="card-body">
        <table class="table is-striped" id="table"></table>
      </div>
    </div>
  </div>
</template>

<script>
import MainHead from "../../components/HeadComponent.vue";
import SideBar from "../../components/asideBar.vue";
import navBar from "../../components/navBar.vue";
import config from "../../../config.js";

// Import jQuery and DataTables
import $ from "jquery";
import "datatables.net";
export default {
  beforeMount: async function () {
    this.LoadSupplier();
    this.loadCategories();
    await this.LoadProducts();
    //console.log(Object.values(this.products));
    let table = $("#table").DataTable({
      data: this.products,
      columns: [
        { data: "sell_price", title: "سعر  البيع" },
        { data: "suppliers", title: "موردين" },
        { data: "name", title: "الاسم" },
        { data: "_id", title: "id" },
      ],
      paging: true, // Enable pagination
      searching: true, // Enable search
      ordering: true, // Enable sorting
      info: true, // Enable table information
      buttons: [
        "copy",
        "excel",
        "pdf", // Add buttons for export
      ],

      language: {
        search: "بحث", // Customize search input placeholder
        emptyTable: "لا يوجد منتجات",
        paginate: {
          previous: "السابق",
          next: "التالى",
        },
      },

      responsive: true,
    });
    $("#table tbody").on("click", "tr", async function () {
      var data = table.row(this).data();
      alert(data._id);
      this.selectedProduct = data._id;
    });
    window.addEventListener("keydown", this.handleKeyDown);
  },
  mounted() {},
  components: {
    MainHead,
    SideBar,
    navBar,
  },
  data() {
    return {
      category: null,
      categories: null,
      suppliers: null,
      Name: null,
      sellPrice: null,
      supplier: null,
      price: null,
      products: null,
      selectedProduct: null,
    };
  },

  methods: {
    loadCategories: async function () {
      const axios = require("axios");
      let response = await axios.get(
        config.backendurl + "api/v1/getAllCategory/"
      );
      console.log(response);
      this.categories = response.data;
    },
    saveProduct: function () {
      console.log({
        name: this.Name,
        buy: this.price,
        sell_price: this.sellPrice,
        suppliers: this.supplier,
        category: this.category,
      });
      if (
        this.category &&
        this.Name &&
        this.sellPrice &&
        this.supplier &&
        this.price
      ) {
        const axios = require("axios");
        axios
          .post(config.backendurl + "api/v1/add/product", {
            body: {
              name: this.Name,
              buy: this.price,
              sell_price: this.sellPrice,
              suppliers: this.supplier,
              category: this.category,
            },
          })
          .then((results) => {
            console.log(results);
            localStorage.setItem(results.data.results);
            alert("تمت عمليه الحفظ بنجاح");
          });
      } else {
        alert("خطأ فى البيانات");
      }
    },
    LoadSupplier: async function () {
      try {
        const axios = require("axios");
        let response = await axios.get(
          config.backendurl + "api/v1/get/all/suppleirs/"
        );
        this.suppliers = response.data;
      } catch (error) {
        console.log(error);
        alert("لم يتم تحميل المورديين ");
      }
    },
    LoadProducts: async function () {
      try {
        const axios = require("axios");
        let response = await axios.get(
          config.backendurl + "api/v1/get/all/products/"
        );
        this.products = response.data;
        console.log(this.products);
      } catch (error) {
        console.log(error);
        alert("error in loading data");
      }
    },
    loadProduct: async function () {
      try {
        const axios = require("axios");
        let reponse = await axios.get(
          config.backendurl + "api/v1/get/product",
          {
            body: {
              id: this.selectedProduct,
            },
          }
        );
        alert("good");
        console.log(reponse);
        this.selectedProduct = reponse.data;
        this.Name = this.selectedProduct;
      } catch (error) {
        console.log(error);
        alert("خطأ فى تحميل المنتج");
      }
    },
    handleKeyDown: async function (event) {
      console.log(this.selectedProduct);
      if (event.key === "v") {
        await this.loadProduct();
      }
    },
  },
};
</script>

<style>
@import url("datatables.net-bs5");
@import "https://cdn.datatables.net/1.11.5/css/jquery.dataTables.css";
@import "https://cdn.datatables.net/buttons/1.7.1/css/buttons.dataTables.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/bulma/1.0.1/css/bulma.min.css";
@import "https://cdn.datatables.net/2.2.2/css/dataTables.bulma.css";
.centerd {
  transform: translateY(20%);
  padding-left: 10px;
}
</style>
