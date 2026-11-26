// Shop catalog: one object per product. type: template | asset | app | bundle. art: core | rack | app | bundle.
const products = [
  {
    "name": "Core Tracks/Tune Template",
    "type": "template",
    "label": "Core template",
    "price": "$96",
    "description": "A modular Ableton Live starting point for playback, music cues, stage cues, click and tuning workflows.",
    "art": "core",
    "format": "Ableton Live template",
    "included": "Music Cue Rack, Stage Cue Rack, Click Rack and Tune Clip elements; partner additions and final package under review.",
    "compat": "Ableton Live; final version requirements to be confirmed."
  },
  {
    "name": "Stage Cue Rack",
    "type": "asset",
    "label": "Rack / asset",
    "price": "$16",
    "description": "A staging cue layer for crew communication, designed around selectable voices.",
    "art": "rack",
    "format": "Ableton rack",
    "included": "Draft scope: 112 stage cues across four voices; final contents subject to review."
  },
  {
    "name": "Music Cue Rack",
    "type": "asset",
    "label": "Rack / asset",
    "price": "$16",
    "description": "Music-direction cues organized for artist and band workflows.",
    "art": "rack",
    "format": "Ableton rack",
    "included": "Draft scope: 112 music cues in four selectable voices; final contents subject to review."
  },
  {
    "name": "Click Rack",
    "type": "asset",
    "label": "Rack / asset",
    "price": "$16",
    "description": "A reusable click and timing layer for live sessions.",
    "art": "rack",
    "format": "Ableton rack",
    "included": "Draft scope includes click selection, tone controls and accent adjustment; final routing requires QA."
  },
  {
    "name": "Tune Clip Collection",
    "type": "asset",
    "label": "Rack / asset",
    "price": "$16",
    "description": "Prepared tuning-related clips for playback workflows; final product scope is under review.",
    "art": "rack",
    "format": "Clip collection",
    "included": "Draft scope includes prepared tuning clips; relationship to AutoTuna and packaging remain open."
  },
  {
    "name": "Bus Line Collection",
    "type": "asset",
    "label": "Rack / asset",
    "price": "$16",
    "description": "A proposed standalone collection of line-count and bus-cue assets.",
    "art": "rack",
    "format": "Digital asset collection",
    "included": "Line-count and bus-cue material; final contents and template inclusion remain under review."
  },
  {
    "name": "Set Architect",
    "type": "app",
    "label": "Independent app",
    "price": "$128",
    "description": "An in-development set-planning product designed alongside the core template.",
    "art": "app",
    "format": "Independent app",
    "included": "Product scope and integration are in development; features and compatibility require confirmation."
  },
  {
    "name": "Core Tracks/Tune Template + Set Architect",
    "type": "bundle",
    "label": "Bundle",
    "price": "$256",
    "description": "The planned core template and Set Architect bundle.",
    "art": "bundle",
    "format": "Template + app bundle",
    "included": "Planned: core template, Set Architect, Oaktone Line Check Lite and TAZ Lite. Partner integration and delivery require confirmation."
  },
  {
    "name": "MIDI Clip Generator",
    "type": "app",
    "label": "Future concept",
    "price": "$16",
    "description": "A potential clip-generation utility for Ableton workflows; scope and implementation are undecided.",
    "art": "app",
    "format": "Future app concept",
    "included": "No finished product or release is confirmed."
  },
  {
    "name": "Timecode Generator",
    "type": "app",
    "label": "Future concept",
    "price": "Free",
    "description": "A potential standalone timecode tool; its features and release are not yet defined.",
    "art": "app",
    "format": "Future app concept",
    "included": "Potential free tool; final pricing and release are not confirmed."
  }
];
