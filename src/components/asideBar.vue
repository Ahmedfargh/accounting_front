<template>
  <aside
    class="sidenav navbar navbar-vertical navbar-expand-xs border-radius-lg fixed-end me-2 rotate-caret bg-white my-2"
    id="sidenav-main"
  >
    <div class="sidenav-header">
      <i
        class="fas fa-times p-3 cursor-pointer text-dark opacity-5 position-absolute start-0 top-0 d-none d-xl-none"
        aria-hidden="true"
        id="iconSidenav"
      ></i>
      <a
        class="navbar-brand px-4 py-3 m-0"
        href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard "
        target="_blank"
      >
        <i class="material-symbols-rounded opacity-10">Finance</i>
        <span class="me-1 text-sm text-dark">نظام المحاسبة</span>
      </a>
    </div>
    <hr class="horizontal dark mt-0 mb-2" />
    <div
      class="collapse navbar-collapse px-0 w-auto"
      id="sidenav-collapse-main"
    >
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link text-dark" href="/dashboard">
            <i class="material-symbols-rounded opacity-10">dashboard</i>
            <span class="nav-link-text me-1">لوحة القيادة</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="/products">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#5f6368"
            >
              <path
                d="M520-400h80v-120h120v-80H600v-120h-80v120H400v80h120v120ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z"
              />
            </svg>
            <span class="nav-link-text me-1">منتجات</span>
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link text-dark" href="/bills">
            <i class="material-symbols-rounded opacity-10">receipt_long</i>
            <span class="nav-link-text me-1">الفواتير</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="../pages/virtual-reality.html">
            <i class="material-symbols-rounded opacity-10">view_in_ar</i>
            <span class="nav-link-text me-1">الواقع الافتراضي</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link active bg-gradient-dark text-white"
            href="../pages/rtl.html"
          >
            <i class="material-symbols-rounded opacity-10"
              >format_textdirection_r_to_l</i
            >
            <span class="nav-link-text me-1">RTL</span>
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link text-dark" href="../pages/notifications.html">
            <i class="material-symbols-rounded opacity-10">notifications</i>
            <span class="nav-link-text me-1">إشعارات</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="../pages/profile.html">
            <i class="material-symbols-rounded opacity-10">person</i>
            <span class="nav-link-text me-1">حساب تعريفي</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="../pages/sign-in.html">
            <i class="material-symbols-rounded opacity-10">login</i>
            <span class="nav-link-text me-1">تسجيل الدخول</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-dark" href="../pages/sign-up.html">
            <i class="material-symbols-rounded opacity-10">assignment</i>
            <span class="nav-link-text me-1">اشتراك</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {};
</script>

<style></style>
