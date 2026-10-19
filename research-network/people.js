const researchers = [

    {
        name: "Prof Christopher White",
        country: "United Kingdom",
        role: "Chair / Grant Holder Scientific Representative",
        institution: "University of Strathclyde",

        interests: "Climate Extremes; Multi-Hazards; Early Warning Systems; Climate Resilience",

        bio: "Professor in Climate Extremes and Resilience whose research focuses on complex cascading and interconnected multi-hazard risks, predictions, early warnings and climate resilience.",

        website: "https://www.strath.ac.uk/staff/whitechristopherdr/",

        availableToMentor: true,
        lookingForMentor: false,
        lookingForSTSM: false,
        availableToHostSTSM: true
    },

    {
        name: "Dr Pauline Rivoire",
        country: "Switzerland",
        role: "Vice Chair",
        institution: "Université de Lausanne",

        interests: "Compound Events; Climate Extremes; Sub-seasonal Forecasts; Extreme Value Theory",

        bio: "Postdoctoral researcher studying compound events, precipitation and temperature extremes, sub-seasonal forecasts and extreme value theory.",

        website: "https://scholar.google.com/citations?user=5u7i2WwAAAAJ&hl=fr",

        availableToMentor: false,
        lookingForMentor: true,
        lookingForSTSM: true,
        availableToHostSTSM: false
    },

    {
        name: "Owen Walpole",
        country: "United Kingdom",
        role: "Grant Holder Manager",
        institution: "University of Strathclyde",

        interests: "Research Management; COST Actions; Network Coordination",

        bio: "Grant Holder Manager for the ANTICIPATE COST Action at the University of Strathclyde.",

        website: "",

        availableToMentor: false,
        lookingForMentor: false,
        lookingForSTSM: false,
        availableToHostSTSM: false
    },

    {
        name: "Dr Alexandre Ramos",
        country: "Germany",
        role: "Grant Awarding Coordinator",
        institution: "Karlsruhe Institute of Technology",

        interests: "Atmospheric Rivers; Compound Extremes; Hydrometeorological Extremes; Windstorms",

        bio: "Senior researcher studying atmospheric rivers and compound weather and climate extremes in the North Atlantic and their impacts on Western Europe.",

        website: "",

        availableToMentor: true,
        lookingForMentor: false,
        lookingForSTSM: false,
        availableToHostSTSM: true
    },

    {
        name: "Dr Martin Wegmann",
        country: "Switzerland",
        role: "Science Communication Coordinator",
        institution: "University of Bern",

        interests: "Climate Variability; Climate Teleconnections; Seasonal Forecasting; Open Science",

        bio: "Scientific collaborator researching large-scale climate variability, climate teleconnections and seasonal climate forecasts, with a focus on open and reusable research data.",

        website: "",

        availableToMentor: true,
        lookingForMentor: false,
        lookingForSTSM: true,
        availableToHostSTSM: true
    },

    {
        name: "Dr Ana Russo",
        country: "Portugal",
        role: "WG1 Leader",
        institution: "University of Lisbon",

        interests: "Climate Extremes; Compound Events; Air Quality; Ecosystems; Human Health",

        bio: "Assistant Professor researching climate extremes and compound events and their impacts on air quality, ecosystems and human health.",

        website: "",

        availableToMentor: true,
        lookingForMentor: false,
        lookingForSTSM: false,
        availableToHostSTSM: true
    },

    {
        name: "Dr Ilias Pechlivanidis",
        country: "Sweden",
        role: "WG1 Co-leader",
        institution: "Swedish Meteorological and Hydrological Institute (SMHI)",

        interests: "Hydrometeorological Forecasting; Early Warnings; Climate Services; Impact-based Forecasting",

        bio: "Associate Professor whose research focuses on impact-based hydrometeorological forecasting, user-centric early warnings and climate services.",

        website: "",

        availableToMentor: true,
        lookingForMentor: false,
        lookingForSTSM: false,
        availableToHostSTSM: true
    },

    {
        name: "Dr Hannah Bloomfield",
        country: "United Kingdom",
        role: "WG2 Leader",
        institution: "Newcastle University",

        interests: "Climate Resilience; Energy Systems; Climate Services; Early Warning Systems",

        bio: "Academic track fellow in climate-resilient energy systems whose work focuses on climate services, early warning systems and improving access to meteorological data for energy system modellers and policy makers.",

        website: "https://hcbloomfield19.github.io/",

        availableToMentor: true,
        lookingForMentor: false,
        lookingForSTSM: false,
        availableToHostSTSM: true
    },

    {
        name: "Dr Morten Larsen",
        country: "Denmark",
        role: "WG2 Co-leader",
        institution: "Danish Meteorological Institute (DMI)",

        interests: "Climate Extremes; Floods; Compound Events; Water-Energy Nexus",

        bio: "Research unit head at DMI working across ocean and dispersion modelling, hydrology, atmospheric science, compound events and climate change uncertainty.",

        website: "",

        availableToMentor: true,
        lookingForMentor: false,
        lookingForSTSM: true,
        availableToHostSTSM: true
    },

    {
        name: "Joanne Robbins",
        country: "United Kingdom",
        role: "WG3 Leader",
        institution: "Met Office",

        interests: "Impact Modelling; Hydrometeorological Hazards; Impact-based Forecasting; Landslide Forecasting",

        bio: "Manages the Met Office Weather Impacts Team and works on risk and impact modelling for improved forecasting and warning of hydrometeorological hazards.",

        website: "",

        availableToMentor: true,
        lookingForMentor: false,
        lookingForSTSM: false,
        availableToHostSTSM: true
    },

    {
        name: "Dr Marcello Arosio",
        country: "Italy",
        role: "WG3 Co-leader",
        institution: "IUSS Pavia",

        interests: "Systemic Risk; Natural Hazards; Multi-Hazard Interactions; Cascading Impacts",

        bio: "Senior Researcher in Hydrology and Hydraulic Engineering studying systemic risk from natural hazards, multi-hazard interactions, network-based modelling and cascading impacts.",

        website: "",

        availableToMentor: true,
        lookingForMentor: false,
        lookingForSTSM: true,
        availableToHostSTSM: true
    },

    {
        name: "Dr Robert Šakić Trogrlić",
        country: "Austria",
        role: "WG4 Leader",
        institution: "International Institute for Applied Systems Analysis (IIASA)",

        interests: "Multi-Hazards; Multi-Risk; Disaster Risk Reduction; Knowledge Co-production",

        bio: "Senior researcher exploring multi-hazards and multi-risk frameworks, people-centred disaster risk reduction and knowledge co-production across physical and social sciences.",

        website: "",

        availableToMentor: true,
        lookingForMentor: false,
        lookingForSTSM: false,
        availableToHostSTSM: true
    },

    {
        name: "Dr Marleen de Ruiter",
        country: "Netherlands",
        role: "WG4 Co-leader",
        institution: "Vrije Universiteit Amsterdam",

        interests: "Multi-Hazard Risk; Early Warning Systems; Disaster Risk Reduction; Vulnerability",

        bio: "Assistant Professor researching multi-hazard risk modelling, early warning systems, disaster risk reduction and the temporal dynamics of disaster vulnerability.",

        website: "",

        availableToMentor: true,
        lookingForMentor: false,
        lookingForSTSM: true,
        availableToHostSTSM: true
    },

    {
        name: "Dr Silvia De Angeli",
        country: "France",
        role: "WG5 Leader",
        institution: "Université de Lorraine",

        interests: "Sustainability Science; Multi-Hazard Risk; Disaster Risk; Socio-Ecological Systems",

        bio: "Junior Professor in Sustainability Science researching interdisciplinary multi-hazard risk and transdisciplinary modelling of socio-ecological systems under climate risks.",

        website: "",

        availableToMentor: true,
        lookingForMentor: false,
        lookingForSTSM: false,
        availableToHostSTSM: true
    },

    {
        name: "Dr Fiachra O'Loughlin",
        country: "Ireland",
        role: "WG5 Co-leader",
        institution: "University College Dublin",

        interests: "Hydrometeorological Risk; Remote Sensing; Modelling; Water Resources",

        bio: "Assistant Professor in Civil Engineering whose research combines modelling and remote sensing to improve understanding of hydrometeorological risk across different timescales.",

        website: "",

        availableToMentor: true,
        lookingForMentor: false,
        lookingForSTSM: true,
        availableToHostSTSM: true
    },

    {
        name: "Prof Daniela Domeisen",
        country: "Switzerland",
        role: "Cross-cutting WG Coordinator",
        institution: "Université de Lausanne",

        interests: "Atmospheric Dynamics; Sub-seasonal Prediction; Compound Events; Climate Extremes",

        bio: "Associate Professor researching large-scale atmospheric dynamics and predictability on sub-seasonal timescales, including heatwaves, precipitation extremes and compound events.",

        website: "",

        availableToMentor: true,
        lookingForMentor: false,
        lookingForSTSM: false,
        availableToHostSTSM: true
    },

    {
        name: "Nico Caltabiano",
        country: "Switzerland",
        role: "WMO Network Coordinator",
        institution: "World Meteorological Organization (WMO)",

        interests: "Weather Research; Sub-seasonal Prediction; Hydrology; Artificial Intelligence",

        bio: "Scientific Officer in the World Weather Research Programme secretariat, coordinating research activities involving polar regions, precipitation and hydrology prediction, sub-seasonal prediction and artificial intelligence.",

        website: "",

        availableToMentor: true,
        lookingForMentor: false,
        lookingForSTSM: false,
        availableToHostSTSM: false
    },

    {
        name: "Dr Andreia Ribeiro",
        country: "Germany",
        role: "YRI Network Coordinator",
        institution: "Helmholtz Centre for Environmental Research (UFZ)",

        interests: "Climate Extremes; Compound Events; Wildfires; Agricultural Impacts",

        bio: "Climate researcher combining statistical and process-based modelling to investigate climate extremes and compound-event impacts, including wildfires and agricultural impacts.",

        website: "",

        availableToMentor: true,
        lookingForMentor: false,
        lookingForSTSM: true,
        availableToHostSTSM: true
    },

    {
        name: "Stanislav Hronček",
        country: "Slovakia",
        role: "ITC Coordinator",
        institution: "Global Water Partnership Central and Eastern Europe",

        interests: "Climate Resilience; Water Management; Multi-Hazard Risk; Innovation",

        bio: "Project manager and innovation specialist working on climate resilience, water management and multi-hazard risk reduction across Central and Eastern Europe.",

        website: "",

        availableToMentor: true,
        lookingForMentor: false,
        lookingForSTSM: true,
        availableToHostSTSM: false
    },


    /* =========================================
       ADDITIONAL DEMONSTRATION MEMBER
       ========================================= */

    {
        name: "Matthew Calladine",
        country: "United Kingdom",
        role: "PhD Student",
        institution: "Newcastle University",

        interests: "Climate Variability; Climate Change; Energy Systems; India",

        bio: "PhD researcher studying the impacts of climate variability and climate change on the Indian power system.",

        website: "",

        availableToMentor: false,
        lookingForMentor: true,
        lookingForSTSM: true,
        availableToHostSTSM: false
    }

];