document.addEventListener('DOMContentLoaded', () => {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
  
    if (!loggedInUser) {
    
      window.location.href = 'login.html';
      return;
    }
  
    
    document.getElementById('welcomeMessage').textContent = `Bine ai venit, ${loggedInUser}!`;
  
    
    document.getElementById('logoutButton').addEventListener('click', () => {
      sessionStorage.removeItem('loggedInUser');
      window.location.href = 'login.html';
    });
  });
 
