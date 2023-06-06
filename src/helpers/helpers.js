//Let's explore routes using the code below in order to send the user to the win/lose pages

export function showNotification(setter) {
    setter(true);
    setTimeout(() => {
      setter(false);
    }, 2000);
  }
  
  export function checkWin(correct, wrong, word) {
    let status = 'win';
  
    // Check if player has won
    word.split('').forEach(letter => {
      if(!correct.includes(letter)){
        status = '';
      }
    });
    
    // Check of [player has lost]
    if(wrong.length === 6) status = 'lose';
  
    return status
  }