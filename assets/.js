// Dependencies
const dlTheme = document.querySelector('#dlTheme');
const container = document.querySelector('.container');

// dlmode
let mode = 'dark';
dlTheme.addEventListener('click', function () {
    if (mode === 'dark') {
      mode = 'light';
      container.setAttribute('class', 'light');
    }
    else {
      mode = 'dark';
      container.setAttribute('class', 'dark');
    }
  });

  // Form
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let formAction = this.getAttribute('action');
    window.location.href= formAction;
  });

  // postpage
//   const blogPosts = [
//     { username: 'JohnDoe', title: 'First Post', content: 'Lorem ipsum dolor sit amet.' },
//     { username: 'JaneSmith', title: 'Second Post', content: 'Consectetur adipiscing elit.' }
// ];
// function displayPosts() {
//   const postList = document.getElementById('post-list');

//   blogPosts.forEach(post => {
//       const postElement = document.createElement('div');
//       postElement.innerHTML = `
//           <h2>${post.title}</h2>
//           <p><strong>Author:</strong> ${post.username}</p>
//           <p>${post.content}</p>
//           <hr>
//       `;
//       postList.appendChild(postElement);
//   });
// }
document.addEventListener('DOMContentLoaded', function() {
  const postData = JSON.parse(localStorage.getItem('postData'));

  if (postData) {
      const postContent = document.getElementById('post-content');
      postContent.innerHTML = `
          <h2>${postData.title}</h2>
          <p><strong>Author:</strong> ${postData.username}</p>
          <p>${postData.content}</p>
      `;
  } else {
      const postContent = document.getElementById('post-content');
      postContent.innerHTML = `<p>No blog post data found.</p>`;
  }
});