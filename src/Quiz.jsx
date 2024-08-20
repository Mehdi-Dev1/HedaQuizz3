import React, { useState, useEffect } from 'react';

const questionsData = [
  {
    "id": 1,
    "question": "Quel est le poids moyen à la naissance pour un nouveau-né à terme?",
    "options": ["4,5 kg", "3,5 kg", "2,5 kg", "5 kg"],
    "answer": "3,5 kg"
  },
  {
    "id": 2,
    "question": "Quelle est la fréquence respiratoire normale d'un nouveau-né?",
    "options": ["40-60 respirations/min", "60-80 respirations/min", "10-20 respirations/min", "20-30 respirations/min"],
    "answer": "40-60 respirations/min"
  },
  {
    "id": 3,
    "question": "Quel est le signe clinique principal d'une infection néonatale?",
    "options": ["Cyanose", "Fièvre", "Hyperglycémie", "Hypotension"],
    "answer": "Fièvre"
  },
  {
    "id": 4,
    "question": "Quel est le score d'Apgar minimal indiquant une bonne adaptation à la vie extra-utérine?",
    "options": ["7", "10", "5", "3"],
    "answer": "7"
  },
  {
    "id": 5,
    "question": "Quelle est la durée de la période néonatale?",
    "options": ["28 jours", "42 jours", "14 jours", "7 jours"],
    "answer": "28 jours"
  },
  {
    "id": 6,
    "question": "Quel est le traitement initial de la détresse respiratoire néonatale?",
    "options": ["Oxygénothérapie", "Réhydratation", "Diurétique", "Antibiothérapie"],
    "answer": "Oxygénothérapie"
  },
  {
    "id": 7,
    "question": "Quel est le paramètre le plus important à surveiller chez un nouveau-né en couveuse?",
    "options": ["Température corporelle", "Pression artérielle", "Fréquence cardiaque", "Saturation en oxygène"],
    "answer": "Température corporelle"
  },
  {
    "id": 8,
    "question": "Quel est le facteur de risque principal de l'hyperbilirubinémie néonatale?",
    "options": ["Hypoglycémie", "Prématurité", "Macrosomie", "Apnée"],
    "answer": "Prématurité"
  },
  {
    "id": 9,
    "question": "Quel est le traitement principal de l'hyperbilirubinémie sévère?",
    "options": ["Photothérapie", "Antibiothérapie", "Réhydratation", "Transfusion sanguine"],
    "answer": "Photothérapie"
  },
  {
    "id": 10,
    "question": "Quel est le temps de jeûne recommandé avant une chirurgie pour un enfant de moins de 6 mois?",
    "options": ["4 heures", "6 heures", "2 heures", "8 heures"],
    "answer": "4 heures"
  },
  {
    "id": 11,
    "question": "Quel est le principal signe d'une déshydratation modérée chez un enfant?",
    "options": ["Muqueuses sèches", "Cyanose", "Fièvre", "Somnolence"],
    "answer": "Muqueuses sèches"
  },
  {
    "id": 12,
    "question": "Quel est le mode de transmission principal du rotavirus chez l'enfant?",
    "options": ["Fécal-oral", "Contact direct", "Aérien", "Contact sanguin"],
    "answer": "Fécal-oral"
  },
  {
    "id": 13,
    "question": "Quel est le pourcentage de perte de poids normal chez un nouveau-né dans les premiers jours?",
    "options": ["10-15%", "5-10%", "15-20%", "1-3%"],
    "answer": "5-10%"
  },
  {
    "id": 14,
    "question": "Quel est le signe d'une hypoglycémie néonatale?",
    "options": ["Tremblements", "Fièvre", "Diarrhée", "Cyanose"],
    "answer": "Tremblements"
  },
  {
    "id": 15,
    "question": "Quelle est la première action à prendre en cas d'ictère chez un nouveau-né?",
    "options": ["Dosage de la bilirubine", "Surveillance de la température", "Administration d'antibiotiques", "Mise en couveuse"],
    "answer": "Dosage de la bilirubine"
  },
  {
    "id": 16,
    "question": "Quelle est la période la plus critique pour un prématuré?",
    "options": ["Les premières 48 heures", "Les premiers 6 mois", "Le premier mois", "La première semaine"],
    "answer": "Les premières 48 heures"
  },
  {
    "id": 17,
    "question": "Quel est le traitement de première intention pour une pneumonie néonatale?",
    "options": ["Antibiothérapie", "Corticothérapie", "Oxygénothérapie", "Ventilation assistée"],
    "answer": "Antibiothérapie"
  },
  {
    "id": 18,
    "question": "Quel est le signe clinique d'une bronchiolite sévère chez un nourrisson?",
    "options": ["Tirage intercostal", "Tachycardie", "Fièvre", "Cyanose"],
    "answer": "Tirage intercostal"
  },
  {
    "id": 19,
    "question": "Quelle est la complication la plus fréquente d'une infection urinaire chez l'enfant?",
    "options": ["Pyélonéphrite", "Prostatite", "Urétérite", "Cystite"],
    "answer": "Pyélonéphrite"
  },
  {
    "id": 20,
    "question": "Quel est le traitement recommandé pour une otite moyenne aiguë chez l'enfant?",
    "options": ["Antibiothérapie", "Anti-inflammatoire", "Chirurgie", "Corticothérapie"],
    "answer": "Antibiothérapie"
  },
  {
    "id": 21,
    "question": "Quel est le risque principal d'une bronchiolite non traitée?",
    "options": ["Insuffisance respiratoire", "Pneumonie", "Déshydratation", "Infection systémique"],
    "answer": "Insuffisance respiratoire"
  },
  {
    "id": 22,
    "question": "Quelle est la cause la plus fréquente de convulsions fébriles chez l'enfant?",
    "options": ["Infection virale", "Traumatisme crânien", "Infection bactérienne", "Intoxication"],
    "answer": "Infection virale"
  },
  {
    "id": 23,
    "question": "Quel est le signe d'une déshydratation sévère chez un nourrisson?",
    "options": ["Fontanelle déprimée", "Cyanose", "Somnolence", "Irritabilité"],
    "answer": "Fontanelle déprimée"
  },
  {
    "id": 24,
    "question": "Quel est le traitement initial d'une gastro-entérite aiguë chez l'enfant?",
    "options": ["Réhydratation orale", "Corticothérapie", "Antidiarrhéiques", "Antibiothérapie"],
    "answer": "Réhydratation orale"
  },
  {
    "id": 25,
    "question": "Quel est le signe clinique principal d'une méningite chez l'enfant?",
    "options": ["Raideur de la nuque", "Somnolence", "Vomissements", "Éruption cutanée"],
    "answer": "Raideur de la nuque"
  },
  {
    "id": 26,
    "question": "Quel est le traitement de première intention pour une méningite bactérienne chez l'enfant?",
    "options": ["Antibiothérapie", "Corticothérapie", "Antiviraux", "Réhydratation"],
    "answer": "Antibiothérapie"
  },
  {
    "id": 27,
    "question": "Quelle est la durée recommandée d'allaitement exclusif selon l'OMS?",
    "options": ["6 mois", "12 mois", "3 mois", "9 mois"],
    "answer": "6 mois"
  },
  {
    "id": 28,
    "question": "Quel est le facteur de risque principal pour une infection néonatale?",
    "options": ["Rupture prolongée des membranes", "Prématurité", "Macrosomie", "Accouchement par césarienne"],
    "answer": "Rupture prolongée des membranes"
  },
  {
    "id": 29,
    "question": "Quel est le traitement principal d'une pneumopathie chez l'enfant?",
    "options": ["Antibiothérapie", "Antiviraux", "Oxygénothérapie", "Corticothérapie"],
    "answer": "Antibiothérapie"
  },
  {
    "id": 30,
    "question": "Quel est le signe clinique d'une intolérance alimentaire chez un nourrisson?",
    "options": ["Vomissements", "Cyanose", "Fièvre", "Somnolence"],
    "answer": "Vomissements"
  }
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
