<script lang="ts" setup>

</script>

<template>
  <section class="home-info section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6">
          <div class="home-info__header">
            <h2 class="section__title">
              Why Travel With <br> <span>Mamira Tour</span>
            </h2>
          </div>
          <div class="home-info__body">
            <p class="section__desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut diam sed dolor ultricies faucibus non at felis. Phasellus vel consequat risus, dapibus condimentum enim. Nulla risus massa, dictum vel sagittis eget, pellentesque a ex. Maecenas vel enim tincidunt, tristique massa sed, vestibulum dui. Nam tellus nibh, mattis a condimentum quis, rutrum nec massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi nec placerat urna, ut sollicitudin lacus. Ut id iaculis diam, dignissim blandit ante. Sed volutpat, eros quis volutpat laoreet, nunc orci vehicula ante, vestibulum rutrum enim nibh sed ipsum. Aliquam a ante eu sapien maximus bibendum a a nunc. Duis vitae molestie elit. Nullam nec leo tortor. Maecenas condimentum orci turpis, quis tristique mauris iaculis eu.
            </p>
            <UiButton>Read More</UiButton>
          </div>
        </div>
        <div class="col-md-4 offset-md-1">
          <div class="home-info__image-container">
            <img
              src="https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="banner image"
              class="home-info__image"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .home-info {
    @include imageRatio(100, 130);
    margin-top: 50px;
    &__header {
      // text-align: center;
      margin-bottom: 20px;
    }

    &__image-container::after {
      content: "";
      position: absolute;
      top: -50px;
      right: -50px;
      background-color: #ddd;
      width: 100%;
      height: 100%;
      z-index: -1;
    }

    .section__desc {
      margin-bottom: 30px;
    }
  }
</style>
