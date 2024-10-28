import React, { useState, useEffect } from 'react';

const questionsData = [
  {
    "id": 1,
    "question": "Quel est le rôle principal des mitochondries dans les cellules?",
    "options": [
      "Produire des protéines",
      "Stabiliser la membrane cellulaire",
      "Produire de l'énergie",
      "Transporter les nutriments"
    ],
    "answer": "Proeeduire de l'énergie"
  },
  {
    "id": 2,
    "question": "Quel est le principal composant du plasma sanguin?",
    "options": [
      "Protéines",
      "Graiesses",
      "Glucides",
      "Eau"
    ],
    "answer": "Eau"
  },
  {
    "id": 3,
    "question": "Quel eseet le principal gaz échangé dans les poumons?",
    "options": [
      "Azote",
      "Oxygène",
      "Dioxyde de carbone",
      "Hydrogène"
    ],
    "answer": "Oxygène"
  },
  {
    "id": 4,
    "question": "Quel est le principal type de muscle dans le cœur?",
    "options": [
      "Muscle squelettique",
      "Muscle strié",
      "Muscle lisse",
      "Muscle cardiaque"
    ],
    "answer": "Muscle cardiaque"
  },
  {
    "id": 5,
    "question": "Quel est l'os le plus petit du corps humain?",
    "options": [
      "Fémur",
      "Étrier",
      "Humérus",
      "Tibia"
    ],
    "answer": "Étrier"
  },
  {
    "id": 6,
    "question": "Quelle est la principale fonction de la thyroïde?",
    "options": [
      "Produire des globules rouges",
      "Transporter l'oxygène",
      "Filtrer le sang",
      "Réguler le métabolisme"
    ],
    "answer": "Réguler le métabolisme"
  },
  {
    "id": 7,
    "question": "Quel est le rôle principal du système endocrinien?",
    "options": [
      "Réguler les hormones dans le corps",
      "Filtrer le sang",
      "Transporter l'oxygène",
      "Combattre les infections"
    ],
    "answer": "Réguler les hormones dans le corps"
  },
  {
    "id": 8,
    "question": "Quel est le principal composant des os?",
    "options": [
      "Minéraux",
      "Graisses",
      "Protéines",
      "Glucides"
    ],
    "answer": "Minéraux"
  },
  {
    "id": 9,
    "question": "Quel est le rôle principal des reins?",
    "options": [
      "Éliminer les déchets du sang",
      "Absorber les nutriments",
      "Réguler la température corporelle",
      "Produire des hormones"
    ],
    "answer": "Éliminer les déchets du sang"
  },
  {
    "id": 10,
    "question": "Quel est l'organe principalement responsable de la digestion des graisses?",
    "options": [
      "Pancréas",
      "Foie",
      "Cœur",
      "Estomac"
    ],
    "answer": "Foie"
  },
  {
    "id": 11,
    "question": "Quel est le nombre total d'os dans le corps humain adulte?",
    "options": [
      "214",
      "208",
      "206",
      "198"
    ],
    "answer": "206"
  },
  {
    "id": 12,
    "question": "Quel est le principal rôle de la rate?",
    "options": [
      "Transporter l'oxygène",
      "Filtrer le sang et combattre les infections",
      "Produire des hormones",
      "Stabiliser la colonne vertébrale"
    ],
    "answer": "Filtrer le sang et combattre les infections"
  },
  {
    "id": 13,
    "question": "Quel est le rôle principal de la moelle osseuse?",
    "options": [
      "Transporter l'oxygène",
      "Filtrer le sang",
      "Réguler la température corporelle",
      "Produire des globules rouges"
    ],
    "answer": "Produire des globules rouges"
  },
  {
    "id": 14,
    "question": "Quel est le rôle principal du diaphragme thoracique?",
    "options": [
      "Soutenir la colonne vertébrale",
      "Faciliter le mouvement des membres",
      "Séparer la cavité thoracique de la cavité abdominopelvienne",
      "Protéger le cœur"
    ],
    "answer": "Séparer la cavité thoracique de la cavité abdominopelvienne"
  },
  {
    "id": 15,
    "question": "Quel est le rôle principal des globules blancs?",
    "options": [
      "Combattre les infections",
      "Coaguler le sang",
      "Réguler la température corporelle",
      "Transporter l'oxygène"
    ],
    "answer": "Combattre les infections"
  },
  {
    "id": 16,
    "question": "Quel est le principal organe du système nerveux central?",
    "options": [
      "Cœur",
      "Pancréas",
      "Foie",
      "Cerveau"
    ],
    "answer": "Cerveau"
  },
  {
    "id": 17,
    "question": "Quelle est la principale fonction des artères?",
    "options": [
      "Transporter le sang oxygéné du cœur vers le corps",
      "Transporter le sang pauvre en oxygène vers le cœur",
      "Filtrer le sang",
      "Produire des hormones"
    ],
    "answer": "Transporter le sang oxygéné du cœur vers le corps"
  },
  {
    "id": 18,
    "question": "Quelle est la principale fonction du pancréas?",
    "options": [
      "Produire de l'insuline",
      "Filtrer le sang",
      "Produire des globules rouges",
      "Réguler la température corporelle"
    ],
    "answer": "Produire de l'insuline"
  },
  {
    "id": 19,
    "question": "Quel est le rôle principal du côlon?",
    "options": [
      "Absorber l'eau et former les selles",
      "Combattre les infections",
      "Filtrer le sang",
      "Produire des hormones"
    ],
    "answer": "Absorber l'eau et former les selles"
  },
  {
    "id": 20,
    "question": "Quelle est la principale fonction des poumons?",
    "options": [
      "Échanger les gaz respiratoires",
      "Produire des globules rouges",
      "Filtrer le sang",
      "Réguler la température corporelle"
    ],
    "answer": "Échanger les gaz respiratoires"
  },
  {
    "id": 21,
    "question": "Quel est le rôle principal des globules rouges?",
    "options": [
      "Transporter l'oxygène",
      "Combattre les infections",
      "Réguler la température corporelle",
      "Coaguler le sang"
    ],
    "answer": "Transporter l'oxygène"
  },
  {
    "id": 22,
    "question": "Quel est l'os le plus long du corps humain?",
    "options": [
      "Clavicule",
      "Tibia",
      "Humérus",
      "Fémur"
    ],
    "answer": "Fémur"
  },
  {
    "id": 23,
    "question": "Quel est le principal rôle des veines?",
    "options": [
      "Ramener le sang pauvre en oxygène vers le cœur",
      "Transporter le sang oxygéné du cœur vers le corps",
      "Produire des globules rouges",
      "Combattre les infections"
    ],
    "answer": "Ramener le sang pauvre en oxygène vers le cœur"
  },
  {
    "id": 24,
    "question": "Quel est le rôle principal des reins?",
    "options": [
      "Éliminer les déchets du sang",
      "Absorber les nutriments",
      "Réguler la température corporelle",
      "Produire des hormones"
    ],
    "answer": "Éliminer les déchets du sang"
  },
  {
    "id": 25,
    "question": "Quel terme décrit l'éloignement d'une structure de l'axe du corps?",
    "options": [
      "Extension",
      "Abduction",
      "Flexion",
      "Adduction"
    ],
    "answer": "Abduction"
  },
  {
    "id": 26,
    "question": "Quel est le rôle principal de la peau?",
    "options": [
      "Filtrer le sang",
      "Protéger contre les infections et réguler la température",
      "Pomper le sang",
      "Produire des hormones"
    ],
    "answer": "Protéger contre les infections et réguler la température"
  },
  {
    "id": 27,
    "question": "Quel est le rôle principal de la moelle osseuse?",
    "options": [
      "Transporter l'oxygène",
      "Filtrer le sang",
      "Réguler la température corporelle",
      "Produire des globules rouges"
    ],
    "answer": "Produire des globules rouges"
  },
  {
    "id": 28,
    "question": "Quel est le rôle principal du système lymphatique?",
    "options": [
      "Transmettre des signaux nerveux",
      "Filtrer le sang et combattre les infections",
      "Produire des hormones",
      "Éliminer les déchets du sang"
    ],
    "answer": "Filtrer le sang et combattre les infections"
  },
  {
    "id": 29,
    "question": "Quel est le rôle principal du côlon?",
    "options": [
      "Absorber l'eau et former les selles",
      "Produire des hormones",
      "Combattre les infections",
      "Filtrer le sang"
    ],
    "answer": "Absorber l'eau et former les selles"
  },
  {
    "id": 30,
    "question": "Quel est le rôle principal des nerfs?",
    "options": [
      "Transmettre les signaux entre le cerveau et le corps",
      "Filtrer le sang",
      "Produire des hormones",
      "Combattre les infections"
    ],
    "answer": "Transmettre les signaux entre le cerveau et le corps"
  },
  {
    "id": 31,
    "question": "Quelle est la principale fonction des artères?",
    "options": [
      "Transporter le sang oxygéné du cœur vers le corps",
      "Transporter le sang pauvre en oxygène vers le cœur",
      "Filtrer le sang",
      "Produire des hormones"
    ],
    "answer": "Transporter le sang oxygéné du cœur vers le corps"
  },
  {
    "id": 32,
    "question": "Quel est le rôle principal du pancréas?",
    "options": [
      "Filtrer le sang",
      "Produire de l'insuline",
      "Réguler la température corporelle",
      "Produire des globules rouges"
    ],
    "answer": "Produire de l'insuline"
  },
  {
    "id": 33,
    "question": "Quel est le rôle principal des globules rouges?",
    "options": [
      "Transporter l'oxygène",
      "Combattre les infections",
      "Réguler la température corporelle",
      "Coaguler le sang"
    ],
    "answer": "Transporter l'oxygène"
  },
  {
    "id": 34,
    "question": "Quelle est la principale fonction des poumons?",
    "options": [
      "Échanger les gaz respiratoires",
      "Filtrer le sang",
      "Produire des globules rouges",
      "Réguler la température corporelle"
    ],
    "answer": "Échanger les gaz respiratoires"
  },
  {
    "id": 35,
    "question": "Quel est le principal rôle de la rate?",
    "options": [
      "Filtrer le sang et combattre les infections",
      "Transporter l'oxygène",
      "Produire des hormones",
      "Stabiliser la colonne vertébrale"
    ],
    "answer": "Filtrer le sang et combattre les infections"
  },
  {
    "id": 36,
    "question": "Quel est le rôle principal des reins?",
    "options": [
      "Éliminer les déchets du sang",
      "Réguler la température corporelle",
      "Absorber les nutriments",
      "Produire des hormones"
    ],
    "answer": "Éliminer les déchets du sang"
  },
  {
    "id": 37,
    "question": "Quel est le rôle principal du diaphragme thoracique?",
    "options": [
      "Séparer la cavité thoracique de la cavité abdominopelvienne",
      "Faciliter le mouvement des membres",
      "Soutenir la colonne vertébrale",
      "Protéger le cœur"
    ],
    "answer": "Séparer la cavité thoracique de la cavité abdominopelvienne"
  },
  {
    "id": 38,
    "question": "Quel est l'organe principalement responsable de la digestion des graisses?",
    "options": [
      "Pancréas",
      "Cœur",
      "Estomac",
      "Foie"
    ],
    "answer": "Foie"
  },
  {
    "id": 39,
    "question": "Quelle est la principale fonction du pancréas?",
    "options": [
      "Filtrer le sang",
      "Produire des globules rouges",
      "Réguler la température corporelle",
      "Produire de l'insuline"
    ],
    "answer": "Produire de l'insuline"
  },
  {
    "id": 40,
    "question": "Quel est le principal rôle du système digestif?",
    "options": ["Transformer les aliments en énergie", "Transporter l'oxygène", "Combattre les infections", "Filtrer le sang"],
    "answer": "Transformer les aliments en énergie"
  },
  {
    "id": 41,
    "question": "Quelle est la principale fonction du système immunitaire?",
    "options": ["Protéger le corps contre les infections", "Produire des globules rouges", "Transporter l'oxygène", "Filtrer le sang"],
    "answer": "Protéger le corps contre les infections"
  },
  {
    "id": 42,
    "question": "Quel est le rôle principal du système respiratoire?",
    "options": ["Fournir de l'oxygène au corps", "Produire des globules rouges", "Filtrer le sang", "Réguler la température corporelle"],
    "answer": "Fournir de l'oxygène au corps"
  },
  {
    "id": 43,
    "question": "Quelle est la principale fonction des globules blancs?",
    "options": ["Combattre les infections", "Transporter l'oxygène", "Coaguler le sang", "Réguler la température corporelle"],
    "answer": "Combattre les infections"
  },
  {
    "id": 44,
    "question": "Quel est le principal composant des os?",
    "options": ["Calcium", "Fer", "Magnésium", "Potassium"],
    "answer": "Calcium"
  },
  {
    "id": 45,
    "question": "Quel est le rôle principal de l'intestin grêle?",
    "options": ["Absorber les nutriments des aliments", "Filtrer le sang", "Produire des hormones", "Combattre les infections"],
    "answer": "Absorber les nutriments des aliments"
  },
  {
    "id": 46,
    "question": "Quelle est la principale fonction de la moelle osseuse?",
    "options": ["Produire des globules rouges", "Filtrer le sang", "Transporter l'oxygène", "Combattre les infections"],
    "answer": "Produire des globules rouges"
  },
  {
    "id": 47,
    "question": "Quel est le rôle principal du pancréas?",
    "options": ["Réguler le taux de sucre dans le sang", "Produire des globules rouges", "Combattre les infections", "Filtrer le sang"],
    "answer": "Réguler le taux de sucre dans le sang"
  },
  {
    "id": 48,
    "question": "Quelle est la principale fonction des muscles squelettiques?",
    "options": ["Permettre le mouvement volontaire", "Filtrer le sang", "Produire des hormones", "Réguler la température corporelle"],
    "answer": "Permettre le mouvement volontaire"
  },
  {
    "id": 49,
    "question": "Quel est le rôle principal des neurones?",
    "options": ["Transmettre les signaux nerveux", "Produire des globules rouges", "Combattre les infections", "Filtrer le sang"],
    "answer": "Transmettre les signaux nerveux"
  },
  {
    "id": 50,
    "question": "Quelle est la principale fonction de l'hémoglobine dans les globules rouges?",
    "options": ["Transporter l'oxygène", "Combattre les infections", "Coaguler le sang", "Filtrer le sang"],
    "answer": "Transporter l'oxygène"
  },
  {
    "id": 51,
    "question": "Quel est le rôle principal du système circulatoire?",
    "options": [
      "Réguler la température corporelle",
      "Produire des hormones",
      "Combattre les infections",
      "Transporter les nutriments et l'oxygène aux cellules"
    ],
    "answer": "Transporter les nutriments et l'oxygène aux cellules"
  },
  {
    "id": 52,
    "question": "Quelle est la principale fonction des plaquettes sanguines?",
    "options": [
      "Transporter l'oxygène",
      "Filtrer le sang",
      "Coaguler le sang",
      "Combattre les infections"
    ],
    "answer": "Coaguler le sang"
  },
  {
    "id": 53,
    "question": "Quel est le principal rôle de la vésicule biliaire?",
    "options": [
      "Produire des hormones",
      "Stocker et concentrer la bile",
      "Filtrer le sang",
      "Combattre les infections"
    ],
    "answer": "Stocker et concentrer la bile"
  },
  {
    "id": 54,
    "question": "Quelle est la principale fonction des reins?",
    "options": [
      "Filtrer le sang pour éliminer les déchets",
      "Transporter l'oxygène",
      "Réguler la température corporelle",
      "Produire des globules rouges"
    ],
    "answer": "Filtrer le sang pour éliminer les déchets"
  },
  {
    "id": 55,
    "question": "Quel organe est responsable de la production de la bile?",
    "options": [
      "Pancréas",
      "Estomac",
      "Foie",
      "Vésicule biliaire"
    ],
    "answer": "Foie"
  },
  {
    "id": 56,
    "question": "Quelle est la principale fonction des cellules épithéliales?",
    "options": [
      "Combattre les infections",
      "Produire des hormones",
      "Protéger les surfaces corporelles",
      "Transporter l'oxygène"
    ],
    "answer": "Protéger les surfaces corporelles"
  },
  {
    "id": 57,
    "question": "Quel est le rôle principal des bronches dans les poumons?",
    "options": [
      "Transporter l'oxygène",
      "Filtrer le sang",
      "Acheminer l'air aux alvéoles",
      "Produire des hormones"
    ],
    "answer": "Acheminer l'air aux alvéoles"
  },
  {
    "id": 58,
    "question": "Quelle est la fonction principale de l'épiderme?",
    "options": [
      "Filtrer le sang",
      "Produire des globules rouges",
      "Combattre les infections",
      "Protéger contre les infections et les agressions extérieures"
    ],
    "answer": "Protéger contre les infections et les agressions extérieures"
  },
  {
    "id": 59,
    "question": "Quel est le principal rôle des alvéoles pulmonaires?",
    "options": [
      "Filtrer le sang",
      "Combattre les infections",
      "Échanger les gaz respiratoires",
      "Produire des hormones"
    ],
    "answer": "Échanger les gaz respiratoires"
  },
  {
    "id": 60,
    "question": "Quelle est la principale fonction des muscles cardiaques?",
    "options": [
      "Produire des globules rouges",
      "Combattre les infections",
      "Pomper le sang à travers le corps",
      "Filtrer le sang"
    ],
    "answer": "Pomper le sang à travers le corps"
  },
  {
    "id": 61,
    "question": "Quel organe est principalement responsable de la filtration du sang?",
    "options": [
      "Poumons",
      "Pancréas",
      "Foie",
      "Reins"
    ],
    "answer": "Reins"
  },
  {
    "id": 62,
    "question": "Quelle est la principale fonction des glandes sudoripares?",
    "options": [
      "Filtrer le sang",
      "Réguler la température corporelle par la sueur",
      "Produire des hormones",
      "Transporter l'oxygène"
    ],
    "answer": "Réguler la température corporelle par la sueur"
  },
  {
    "id": 63,
    "question": "Quel est le rôle principal des glandes salivaires?",
    "options": [
      "Combattre les infections",
      "Produire des globules rouges",
      "Filtrer le sang",
      "Produire de la salive pour faciliter la digestion"
    ],
    "answer": "Produire de la salive pour faciliter la digestion"
  },
  {
    "id": 64,
    "question": "Quelle est la principale fonction des artères coronaires?",
    "options": [
      "Produire des hormones",
      "Alimenter le cœur en oxygène et en nutriments",
      "Transporter le sang pauvre en oxygène",
      "Filtrer le sang"
    ],
    "answer": "Alimenter le cœur en oxygène et en nutriments"
  },
  {
    "id": 65,
    "question": "Quel est le principal rôle de l'utérus?",
    "options": [
      "Abriter et nourrir l'embryon/fœtus pendant la grossesse",
      "Filtrer le sang",
      "Produire des hormones",
      "Combattre les infections"
    ],
    "answer": "Abriter et nourrir l'embryon/fœtus pendant la grossesse"
  },
  {
    "id": 66,
    "question": "Quelle est la principale fonction de la trachée?",
    "options": [
      "Acheminer l'air vers les poumons",
      "Combattre les infections",
      "Filtrer le sang",
      "Produire des globules rouges"
    ],
    "answer": "Acheminer l'air vers les poumons"
  },
  {
    "id": 67,
    "question": "Quel est le rôle principal du système lymphatique?",
    "options": [
      "Transporter les lymphocytes et filtrer la lymphe",
      "Réguler la température corporelle",
      "Transporter l'oxygène",
      "Produire des hormones"
    ],
    "answer": "Transporter les lymphocytes et filtrer la lymphe"
  },
  {
    "id": 68,
    "question": "Quelle est la principale fonction des reins?",
    "options": [
      "Filtrer les déchets et réguler l'équilibre hydrique",
      "Combattre les infections",
      "Transporter l'oxygène",
      "Produire des hormones"
    ],
    "answer": "Filtrer les déchets et réguler l'équilibre hydrique"
  },
  {
    "id": 69,
    "question": "Quel est le rôle principal du système nerveux central?",
    "options": [
      "Contrôler et coordonner les fonctions corporelles",
      "Filtrer le sang",
      "Combattre les infections",
      "Produire des globules rouges"
    ],
    "answer": "Contrôler et coordonner les fonctions corporelles"
  },
  {
    "id": 70,
    "question": "Quelle est la principale fonction des muscles lisses?",
    "options": [
      "Combattre les infections",
      "Filtrer le sang",
      "Permettre les mouvements involontaires des organes",
      "Produire des hormones"
    ],
    "answer": "Permettre les mouvements involontaires des organes"
  },
  {
    "id": 71,
    "question": "Quel organe produit les sucs digestifs nécessaires à la digestion des protéines?",
    "options": [
      "Pancréas",
      "Estomac",
      "Foie",
      "Reins"
    ],
    "answer": "Estomac"
  },
  {
    "id": 72,
    "question": "Quel est le rôle principal des neurones sensoriels?",
    "options": [
      "Combattre les infections",
      "Filtrer le sang",
      "Transporter l'oxygène",
      "Transmettre les informations des sens vers le cerveau"
    ],
    "answer": "Transmettre les informations des sens vers le cerveau"
  },
  {
    "id": 73,
    "question": "Quelle est la principale fonction du gros intestin?",
    "options": [
      "Absorber l'eau et former les selles",
      "Combattre les infections",
      "Filtrer le sang",
      "Produire des hormones"
    ],
    "answer": "Absorber l'eau et former les selles"
  },
  {
    "id": 74,
    "question": "Quel est le principal rôle des ganglions lymphatiques?",
    "options": ["Filtrer la lymphe et lutter contre les infections", "Réguler la température corporelle", "Produire des hormones", "Transporter l'oxygène"],
    "answer": "Filtrer la lymphe et lutter contre les infections"
  },
  {
    "id": 75,
    "question": "Quelle est la fonction principale du cortex cérébral?",
    "options": [
      "Filtrer le sang",
      "Combattre les infections",
      "Produire des globules rouges",
      "Contrôler les fonctions cognitives supérieures"
    ],
    "answer": "Contrôler les fonctions cognitives supérieures"
  },
  {
    "id": 76,
    "question": "Quel est le principal rôle de l'acide chlorhydrique dans l'estomac?",
    "options": [
      "Transporter l'oxygène",
      "Filtrer le sang",
      "Produire des globules rouges",
      "Aider à digérer les aliments et tuer les bactéries"
    ],
    "answer": "Aider à digérer les aliments et tuer les bactéries"
  },
  {
    "id": 77,
    "question": "Quelle est la principale fonction des cellules souches?",
    "options": [
      "Se différencier en divers types de cellules spécialisées",
      "Filtrer le sang",
      "Combattre les infections",
      "Produire des hormones"
    ],
    "answer": "Se différencier en divers types de cellules spécialisées"
  },
  {
    "id": 78,
    "question": "Quel organe est responsable de la production d'insuline?",
    "options": [
      "Foie",
      "Estomac",
      "Reins",
      "Pancréas"
    ],
    "answer": "Pancréas"
  },
  {
    "id": 79,
    "question": "Quelle est la principale fonction de la moelle épinière?",
    "options": [
      "Produire des globules rouges",
      "Combattre les infections",
      "Transmettre les signaux nerveux entre le cerveau et le corps",
      "Filtrer le sang"
    ],
    "answer": "Transmettre les signaux nerveux entre le cerveau et le corps"
  },
  {
    "id": 80,
    "question": "Quel est le rôle principal du système reproducteur féminin?",
    "options": [
      "Combattre les infections",
      "Transporter l'oxygène",
      "Filtrer le sang",
      "Produire des ovules et soutenir la grossesse"
    ],
    "answer": "Produire des ovules et soutenir la grossesse"
  },
  {
    "id": 81,
    "question": "Quelle est la principale fonction de la glande thyroïde?",
    "options": [
      "Filtrer le sang",
      "Combattre les infections",
      "Réguler le métabolisme et la croissance",
      "Produire des globules rouges"
    ],
    "answer": "Réguler le métabolisme et la croissance"
  },
  {
    "id": 82,
    "question": "Quel est le principal rôle des bronchioles?",
    "options": [
      "Filtrer le sang",
      "Acheminer l'air des bronches aux alvéoles",
      "Combattre les infections",
      "Produire des hormones"
    ],
    "answer": "Acheminer l'air des bronches aux alvéoles"
  },
  {
    "id": 83,
    "question": "Quelle est la principale fonction du duodénum?",
    "options": [
      "Commencer la digestion des nutriments après l'estomac",
      "Filtrer le sang",
      "Combattre les infections",
      "Produire des globules rouges"
    ],
    "answer": "Commencer la digestion des nutriments après l'estomac"
  },
  {
    "id": 84,
    "question": "Quel est le rôle principal des disques intervertébraux?",
    "options": [
      "Filtrer le sang",
      "Amortir les chocs et permettre la flexibilité de la colonne vertébrale",
      "Combattre les infections",
      "Transporter l'oxygène"
    ],
    "answer": "Amortir les chocs et permettre la flexibilité de la colonne vertébrale"
  },
  {
    "id": 85,
    "question": "Quelle est la principale fonction des testicules?",
    "options": [
      "Combattre les infections",
      "Filtrer le sang",
      "Transporter l'oxygène",
      "Produire les spermatozoïdes et la testostérone"
    ],
    "answer": "Produire les spermatozoïdes et la testostérone"
  },
  {
    "id": 86,
    "question": "Quel est le rôle principal des cellules B dans le système immunitaire?",
    "options": [
      "Transporter l'oxygène",
      "Réguler la température corporelle",
      "Filtrer le sang",
      "Produire des anticorps pour combattre les infections"
    ],
    "answer": "Produire des anticorps pour combattre les infections"
  },
  {
    "id": 87,
    "question": "Quelle est la principale fonction des hormones sexuelles?",
    "options": [
      "Combattre les infections",
      "Transporter l'oxygène",
      "Filtrer le sang",
      "Réguler la reproduction et les caractéristiques sexuelles"
    ],
    "answer": "Réguler la reproduction et les caractéristiques sexuelles"
  },
  {
    "id": 88,
    "question": "Quel organe est principalement responsable de la régulation du métabolisme?",
    "options": [
      "Pancréas",
      "Reins",
      "Foie",
      "Thyroïde"
    ],
    "answer": "Thyroïde"
  },
  {
    "id": 89,
    "question": "Quelle est la principale fonction des globules blancs?",
    "options": [
      "Filtrer le sang",
      "Transporter l'oxygène",
      "Combattre les infections et protéger le corps",
      "Réguler la température corporelle"
    ],
    "answer": "Combattre les infections et protéger le corps"
  },
  {
    "id": 90,
    "question": "Quel est le rôle principal des mitochondries dans les cellules?",
    "options": [
      "Combattre les infections",
      "Transporter l'oxygène",
      "Filtrer le sang",
      "Produire de l'énergie sous forme d'ATP"
    ],
    "answer": "Produire de l'énergie sous forme d'ATP"
  },
  {
    "id": 91,
    "question": "Quelle est la principale fonction des poumons?",
    "options": [
      "Combattre les infections",
      "Filtrer le sang",
      "Permettre les échanges gazeux entre l'air et le sang",
      "Produire des globules rouges"
    ],
    "answer": "Permettre les échanges gazeux entre l'air et le sang"
  },
  {
    "id": 92,
    "question": "Quel est le principal rôle du tissu adipeux?",
    "options": [
      "Combattre les infections",
      "Produire des hormones",
      "Filtrer le sang",
      "Stocker l'énergie sous forme de graisse"
    ],
    "answer": "Stocker l'énergie sous forme de graisse"
  },
  {
    "id": 93,
    "question": "Quelle est la principale fonction du système squelettique?",
    "options": [
      "Combattre les infections",
      "Produire des hormones",
      "Soutenir et protéger les organes du corps",
      "Filtrer le sang"
    ],
    "answer": "Soutenir et protéger les organes du corps"
  },
  {
    "id": 94,
    "question": "Quel est le rôle principal de l'hypothalamus?",
    "options": [
      "Réguler les fonctions corporelles telles que la température et l'appétit",
      "Filtrer le sang",
      "Combattre les infections",
      "Produire des globules rouges"
    ],
    "answer": "Réguler les fonctions corporelles telles que la température et l'appétit"
  },
  {
    "id": 95,
    "question": "Quelle est la principale fonction des glandes surrénales?",
    "options": [
      "Filtrer le sang",
      "Combattre les infections",
      "Transporter l'oxygène",
      "Produire des hormones comme l'adrénaline et le cortisol"
    ],
    "answer": "Produire des hormones comme l'adrénaline et le cortisol"
  },
  {
    "id": 96,
    "question": "Quel est le rôle principal des tendons?",
    "options": [
      "Relier les os entre eux pour stabiliser les articulations",
      "Filtrer le sang",
      "Transporter l'oxygène",
      "Produire des hormones"
    ],
    "answer": "Relier les muscles aux os"
  },
  {
    "id": 97,
    "question": "Quelle est la principale fonction des ligaments?",
    "options": [
      "Combattre les infections",
      "Filtrer le sang",
      "Relier les os entre eux pour stabiliser les articulations",
      "Produire des globules rouges"
    ],
    "answer": "Relier les os entre eux pour stabiliser les articulations"
  },
  {
    "id": 98,
    "question": "Quel est le principal rôle de l'iris dans l'œil?",
    "options": [
      "Filtrer le sang",
      "Combattre les infections",
      "Produire des globules rouges",
      "Réguler la quantité de lumière entrant dans l'œil"
    ],
    "answer": "Réguler la quantité de lumière entrant dans l'œil"
  },
  {
    "id": 99,
    "question": "Quelle est la principale fonction des reins?",
    "options": [
      "Filtrer le sang",
      "Produire des globules rouges",
      "Transporter l'oxygène",
      "Filtrer les déchets et équilibrer les fluides corporels"
    ],
    "answer": "Filtrer les déchets et équilibrer les fluides corporels"
  },
  {
    "id": 100,
    "question": "Quel est le rôle principal des glandes parathyroïdes?",
    "options": ["Réguler les niveaux de calcium dans le sang", "Combattre les infections", "Filtrer le sang", "Transporter l'oxygène"],
    "answer": "Réguler les niveaux de calcium dans le sang"
  },
  {
    "id": 101,
    "question": "Quel est le rôle principal de l'oreille interne?",
    "options": ["Produire des globules rouges", "Filtrer le sang", "Réguler la température corporelle", "Maintenir l'équilibre et la perception du son"],
    "answer": "Maintenir l'équilibre et la perception du son"
  },
  {
    "id": 102,
    "question": "Quelle est la principale fonction des côtes?",
    "options": ["Combattre les infections", "Transporter l'oxygène", "Filtrer le sang", "Protéger les organes thoraciques comme le cœur et les poumons"],
    "answer": "Protéger les organes thoraciques comme le cœur et les poumons"
  },
  {
    "id": 104,
    "question": "Quelle est la principale fonction des phalanges?",
    "options": ["Filtrer le sang", "Combattre les infections", "Transporter l'oxygène", "Permettre la flexion et l'extension des doigts"],
    "answer": "Permettre la flexion et l'extension des doigts"
  },
  {
    "id": 105,
    "question": "Quel est le rôle principal des cellules gliales?",
    "options": ["Filtrer le sang", "Soutenir et protéger les neurones", "Transporter l'oxygène", "Produire des hormones"],
    "answer": "Soutenir et protéger les neurones"
  },
  {
    "id": 106,
    "question": "Quelle est la principale fonction des follicules pileux?",
    "options": ["Combattre les infections", "Produire des poils et des cheveux", "Filtrer le sang", "Produire des globules rouges"],
    "answer": "Produire des poils et des cheveux"
  },
  {
    "id": 107,
    "question": "Quel est le rôle principal de l'utérus?",
    "options": ["Nourrir et protéger l'embryon et le fœtus", "Transporter l'oxygène", "Filtrer le sang", "Produire des hormones"],
    "answer": "Nourrir et protéger l'embryon et le fœtus"
  },
  {
    "id": 108,
    "question": "Quelle est la principale fonction de la rétine?",
    "options": ["Produire des globules rouges", "Combattre les infections", "Transformer la lumière en signaux nerveux", "Filtrer le sang"],
    "answer": "Transformer la lumière en signaux nerveux"
  },
  {
    "id": 109,
    "question": "Quel est le rôle principal des valves cardiaques?",
    "options": ["Permettre le passage unidirectionnel du sang dans le cœur", "Produire des globules rouges", "Combattre les infections", "Filtrer le sang"],
    "answer": "Permettre le passage unidirectionnel du sang dans le cœur"
  },
  {
    "id": 110,
    "question": "Quelle est la principale fonction de l'oesophage?",
    "options": ["Transporter la nourriture de la bouche à l'estomac", "Combattre les infections", "Produire des globules rouges", "Filtrer le sang"],
    "answer": "Transporter la nourriture de la bouche à l'estomac"
  },
  {
    "id": 111,
    "question": "Quel est le rôle principal de la plèvre?",
    "options": ["Transporter l'oxygène", "Produire des globules rouges", "Filtrer le sang", "Protéger et lubrifier les poumons"],
    "answer": "Protéger et lubrifier les poumons"
  },
  {
    "id": 112,
    "question": "Quelle est la principale fonction du canal rachidien?",
    "options": ["Filtrer le sang", "Transporter les signaux nerveux entre le cerveau et le corps", "Produire des hormones", "Combattre les infections"],
    "answer": "Transporter les signaux nerveux entre le cerveau et le corps"
  },
  {
    "id": 113,
    "question": "Quel est le rôle principal des globules rouges?",
    "options": ["Transporter l'oxygène", "Filtrer le sang", "Produire des hormones", "Combattre les infections"],
    "answer": "Transporter l'oxygène"
  },
  {
    "id": 114,
    "question": "Quelle est la principale fonction des neurones?",
    "options": ["Produire des hormones", "Filtrer le sang", "Transmettre les signaux électriques dans le corps", "Combattre les infections"],
    "answer": "Transmettre les signaux électriques dans le corps"
  },
  {
    "id": 115,
    "question": "Quel est le rôle principal de la lymphe?",
    "options": ["Filtrer le sang", "Transporter les cellules immunitaires dans le corps", "Produire des hormones", "Combattre les infections"],
    "answer": "Transporter les cellules immunitaires dans le corps"
  },
  {
    "id": 116,
    "question": "Quelle est la principale fonction des ostéoblastes?",
    "options": ["Construire et remodeler le tissu osseux", "Combattre les infections", "Filtrer le sang", "Transporter l'oxygène"],
    "answer": "Construire et remodeler le tissu osseux"
  },
  {
    "id": 119,
    "question": "Quel est le rôle principal des artères?",
    "options": [
      "Produire des hormones",
      "Filtrer le sang",
      "Combattre les infections",
      "Transporter le sang oxygéné du cœur vers le reste du corps"
    ],
    "answer": "Transporter le sang oxygéné du cœur vers le reste du corps"
  },
  {
    "id": 124,
    "question": "Quelle est la principale fonction du foie?",
    "options": [
      "Filtrer le sang",
      "Détoxifier le sang et métaboliser les nutriments",
      "Produire des globules rouges",
      "Transporter l'oxygène"
    ],
    "answer": "Détoxifier le sang et métaboliser les nutriments"
  },
  {
    "id": 117,
    "question": "Quel est le rôle principal des plaquettes?",
    "options": [
      "Combattre les infections",
      "Filtrer le sang",
      "Participer à la coagulation du sang",
      "Produire des globules rouges"
    ],
    "answer": "Participer à la coagulation du sang"
  },
  {
    "id": 134,
    "question": "Quelle est la principale fonction des glandes lacrymales?",
    "options": [
      "Produire des globules rouges",
      "Combattre les infections",
      "Produire des larmes pour lubrifier et protéger l'œil",
      "Filtrer le sang"
    ],
    "answer": "Produire des larmes pour lubrifier et protéger l'œil"
  },
  {
    "id": 121,
    "question": "Quel est le rôle principal du péritoine?",
    "options": [
      "Maintenir et protéger les organes abdominaux",
      "Transporter l'oxygène",
      "Combattre les infections",
      "Filtrer le sang"
    ],
    "answer": "Maintenir et protéger les organes abdominaux"
  },
  {
    "id": 122,
    "question": "Quelle est la principale fonction des reins?",
    "options": [
      "Filtrer le sang",
      "Combattre les infections",
      "Produire des globules rouges",
      "Éliminer les déchets liquides du corps"
    ],
    "answer": "Filtrer les déchets et équilibrer les fluides corporels"
  },
  {
    "id": 127,
    "question": "Quel est le rôle principal de la rate?",
    "options": [
      "Filtrer le sang et détruire les vieilles cellules sanguines",
      "Transporter l'oxygène",
      "Combattre les infections",
      "Produire des hormones"
    ],
    "answer": "Filtrer le sang et détruire les vieilles cellules sanguines"
  },
  {
    "id": 123,
    "question": "Quel est le rôle principal du diaphragme?",
    "options": [
      "Filtrer le sang",
      "Participer à la respiration en contractant et en relaxant",
      "Produire des hormones",
      "Combattre les infections"
    ],
    "answer": "Participer à la respiration en contractant et en relaxant"
  },
  {
    "id": 128,
    "question": "Quelle est la principale fonction des glandes surrénales?",
    "options": [
      "Filtrer le sang",
      "Produire des hormones comme l'adrénaline",
      "Combattre les infections",
      "Transporter l'oxygène"
    ],
    "answer": "Produire des hormones comme l'adrénaline"
  },
  {
    "id": 129,
    "question": "Quel est le rôle principal du pancréas?",
    "options": [
      "Réguler la glycémie en produisant de l'insuline",
      "Produire des globules rouges",
      "Filtrer le sang",
      "Transporter l'oxygène"
    ],
    "answer": "Réguler la glycémie en produisant de l'insuline"
  },
  {
    "id": 130,
    "question": "Quelle est la principale fonction de l'hypothalamus?",
    "options": [
      "Filtrer le sang",
      "Réguler la température corporelle et d'autres fonctions autonomes",
      "Produire des globules rouges",
      "Combattre les infections"
    ],
    "answer": "Réguler la température corporelle et d'autres fonctions autonomes"
  },
  {
    "id": 131,
    "question": "Quel est le rôle principal de la glande thyroïde?",
    "options": [
      "Filtrer le sang",
      "Transporter l'oxygène",
      "Réguler le métabolisme",
      "Produire des globules rouges"
    ],
    "answer": "Réguler le métabolisme"
  },
  {
    "id": 132,
    "question": "Quelle est la principale fonction des glandes sudoripares?",
    "options": [
      "Filtrer le sang",
      "Produire des globules rouges",
      "Transporter l'oxygène",
      "Produire la sueur pour réguler la température corporelle"
    ],
    "answer": "Produire la sueur pour réguler la température corporelle"
  },
  {
    "id": 133,
    "question": "Quel est le rôle principal de l'insuline?",
    "options": [
      "Produire des globules rouges",
      "Réguler la glycémie en facilitant l'absorption du glucose par les cellules",
      "Transporter l'oxygène",
      "Filtrer le sang"
    ],
    "answer": "Réguler la glycémie en facilitant l'absorption du glucose par les cellules"
  },
  {
    "id": 135,
    "question": "Quel est le rôle principal du duodénum?",
    "options": [
      "Produire des globules rouges",
      "Filtrer le sang",
      "Commencer la digestion des nutriments dans l'intestin grêle",
      "Transporter l'oxygène"
    ],
    "answer": "Commencer la digestion des nutriments dans l'intestin grêle"
  },
  {
    "id": 136,
    "question": "Quelle est la principale fonction du plexus solaire?",
    "options": [
      "Réguler les fonctions autonomes de plusieurs organes internes",
      "Produire des globules rouges",
      "Transporter l'oxygène",
      "Filtrer le sang"
    ],
    "answer": "Réguler les fonctions autonomes de plusieurs organes internes"
  },
  {
    "id": 137,
    "question": "Quel est le rôle principal du système urinaire?",
    "options": [
      "Produire des globules rouges",
      "Éliminer les déchets liquides du corps",
      "Transporter l'oxygène",
      "Filtrer le sang"
    ],
    "answer": "Éliminer les déchets liquides du corps"
  },
  {
    "id": 138,
    "question": "Quelle est la principale fonction de la vésicule biliaire?",
    "options": [
      "Stocker et concentrer la bile produite par le foie",
      "Transporter l'oxygène",
      "Produire des globules rouges",
      "Filtrer le sang"
    ],
    "answer": "Stocker et concentrer la bile produite par le foie"
  },
  {
    "id": 139,
    "question": "Quel est le rôle principal de la synovie?",
    "options": [
      "Lubrifier les articulations",
      "Filtrer le sang",
      "Produire des globules rouges",
      "Transporter l'oxygène"
    ],
    "answer": "Lubrifier les articulations"
  },
  {
    "id": 140,
    "question": "Quelle est la principale fonction des poumons?",
    "options": [
      "Filtrer le sang",
      "Combattre les infections",
      "Produire des hormones",
      "Permettre l'échange de gaz entre l'air et le sang"
    ],
    "answer": "Permettre l'échange de gaz entre l'air et le sang"
  },
  {
    "id": 141,
    "question": "Quel est le rôle principal de la moelle épinière?",
    "options": [
      "Transporter l'oxygène",
      "Produire des globules rouges",
      "Filtrer le sang",
      "Transmettre les signaux entre le cerveau et le reste du corps"
    ],
    "answer": "Transmettre les signaux entre le cerveau et le reste du corps"
  },
  {
    "id": 142,
    "question": "Quelle est la principale fonction du placenta?",
    "options": [
      "Combattre les infections",
      "Filtrer le sang",
      "Nourrir et oxygéner le fœtus pendant la grossesse",
      "Produire des globules rouges"
    ],
    "answer": "Nourrir et oxygéner le fœtus pendant la grossesse"
  },
  {
    "id": 143,
    "question": "Quel est le rôle principal du rectum?",
    "options": [
      "Transporter l'oxygène",
      "Produire des globules rouges",
      "Filtrer le sang",
      "Stocker les matières fécales avant leur évacuation"
    ],
    "answer": "Stocker les matières fécales avant leur évacuation"
  },
  {
    "id": 144,
    "question": "Quelle est la principale fonction du nerf optique?",
    "options": [
      "Filtrer le sang",
      "Produire des globules rouges",
      "Combattre les infections",
      "Transmettre les signaux visuels de la rétine au cerveau"
    ],
    "answer": "Transmettre les signaux visuels de la rétine au cerveau"
  },
  {
    "id": 145,
    "question": "Quel est le rôle principal de l'œsophage?",
    "options": [
      "Filtrer le sang",
      "Produire des hormones",
      "Combattre les infections",
      "Transporter la nourriture de la bouche à l'estomac"
    ],
    "answer": "Transporter la nourriture de la bouche à l'estomac"
  },
  {
    "id": 146,
    "question": "Quelle est la principale fonction du cervelet?",
    "options": [
      "Filtrer le sang",
      "Transporter l'oxygène",
      "Coordonner les mouvements et maintenir l'équilibre",
      "Produire des globules rouges"
    ],
    "answer": "Coordonner les mouvements et maintenir l'équilibre"
  },
  {
    "id": 147,
    "question": "Quel est le rôle principal de la membrane plasmique?",
    "options": [
      "Filtrer le sang",
      "Produire des globules rouges",
      "Réguler les échanges entre l'intérieur et l'extérieur de la cellule",
      "Combattre les infections"
    ],
    "answer": "Réguler les échanges entre l'intérieur et l'extérieur de la cellule"
  },
  {
    "id": 148,
    "question": "Quelle est la principale fonction des mitochondries?",
    "options": [
      "Filtrer le sang",
      "Transporter l'oxygène",
      "Produire de l'énergie pour la cellule",
      "Produire des globules rouges"
    ],
    "answer": "Produire de l'énergie pour la cellule"
  },
  {
    "id": 149,
    "question": "Quel est le rôle principal du système endocrinien?",
    "options": [
      "Transporter l'oxygène",
      "Combattre les infections",
      "Filtrer le sang",
      "Réguler les fonctions corporelles par la libération d'hormones"
    ],
    "answer": "Réguler les fonctions corporelles par la libération d'hormones"
  },


];


const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(new Set());
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  useEffect(() => {
    const shuffledQuestions = [...questionsData].sort(() => Math.random() - 0.5);
    setQuestions(shuffledQuestions);
  }, []);

  const handleAnswer = (selectedOption) => {
    setSelectedAnswer(selectedOption);
    const currentQuestion = questions[currentQuestionIndex];
    const correct = selectedOption === currentQuestion.answer;
    setIsCorrect(correct);

    if (correct) {
      setCorrectAnswers(new Set(correctAnswers).add(currentQuestion.id));
      if (incorrectAnswers.includes(currentQuestion.id)) {
        setIncorrectAnswers(incorrectAnswers.filter(id => id !== currentQuestion.id));
      }
    } else {
      if (!incorrectAnswers.includes(currentQuestion.id)) {
        setIncorrectAnswers([...incorrectAnswers, currentQuestion.id]);
      }
    }

    setTimeout(() => {
      setSelectedAnswer(null);
      setIsCorrect(null);
      moveToNextQuestion();
    }, 1000); // Attendre 3 secondes avant de passer à la question suivante
  };

  const moveToNextQuestion = () => {
    let nextIndex = currentQuestionIndex + 1;
    if (nextIndex >= questions.length) {
      nextIndex = 0;
    }
    setCurrentQuestionIndex(nextIndex);
  };

  useEffect(() => {
    if (incorrectAnswers.length > 0 && currentQuestionIndex >= questions.length - 1) {
      const nextQuestions = questions.filter(q => incorrectAnswers.includes(q.id));
      setQuestions([...questions, ...nextQuestions]);
    }
  }, [currentQuestionIndex]);

  if (questions.length === 0) return <div>Loading...</div>;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="p-4 max-w-xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">{currentQuestion.question}</h2>
        <div className="space-y-2">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === option;
            const buttonColor = isSelected
              ? isCorrect
                ? 'bg-green-500'
                : 'bg-red-500'
              : 'bg-blue-500';

            return (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={selectedAnswer !== null} // Désactiver les boutons après une sélection
                className={`block w-full p-2 text-white rounded-lg ${buttonColor} ${
                  selectedAnswer === null ? 'hover:bg-blue-600' : ''
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
