class Question {
  constructor(title, options, correctAnswer) {
    this.title = title;
    this.options = options;
    this.correctAnswer = correctAnswer;
  }
}

let questions = [];

questions.push(
  new Question(
    "Who was the main antagonist in the film 'Psycho'?",
    ["Martin Whitly", "Joe Goldberg", "El Cuco", "Norman Bates"],
    ["Norman Bates"]
  )
);

questions.push(
  new Question(
    "Who was the main antagonist in the film 'The Texas Chain Saw Massacre?",
    ["Leatherface", "Jigsaw", "Michael Myers", "Freddie Krueger"],
    ["Leatherface"]
  )
);

questions.push(
  new Question(
    "Which film franchise features a serial killer named Jigsaw?",
    ["Halloween", "Scream", "Jaws", "Saw"],
    ["Saw"]
  )
);

questions.push(
  new Question(
    "Who was the main antagonist in the film 'The Silence of The Lambs'?",
    ["Ghost Face", "Jigsaw", "Leather Face", "Hannibal Lector"],
    ["Hannibal Lector"]
  )
);
questions.push(
  new Question(
    "Which of the following was the first horror movie to be nominated for 'Best Picture' at the Oscars?",
    ["Scream", "The Shining", "Silence of the Lambs", "The Exorcist"],
    ["Silence of the Lambs"]
  )
);
questions.push(
  new Question(
    "Danny is warned to stay away from which hotel room in 'The Shining'?",
    ["732", "327", "237", "666"],
    ["237"]
  )
);
questions.push(
  new Question(
    "Who was the main killer in Scream 2?",
    ["Stu Macher", "Tatum Riley", "Billy Loomis", "Mickey Altieri"],
    ["Mickey Altieri"]
  )
);
questions.push(
  new Question(
    "How many 'real-life' deaths are associated with the making of the Exorcist?",
    ["9", "1", "3", "5"],
    ["9"]
  )
);
questions.push(
  new Question(
    "Which was the first Stephen King novel to be adapted into a motion picture?",
    ["Doctor Sleep", "The Shining", "Maximum Overdrive", "IT"],
    ["Maximum Overdrive"]
  )
);
questions.push(
  new Question(
    "'You'll float too' is a famous line from which horror movie?",
    ["The Shining", "IT", "Nightmare on Elm Street", "Jaws"],
    ["IT"]
  )
);
questions.push(
  new Question(
    "While filming the opening scene in Final Destination 2, the actors had to ride the roller coaster how many times?",
    ["26", "3", "54", "17"],
    ["26"]
  )
);
questions.push(
  new Question(
    "Which horror film was originally known as 'The Babysitter Murders'?",
    [
      "Halloween",
      "Nightmare on Elm Street",
      "I Know What You Did Last Summer",
      "Carrie",
    ],
    ["Halloween"]
  )
);
questions.push(
  new Question(
    "How many days did it take to film 'The Blair Witch Project'?",
    ["14", "21", "33", "8"],
    ["8"]
  )
);
questions.push(
  new Question(
    "What was the name of the main antagonist from 'The Ring'",
    ["Samara", "Oriana", "Carrie", "Samantha"],
    ["Samara"]
  )
);
questions.push(
  new Question(
    "The film 'The Strangers' is loosely based around the murders of which serial killers?",
    [
      "Fred and Rose West",
      "Christine Paolilla and Chris Snyder",
      "Bonnie Parker and Clyde Barrow",
      "The Manson Family",
    ],
    ["The Manson Family"]
  )
);
questions.push(
  new Question(
    "'Monster' is based on the true story of which female serial killer?",
    [
      "Elvira Bender",
      "Aileen Wuornos",
      "Clementine Barnabet",
      "Debra Denise Brown",
    ],
    ["Aileen Wuornos"]
  )
);
questions.push(
  new Question(
    "'Child's Play' features which serial killer?",
    ["Billy", "Pennywise", "Jigsaw", "Chucky"],
    ["Chucky"]
  )
);

questions.push(questions[0]);

let question0 = questions[0];

questions.splice(0, questions.length);

question0; // what is this ???
