import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("project-2", "Chimeras", "img/projects/Chimeras.png", `
    <div class="paragraph">
        <strong>Chimeras</strong> is a competing deckbuilding board game where you combine animal parts to figth your oponents.
        <br/><br/>
        I worked on the game balance of the game and designed the elemental affinity system with other members of the team to have each synergy balanced against each other.
    </div>
    <div class="paragraph center">
        <img src="img/projects/ChimerasBoard.png" alt="Board">
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li>A game for 2 to 4 players</li>
        <li>100 different cards</li>
        <li>Elemental affinity mechanic that give more depth to which animal parts to use</li>
        </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
        Rulebook available on <a href="https://drive.google.com/file/d/1G_u2itUwEb2oRL0irykxBWPwe6CEnRQ3/view?usp=sharing" target="_blank">PDF</a> (Spanish Only).
    </div>
    </div>

    <div class="paragraph center">

    </div>
    `, "#951990",true,true),

    new ProjectData("project-6", "Factorial(!)", "img/projects/Factorial.gif", `
    <div class="paragraph">
      <strong>Factorial(!)</strong> is a automation game mock up with a focus on the design of a datagram to show the data in real time of the world. 
      In this mock up there are 4 different areas called sectors which are independent of each other, each sectors have different machines and other elements typical of automation games like energy generators, resource extractors and assemblers that transform one or more resources into others more complex.
      <br/><br/>
     For this project I worked compleatly by myself in every aspect of it. I did all the progamming, for both the different machines that generate the data for the simulation and the graphics where that data is displayed,
     except for the lines charts that I used a Unity Package called <a target="_blank" href="https://github.com/XCharts-Team/XCharts/tree/master?tab=readme-ov-file"> XCharts</a>. 
      
            </div>
            <div class="paragraph center">
              <img src="img/projects/Factorial.png" alt="BoardFactorial">
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
    `, "#4CB4F6", true, false),
    new ProjectData("project-7", "D&D analysis and rebalance", "img/projects/DnD-Emblem.png", `
    <div class="paragraph">
                This is an analysis I did for the tabletop roleplaying game <strong>Dungeons and Dragons 5th Edition (2014) </strong> on a spreedsheet using formulas to calculate diferent metrics 
                and giving new features to try to make gameplay more balanced.
                <br/>Data can be found <a target="_blank" href="https://docs.google.com/spreadsheets/d/1ZbvJzJT3xySmzs-Fnf4qM9VBFbLObpns31SWlJz8Wr4/edit?usp=sharing">here</a>.
            </div>

            <div class="paragraph">
              Notes:
              <ul>
              <li>In the formulas sheet you can see the formulas used for the damage per round (DPR) step by step to be more undestandable, with a generic format to be usable to calculate probabilities for other things that aren't DnD </li>
              <li>Enemies stats data is taken from <a target="_blank" href="https://www.reddit.com/r/dndnext/comments/jnol3b/table_of_average_acs_saving_throws_by_cr/">this Reddit Post</a></li>
              </ul>
          </div>
<!--
            <div class="paragraph">
              <div class="notice">
                You can download and try the app for free or purchase it directly from <a href="http://www.somewbsite.com/" target="_blank">Some website</a>
              </div>
            </div>
            -->
            
            </div>`, "#00AC47"),
];
