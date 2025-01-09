<script lang="ts" setup>

</script>

<template>
  <section class="about section">
    <div class="container">
      <div class="about__header">
        <h2 class="about__title">
          More Than $100 Million Recovered Since 2016
        </h2>
        <p class="about__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut diam
          sed dolor ultricies faucibus non at felis.
        </p>
      </div>
      <div class="about__body">
        <!-- Our Vision -->
        <div class="about__body-content">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-5">
              <div
                class="about__ornament-container about__ornament-container--left"
              >
                <img
                  src="https://t3.ftcdn.net/jpg/04/45/40/12/360_F_445401212_PEDNESWvENUbesA25i8E42auVqffefxY.jpg"
                  alt="our visions"
                  class="about__image"
                >
              </div>
            </div>
            <div class="col-md-4 ms-md-5">
              <div class="about__content">
                <h3 class="about__content-title">
                  Our Vision
                </h3>
                <p class="about__content-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  ut diam sed dolor ultricies faucibus non at felis.
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- Our Mission -->
        <div class="about__body-content">
          <div class="row align-items-center justify-content-center">
            <div class="col-md-5 ms-md-5 order-md-2">
              <div
                class="about__ornament-container about__ornament-container--right"
              >
                <img
                  src="https://t3.ftcdn.net/jpg/04/45/40/12/360_F_445401212_PEDNESWvENUbesA25i8E42auVqffefxY.jpg"
                  alt="our visions"
                  class="about__image"
                >
              </div>
            </div>
            <div class="col-md-4 order-md-1">
              <div class="about__content">
                <h3 class="about__content-title">
                  Our Mission
                </h3>
                <p class="about__content-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  ut diam sed dolor ultricies faucibus non at felis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .about {
  @include imageRatio(500, 300, $className: "ornament");
  margin-top: 50px;

  &__header {
    margin-bottom: 50px;
    max-width: 700px;
    margin: auto;
    text-align: center;
  }

  &__title {
    margin: auto;
  }

  &__desc {
    margin: auto;
    max-width: 80%;
  }

  &__body {
    margin-top: 40px;
  }

  &__body-content {
    margin: 80px 0;
    margin-bottom: 200px;
    gap: 50px;
  }

  &__ornament-container {
    &--left::after {
      content: '';
      position: absolute;
      bottom: -50px;
      left: -50px;
      background-color: #e7a325;
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    &--right::after {
      content: '';
      position: absolute;
      bottom: -50px;
      right: -50px;
      background-color: #0f355c;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
  }
}
</style>
