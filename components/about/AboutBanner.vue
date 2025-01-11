<script lang="ts" setup>

</script>

<template>
  <section class="about-banner">
    <div class="container">
      <div class="about-banner__info-container">
        <div class="about-banner__info-content">
          <h1 class="about-banner__info-label">
            About Us
          </h1>
          <h2 class="about-banner__info-title">
            Our Mission is To Provide Concise and Effective Legal
          </h2>
          <p class="about-banner__info-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut
            diam sed dolor ultricies faucibus non at felis. Phasellus vel
            consequat risus, dapibus condimentum enim. Nulla risus massa,
            dictum vel sagittis eget, pellentesque a ex.
          </p>
        </div>
      </div>
      <div class="about-banner__image-container">
        <img
          src="https://plus.unsplash.com/premium_photo-1682630628981-e8e02970be27?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Our Team"
          class="about-banner__image"
        >
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-banner {
  @include imageRatio(800, 600, true);

  position: relative;
  display: flex;
  margin-top: 100px;
  // height: 100vh;
  background-color: #051d34;
  padding: 100px 0;
  text-align: right;

  &__info {
    flex: 1;
    max-width: 100%;
    height: 90vh;
    padding-right: 30px;
  }

  &::before {
    content: 'About Us';
    color: #3e4c5c;
    font-size: 60px;
    position: absolute;
    bottom: 100px;
    left: 8%;
  }

  &__info-container {
    position: absolute;
    top: 100px;
    left: 8%;
    z-index: 1;
    text-align: left;
    max-width: 700px;
  }

  &__info-title {
    color: #fff;
    font-size: 70px;
    font-family: 'Times New Roman', Serif, Sans-serif;
  }

  &__info-label {
    color: #fff;
    margin-top: 10px;
    font-size: 14px;
  }

  &__info-text {
    color: #fff;
  }

  &__image-container {
    margin-left: auto;
  }
}
</style>
