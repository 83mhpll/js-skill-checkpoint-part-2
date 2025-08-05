async function getUsers() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const users = await response.json();
      
      const longNameUsers = users
        .filter(user => user.name.length > 17)
        .map(user => user.name);
      
      console.log(longNameUsers);
      return longNameUsers;
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }
  
  getUsers();
