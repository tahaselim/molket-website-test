/* MolKet Assistant: a small keyword-based chatbot (English).
   Edit questions in `suggestedQuestions` and answers in `knowledgeBase` below. */
(function () {
  'use strict';
  var suggestedQuestions = [
        {id: "1", text: "What is Molket?", category: "molket"},
        {id: "2", text: "Tell me about MolKet.jl", category: "resources"},
        {id: "3", text: "Who are the founders?", category: "team"},
        {id: "4", text: "How can I request a demo?", category: "demo"},
        {id: "5", text: "What services do you offer?", category: "services"},
        {id: "6", text: "Contact information", category: "contact"},
        {id: "7", text: "Where is MolKet located?", category: "location"},
        {id: "8", text: "Who works at molket", category: "who works at molket"},
        {id: "9", text: "How to reach MolKet", category: "how to reach molket"},
        {id: "10", text: "What is MolKet's company?", category: "molket company"},
        {id: "11", text: "Who is Dr. Taha?", category: "taha"},
        {id: "12", text: "Who is Dr. alain ?", category: "alain"},
        { id: "13", text: "How does MolKet contribute to cryptography?", category: "cryptography" },
        { id: "14", text: "How does MolKet use AI?", category: "ai" },
        { id: "15", text: "What publications or talks has MolKet contributed to?", category: "talks" }
    ];

  var knowledgeBase = {
        navbar: {
            keys: [
                "logo", "home", "about", "services", "how it works", "team", "contact",
                "resources", "use cases", "lab", "molket.jl", "molket", "molket.io"
            ],
            answers: {
                "logo": "Our logo is MolKet.",
                "home": "Welcome to MolKet Home. We provide next-generation quantum solutions.",
                "about": "MolKet focuses on fast, accurate molecular design simulations assisted by AI.",
                "services": "Our services include quantum molecular dynamics, cryptography, and neuromorphic computing.",
                "how it works": "MolKet offers an AI-assisted environment for designing and running quantum simulations step-by-step.",
                "team": "Our founders include Dr. Taha Selim and Alain Chancé, experts in quantum computing and consulting.",
                "contact": "You can contact us at contact@molket.io or business@molket.io for inquiries.",
                "resources": "Resources include Use Cases, Lab, and MolKet.jl library.",
                "use cases": "MolKet's use cases include molecular simulations, quantum cryptography, and neuromorphic AI applications.",
                "lab": "Our lab develops innovative quantum computing algorithms and open-source tools.",
                "molket": "MolKet is a company specialized in quantum molecular dynamics and AI-powered simulations. MolKet offers management consulting and AI services for:\n" +
                    "\n" +
                    "Quantum molecular dynamics\n" +
                    "Cryptography\n" +
                    "Neuromorphic-based computing\n" +
                    "Supported by cloud-based hybrid HPC & quantum computing platforms, enabling the development of advanced machine learning algorithms with significant predictive power.\n",
                "molket.io": "Visit our website at https://molket.io for more information.",
                "molket.jl": "MolKet.jl is our open-source Julia library for quantum simulations. Visit https://github.com/MolKet/MolKet.jl for more information."
            }
        },
        home: {
            keys: [
                "quantum molecular dynamics", "cryptography", "neuromorphic computing",
                "request demo", "explore services", "molket demo", "demo request"
            ],
            answers: {
                "quantum molecular dynamics": "We offer cutting-edge quantum molecular dynamics services for molecular design and simulation.",
                "cryptography": "Our cryptography solutions leverage quantum computing techniques for enhanced security.",
                "neuromorphic computing": "Neuromorphic-based computing is part of our advanced AI services, mimicking brain-like processing.",
                "request demo": "You can request a demo via our website to see MolKet in action.",
                "explore services": "Explore our full range of services for quantum and HPC computing.",
                "molket demo": "Request a MolKet demo on our website to learn more about our solutions.",
                "demo request": "Submit your demo request on our contact page for a personalized walkthrough."
            }
        },
        about: {
            keys: [
                "molecular design", "chemistry simulations", "ai", "consulting",
                "datasets", "physics-based kernels", "molket company", "who is molket"
            ],
            answers: {
                "molecular design": "We use AI to accelerate molecular design simulations, making them faster and more accurate.",
                "chemistry simulations": "Our simulations are faster and easier, assisted by AI and quantum computing technologies.",
                "ai": "AI trains general Hamiltonians for efficient quantum simulations and predictive modeling.",
                "consulting": "We offer consulting for AI training on chemistry, biology, materials science, and cosmology datasets.",
                "datasets": "We work with diverse datasets from chemistry, biology, and physics to train our advanced models.",
                "physics-based kernels": "Our models use physics-based kernels for superior predictive power and accuracy.",
                "molket company": "MolKet is a leading company focused on quantum computing solutions for molecular design.",
                "who is molket": "MolKet is an innovative quantum computing company founded by experts in quantum chemistry and AI."
            }
        },
        services: {
            keys: [
                "algorithm design", "application adaptation", "training",
                "consultancy", "knowledge transfer", "quantum services", "molket services"
            ],
            answers: {
                "algorithm design": "We design custom algorithms optimized for your quantum molecular dynamics needs.",
                "application adaptation": "We help integrate HPC and quantum computing into your existing applications.",
                "training": "We provide training and consultancy to help your team master quantum technologies.",
                "consultancy": "Expert consultancy services are available for AI and quantum computing implementation.",
                "knowledge transfer": "We assist with knowledge transfer to enhance your team's quantum computing capabilities.",
                "quantum services": "MolKet provides comprehensive quantum and HPC services tailored to your specific needs.",
                "molket services": "Our MolKet services cover algorithm development, training, and consulting for quantum solutions."
            }
        },
        team: {
            keys: [
                "taha","selim", "alain","chance", "founders", "credentials",
                "talks", "publications", "molket team", "who works at molket"
            ],
            answers: {
                "taha": "Dr. Taha Selim is our General Manager with a PhD in Quantum Theoretical & Computational Chemistry.",
                "selim": "Dr. Taha Selim is our General Manager with a PhD in Quantum Theoretical & Computational Chemistry.",
                "alain": "Alain Chancé is our President with 30+ years of experience in management consulting and quantum computing.",
                "Chance": "Alain Chancé is our President with 30+ years of experience in management consulting and quantum computing.",
                "founders": "Our founders are Dr. Taha Selim and Alain Chancé, both experts in quantum computing and business.",
                "credentials": "Our team holds PhDs and extensive experience in quantum physics, chemistry, and AI development.",
                "talks": "Our founders regularly speak at top conferences like JuliaCon and APS March Meeting.",
                "publications": "They have authored important publications in quantum chemistry and computing research.",
                "molket team": "Our team consists of experts in quantum computing, AI development, and scientific consulting.",
                "who works at molket": "MolKet employs specialists in quantum computing, AI development, and scientific consulting."
            }
        },
        contact: {
            keys: [
                "location", "address", "email", "phone", "demo",
                "contact", "molket contact", "how to reach molket"
            ],
            answers: {
                "location": "We are located at MOLKET SAS, 38 rue des Mathurins, Paris, France.",
                "address": "Our address is 38 rue des Mathurins, Paris, France.",
                "email": "You can email us at contact@molket.io or business@molket.io for inquiries.",
                "phone": "Reach us by phone at +33 1 42 65 28 27 for direct communication.",
                "demo": "Request a demo to see our quantum simulation solutions firsthand.",
                "contact": "Feel free to contact us via email or phone for any questions about our services.",
                "molket contact": "Contact MolKet through our website or email for quantum computing inquiries.",
                "how to reach molket": "You can reach MolKet via public transport or car to our Paris office."
            }
        }
    };

  function getBotResponse(userMessage) {
    var message = userMessage.toLowerCase();
    if (["hi", "hello", "hey", "good morning", "good afternoon"].some(function (g) { return message.indexOf(g) >= 0; }))
      return "Hello! How can I help you with MolKet's quantum computing services, team, or contact info?";
    if (["bye", "goodbye", "see you later", "see you soon", "see ya"].some(function (g) { return message.indexOf(g) >= 0; }))
      return "Goodbye! Thank you for your interest in MolKet. Feel free to reach out anytime!";
    var all = [];
    Object.keys(knowledgeBase).forEach(function (cat) {
      var c = knowledgeBase[cat];
      c.keys.forEach(function (k) { if (c.answers[k]) all.push({ keyword: k.toLowerCase(), answer: c.answers[k] }); });
    });
    for (var i = 0; i < all.length; i++) if (message === all[i].keyword) return all[i].answer;
    var best = '', bestAnswer = '';
    all.forEach(function (qa) {
      if ((message.indexOf(qa.keyword) >= 0 || qa.keyword.indexOf(message) >= 0) && qa.keyword.length > best.length) {
        best = qa.keyword; bestAnswer = qa.answer;
      }
    });
    if (bestAnswer) return bestAnswer;
    var words = message.split(/\W+/);
    for (var j = 0; j < all.length; j++) for (var w = 0; w < words.length; w++) {
      var word = words[w];
      if (word.length > 0 && (all[j].keyword.indexOf(word) >= 0 || word.indexOf(all[j].keyword) >= 0)) return all[j].answer;
    }
    return "Sorry, I didn't understand your question. Could you please rephrase or ask about MolKet's quantum services, team, or contact info? You can also try the suggested questions above!";
  }

  var SVG = function (paths, cls) {
    return '<svg xmlns="http://www.w3.org/2000/svg" class="' + cls + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + paths + '</svg>';
  };
  var I_CHAT = '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>';
  var I_X = '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>';
  var I_BOT = '<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>';
  var I_USER = '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>';
  var I_SEND = '<path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/>';
  var BTN = 'inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ';
  var GRAD = 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700';

  var root = document.createElement('div');
  root.setAttribute('data-no-i18n', '');
  root.innerHTML =
    '<div class="fixed bottom-6 right-6 z-50">' +
      '<button type="button" id="chat-toggle" aria-label="Open chat" class="' + BTN + 'w-14 h-14 rounded-full shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 text-white ' + GRAD + '"></button>' +
    '</div>' +
    '<div id="chat-window" class="hidden fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex-col">' +
      '<div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-2xl"><div class="flex items-center space-x-3">' +
        '<div class="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">' + SVG(I_BOT, 'h-5 w-5') + '</div>' +
        '<div><h3 class="font-semibold">MolKet Assistant</h3><p class="text-xs opacity-90">Online • Ready to help</p></div>' +
      '</div></div>' +
      '<div id="chat-messages" class="flex-1 overflow-y-auto p-4 space-y-4"></div>' +
      '<div class="p-4 border-t border-gray-200"><form id="chat-form" class="flex space-x-2">' +
        '<input id="chat-input" type="text" autocomplete="off" placeholder="Type your message..." class="flex-1 px-3 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm">' +
        '<button type="submit" id="chat-send" disabled aria-label="Send" class="' + BTN + 'w-10 h-10 rounded-full text-white active:scale-95 ' + GRAD + '">' + SVG(I_SEND, 'h-4 w-4') + '</button>' +
      '</form></div>' +
    '</div>';
  document.body.appendChild(root);

  var toggle = root.querySelector('#chat-toggle'), win = root.querySelector('#chat-window'),
      list = root.querySelector('#chat-messages'), form = root.querySelector('#chat-form'),
      input = root.querySelector('#chat-input'), send = root.querySelector('#chat-send');
  var open = false, busy = false;

  function setOpen(v) {
    open = v;
    win.classList.toggle('hidden', !v); win.classList.toggle('flex', v);
    toggle.innerHTML = SVG(v ? I_X : I_CHAT, v ? 'h-6 w-6' : 'h-6 w-6 animate-pulse');
    toggle.classList.toggle('bg-red-500', v);
    GRAD.split(' ').forEach(function (c) { toggle.classList.toggle(c, !v); });
    toggle.setAttribute('aria-label', v ? 'Close chat' : 'Open chat');
    if (v) input.focus();
  }
  function scrollDown() { list.scrollTop = list.scrollHeight; }
  function addMessage(text, isBot) {
    var row = document.createElement('div');
    row.className = 'flex items-start space-x-2 ' + (isBot ? 'justify-start' : 'justify-end');
    var bubble = document.createElement('div');
    bubble.className = 'max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-line ' +
      (isBot ? 'bg-gray-100 text-gray-800 rounded-bl-sm' : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-br-sm');
    bubble.textContent = text;
    var avatar = '<div class="w-6 h-6 ' + (isBot ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gray-400') +
      ' rounded-full flex items-center justify-center flex-shrink-0 text-white">' + SVG(isBot ? I_BOT : I_USER, 'h-3 w-3') + '</div>';
    if (isBot) row.insertAdjacentHTML('beforeend', avatar);
    row.appendChild(bubble);
    if (!isBot) row.insertAdjacentHTML('beforeend', avatar);
    list.insertBefore(row, list.querySelector('.chat-extra'));
    scrollDown();
  }
  function clearExtra() { list.querySelectorAll('.chat-extra').forEach(function (e) { e.remove(); }); }
  function showSuggestions() {
    clearExtra();
    var box = document.createElement('div');
    box.className = 'chat-extra space-y-3';
    box.innerHTML = '<p class="text-xs text-gray-500 text-center">Try asking about:</p><div class="flex flex-wrap gap-2 justify-center"></div>';
    suggestedQuestions.slice().sort(function () { return 0.5 - Math.random(); }).slice(0, 6).forEach(function (q) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'text-xs bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 text-blue-700 px-3 py-2 rounded-full border border-blue-200 transition-transform duration-300 hover:scale-105 active:scale-95';
      b.textContent = q.text;
      b.addEventListener('click', function () { ask(q.text); });
      box.lastChild.appendChild(b);
    });
    list.appendChild(box); scrollDown();
  }
  function showTyping() {
    clearExtra();
    var t = document.createElement('div');
    t.className = 'chat-extra flex items-start space-x-2';
    t.innerHTML = '<div class="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white">' + SVG(I_BOT, 'h-3 w-3') + '</div>' +
      '<div class="bg-gray-100 p-3 rounded-2xl rounded-bl-sm"><div class="flex space-x-1">' +
      '<div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>' +
      '<div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay:.1s"></div>' +
      '<div class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay:.2s"></div></div></div>';
    list.appendChild(t); scrollDown();
  }
  function ask(text) {
    if (busy || !text.trim()) return;
    busy = true;
    addMessage(text, false);
    showTyping();
    setTimeout(function () {
      clearExtra();
      addMessage(getBotResponse(text), true);
      busy = false;
      showSuggestions();
    }, 1000 + Math.random() * 1000);
  }

  toggle.addEventListener('click', function () { setOpen(!open); });
  input.addEventListener('input', function () { send.disabled = !input.value.trim(); });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var v = input.value; input.value = ''; send.disabled = true; ask(v);
  });

  addMessage("Hi! Welcome to MolKet! 👋 I can help you learn about our quantum molecular dynamics services, team, and more. Try asking a question below or click on a suggested topic!", true);
  showSuggestions();
  setOpen(false);
})();
