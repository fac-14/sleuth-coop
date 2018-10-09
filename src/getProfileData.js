exports.get = (req, res) => {
  res.send(JSON.stringify(profileData));
};

const profileData = {
  basic_info: {
    company_name: "Senzing",
    email: "senzing@senzing.com",
    one_liner:
      "Super duper fancy technological solution that in some way is relevant for local government but we don't know how or why",
    contact_name: "Jessie Beech",
    contact_title: "Head of Fun",
    website: "www.senzing.com",
    logo_url: "logo.jpg"
  },
  answers: [
    {
      question: "What is the product?",
      answer: "Super duper fancy technological solution that in some way is relevant for local government but we don't know how or why",
      category: "Product",
      input_type: "short_text",
      helper_text: null
    },
    {
      question: "Why is this product useful to Local Authorities?",
      answer:
        "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro.",
      category: "Product",
      input_type: "short_text",
      helper_text:
        "Its important to use plain english and avoid any technical jargon!"
    },
    {
      question: "What type of council(s) is it running with?",
      answer: "District",
      category: "Local Authorities",
      input_type: "dropdown",
      helper_text: ""
    },
    {
      question: "Examples of council implementation. What were the outcomes?",
      answer: `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.

    Cum horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague haec decaying ambulabat mortuos. Sicut zeder apathetic malus voodoo. Aenean a dolor plan et terror soulless vulnerum contagium accedunt, mortui iam vivam unlife. Qui tardius moveri, brid eof reanimator sed in magna copia sint terribiles undeath legionis. Alii missing oculis aliorum sicut serpere crabs nostram. Putridi braindead odores kill and infect, aere implent left four dead.
    
    Lucio fulci tremor est dark vivos magna. Expansis creepy arm yof darkness ulnis witchcraft missing carnem armis Kirkman Moore and Adlard caeruleum in locis. Romero morbo Congress amarus in auras. Nihil horum sagittis tincidunt, zombie slack-jawed gelida survival portenta. The unleashed virus est, et iam zombie mortui ambulabunt super terram. Souless mortuum glassy-eyed oculos attonitos indifferent back zom bieapoc alypse. An hoc dead snow braaaiiiins sociopathic incipere Clairvius Narcisse, an ante? Is bello mundi z?
    
    In Craven omni memoria patriae zombieland clairvius narcisse religionis sunt diri undead historiarum. Golums, zombies unrelenting et Raimi fascinati beheading. Maleficia! Vel cemetery man a modern bursting eyeballs perhsaps morbi. A terrenti flesh contagium. Forsitan deadgurl illud corpse Apocalypsi, vel staggering malum zomby poenae chainsaw zombi horrifying fecimus burial ground. Indeflexus shotgun coup de poudre monstra per plateas currere. Fit de decay nostra carne undead. Poenitentiam violent zom biehig hway agite RE:dead pœnitentiam! Vivens mortua sunt apud nos night of the living dead.`,
      category: "Local Authorities",
      input_type: "long_text",
      helper_text:
        "Please be as specific as possible, including figures for time or financial savings"
    },
    {
      question: "Product screenshots",
      answer:
        "http://digitalspyuk.cdnds.net/17/15/768x384/landscape-1491824829-hodor-game-of-thrones-hbo.jpg",
      category: "Images and Demos",
      input_type: "image",
      helper_text: "Please upload images of your product"
    }
  ]
};
