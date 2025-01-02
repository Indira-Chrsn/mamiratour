<script setup lang="ts">

</script>

<template>
  <div>
    <section class="banner">
      <div class="banner__img-container">
        <img
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eXxlbnwwfHwwfHx8MA%3D%3D"
          alt="Banner image"
          class="banner__img"
        >
      </div>
      <div class="banner__content">
        <h1 class="banner__title">
          Contact <span>:3</span>
        </h1>
      </div>
    </section>

    <section class="contact">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="contact__content">
              <h2 class="contact__title">
                About Us
              </h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut diam sed dolor ultricies faucibus non at felis. Phasellus vel consequat risus, dapibus condimentum enim.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="contact__content">
              <h2 class="contact__title">
                Contact
              </h2>
              <div class="row">
                <div class="col-md-3">
                  <p class="contact__label">
                    Address:
                  </p>
                </div>
                <div class="col-md-8">
                  <p class="contact__text">
                    Bedulu, Gianyar, Bali
                  </p>
                </div>
                <div class="col-md-3">
                  <p class="contact__label">
                    Phone:
                  </p>
                </div>
                <div class="col-md-8">
                  <a
                    href="https://wa.me/+624249458290"
                    target="_blank"
                    class="contact__link"
                  >
                    +6242-4945-8290
                  </a>
                </div>
                <div class="col-md-3">
                  <p class="contact__label">
                    Email:
                  </p>
                </div>
                <div class="col-md-8">
                  <a
                    href="mailto:mamira@gmail.com"
                    class="contact__link"
                  >
                    mamira@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="contact__content">
              <h2 class="contact__title">
                Any Questions?
              </h2>
              <div class="row">
                <div class="col-md-3">
                  <p class="contact__label">
                    Address:
                  </p>
                </div>
                <div class="col-md-8">
                  <p class="contact__text">
                    Bedulu, Gianyar, Bali
                  </p>
                </div>
                <div class="col-md-3">
                  <p class="contact__label">
                    Phone:
                  </p>
                </div>
                <div class="col-md-8">
                  <a
                    href="https://wa.me/+624249458290"
                    target="_blank"
                    class="contact__link"
                  >
                    +6242-4945-8290
                  </a>
                </div>
                <div class="col-md-3">
                  <p class="contact__label">
                    Email:
                  </p>
                </div>
                <div class="col-md-8">
                  <a
                    href="mailto:mamira@gmail.com"
                    class="contact__link"
                  >
                    mamira@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
  .banner {
    position: relative;
    display: flex;
    width: 100%;
    height: 50vh;
    margin-top: 100px;
    overflow: hidden;

    &__img-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: -1;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        z-index: 0;
      }
    }

    &__img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }

    &__content {
      margin: auto;
      z-index: 1;
    }

    &__title {
      color: #f2ffcf;
      font-size: 52px;

      span {
        color: #c6f051;
      }
    }
  }

  .contact {
    padding: 60px 0;

    &__title {
      margin-bottom: 25px;
    }

    p {
      margin-bottom: 5px;
    }
  }
</style>
