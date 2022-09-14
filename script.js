
const getData = async () => {
    console.log('getData start');
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await axios.get(url)
    const userList = response.data;

    userList.forEach((item) => {
            const userList = document.getElementById('userList');
            const user = document.createElement('div');
            user.className = 'user';
            const userName = document.createElement('p');
            userName.textContent = item.name;
            const userEmail = document.createElement('p');
            userEmail.textContent = item.email;
            user.appendChild(userName).appendChild(userEmail);
    
            userList.appendChild(user);
            
    })
};

getData();