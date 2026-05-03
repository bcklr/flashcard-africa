const cards = [
 {
    question: "What ancient African kingdom was known as the 'Land of Gold' and controlled trans-Saharan trade routes?",
    answer: "The Ghana Empire (400–1200 AD), located in modern-day Mauritania and Mali.",
    hint: "It collapsed before the Mali Empire rose."
  },
  {
    question: "Who was the richest person in all of human history, believed to have lived in 14th century Africa?",
    answer: "Mansa Musa, Emperor of the Mali Empire. His 1324 pilgrimage to Mecca crashed the Egyptian gold market.",
    hint: "His pilgrimage involved 60,000 people and tons of gold."
  },
  {
    question: "What is the oldest university in the world still in operation?",
    answer: "The University of al-Qarawiyyin, founded in 859 AD in Fez, Morocco.",
    hint: "It was founded by a woman."
  },
  {
    question: "What Ethiopian emperor became a symbol of pan-African resistance and inspired the Rastafari movement?",
    answer: "Emperor Haile Selassie I, who ruled from 1930 to 1974.",
    hint: "His birth name was Tafari Makonnen."
  },
  {
    question: "Which African country is the only one never to be fully colonized by a European power?",
    answer: "Ethiopia, which defeated Italy at the Battle of Adwa in 1896.",
    hint: "The battle took place in the north of the country."
  },
  {
    question: "What was the Great Zimbabwe, and what does its existence prove?",
    answer: "A massive stone city built between the 11th and 15th centuries. It proves advanced African civilization existed without European influence.",
    hint: "It gave Zimbabwe its name."
  },
  {
    question: "Who led the Haitian Revolution, which was directly inspired by African resistance traditions?",
    answer: "Toussaint Louverture, though Jean-Jacques Dessalines declared independence in 1804.",
    hint: "Haiti became the first Black republic in the world."
  },
  {
    question: "What West African empire controlled the gold and salt trade and reached its peak under Askia the Great?",
    answer: "The Songhai Empire, the largest empire in African history by land area.",
    hint: "It succeeded the Mali Empire."
  },
  {
    question: "What is the significance of the Nok civilization in Nigeria?",
    answer: "The Nok produced some of the earliest known iron smelting and terracotta sculpture in sub-Saharan Africa, around 500 BC.",
    hint: "They predate most West African kingdoms."
  },
  {
    question: "Which African queen led military resistance against Portuguese colonization in 17th century Angola?",
    answer: "Queen Nzinga of Ndongo and Matamba, who fought Portuguese forces for decades.",
    hint: "She ruled for over 40 years."
  },
  {
    question: "What document did Kwame Nkrumah famously declare upon Ghana's independence in 1957?",
    answer: "He declared that Ghana's independence was meaningless unless tied to the total liberation of the African continent.",
    hint: "Ghana was the first sub-Saharan country to gain independence."
  },
  {
    question: "What is the African Union and when was it founded?",
    answer: "The African Union is a continental organization of 55 member states, founded in 2002, succeeding the Organisation of African Unity.",
    hint: "It is headquartered in Addis Ababa."
  },
  {
    question: "What was the Berlin Conference of 1884–1885?",
    answer: "A meeting where European powers divided Africa among themselves without African representation, formalizing the scramble for Africa.",
    hint: "No African leaders were invited."
  },
  {
    question: "Which Egyptian pharaoh is believed to have commissioned the first known circumnavigation of Africa?",
    answer: "Pharaoh Necho II, around 600 BC, using Phoenician sailors who reportedly sailed around the continent.",
    hint: "This predates European exploration by over 2,000 years."
  },
  {
    question: "What role did the Kingdom of Kush play in ancient history?",
    answer: "Kush was a powerful Nubian kingdom that conquered and ruled Egypt as the 25th Dynasty around 750 BC.",
    hint: "It was located in modern-day Sudan."
  },
  {
    question: "Who was Thomas Sankara and why is he significant?",
    answer: "The revolutionary president of Burkina Faso from 1983–1987, known for anti-imperialist policies, pan-Africanism, and women's rights before being assassinated.",
    hint: "He renamed his country from Upper Volta."
  },
  {
    question: "What is the significance of the Timbuktu manuscripts?",
    answer: "Over a million ancient manuscripts found in Timbuktu, Mali, covering science, math, astronomy, and law — proving Africa's deep scholarly tradition.",
    hint: "Many date back to the 13th century."
  },
  {
    question: "What was the Mau Mau uprising?",
    answer: "A rebellion by Kenyan fighters, primarily Kikuyu, against British colonial rule in the 1950s, leading toward Kenyan independence in 1963.",
    hint: "Britain declared a state of emergency in response."
  },
  {
    question: "Which African nation has the oldest written constitution still in use?",
    answer: "Liberia, whose constitution was adopted in 1847, modeled partly on the United States constitution.",
    hint: "It was founded by freed American slaves."
  },
  {
    question: "What is Ubuntu and where does the philosophy originate?",
    answer: "Ubuntu is a southern African philosophy meaning 'I am because we are,' emphasizing community, humanity, and interconnectedness.",
    hint: "Nelson Mandela often referenced this concept."
  }
];

let state = {
  deck: [...cards],
  current: 0,
  flipped: false,
  known: new Set ()
};

function loadCard() {
  const card = state.deck[state.current];
  document.getElementById('question-text').textContent = card.question;
  document.getElementById('answer-text').textContent = card.answer;
  document.getElementById('hint-text').textContent = card.hint;
  document.getElementById('hint-text').classList.add('hidden');
  document.getElementById('card-counter').textContent =
    `Card ${state.current + 1} of ${state.deck.length}`;
  document.getElementById('known-counter').textContent =
    `Known: ${state.known.size}`;

const cardEl = document.getElementById('card');
  cardEl.classList.remove('flipped');
  state.flipped = false;
}

function showSummary() {
  document.querySelector('.card-container').classList.add('hidden');
  document.querySelector('.controls').classList.add('hidden');
  document.querySelector('.controls.secondary').classList.add('hidden');
  document.querySelector('.stats').classList.add('hidden');
  document.getElementById('summary').classList.remove('hidden');
  document.getElementById('summary-text').textcontent =
    `You marked ${state.known.size} out of ${card.length} cards as known. Keep going!`;
}

const cardEl = document.getElementById('card');
const container = document.querySelector('.card-container');

container.addEventListener('mousemove', function(e) {
  if (state.flipped) return;
  const rect = container.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  const rotateX = ((y - centerY) / centerY) * -10;
  const rotateY = (( x - centerX) / centerX) * 10;
  cardEl.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

container.addEventListener('mouseleave', function() {
  if (state.flipped) return;
  cardEl.style.transform = `rotateX(0deg) rotateY(0deg)`;
});

document.getElementById('flip-btn').addEventListener('click', function() {
  state.flipped = !state.flipped;
  cardEl.style.transform = '';
  cardEl.classList.toggle('flipped');
});

cardEl.addEventListener('click', function() {
  state.flipped = !state.flipped;
  cardEl.style.transform = '';
  cardEl.classList.toggle('flipped');
  });

document.getElementById('hint-btn').addEventListener('click', function() {
  document.getElementById('hint-text').classList.toggle('hidden');
});

document.getElementById('next-btn').addEventListener('click', function() {
  if (state.current < state.deck.length - 1) {
    state.current++;
    loadCard();
  } else {
    showSummary();
  }
});

document.getElementById('known-btn').addEventListener('click', function() {
  const card = state.deck[state.current];
  state.known.add(card.question);
  document.getElementById('known-counter').textContent =
    `Known: ${state.known.size}`;

       if (state.current < state.deck.length - 1) {
         state.current++;
         loadCard();
       } else {
         showSummary();
       }
});


document.getElementById('shuffle-btn').addEventListener('click', function() {
  for (let i = state.deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [state.deck[i], state.deck[j]] = [state.deck[j], state.deck[i]];
      }
  state.current = 0;
  loadCard();
});

document.getElementById('reset-btn').addEventListener('click', function() {
  state.deck = [...cards];
  state.current = 0;
  state.flipped = false;
  state.known = new set();
  document.querySelector ('.card-container').classList.remove('hidden');
  document.querySelector ('.controls').classList.remove('hidden');
  document.querySelector ('.controls.secondary').classList.remove('hidden');
  document.querySelector ('.stats.').classList.remove('hidden');
  document.getElementById ('summary').classList.add('hidden');
  loadCard();
});

document.getElementById('restart-btn').addEventListener('click', function() {
  document.getElementById('reset-btn').click();
      });

loadCard(); 
