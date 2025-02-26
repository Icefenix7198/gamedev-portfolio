<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm a video game design and development student from Spain, primarily focused on the <strong>design</strong> side of development.<br/>
        While my main interest lies in game design, especially character and level design, I also enjoy the programming aspects of video games, although I'm lacking in this aspect.
      </div>

      <!--<div style="margin-top: 20px;">I've worked on  <router-link to="/game-projects">stuff</router-link>, on <router-link to="/other-projects">other stuff</router-link>, and took part in <router-link to="/resume">a few things</router-link> as well.</div> -->

      <div style="margin-top: 40px;">Aside from video games, I am also passionate about martial arts, specifically judo, in which I achieved the rank of black belt, and board games, primarily tabletop roleplaying games, as they allow me to create stories with other people in an immersive way.</div>
    </div>

    <div class="photo">
      <img src="img/avatarMe.png" alt="Avatar of John" /> 
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 10px;
    padding-left: 80px;
  }
}

</style>
