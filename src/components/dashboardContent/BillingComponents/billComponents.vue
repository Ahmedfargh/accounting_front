<template>
  <div class="container-fluid py-1 row">
    <div class="col-12">
      <div class="card container-fluid">
        <div class="card-header">
          <h3>بيانات الفاتوره</h3>
        </div>
        <div class="card-body">
          <div class="input-group" style="width: 25% !important">
            <select name="" class="form-control" id="" disabled>
              <option v-for="sup in selected" :key="sup._id" :value="sup._id">
                {{ sup.name }}
              </option>
            </select>

            <div class="input-group-append">
              <button class="btn btn-secondary" @click="show()">المورد</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12" id="data">
      <table class="table table-striped" id="suppliers_table">
        <thead>
          <tr>
            <td>اسم المورد</td>
          </tr>
        </thead>
        <tbody>
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
  },
  data() {
    return {
      supplier: this.load(),
      selected: null,
    };
  },
  methods: {
    show: function () {
      $("#data").dialog({
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
      this.supplier = data.data.suppliers;
      console.log(data.data.suppliers);
      console.log(this.supplier);
      return data.data.suppliers;
    },
    select: function (supplier) {
      this.selected = supplier;
    },
  },
};
</script>

<style></style>
