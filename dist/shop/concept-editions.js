// Each edition supplies its own lead, copy and editorial selection in display order.
const shopConcepts = [
  {id:'patch', name:'Signal Path', note:'Follow the flow from preparation to the stage.', editions:[
    ['Full circuit','Everything has a place in the signal path.','Trace a workflow from planning through playback and cues.',[6,0,3,2,1]],
    ['Music direction','Put the band on the same page.','Follow the tools that support timing and music-direction cues.',[0,2,3]],
    ['Crew comms','Make the next move clear.','Start with stage cues and follow the path back to the session.',[1,5,0]],
    ['Time & pitch','Find your reference.','Explore the tools for click, pitch preparation and timecode.',[3,4,9]],
    ['Rig overview','See how the pieces fit.','Explore a possible setup from individual assets to the planned bundle.',[7,6,0,1,2,3]]
  ]},
  {id:'lens', name:'From the Wings', note:'A photo essay with the catalog in its margins.', editions:[
    ['Opening frame','Before the room goes dark.','The show starts long before the first note.',[0,1,6],0],
    ['On the road','A setup worth coming back to.','A repeatable starting point for the work that travels with you.',[0,3,7],1],
    ['At the desk','The quiet work before downbeat.','A closer look at the tools used to prepare a live set.',[6,2,4],2],
    ['Crew call','The people in the wings.','Give the crew clear cues and a shared point of reference.',[1,5,2],0],
    ['Final frame','Make room for the moment.','Explore the pieces you can bring to your own setup.',[7,0,6],1]
  ]},
  {id:'library', name:'Tool Library', note:'A searchable catalog built for people who know what they need.', editions:[
    ['Complete index','Find a tool.','Search the full draft catalog by product, format or workflow.',[0,1,2,3,4,5,6,7,8,9]],
    ['Rack shelf','Pull a rack off the shelf.','Browse individual cue, click and tuning tools.',[1,2,3,4,5]],
    ['Software desk','Browse the software.','Explore the app in development and two future software concepts.',[6,8,9,7]],
    ['Build foundations','Start with the session.','Find the core template, planned bundle and related components.',[0,7,3,4,2,1]],
    ['Under consideration','See what’s on the drawing board.','Browse proposed products whose scope is still being worked out.',[8,9,5,7]]
  ]},
  {id:'manual', name:'Field Manual', note:'Read the product details like an annotated handbook.', editions:[
    ['First setup','Open the field manual.','Start with the template, then look up the pieces that go into it.',[0,2,1,3,4]],
    ['Cue handbook','Make the right call.','Look up the distinct roles of music cues, stage cues and line counts.',[2,1,5]],
    ['Timing notes','Keep time.','Read the working notes for click and related timing tools.',[3,9,0]],
    ['Planning appendix','From a set idea to a session.','Read the draft scope for the planning app and companion products.',[6,0,7]],
    ['Packaging notes','Know what’s in the package.','Read the current scope and open questions for each draft product.',[7,4,5,8,9]]
  ]},
  {id:'poster', name:'Release Wall', note:'A collectible poster layout that gives one release the wall.', editions:[
    ['The template','Build the show.','A modular Ableton Live starting point for the work that happens before doors.',[0,1,2,3]],
    ['The app','Plan the set.','Meet the set-planning application in development alongside the core template.',[6,0,7]],
    ['The bundle','Put it together.','Take a closer look at the planned template and app bundle.',[7,0,6]],
    ['The rack','Call the next move.','A closer look at the stage cue layer and related parts of the workflow.',[1,2,5]],
    ['The concept','A common clock.','Explore the proposed timecode tool and other software ideas in the catalog.',[9,8,3]]
  ]},
  {id:'compare', name:'A/B Bench', note:'Compare real product facts side by side.', editions:[
    ['Ways in','Template, app or both?','Compare the three main routes into the product suite.',[0,6,7]],
    ['Cue choices','Which cue belongs where?','Compare the intended roles and contents of the cue racks and bus assets.',[1,2,5]],
    ['Timing tools','Choose a reference.','Compare the click rack with related assets and a proposed timecode tool.',[3,4,9]],
    ['Digital formats','Rack, clips or session?','See how three distinct Ableton formats are intended to fit into a setup.',[0,2,4]],
    ['Software briefing','Compare the software plans.','See what is known about the app and two early software concepts.',[6,8,9]]
  ]},
  {id:'outfitter', name:'Build Your Kit', note:'Choose a job and get a curated starting point.', editions:[
    ['By workflow','What are you building?','Pick the job in front of you to see the relevant tools.',[0,6,1,3,7]],
    ['By role','Who are you building for?','Start with the playback operator, music director or stage crew.',[0,2,1,5]],
    ['By scale','How much do you need?','Go from one reusable layer to a full session and companion app.',[3,0,7]],
    ['By format','What fits your setup?','Start with a rack, a collection, a template or standalone software.',[2,4,0,6]],
    ['By stage of work','Where are you in the process?','Start with set preparation, go through rehearsal, then look at show cues.',[6,3,1,2]]
  ]},
  {id:'desk', name:'Playback Desk', note:'A side panel lets you open tools without losing your place.', editions:[
    ['Session desk','The playback desk.','Select a tool to inspect its format, draft scope and price.',[0,1,2,3,4,5,6,7,8,9]],
    ['Cue desk','The cue desk.','Keep related racks and line-count assets within reach.',[2,1,5,3]],
    ['App desk','The software desk.','Review the app, the planned bundle and future software concepts.',[6,7,8,9]],
    ['Timing desk','The timing desk.','Move between click, prepared tuning clips and the timecode concept.',[3,4,9]],
    ['Rig desk','The rig desk.','See the larger parts of the suite alongside the individual components.',[7,0,6,1,3]]
  ]},
  {id:'press', name:'Soundcheck Journal', note:'An editorial front page that connects tools to the work.', editions:[
    ['Lead story','The work before the show','Start with the session. Then follow the pieces that make a live set easier to prepare.',[0,6,3,1],2],
    ['The crew issue','A common language onstage','Music direction and crew communication have different jobs. Browse the tools built around each.',[1,2,5,0],0],
    ['The timing issue','The details that keep it together','A closer look at the individual tools behind timing and prepared pitch changes.',[3,4,9,0],1],
    ['The set issue','From planning to playback','Explore the app in development and the template it’s being designed alongside.',[6,0,7,2],2],
    ['The ideas issue','Still on the workbench','A look at proposed tools and bundles while their scope takes shape.',[8,9,7,5],1]
  ]},
  {id:'call', name:'Cue Sheet', note:'A compact running order for choosing tools before a show.', editions:[
    ['Full run','From setup to show.','Scan a sample preparation sequence and open any tool for details.',[6,0,4,3,2,1,5]],
    ['Rehearsal call','Start with rehearsal.','Lay out the session, establish the reference and prepare music cues.',[0,4,3,2]],
    ['Stage call','Stand by, stage.','Review the tools for crew cues and line counts.',[1,5,2]],
    ['Setup call','Set up the session.','Walk through a starting point, related racks and the planned bundle.',[0,3,2,1,7]],
    ['Planning call','Run the planning pass.','Start with set planning, then look ahead to the session and early utility concepts.',[6,0,8,9]]
  ]}
];
