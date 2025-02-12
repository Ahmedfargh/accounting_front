<template>
  <div class="container py-1 row">
    <div class="col-12">
      <div class="card container-fluid">
        <div class="card-header">
          <h3>بيانات الفاتوره</h3>
        </div>
        <div class="card-body">
          <div class="input-group" style="width: 25% !important">
            <select name="" class="form-control" id="">
              <option value="-1">اضغط لاختيار مورد</option>
            </select>
            <div class="input-group-append">
              <label class="btn btn-outline-secondary"> المورد </label>
            </div>
          </div>
        </div>
      </div>
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
export default {};
</script>

<style></style>
