
const API_KEY_STRING = "?api_key=d1daf4f6-fa47-46b2-98bb-af3e6eb40688";

const getCommentsEndpoint = `https://project-1-api.herokuapp.com/comments${API_KEY_STRING}`;
const getShowdatesEndpoint = `https://project-1-api.herokuapp.com/showdates${API_KEY_STRING}`;

const postCommentsEndpoint = `https://project-1-api.herokuapp.com/comments${API_KEY_STRING}`;

// Display the data in the below target container
let commentsContainer = document.querySelector('.comments__container');
// showComment is the DOM function for creating the HTML to plug into our site
const showComment = (comments) => {
  const commentsE1 = document.createElement('div');
  commentsE1.classList.add('comments');

  const avatarE1 = document.createElement('aside');
  avatarE1.classList.add('comments__avatar');

  const leftE1 = document.createElement('div');
  leftE1.classList.add('comments__left');

  const rightE1 = document.createElement('div');
  rightE1.classList.add('comments__right');

  const nameE1 = document.createElement('h4');
  nameE1.classList.add('comments__name');
  nameE1.innerText = comments.name;

  const dateE1 = document.createElement('h4');
  dateE1.classList.add('comments__date');
  dateE1.innerText = Date(comments.timestamp);

  const commentE1 = document.createElement('h4');
  commentE1.classList.add('comments__comment');
  commentE1.innerText = comments.comment;

  leftE1.appendChild(avatarE1);
  rightE1.appendChild(nameE1);
  rightE1.appendChild(dateE1);
  rightE1.appendChild(commentE1);

  commentsE1.appendChild(leftE1);
  commentsE1.appendChild(rightE1);
  
  commentsContainer.appendChild(commentsE1);
}


// get comments


axios.get(getCommentsEndpoint)
  .then(result => {
    console.log(result.data);
// DOM generate the comments with showComment
    result.data.forEach(entry => {

      showComment(entry);
    });
  });




// This is just for form submit
const commentForm = document.querySelector('.comment__form');


// axios.all([axiosrequest1, axiosrequest2, axiosrequest3])
commentForm.addEventListener('submit', function(event) {
  event.preventDefault();
  name = event.target.name.value;
  comment = event.target.comment.value;
  console.log(name);
  console.log(comment);
  axios.post(postCommentsEndpoint, {
    "name": `${name}`,
    "comment": `${comment}`,
    },
    {headers: {
      "Content-Type" : 'application/json'
    }
  });
// end of axios post
});
// commentForm.addEventListener('submit', (event) => {
//   event.preventDefault();

// // Define the values for the form
//   const newForm = {
//     name: event.target.name.value,
//     // might need to change date format
//     date: getFormattedDate(),
//     comment: event.target.comment.value
//   };

//   comments.unshift(newForm);
//   commentsContainer.innerHTML = '';
// // expand to all comments in the array!! but For Each should already do that above
//   // for (let i = 0; i < comments; i++) {
//   //   showComment(comments[i]);
//   // }

//   //this just resets the form
//   commentForm.reset();
// });

// function getFormattedDate() {
//   const currentDate = new Date();

//   return `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
// }

