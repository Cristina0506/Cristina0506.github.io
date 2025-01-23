document.getElementById('loginButton').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (!username || !password) {
      showError('Te rugăm să completezi toate câmpurile!');
      return;
    }
  
    
    fetch('users.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Eroare la încărcarea utilizatorilor!');
        }
        return response.json();
      })
      .then(users => {
        
        const user = users.find(u => u.username === username && u.password === password);
  
        if (user) {
          sessionStorage.setItem('loggedInUser', username);
  
          window.location.href = 'pagina.html';
        } else {
          showError('Nume utilizator sau parolă incorecte!');
        }
      })
      .catch(error => {
        console.error('Eroare:', error);
        showError('A apărut o eroare, încearcă din nou.');
      });
  });
  
  function showError(message) {
    document.getElementById('loginError').textContent = message;
  }
  