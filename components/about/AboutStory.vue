<script lang="ts" setup>
const article = ref(`<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vel officiis maxime exercitationem ea repellendus neque quasi eos reprehenderit, inventore dignissimos repudiandae laboriosam enim vitae, laudantium deserunt iure aspernatur aut.</p>`)
</script>

<template>
  <div>
    <section class="about-story">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-3">
            <h2 class="about-story__title">
              The <span>MamiraTour</span> Story
            </h2>
          </div>
          <div class="col-md-7">
            <p class="about-story__body-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              sit amet nisi non nisi euismod finibus nec eget diam. Aliquam
              fermentum metus vitae mi tincidunt, in bibendum libero aliquet.
              Curabitur eget ipsum nec tortor ullamcorper cursus a vehicula
              dui. Phasellus non dui mattis, sollicitudin leo at, vehicula
              dui.
            </p>

            <p class="about-story__body-text">
              Sed non ex vel risus vehicula viverra ut ac enim. Praesent
              tempor accumsan porttitor. Proin ut consectetur felis, vitae
              suscipit mauris. Nulla vitae congue lorem. Suspendisse gravida
              convallis elementum. Integer ullamcorper at lorem at
              condimentum.
            </p>

            <p class="about-story__body-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              sit amet nisi non nisi euismod finibus nec eget diam. Aliquam
              fermentum metus vitae mi tincidunt, in bibendum libero aliquet.
              Curabitur eget ipsum nec tortor ullamcorper cursus a vehicula
              dui. Phasellus non dui mattis, sollicitudin leo at, vehicula
              dui.
            </p>

            <p class="about-story__body-text">
              Sed non ex vel risus vehicula viverra ut ac enim. Praesent
              tempor accumsan porttitor. Proin ut consectetur felis, vitae
              suscipit mauris. Nulla vitae congue lorem. Suspendisse gravida
              convallis elementum. Integer ullamcorper at lorem at
              condimentum.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.about-story {
  background-color: #f8f8f8;
  padding: 100px 0;

  &__header {
    margin-bottom: 40px;
  }

  &__title {
    max-width: 150px;
    span {
      font-family: "Satisfy", cursive;
      color: #2f4bbb;
      font-size: 46px;
      font-weight: 400;
    }
  }

  &__body-text {
    text-align: justify;
  }
}
</style>
