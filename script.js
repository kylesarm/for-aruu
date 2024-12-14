window.onload = function() {
    const greetingMessage = "This is for you, Aruu";
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<h1>${greetingMessage}</h1>`;
    messageElement.style.textAlign = 'center';
    messageElement.style.fontSize = '2em';
    messageElement.style.color = '#fff';
    messageElement.style.marginTop = '20px';
    messageElement.style.animation = 'fadeIn 2s ease-in-out';
    
    document.body.prepend(messageElement); 
  };
  