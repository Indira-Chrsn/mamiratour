<script setup></script>

<template>
  <section class="banner">
    <div class="banner__img-container">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="banner image"
        class="banner__img"
      >
    </div>
    <div class="banner__content">
      <h1 class="banner__title">
        Welcome to <br> <span>Mamira Tour & Travel</span>
      </h1>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .banner {
  position: relative;
  display: flex;
  /* justify-content: center;
  align-items: center; */
  width: 100%;
  height: 86vh;
  margin-top: 100px;
  /* margin: 30px 0; */
  /* border-radius: 30px; */
  overflow: hidden;

  &__img-container {
    position: absolute;
    top: 0;
    left: 30px;
    right: 30px;
    /* width: 100%; */
    height: 100%;
    border-radius: 30px;
    overflow: hidden;
    z-index: -1;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 0;
    }
  }

  &__img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  &__content {
    position: absolute;
    bottom: 0;
    right: 30px;

    border-top-left-radius: 30px;
    padding: 40px;
    background-color: #fff;
    z-index: 1;
  }

  &__title {
    color: #000;
    font-size: 52px;

    span {
      font-family: "Satisfy", cursive;
      font-weight: 400;
      color: #1c48ad;
      font-size: 54px;
    }
  }
}
</style>
