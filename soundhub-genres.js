/**
 * SoundHub — Universal Genre Engine v2
 * ======================================
 * Taxonomie complète couvrant tous les styles musicaux.
 * Accent fort sur l'électronique (UKG, Techno, HardTechno, House, Trance, Downtempo).
 *
 * Scoring par champ :
 *   genre field            → +5 pts
 *   tags                   → +3 pts
 *   titre/artiste/desc/label → +2 pts
 *   label connu (labels[]) → +4 pts
 *   Seuil minimum          : 2 pts
 *   En cas d'égalité de score → priority (plus haut = prioritaire)
 */

export const GENRE_CATEGORIES = [

  // ╔══════════════════════════════════════════════════════════════════╗
  // ║  ÉLECTRONIQUE — UKG / BASS / GARAGE / BREAKS / DNB            ║
  // ╚══════════════════════════════════════════════════════════════════╝

  {
    name: "UKG_GARAGE",
    label: "UK Garage / Speed Garage",
    emoji: "🚗",
    color: "#00ccff",
    priority: 88,
    keywords: [
      "uk garage","ukg","speed garage","2 step","2step","two step",
      "uk funky","funky house","4x4","bassline","bassline house",
      "grime","sublow","soulful garage","vocal garage","garage house",
      "uk urban","niche","urban house","garage uk","sub low",
    ],
    labels: ["locked on","defected","garage nation","pay as u go","so solid crew","big apple records"],
  },
  {
    name: "BASS_DUBSTEP",
    label: "Bass Music / Dubstep",
    emoji: "💥",
    color: "#0055ff",
    priority: 85,
    keywords: [
      "dubstep","brostep","riddim","tearout","melodic dubstep",
      "future garage","post dubstep","deep dubstep","dark dubstep",
      "bass music","uk bass","140","140 bpm",
      "trap edm","trap bass","hybrid trap","future bass",
      "wave","dark wave","deconstructed club","club music",
      "wonky","grime bass","dub music",
    ],
    labels: ["deep medi","metalheadz dubstep","tempa","hessle audio","tectonic","swamp81","black box music"],
  },
  {
    name: "BREAKBEAT",
    label: "Breakbeat / Big Beat / Nu-Skool Breaks",
    emoji: "🔀",
    color: "#ff8800",
    priority: 82,
    keywords: [
      "breakbeat","nu skool breaks","nu-skool breaks","big beat",
      "florida breaks","chemical breaks","acid breaks","hardcore breaks",
      "breakbeat hardcore","progressive breaks","breaks","broken beat","bruk",
    ],
    labels: ["skint","wall of sound","stress records","neo records","medicine records"],
  },
  {
    name: "DRUM_AND_BASS",
    label: "Drum & Bass / Jungle",
    emoji: "🥁",
    color: "#00dd66",
    priority: 84,
    keywords: [
      "drum and bass","drum & bass","drumandbass","d&b","dnb",
      "liquid dnb","liquid funk","liquid drum and bass","jazzstep",
      "neurofunk","techstep","darkstep","jump up","rollers",
      "halftime","atmospheric dnb","sambass","drumfunk",
      "jungle","darkside jungle","oldschool jungle","ragga jungle",
      "jump up jungle","hardcore jungle","amen break","jungle rave",
      "clownstep","artcore","darkcore dnb","minimal dnb",
    ],
    labels: ["metalheadz","ram records","v recordings","soul:r","hospital records","moving shadow","reinforced records","good looking records"],
  },

  // ╔══════════════════════════════════════════════════════════════════╗
  // ║  ÉLECTRONIQUE — HOUSE                                          ║
  // ╚══════════════════════════════════════════════════════════════════╝

  {
    name: "DISCO_NUDISCO",
    label: "Disco / Nu-Disco / Italo Disco",
    emoji: "🪩",
    color: "#ff44cc",
    priority: 70,
    keywords: [
      "disco","nu disco","nudisco","italo disco","italo","afro disco",
      "cosmic disco","space disco","eurobeat","city pop",
      "boogie","disco funk","salsoul","hi-nrg","hi nrg","eurodisco",
      "funk disco","post disco","neo soul disco","filter disco",
      "electro disco","synth funk","french filter","french touch",
    ],
    labels: ["ed banger","codek","permanent vacation","bordello a parigi","running back","especial records"],
  },
  {
    name: "HOUSE",
    label: "House",
    emoji: "🏠",
    color: "#ff6600",
    priority: 72,
    keywords: [
      "house music","deep house","soulful house","vocal house",
      "chicago house","disco house","funky house","diva house",
      "micro house","minimal house","microhouse","progressive house",
      "electro house","tribal house","tech house","jackin house",
      "jackin","filter house","french house","acid house",
      "garage house","piano house","underground house","house",
    ],
    labels: [
      "defected","fxhe","trax records","dance mania","classic music company",
      "running back","raw canvas","rekids","wolf music","nocturnal grooves","glitterbox",
    ],
  },
  {
    name: "AFRO_ORGANIC_HOUSE",
    label: "Afro House / Organic House / Amapiano",
    emoji: "🌍",
    color: "#ffaa00",
    priority: 71,
    keywords: [
      "afro house","afro tech","organic house","neo melodic",
      "melodic house","afro melodic","afro deep","afro soul house",
      "amapiano","gqom","kwaito","south african house",
      "ethno house","organic techno","world techno","afro spiritual",
    ],
    labels: ["black butter","kalawa jazmee","platoon africa","ubuntu music"],
  },

  // ╔══════════════════════════════════════════════════════════════════╗
  // ║  ÉLECTRONIQUE — TECHNO                                         ║
  // ╚══════════════════════════════════════════════════════════════════╝

  {
    name: "TECHNO",
    label: "Techno (Mental / Deep / Hypnotic / Hardgroove)",
    emoji: "⚙️",
    color: "#cc0033",
    priority: 90,
    keywords: [
      "techno mental","mental techno","hypnotic techno","deep techno",
      "hardgroove","hard groove","detroit techno","berlin techno",
      "peak time techno","warehouse techno","industrial techno",
      "acid techno","dark techno","drone techno","minimal techno",
      "raw techno","raw rave","noise techno","doomcore",
      "modular techno","post industrial techno","techno","rave techno",
    ],
    labels: [
      "ostgut ton","blueprint","planet rhythm","bc recordings","counter records",
      "prologue","mote evolver","horizontal ground","frenzy records","wangan club",
      "stem","amphibian records","selected records","bcco","primal instinct",
    ],
  },
  {
    name: "HARD_TECHNO",
    label: "Hard Techno / Schranz / Raw",
    emoji: "🔧",
    color: "#ff0022",
    priority: 95,
    keywords: [
      "hard techno","hardtechno","schranz","raw techno hard",
      "industrial hard techno","peak time hard","terror techno",
      "brutal techno","distorted techno","aggressive techno",
      "hard groove techno","kick techno","hard acid techno",
      "warehouse hard","hard rave","berlin hard techno",
    ],
    labels: ["uncage","intec","teksupport","hyte records","drumcode","filth on acid","compass"],
  },

  // ╔══════════════════════════════════════════════════════════════════╗
  // ║  ÉLECTRONIQUE — TEUF / TRIBE / FREE PARTY                     ║
  // ╚══════════════════════════════════════════════════════════════════╝

  {
    name: "TEUF_TRIBE",
    label: "Teuf / Tribe / Acidcore / Mentalcore",
    emoji: "🔩",
    color: "#ff2200",
    priority: 100,
    keywords: [
      "acidcore","acid core","tribecore","tribe core",
      "tribe tekno","tribe techno","tribe","hardtek","hard tek",
      "teuf","teufeur","teknival","free party","freeparty",
      "free tekno","freetekno","tekno libre","tekno",
      "acid tekno","acid free","acid rave","lsd tekno",
      "mentalcore","mental core","spiral tribe","heretik",
      "4x4 tekno","raggatek","ragga tek","teknoise","noisecore",
      "acidtekno","mackitek","neurotrope","kartell","the teknoist",
    ],
    labels: ["spiral tribe","heretik sound system","neurotrope","pkdm","fullmoon"],
  },

  // ╔══════════════════════════════════════════════════════════════════╗
  // ║  ÉLECTRONIQUE — TRANCE / PSY                                   ║
  // ╚══════════════════════════════════════════════════════════════════╝

  {
    name: "TRANCE",
    label: "Trance / Progressive / Hard Trance",
    emoji: "🌀",
    color: "#9900ff",
    priority: 86,
    keywords: [
      "trance","progressive trance","hard trance","hardtrance",
      "uplifting trance","epic trance","vocal trance","eurotrance",
      "trancecore","classic trance","oldschool trance","90s trance",
      "2000s trance","powertrance","nitzhonot","dream trance",
      "hands up","euro trance","tech trance",
    ],
    labels: ["anjunabeats","armada music","black hole recordings","vandit","monster tunes","enhanced music"],
  },
  {
    name: "PSYTRANCE",
    label: "Psytrance / Goa / Dark Psy / Hitech",
    emoji: "🍄",
    color: "#cc44ff",
    priority: 87,
    keywords: [
      "psytrance","psy trance","goa trance","goa","dark psy",
      "full on","forest psy","hitech","hi-tech psy","hi tech trance",
      "progressive psytrance","twilight psy","suomi","finnish psy",
      "psygressive","deep psy","psychedelic trance","zenonesque","zenon",
      "daytime psy","morning psy","nitzhonot psy",
    ],
    labels: ["tesseract studio","vision quest","nano records","iono music","dacru records","zenon records","padang records"],
  },


  {
    name: "HARD_BOUNCE",
    label: "Hard Bounce / Makina / Bubbling",
    emoji: "🪀",
    color: "#ff44aa",
    priority: 91,
    // Hard trance sans la mélodie planante — kick ravageur, BPM élevé,
    // basses synthétiques crues, énergie de dancefloor survoltée.
    // Makina (Espagne/UK), bubbling (Pays-Bas), hardbounce (France/Belgique).
    keywords: [
      "hard bounce","hardbounce","hard bouncing","bouncing",
      "makina","makinero","makinera",
      "bubbling","bubbeling","dutch bubbling",
      "happy bounce","bounce techno",
      "hard dance","hard dance music","nrg","n-r-g","nu-nrg",
      "bouncy trance","bouncy hard","donk","scouse house donk",
      "uk bounce","bounce rave","hard rave bounce",
    ],
    labels: ["evolution records","hard2beat","rezerection","evolution rave"],
  },

  // ╔══════════════════════════════════════════════════════════════════╗
  // ║  ÉLECTRONIQUE — HARDCORE                                       ║
  // ╚══════════════════════════════════════════════════════════════════╝

  {
    name: "HARDCORE",
    label: "Hardcore / Gabber / Frenchcore / Hardstyle",
    emoji: "💀",
    color: "#ff0055",
    priority: 93,
    keywords: [
      "hardcore","gabber","happy hardcore","frenchcore","uptempo",
      "industrial hardcore","crossbreed","uk hardcore","freeform",
      "hardstyle","reverse bass hardstyle","rawstyle","euphoric hardstyle",
      "mainstage hardstyle","old school hardcore","bouncing hardcore",
      "rotterdam hardcore","makina hardcore","speedcore","terrorcore",
      "extratone","darkcore","bouncy techno","hard bounce hardcore",
    ],
    labels: ["industrial strength","rotterdam records","enzyme records","id&t","masters of hardcore","megarave records"],
  },

  // ╔══════════════════════════════════════════════════════════════════╗
  // ║  ÉLECTRONIQUE — DOWNTEMPO / AMBIENT / CHILLOUT / EXPERIMENTAL  ║
  // ╚══════════════════════════════════════════════════════════════════╝

  {
    name: "AMBIENT",
    label: "Ambient / Dark Ambient / New Age",
    emoji: "🌫️",
    color: "#334488",
    priority: 40,
    keywords: [
      "ambient","dark ambient","drone ambient","ambient dub",
      "dungeon synth","new age","space music","kosmische",
      "isolationism","astral","ethereal","meditative","meditation music",
      "soundscape","field recording","nature sounds",
      "atmospheric ambient","black metal ambient","deep listening",
    ],
    labels: ["touch music","sub rosa","kranky","warp ambient","force and form","edition blixa bargeld"],
  },
  {
    name: "DOWNTEMPO",
    label: "Downtempo / Chillout / Trip-Hop / Psybient",
    emoji: "🌙",
    color: "#4455aa",
    priority: 42,
    keywords: [
      "downtempo","chillout","chill out","trip hop","triphop",
      "trip-hop","psybient","ambient house","ambient techno",
      "lo fi hip hop","lofi hip hop","lofi","lo-fi","chillhop",
      "chillwave","bedroom beats","beats","instrumental hip hop",
      "nu dub","dub ambient","dub techno","dub electronic",
      "liquid electronica","downtempo lounge","bossa electronica",
    ],
    labels: ["ninja tune","mo wax","warp","echospace","leng records","apollo records"],
  },
  {
    name: "EXPERIMENTAL_ELECTRONIC",
    label: "Électronique Expérimentale / IDM / Glitch",
    emoji: "🔬",
    color: "#555577",
    priority: 38,
    keywords: [
      "idm","intelligent dance music","glitch","microsound",
      "acousmatic","musique concrete","musique concrète","electroacoustic",
      "noise music","black midi","deconstructed club","avant garde electronic",
      "experimental electronic","post digital","abstract electronic",
      "generative","algorithmic","sound art","electro acoustic",
      "witch house","witchhouse","hypnagogic","lowercase","onkyo",
    ],
    labels: ["warp","raster noton","mego","editions mego","12k","sub rosa","erstwhile"],
  },
  {
    name: "EDM_MAINSTAGE",
    label: "EDM / Mainstage",
    emoji: "🎆",
    color: "#ff00aa",
    priority: 50,
    keywords: [
      "edm","big room","festival trap","future house","complextro",
      "dutch house","electro house","progressive electro",
      "hands up edm","melbourne bounce","tropical house",
      "moombahton","moombahcore","electro pop edm",
    ],
    labels: ["spinnin records","protocol recordings","revealed recordings","ultra music","monstercat"],
  },

  // ╔══════════════════════════════════════════════════════════════════╗
  // ║  HIP-HOP / RAP                                                 ║
  // ╚══════════════════════════════════════════════════════════════════╝

  {
    name: "RAP_CLASSIC",
    label: "Hip-Hop / Boom Bap / Rap classique",
    emoji: "🎤",
    color: "#ddaa00",
    priority: 68,
    keywords: [
      "hip hop","hiphop","hip-hop","boom bap","boombap",
      "east coast hip hop","west coast hip hop","southern hip hop",
      "old school hip hop","golden age hip hop","conscious rap",
      "gangsta rap","jazzy hip hop","jazz rap","horrorcore",
      "underground hip hop","nerdcore","political rap","battle rap",
      "freestyle rap","freestyle","mc","emcee","lyricism",
      "rap francais","rap fr","rap francophone","rap belge","rap suisse",
    ],
    labels: ["def jam","interscope","roc-a-fella","bad boy records","death row","rawkus","duck down"],
  },
  {
    name: "RAP_NEWGEN",
    label: "Trap / Drill / Cloud Rap / Hyperpop",
    emoji: "🌩️",
    color: "#ffcc00",
    priority: 70,
    keywords: [
      "trap","trap music","cloud rap","cloudrap","mumble rap",
      "drill","uk drill","brooklyn drill","chicago drill",
      "jersey club","jerk","crunk","snap music",
      "hyperpop","digicore","emo rap","sad rap","melodic rap",
      "afrotrap","afro trap","ghetto music trap",
      "lofi rap","phonk","dark phonk","memphis rap",
    ],
    labels: ["slaughter gang","young money","quality control","1017 records"],
  },

  // ╔══════════════════════════════════════════════════════════════════╗
  // ║  R&B / SOUL / FUNK / GOSPEL                                    ║
  // ╚══════════════════════════════════════════════════════════════════╝

  {
    name: "RNB_SOUL",
    label: "R&B / Soul / New Jack Swing / Neo-Soul",
    emoji: "🎶",
    color: "#cc6699",
    priority: 62,
    keywords: [
      "rnb","r&b","r n b","soul","neo soul","nu soul","motown",
      "doo-wop","doo wop","northern soul","new jack swing",
      "contemporary r&b","alternative r&b","indie r&b",
      "blue-eyed soul","british soul","quiet storm",
      "psychedelic soul","smooth r&b","bedroom r&b","urban contemporary",
    ],
    labels: ["stax","atlantic","tamla","fantasy records","def soul"],
  },
  {
    name: "FUNK_GROOVE",
    label: "Funk / Groove / Deep Funk / Gospel",
    emoji: "🕺",
    color: "#ff8800",
    priority: 60,
    keywords: [
      "funk","groove","p-funk","parliament funkadelic","funkadelic",
      "soul funk","disco funk","boogie funk","afro funk",
      "deep funk","rare groove","funk rock","jazz funk",
      "new funk","future funk","retro funk","70s funk","80s funk",
      "funk carioca","gospel","urban contemporary gospel",
      "southern gospel","traditional gospel","blues gospel",
    ],
    labels: ["people records","mojo records","brown bag"],
  },

  // ╔══════════════════════════════════════════════════════════════════╗
  // ║  JAZZ                                                          ║
  // ╚══════════════════════════════════════════════════════════════════╝

  {
    name: "JAZZ",
    label: "Jazz (Early, Bebop, Fusion, Free, Modern)",
    emoji: "🎷",
    color: "#886600",
    priority: 48,
    keywords: [
      "jazz","bebop","hard bop","cool jazz","modal jazz",
      "free jazz","free improvisation","avant-garde jazz",
      "swing","big band","dixieland","new orleans jazz",
      "jazz fusion","latin jazz","afro cuban jazz","bossa nova",
      "acid jazz","nu jazz","jazztronica","smooth jazz",
      "gypsy jazz","manouche","neo swing","ethno jazz",
      "spiritual jazz","astral jazz","post bop","jazz standards",
    ],
    labels: ["blue note","prestige","impulse","verve","ecm records","nonesuch jazz"],
  },

  // ╔══════════════════════════════════════════════════════════════════╗
  // ║  BLUES                                                         ║
  // ╚══════════════════════════════════════════════════════════════════╝

  {
    name: "BLUES",
    label: "Blues",
    emoji: "🎸",
    color: "#225588",
    priority: 45,
    keywords: [
      "blues","delta blues","chicago blues","electric blues",
      "acoustic blues","piedmont blues","texas blues","country blues",
      "jump blues","urban blues","soul blues","contemporary blues","blues rock",
    ],
    labels: ["chess records","stax blues","fat possum"],
  },

  // ╔══════════════════════════════════════════════════════════════════╗
  // ║  ROCK                                                          ║
  // ╚══════════════════════════════════════════════════════════════════╝

  {
    name: "ROCK_ALT",
    label: "Rock Alternatif / Indie / Grunge / Shoegaze",
    emoji: "🎸",
    color: "#aa3300",
    priority: 55,
    keywords: [
      "alternative rock","alt rock","indie rock","grunge","shoegaze",
      "dream pop","noise pop","lo fi rock","jangle pop",
      "slacker rock","post grunge","britpop","madchester",
      "college rock","paisley underground","neo psychedelia",
      "garage rock revival","indie garage",
    ],
    labels: ["sub pop","matador","4ad","rough trade","domino records","merge records"],
  },
  {
    name: "ROCK_CLASSIC",
    label: "Rock Classique / Hard Rock / Psychédélique / Prog",
    emoji: "🤟",
    color: "#882200",
    priority: 52,
    keywords: [
      "classic rock","hard rock","arena rock","glam rock",
      "southern rock","desert rock","stoner rock",
      "psychedelic rock","acid rock","neo psychedelia",
      "progressive rock","prog rock","art rock","symphonic rock",
      "space rock","canterbury scene","avant-prog","krautrock",
      "surf rock","rockabilly","skiffle","folk rock","celtic rock","country rock",
    ],
  },
  {
    name: "ROCK_POST_PUNK",
    label: "Post-Punk / New Wave / Cold Wave / Goth",
    emoji: "🖤",
    color: "#554466",
    priority: 57,
    keywords: [
      "post punk","new wave","cold wave","dark wave","gothic rock",
      "goth","deathrock","minimal wave","post punk revival",
      "art punk","no wave","dance punk","noise rock","math rock",
      "experimental rock","post rock","slowcore","emo","screamo",
    ],
    labels: ["factory records","4ad goth","mute records","cherry red records"],
  },
  {
    name: "METAL",
    label: "Metal",
    emoji: "🤘",
    color: "#880000",
    priority: 72,
    keywords: [
      "metal","heavy metal","nwobhm","speed metal","power metal",
      "thrash metal","groove metal","crossover thrash",
      "death metal","melodic death","deathgrind","slam death","brutal death",
      "black metal","symphonic black metal","melodic black metal",
      "blackgaze","post black metal","atmospheric black metal",
      "depressive black metal","war metal",
      "doom metal","stoner doom","funeral doom","sludge metal","drone doom",
      "folk metal","celtic metal","viking metal","pagan metal","medieval metal",
      "avant-garde metal","industrial metal","grindcore","goregrind","noisegrind",
      "nu metal","rap metal","metalcore","mathcore","djent","kawaii metal",
    ],
    labels: ["season of mist","century media","nuclear blast","relapse records","earache","profound lore"],
  },
  {
    name: "PUNK",
    label: "Punk / Hardcore Punk",
    emoji: "✊",
    color: "#dd0055",
    priority: 67,
    keywords: [
      "punk","punk rock","hardcore punk","anarcho punk","crust punk",
      "d-beat","powerviolence","skate punk","pop punk","folk punk",
      "gothic punk","cowpunk","electropunk","horror punk","garage punk",
      "synth punk","street punk","oi punk","psychobilly",
      "post-hardcore","crossover hardcore","ska punk",
    ],
    labels: ["epitaph records","fat wreck chords","dischord","revelation records","sst records"],
  },

  // ╔══════════════════════════════════════════════════════════════════╗
  // ║  POP                                                           ║
  // ╚══════════════════════════════════════════════════════════════════╝

  {
    name: "POP",
    label: "Pop",
    emoji: "⭐",
    color: "#ff66bb",
    priority: 30,
    keywords: [
      "pop","indie pop","art pop","baroque pop","power pop",
      "chamber pop","sophisti pop","bubblegum pop","teen pop",
      "dance pop","electropop","synth pop","synthpop","hyperpop",
      "bedroom pop","dream pop","folk pop","country pop",
      "britpop","europop","j-pop","k-pop","c-pop","mandopop","cantopop",
      "singer songwriter","twee pop","indie dance","sunshine pop",
      "space age pop","yacht rock",
    ],
  },

  // ╔══════════════════════════════════════════════════════════════════╗
  // ║  CLASSIQUE / NÉOCLASSIQUE                                      ║
  // ╚══════════════════════════════════════════════════════════════════╝

  {
    name: "CLASSICAL",
    label: "Classique / Néoclassique / Contemporain",
    emoji: "🎻",
    color: "#997744",
    priority: 44,
    keywords: [
      "classical","neoclassical","neo classical","contemporary classical",
      "modern classical","orchestral","orchestra","chamber music",
      "string quartet","strings","piano classical","solo piano",
      "minimal classical","post-classical","film score","cinematic",
      "soundtrack classical","baroque","romantic classical","impressionism",
      "avant-garde classical","spectralism","opera","choral","a cappella",
    ],
    labels: ["deutsche grammophon","ecm classical","nonesuch","sony classical","decca"],
  },

  // ╔══════════════════════════════════════════════════════════════════╗
  // ║  FOLK / COUNTRY / CHANSON                                      ║
  // ╚══════════════════════════════════════════════════════════════════╝

  {
    name: "FOLK_COUNTRY",
    label: "Folk / Country / Americana / Chanson",
    emoji: "🪕",
    color: "#cc8844",
    priority: 42,
    keywords: [
      "folk","indie folk","freak folk","psychedelic folk","anti folk",
      "american folk revival","british folk revival",
      "country","outlaw country","alt country","americana","bluegrass",
      "country rock","neo traditional country","honky tonk","western swing",
      "chanson francaise","chanson populaire","variete francaise","variete",
      "chanson","celtic music","cajun","creole","zydeco","tejano",
      "protest songs","filk","texas folk","appalachian",
    ],
  },

  // ╔══════════════════════════════════════════════════════════════════╗
  // ║  REGGAE / DUB / DANCEHALL                                      ║
  // ╚══════════════════════════════════════════════════════════════════╝

  {
    name: "REGGAE_DUB",
    label: "Reggae / Dub / Dancehall / Ska",
    emoji: "🌿",
    color: "#00aa44",
    priority: 64,
    keywords: [
      "reggae","roots reggae","classic reggae","lovers rock",
      "dub","dub reggae","dub poetry","digital dub",
      "dancehall","digital dancehall","bashment","ragga",
      "ska","rocksteady","mento","bouyon",
      "soca","calypso","one drop","steppers",
      "nyahbinghi","conscious reggae","jamaican music","ragga jungle",
    ],
    labels: ["heartbeat records","trojan records","studio one","greensleeves","vp records"],
  },

  // ╔══════════════════════════════════════════════════════════════════╗
  // ║  LATIN / REGGAETON                                             ║
  // ╚══════════════════════════════════════════════════════════════════╝

  {
    name: "LATIN_REGGAETON",
    label: "Latin / Reggaeton / Tropical",
    emoji: "💃",
    color: "#ff4400",
    priority: 63,
    keywords: [
      "reggaeton","latin trap","urban latino","perreo","dembow",
      "bachata","salsa","cumbia","merengue","vallenato","bolero",
      "samba","bossa nova","mpb","axe","forro","pagode",
      "mambo","cha cha","latin jazz","latin pop",
      "flamenco","rumba","corrido","norteño","banda","ranchera",
      "nueva cancion","mariachi","latin","latino",
    ],
  },

  // ╔══════════════════════════════════════════════════════════════════╗
  // ║  AFROBEATS / MUSIQUES AFRICAINES                               ║
  // ╚══════════════════════════════════════════════════════════════════╝

  {
    name: "AFROBEATS",
    label: "Afrobeats / Amapiano / Afropop",
    emoji: "🌍",
    color: "#ff9900",
    priority: 65,
    keywords: [
      "afrobeats","afrobeat","afropop","afroswing","afrotrap",
      "afro fusion","amapiano","gqom","kwaito","highlife","juju",
      "fuji","apala","makossa","bikutsi","bongo flava","naija",
      "azonto","afrowave","afro soul","west african","congolese music",
      "ndombolo","soukous","south african music",
    ],
    labels: ["mavin records","empire distribution africa","platoon"],
  },

  // ╔══════════════════════════════════════════════════════════════════╗
  // ║  MUSIQUES ASIATIQUES                                           ║
  // ╚══════════════════════════════════════════════════════════════════╝

  {
    name: "ASIAN_MUSIC",
    label: "Musiques Asiatiques (K-Pop, J-Pop, Bollywood…)",
    emoji: "🎌",
    color: "#ff3366",
    priority: 35,
    keywords: [
      "k-pop","kpop","korean pop","trot","k-indie",
      "j-pop","jpop","japanese pop","enka","city pop japanese","anime songs","anime ost",
      "j-rock","japanese rock","visual kei",
      "c-pop","cpop","mandopop","cantopop","taiwanese pop",
      "bollywood","filmi music","bhangra","qawwali","sufi devotional",
      "baul","indipop","hindi pop","dangdut","pinoy pop","opm","morlam",
    ],
  },

  // ╔══════════════════════════════════════════════════════════════════╗
  // ║  MOYEN-ORIENT / AFRIQUE DU NORD (MENA)                        ║
  // ╚══════════════════════════════════════════════════════════════════╝

  {
    name: "MENA_MUSIC",
    label: "Musiques MENA (Arabe, Persan, Turc…)",
    emoji: "🌙",
    color: "#cc8800",
    priority: 36,
    keywords: [
      "arabic classical","maqam","arabic pop","turkish pop","egyptian pop",
      "persian pop","persian classical","iranian music","kurdish folk",
      "andalusi music","maghreb","berber music","gnawa","chaabi",
      "rai","algerian rai","moroccan music","khaleeji",
      "mizrahi","sephardic","oriental music","middle eastern",
    ],
  },

  // ╔══════════════════════════════════════════════════════════════════╗
  // ║  MUSIQUES DU MONDE / WORLD / WORLDBEAT                        ║
  // ╚══════════════════════════════════════════════════════════════════╝

  {
    name: "WORLD_MUSIC",
    label: "Musiques du Monde / World / Worldbeat",
    emoji: "🌏",
    color: "#558866",
    priority: 32,
    keywords: [
      "world music","ethnic","traditional music",
      "celtic music","irish folk","scottish folk","scandinavian folk",
      "balkan folk","bulgarian music","romanian folk","klezmer","roma music",
      "fado","tango argentino","flamenco",
      "indian classical","hindustani","carnatic","raga",
      "tuvan","throat singing","mongolian folk","tibetan music",
      "maori","pacific music","indigenous australian","didgeridoo",
      "worldbeat","ethnopop","global electronica","afro celtic",
    ],
    labels: ["real world records","womad","nonesuch world","hemisphere"],
  },

  // ╔══════════════════════════════════════════════════════════════════╗
  // ║  MICROGENRES / VAPORWAVE / UNDERGROUND                         ║
  // ╚══════════════════════════════════════════════════════════════════╝

  {
    name: "MICROGENRES",
    label: "Microgenres / Vaporwave / Internet Music",
    emoji: "📼",
    color: "#ff88ff",
    priority: 28,
    keywords: [
      "vaporwave","future funk vaporwave","slushwave","hardvapour",
      "witch house","seapunk","chillwave",
      "hypnagogic pop","lolipop","crunkcore","electronicore",
      "trap metal","wonky pop","sadcore","midwest emo","post emo",
      "digicore","bedroom pop micro",
    ],
  },

  // ╔══════════════════════════════════════════════════════════════════╗
  // ║  AVANT-GARDE & EXPÉRIMENTAL (CROSSOVER)                        ║
  // ╚══════════════════════════════════════════════════════════════════╝

  {
    name: "AVANT_GARDE",
    label: "Avant-Garde / Expérimental / Noise",
    emoji: "🎭",
    color: "#333333",
    priority: 25,
    keywords: [
      "avant garde","avant-garde","experimental","drone","noise",
      "progressive experimental","crossover experimental",
      "free improvisation","concrete poetry","sound poetry",
      "harsh noise","harsh noise wall","power electronics",
      "lowercase","fluxus","new complexity","spectral music",
    ],
  },

  // ╔══════════════════════════════════════════════════════════════════╗
  // ║  FALLBACK                                                      ║
  // ╚══════════════════════════════════════════════════════════════════╝

  {
    name: "NON_CLASSES",
    label: "Non classés",
    emoji: "❓",
    color: "#444444",
    priority: 0,
    keywords: [],
  },
];

// ═══════════════════════════════════════════════════════════════════════════════
// MOTEUR DE CLASSIFICATION
// ═══════════════════════════════════════════════════════════════════════════════

const SCORE_THRESHOLD  = 2;
const SETS_DURATION_MS = 30 * 60 * 1000; // 30 min

function normalize(text) {
  if (!text) return "";
  return String(text)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractTags(tagList) {
  if (!tagList) return [];
  const matches = [...String(tagList).matchAll(/"([^"]+)"|(\S+)/g)];
  return matches.map(m => normalize(m[1] || m[2])).filter(Boolean);
}

function kwRegex(kw) {
  const escaped = kw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`(?<![a-z0-9])${escaped}(?![a-z0-9])`);
}

/**
 * Classifie un track normalisé.
 * @param {object} track  — résultat de normalizeTrack()
 * @param {Array}  cats   — tableau de catégories (défaut: GENRE_CATEGORIES)
 * @returns {{ category: string, score: number, matches: string[] }}
 */
export function classifyTrack(track, cats = GENRE_CATEGORIES) {
  const genreNorm  = normalize(track.genre || "");
  const tagNorms   = extractTags(track.tags || "");
  const titleNorm  = normalize(track.title || "");
  const artistNorm = normalize(track.artist || "");
  const descNorm   = normalize(track.description || "").slice(0, 600);
  const labelNorm  = normalize(track.label || "");
  const context    = `${titleNorm} ${artistNorm} ${descNorm} ${labelNorm}`;

  let bestCat    = "NON_CLASSES";
  let bestScore  = 0;
  let bestPrio   = -1;
  let bestMatches = [];

  for (const cat of cats) {
    if (cat.name === "NON_CLASSES") continue;
    let score = 0;
    const matches = [];

    for (const kw of (cat.keywords || [])) {
      const pat = kwRegex(normalize(kw));
      if (pat.test(genreNorm))               { score += 5; matches.push(`genre:${kw}`); }
      if (tagNorms.some(t => pat.test(t)))    { score += 3; matches.push(`tag:${kw}`); }
      if (pat.test(context))                  { score += 2; matches.push(`ctx:${kw}`); }
    }
    for (const lbl of (cat.labels || [])) {
      const pat = kwRegex(normalize(lbl));
      if (pat.test(genreNorm) || tagNorms.some(t => pat.test(t)) || pat.test(labelNorm)) {
        score += 4; matches.push(`label:${lbl}`);
      }
    }

    if (score >= SCORE_THRESHOLD) {
      if (score > bestScore || (score === bestScore && cat.priority > bestPrio)) {
        bestScore   = score;
        bestPrio    = cat.priority;
        bestCat     = cat.name;
        bestMatches = [...new Set(matches)];
      }
    }
  }

  return { category: bestCat, score: bestScore, matches: bestMatches };
}

export function isSet(track) {
  return (track.durationMs || 0) >= SETS_DURATION_MS;
}

/**
 * Normalise un objet raw vers le format commun.
 */
export function normalizeTrack(raw, source = "soundcloud") {
  if (source === "soundcloud") {
    return {
      id:          raw.id,
      title:       raw.title || "",
      artist:      raw.user?.username || "",
      genre:       raw.genre || "",
      tags:        raw.tag_list || "",
      description: raw.description || "",
      label:       raw.label_name || raw.publisher_metadata?.publisher || "",
      durationMs:  raw.duration || 0,
      url:         raw.permalink_url || "",
      artwork:     raw.artwork_url || "",
      source,
    };
  }
  if (source === "spotify") {
    return {
      id:          raw.id,
      title:       raw.name || "",
      artist:      (raw.artists || []).map(a => a.name).join(", "),
      genre:       (raw.genres || []).join(" "),
      tags:        "",
      description: "",
      label:       raw.album?.label || "",
      durationMs:  raw.duration_ms || 0,
      url:         raw.external_urls?.spotify || "",
      artwork:     raw.album?.images?.[0]?.url || "",
      source,
    };
  }
  if (source === "deezer") {
    return {
      id:          raw.id,
      title:       raw.title || "",
      artist:      raw.artist?.name || "",
      genre:       raw.genre?.name || "",
      tags:        "",
      description: "",
      label:       "",
      durationMs:  (raw.duration || 0) * 1000,
      url:         raw.link || "",
      artwork:     raw.album?.cover_xl || "",
      source,
    };
  }
  return {
    id:          raw.id || Math.random(),
    title:       raw.title || raw.name || "",
    artist:      raw.artist || raw.author || "",
    genre:       raw.genre || "",
    tags:        raw.tags || raw.tag_list || "",
    description: raw.description || "",
    label:       raw.label || "",
    durationMs:  raw.duration_ms || raw.duration || 0,
    url:         raw.url || raw.permalink_url || "",
    artwork:     raw.artwork || raw.cover || "",
    source,
  };
}

/**
 * Classifie un tableau de tracks bruts → { catName: [tracks] }
 */
export function classifyAll(tracks, source = "soundcloud", cats = GENRE_CATEGORIES) {
  const result = {};
  [...cats, { name: "SETS" }].forEach(c => { result[c.name] = []; });
  if (!result["NON_CLASSES"]) result["NON_CLASSES"] = [];

  for (const raw of tracks) {
    const track = normalizeTrack(raw, source);
    if (isSet(track)) {
      result["SETS"].push(track);
    } else {
      const { category } = classifyTrack(track, cats);
      if (!result[category]) result[category] = [];
      result[category].push(track);
    }
  }
  return result;
}

export default { GENRE_CATEGORIES, classifyTrack, classifyAll, normalizeTrack, isSet };
