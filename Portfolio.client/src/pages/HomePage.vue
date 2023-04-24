<template>
  <div class="cardParent">
    <div class="mainCard">

      <div class="container-fluid">
        <div class="row cardHeight">
          <div class="col-5 p-0">
            <img src="../assets/img/ryan.jpg" alt="" class="img-fluid ryanImage blackBorder">
          </div>
          <div class="col-7 backGreen blackBorder p-0">
            <p class="aboutMeText">Hi there! My name is Ryan Thrall and I’m a web developer and graduate of CodeWorks. I
              enjoy creating clean
              functional websites for a variety of purposes. I got interested in web development in high school after
              taking some computer science classes. I enjoyed making small projects but after studying at CodeWorks I
              learned the best practices and code organization which really helped with developing larger applications.
              Thanks for stopping by, and I hope you enjoy browsing some of my work.</p>
          </div>
        </div>
      </div>




    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
.cardParent {
  width: 100%;
  height: calc(100vh - 32px - 64px);
  margin: 0 auto;
  position: relative;
  // background-color: orange;
}

.mainCard {
  width: 90%;
  height: 80vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // background-color: yellow;
}

.ryanImage {
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  // object-position: center;
}

.blackBorder {
  border: 2px solid black;
}

.backGreen {
  background-color: #3BB273;
}

.cardHeight {
  height: 80vh;
}
</style>
