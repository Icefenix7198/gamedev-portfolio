<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        Hi! My name is Éric Segovia and I'm a video game developer from Spain, primarily focused on the <strong>design</strong> side of development.<br/>
        While my main interest lies in game design, especially combat and level design, I also enjoy the programming aspects of video games, although I'm lacking in this aspect.
      </div>

      <div style="margin-top: 20px;"> You can see the <router-link to="/game-projects">videogames I worked in</router-link>, and <router-link to="/other-projects">other design projects</router-link>, which aren't videogames.</div>

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
