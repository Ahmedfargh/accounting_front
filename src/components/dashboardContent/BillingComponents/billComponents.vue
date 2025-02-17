<template>
  <div class="container-fluid py-1 row">
    <div class="col-12">
      <div class="card container-fluid">
        <div class="card-header">
          <h3>بيانات الفاتوره</h3>
        </div>
        <div class="card-body">
          <div class="input-group" style="width: 25% !important">
            <input
              type="text"
              name=""
              v-model="this.selected_name"
              class="form-control"
              id=""
              disabled
            />

            <div class="input-group-append">
              <button class="btn btn-secondary" @click="show()">المورد</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12" id="data">
      <div class="input-group">
        <input
          type="text"
          name=""
          v-model="name_key"
          class="form-control"
          id=""
        />
        <button
          class="btn btn-info input-group-addon"
          @click="searchSupplierByName()"
        >
          <i class="material-symbols-rounded opacity-10" style="">search</i>
        </button>
      </div>
      <table class="table table-striped" id="suppliers_table">
        <thead>
          <tr>
            <td>اسم المورد</td>
          </tr>
        </thead>
        <tbody v-if="supplier">
          <tr v-for="(sup, index) in supplier" :key="index">
            <td>{{ sup.name }}</td>
            <td>
              <button class="btn btn-primary" @click="select(index)">
                اختار
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-12" id="products">
      <table class="table table-strip">
        <thead>
          <tr>
            <td>القسم</td>
            <td>المورد</td>
            <td>اسم المنتج</td>
            <td>رقم المنتج</td>
          </tr>
        </thead>
      </table>
    </div>
    <table class="table table-striped col-12">
      <thead>
        <td>سعر الشراء</td>
        <td>سعر البيع</td>
        <td>الاجمالى</td>
        <td>السعر</td>
        <td>الكميه</td>
        <td>اسم المنتج</td>
        <td>رقم المنتج</td>
      </thead>
      <tbody>
        <tr id="no_0">
          <td>
            <input
              type="number"
              class="form-control"
              placeholder="سعر شراء المنتج المسجل المنتج"
            />
          </td>
          <td>
            <input
              type="number"
              class="form-control"
              placeholder="سعر بيع المنتج"
            />
          </td>
          <td>
            <input type="number" class="form-control" placeholder=" الاجمالى" />
          </td>
          <td>
            <input
              type="number"
              class="form-control"
              placeholder="سعر المنتج"
            />
          </td>

          <td>
            <input
              type="number"
              class="form-control"
              placeholder="كميه المنتج"
            />
          </td>
          <td>
            <input type="text" class="form-control" placeholder="اسم المنتج" />
          </td>
          <td>
            <input
              type="number"
              class="form-control"
              placeholder="رقم المنتج"
              @dblclick="showProducts()"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import $ from "jquery";
import "jquery-ui/ui/widgets/dialog";
import "jquery-ui/themes/base/all.css";
const config = require("../../../../config.js");
const axios = require("axios");
export default {
  mounted: function () {
    $("#data").hide();
    $("#products").hide();
  },
  data() {
    return {
      supplier: null,
      selected: null,
      name_key: null,
      selected_name: null,
    };
  },
  methods: {
    show: function () {
      this.load();
      $("#data").dialog({
        modal: true,
      });
    },
    showProducts: function () {
      $("#products").dialog({
        modal: true,
      });
    },
    load: async function () {
      const data = await axios.get(
        config.backendurl + "api/v1/get/all/suppleirs",
        {
          body: localStorage.getItem("token"),
        }
      );
      this.supplier = data.data;
      console.log(data.data);
      return data.data;
    },
    select: function (supplier) {
      this.selected = this.supplier[supplier];
      this.selected_name = this.selected.name;
    },
    searchSupplierByName: async function () {
      console.log(this.name_key);
      const data = await axios.get(
        config.backendurl + "api/v1/search/supplier/by/name",
        {
          params: { token: localStorage.getItem("token"), name: this.name_key },
        }
      );
      console.log(data);
      this.supplier = data.data;
    },
  },
};
</script>

<style></style>
