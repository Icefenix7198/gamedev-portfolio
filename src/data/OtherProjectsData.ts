import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-6", "Factorial(!)", "img/projects/Factorial.gif", `
    <div class="paragraph">
      <strong>Factorial(!)</strong> is a automation game mock up with a focus on the design of a datagram to show the data of the world. 
      In this mock up there are 4 different areas called sectors which are independent of each other, each sectors have different machines and other elements typical of automation games like energy generators, resource extractors and assemblers.
      <br/><br/>
     For this project I worked compleatly by myself in every aspect of it. I did all the progamming, for both the different machines that generate the data for the simulation and the graphics where that data is displayed,
     except for the lines charts that I used a Unity Package called <a target="_blank" href="https://github.com/XCharts-Team/XCharts/tree/master?tab=readme-ov-file"> XCharts</a>. 
      
            </div>
            <div class="paragraph center">
              <img src="img/projects/Factorial.png" alt="Board">
          </div>

          <div class="paragraph">
            Main features :
            <ul>
            <li>A Datagram with: a Tree Map to show remaining materials on mines for extracttion, a Sankey dyagram to show stored resources and how they transform and a Line chart to show energy consume with 2 different display modes </li>
            <li>A simple tutotial to learn the basics on how to use the simulation</li>
            <li>A mode to see the machines producing instead of the datagram</li>
            <li>All the data is stored on a CSV on the Data folder</li>
            </ul>
        </div>
<!--
        <div class="paragraph center">
          <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Sultans Of Sing Screenshot" />
          <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Sultans Of Sing Screenshot" />
          <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Sultans Of Sing Screenshot" /> 
        </div>
        -->
    `, "#c10606", false, true),
    new ProjectData("project-7", "Drew Blood", "img/projects/project-7-icon.png", `
    <div class="paragraph">
                <strong>Drew Blood</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
                <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@karolina-grabowska">Karolina Grabowska</a>.
            </div>

            <div class="paragraph">
              Main features :
              <ul>
              <li>Some stuff</li>
              <li>Some great stuff</li>
              <li>More awesome stuff</li>
              <li>And then some</li>
              </ul>
          </div>

            <div class="paragraph">
              <div class="notice">
                You can download and try the app for free or purchase it directly from <a href="http://www.somewbsite.com/" target="_blank">Some website</a>
              </div>
            </div>

            <div class="paragraph center">
                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" />
                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" />
                <img class="pc-screenshot" src="https://fakeimg.pl/534x300/" alt="Drew Blood Screenshot" /> 
            </div>`, "#1ca1e2"),
    new ProjectData("project-8", "The Art of Walking", "img/projects/project-8-icon.png", `
    <div class="paragraph">
                <strong>The Art of Walking</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
            </div>

            <div class="paragraph center">
              <a href="https://play.google.com/store/apps/details?id=someapp" target="_blank"><img src="img/projects/play-store-logo.png" alt="Play Store badge" /></a>
          </div>

          <div class="paragraph">
          Main features :
          <ul>
          <li>Some stuff</li>
          <li>Some great stuff</li>
          <li>More awesome stuff</li>
          <li>And then some</li>
          </ul>
      </div>

            <div class="paragraph">
              <div class="notice">
                Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
              </div>
            </div>

            <div class="paragraph center">
                <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="The Art of Walking Screenshot" />
                <img class="phone-screenshot" src="https://fakeimg.pl/300x534/" alt="The Art of Walking Screenshot" />
            </div>`),
    new ProjectData("project-9", "Nikolable", "img/projects/project-9-icon.png", `
     <div class="paragraph">
                <strong>Nikolable</strong> is a thing of beauty that I am so proud of. I could write about it for hours.
                <br/>Image by <a target="_blank" href="https://www.pexels.com/fr-fr/@goumbik">Lukas</a>.
            </div>

            <div class="paragraph">
        Main features :
        <ul>
        <li>Some stuff</li>
        <li>Some great stuff</li>
        <li>More awesome stuff</li>
        <li>And then some</li>
        </ul>
    </div>

            <div class="paragraph">
              <div class="notice">
                Source code available on <a href="https://github.com/yourself" target="_blank">GitHub</a>.
              </div>
            </div>`),
];
