<template>
  <div>
    <h1>Resume</h1>
<!--
    <div class="paragraph">
      I'm <strong>John Matrix</strong>, a former Delta Force operative with lots of experience, lots of training and huge muscles.
      <br />After graduating from kindergarten, I've been enrolled in the army for 25 years, where I learned to destroy things in an amazing number of ways.
      <br />I joined the Delta Force because I thought it was Greek lessons, but I quickly adapted to this unexpected environment and became a key element.
      <br />I love teamwork, but I can also go in solo depending on the mission requirements.
      <br />
      <br />Right now I'm trying to find inner peace after I've read some personal development books. I'm looking for a monk job so if you have any opportunity feel free to 
      <router-link to="/contact">contact me</router-link>.
      <br />
      <br />Besides war, I'm passionate about firearms, martial arts, explosions, push-ups and flowers.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/resume-en.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
        <a class="download-link" href="d/cv-fr.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Descargar en PDF 🇫🇷</a>
        <div style="clear:both"></div>
      </div>
    
    </div>
    -->
    <!--
    <div class="photo">
      <img src="img/resume-photo.png" alt="Photo of John" />
    </div>
    -->

    <div style="clear:both"></div>

    <div class="full-content">

      <!--
      <h2>Work experience</h2>

      <h3>Operation Classified - Delta Force</h3>
      <h4>2018-2019</h4>

      <div>It's classified so I can't speak about it.</div>

      <div class="tech-stack">Firearms, knives, grenades, Hummer vehicle, parachute,...</div>

      <h3>Operation Classified - Delta Force</h3>
      <h4>2015-2017</h4>

      <div>It's classified so I can't speak about it.</div>

      <div class="tech-stack">Even more Firearms, knives, grenades, Hummer vehicle, parachute,...</div>

      <h3>Operation Classified - Delta Force</h3>
      <h4>2012-2015</h4>

      <div>It's classified so I can't speak about it.</div>

      <div class="tech-stack">Firearms, knives, grenades, Hummer vehicle, parachute,...</div>
-->
      <h2>Skills</h2>

      <div class="Code Skills" style="float:left">
        <h3>Code Skills</h3>
        
        <SkillRate name="C++" :rate="3" />
        <SkillRate name="C#" :rate="3" />
        <SkillRate name="Python" :rate="1" />
        <SkillRate name="Flutter" :rate="2" />
        <SkillRate name="Wwise" :rate="2" />
      </div>

      <div class="Other Skills" style="float:right">
        <h3>Other Skills</h3>
        <SkillRate name="Unity" :rate="4" />
        <SkillRate name="Excel" :rate="4" />
        <SkillRate name="GitHub" :rate="3" />
        <SkillRate name="Adobe Photoshop" :rate="3" />
        <SkillRate name="Adobe Ilustrator" :rate="3" />
        <SkillRate name="Maya" :rate="2" />
        <SkillRate name="Substance Painter" :rate="1" />
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Colegi Mare de Deu dels Angels (2019-2021)</h3>
      <h4>Technological Baccalaureate</h4>

      <h3>Centre de la Imatge i la Tecnologia Multimedia(CITM) — UPC (2021-Current)</h3>
      <h4>Degree in Video Game Design and Development</h4>

      <h2>Languages</h2>

      <h3>Spanish</h3>
      <div>Native Level</div>

      <h3>Catalan</h3>
      <div>Native Level</div>

      <h3>English</h3>
      <div>C1 level</div>

<!--
      <h2>Besides...</h2>
      <div>
        <h3>I ❤️ Violence</h3>
        <div>I find it really soothing to just shoot at bad guys</div>

        <h3>I 🧡 Sports</h3>
        <div>I used to be thin but then I ingested 10 kilos of steroids and proteins a day while doing 1000 push-ups.</div>

        <h3>I 💛 Politics</h3>
        <div>I hope I can have a career here someday but I might have temper issues.</div>

        <h3>I 💚 Flowers</h3>
        <div>Especially the big ones, with the trunk and leaves.</div>
-->
      </div>
    </div>
  <!--</div>-->
</template>

<script lang="ts">
import Vue from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
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
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>
