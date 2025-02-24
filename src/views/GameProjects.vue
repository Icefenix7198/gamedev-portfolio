<template>
  <div>
    <h1>Stuff</h1>

    <div style="margin-bottom: 30px;">
      The following are some video game project I've made or heavily contributed to during collage. You can see a synopsys of what the project is about, what I contributed with and the main features of the project.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <!--<div style="margin-top: 20px;">
      There is more to see on <a target="_blank" href="https://someexternalwebsite.com">some external website</a>
    </div>-->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import gameProjectsData from "@/data/GameProjectsData.ts";

export default Vue.extend({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: gameProjectsData,
    };
  },
});
</script>
