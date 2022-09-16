// const axios = require('axios');
let userDataArray = [];

const getData = async () => {
    const url = 'https://randomuser.me/api/?results=24';
    const response = await axios.get(url);
    userDataArray = response.data.results;
    console.log(userDataArray);
    return userDataArray;
}

getData().then((response) => showUserList(response));

const showUserList = (userData) => {
    const userList = document.getElementById('userList');
    userList.innerHTML = '';

    userData.forEach((item) => {
            
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
    selectedUser.className = 'selected-user';

    const profilePic = document.createElement('img');
    profilePic.src = user.picture.large;
    profilePic.className = 'selected-user-picture'
    
    const userName = document.createElement('p');
    userName.className = 'selected-user-name';
    const title = user.name.title;
    const firstName = user.name.first;
    const lastName = user.name.last;
    userName.textContent = `${title}.${firstName} ${lastName}`;

    const userGenderAge = document.createElement('p');
    userGenderAge.className = 'selected-user-description';
    userGenderAge.textContent = `Gender: ${user.gender}, Age: ${user.dob.age}`;

    const userEmail = document.createElement('p');
    userEmail.className = 'selected-user-description';
    userEmail.textContent = `Email: ${user.email}`;

    const userTelDiv = document.createElement('div');
    userTelDiv.className = 'selected-user-div';
    const userTelIcon = document.createElement('img');
    userTelIcon.className = 'selected-user-icon';
    userTelIcon.src = 'https://fetch-users.pages.dev/image/phone.svg';
    userTelDiv.appendChild(userTelIcon);
    const userTelNo = document.createElement('span');
    userTelNo.className = 'selected-user-description';
    userTelNo.textContent = user.phone;
    userTelDiv.appendChild(userTelNo);

    const userLocationDiv = document.createElement('div');
    userLocationDiv.className = 'selected-user-div';
    const locationIcon = document.createElement('img');
    locationIcon.className = 'selected-user-icon';
    locationIcon.src = 'https://fetch-users.pages.dev/image/location.svg';
    userLocationDiv.appendChild(locationIcon);
    const userLocation = document.createElement('span');
    userLocation.className = 'selected-user-description';
    userLocation.textContent = `${user.location.city}, ${user.location.country}`
    userLocationDiv.appendChild(userLocation);
    

    selectedUser.appendChild(profilePic);
    selectedUser.appendChild(userName);
    selectedUser.appendChild(userGenderAge);
    selectedUser.appendChild(userEmail);
    selectedUser.appendChild(userTelDiv);
    selectedUser.appendChild(userLocationDiv);

    rightTab.innerHTML = '';
    rightTab.appendChild(selectedUser);
};

const searchUser = (e) => {
    const searchText = e.target.value.toLowerCase();
    const matchedUserList = userDataArray.filter((user) => {
        const title = user.name.title;
        const firstName = user.name.first;
        const lastName = user.name.last;
        const fullName = `${title}.${firstName} ${lastName}`;
        return fullName.toLowerCase().includes(searchText);
    });
    showUserList(matchedUserList);
}

const input = document.getElementById('search-bar');
input.addEventListener('input', searchUser);