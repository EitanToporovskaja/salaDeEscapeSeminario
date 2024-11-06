function openModal() {
    const modal = document.getElementById('celebrationModal');
    modal.style.display = 'flex'; 

    confetti({
        particleCount: 200, 
        spread: 60,      
        origin: { x: 0.5, y: 0.5 },
        colors: ['#ff0000', '#ff7300', '#fffb00', '#00ff4f', '#00d4ff', '#8200ff'],
      });
  }
  
  /*
  function closeModal() {
    const modal = document.getElementById('celebrationModal');
    modal.style.display = 'none';
  
    // 
    confetti({
      particleCount: 200,  
      spread: 60,          
      origin: { x: 0.5, y: 0.5 },
      colors: ['#ff0000', '#ff7300', '#fffb00', '#00ff4f', '#00d4ff', '#8200ff'], 
    });
  }*/
  