  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });

  const chatbotBtn = document.querySelector('.chatbot-btn');
  const chatbotWindow = document.getElementById('chatbotWindow');

  chatbotBtn.addEventListener('click', () => {
    chatbotWindow.style.display =
      chatbotWindow.style.display === "flex" ? "none" : "flex";
  });