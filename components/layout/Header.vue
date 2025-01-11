<script lang="ts" setup>
onMounted(() => {
  const navbar = document.getElementById('navbar')!
  let windowHeight = 0
  let lastScroll = 0

  const navbarHeight = navbar.offsetHeight

  window.addEventListener('scroll', () => {
    windowHeight = window.scrollY

    if (windowHeight > navbarHeight) {
      navbar.classList.add('navbar-hide')
      // setTimeout(() => {
      // }, 500);
    }
    if (windowHeight < lastScroll) {
      navbar.classList.add('navbar-scrolled')
      navbar.classList.remove('navbar-hide')
      // navbar.classList.remove("navbar-scrolled");
    }

    if (windowHeight === 0) {
      navbar.classList.remove('navbar-scrolled')
    }

    lastScroll = window.scrollY

    // console.log('window', windowHeight)
    // console.log('last scroll', lastScroll)
  })
})
</script>

<template>
  <header
    id="navbar"
    class="navbar"
  >
    <div class="container">
      <span class="navbar-brand">Mamiratour</span>
      <div class="navbar-menu">
        <NuxtLink
          to="/"
          class="navbar-item"
        >
          Home
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="navbar-item"
        >
          About
        </NuxtLink>
        <NuxtLink
          to="/package"
          class="navbar-item"
        >
          Package
        </NuxtLink>
        <NuxtLink
          to="/contact"
          class="navbar-item"
        >
          Contact
        </NuxtLink>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.navbar {
  position: absolute;
  top: 0;
  background: #fff;
  padding: 30px 0;
  width: 100%;
  z-index: 9999;
  transition: all 0.3s ease;

  &.navbar-scrolled {
    position: fixed;
    top: 0;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    .navbar-item {
      color: #000;

    }
  }

  &.navbar-hide {
    top: -200px;
  }

  // .navbar-nav {
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  // }

  .navbar-brand {
    font-family: "Satisfy", cursive;
    color: #2f4bbb;
    font-size: 32px;
    transition: all 0.3s ease;
  }

  .navbar-item {
    color: #000;
    text-decoration: none;
    margin: 0 10px;
    font-size: 18px;
    transition: all 0.3s ease;

    &.router-link-active {
      color: #1c48ad;
    }
  }
}
</style>
