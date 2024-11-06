function celebrate() {
    
    confetti({
      particleCount: 200,
      spread: 60,   
      origin: { x: 0.5, y: 0.5 },
      colors: ['#ff0000', '#ff7300', '#fffb00', '#00ff4f', '#00d4ff', '#8200ff'],
    });
  
    const messageBox = document.querySelector('.message-box');
    messageBox.style.transform = 'scale(1.1)';
    setTimeout(() => {
      messageBox.style.transform = 'scale(1)';
    }, 500);
  }
  