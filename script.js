// const axios = require('axios');

const getData = async () => {
    const url = 'https://randomuser.me/api/?results=24';
    const response = await axios.get(url)
    const userData = response.data.results;

    userData.forEach((item) => {
            const userList = document.getElementById('userList');
            
            const user = document.createElement('div');
            user.className = 'user';

            const profilePic = document.createElement('img');
            profilePic.className = 'profile-picture';
            profilePic.src = item.picture.medium;

            const userName = document.createElement('p');
            userName.className = 'user-name'
            const title = item.name.title;
            const firstName = item.name.first;
            const lastName = item.name.last;
            userName.textContent = `${title}.${firstName} ${lastName}`;

            const userEmail = document.createElement('p');
            userEmail.className = 'user-email'
            userEmail.textContent = item.email;
            user.appendChild(profilePic);
            user.appendChild(userName);
            user.appendChild(userEmail);
            user.addEventListener("click", () => showSelectedUser(item));
            userList.appendChild(user);
            
    })
};

const showSelectedUser = (user) => {
    const rightTab = document.getElementById('right-tab');

    const selectedUser = document.createElement('div');

    const profilePic = document.createElement('img');
    profilePic.src = user.picture.medium;
    
    const userName = document.createElement('p');
    userName.className = 'user-name'
    const title = user.name.title;
    const firstName = user.name.first;
    const lastName = user.name.last;
    userName.textContent = `${title}.${firstName} ${lastName}`;

    const userEmail = document.createElement('p');
    userEmail.className = 'user-email'
    userEmail.textContent = user.email;

    selectedUser.appendChild(profilePic);
    selectedUser.appendChild(userName);
    selectedUser.appendChild(userEmail);

    rightTab.innerHTML = '';
    rightTab.appendChild(selectedUser);
};

const searchUser = () => {
        console.log('sd');
        console.log(e.target.value);
    }

const input = document.getElementById('search-bar');
input.addEventListener('change', searchUser);

getData();