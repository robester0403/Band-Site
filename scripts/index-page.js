
const API_KEY_STRING = "?api_key=1f1af60a-45c0-4cd3-a5fc-abda06f43bb6";

const getCommentsEndpoint = `https://project-1-api.herokuapp.com/comments${API_KEY_STRING}`;
const getShowdatesEndpoint = `https://project-1-api.herokuapp.com/showdates${API_KEY_STRING}`;

const postCommentsEndpoint = `https://project-1-api.herokuapp.com/comments${API_KEY_STRING}`;

// Display the data in the below target container
let commentsContainer = document.querySelector('.comments__container');
// displayComment is the DOM function for creating the HTML to plug into our site
const displayComment = (comments) => {
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

  console.log(comments.timestamp);
  const dateE1 = document.createElement('h4');
  dateE1.classList.add('comments__date');
  dateE1.innerText = getFormattedDate(comments.timestamp);

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

function getFormattedDate(date) {
  const currentDate = new Date(date);

  return `${(currentDate.getMonth() + 1)}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
}

axios.get(getCommentsEndpoint)
  .then(result => {
    sortedArrayByTime = result.data
    sortedArrayByTime.reverse(function(object1, object2) {
    var timevar1 = new Date(object1.updated_at),
      timevar2 = new Date(object2.updated_at);
    // Compare the 2 dates
    if (timevar1 < timevar2) return -1;
    if (timevar1 > timevar2) return 1;
    return 0;
    });
// the above actually sorts and saves the new array as a new usable sorted array
  console.log(sortedArrayByTime);
// DOM generate the comments with displayComment
    result.data.forEach(entry => {
      displayComment(entry);
    });
  });

// This is just for form submit
const commentForm = document.querySelector('.comment__form');

// axios.all([axiosrequest1, axiosrequest2, axiosrequest3])
commentForm.addEventListener('submit', function(event) {
  event.preventDefault();
  while (commentsContainer.firstChild) {
    commentsContainer.removeChild(commentsContainer.firstChild);
  }
  name = event.target.name.value;
  comment = event.target.comment.value;
  console.log(name);
  console.log(comment);
  // try to do a set Axios sequence of commands


  axios.post(postCommentsEndpoint, {
    "name": `${name}`,
    "comment": `${comment}`,
    },
    {headers: {
      "Content-Type" : 'application/json'
    }
  })
  .then(
    axios.get(getCommentsEndpoint)
    .then(result => {
    console.log(result)
    sortedArrayByTime = result.data
    sortedArrayByTime.reverse(function(object1, object2) {
    var timevar1 = new Date(object1.updated_at),
      timevar2 = new Date(object2.updated_at);
    // Compare the 2 dates
    if (timevar1 < timevar2) return -1;
    if (timevar1 > timevar2) return 1;
    return 0;
    });
  // the above actually sorts and saves the new array as a new usable sorted array
    console.log(sortedArrayByTime);
  // DOM generate the comments with displayComment
    result.data.forEach(result => {
      displayComment(result);
    });
}))

    // axios.post(postCommentsEndpoint, {
    //   "name": `${name}`,
    //   "comment": `${comment}`,
    //   },
    //   {headers: {
    //     "Content-Type" : 'application/json'
    //   }
    // })
  // ,
  //   axios.get(getCommentsEndpoint)
  //   .then(result => {
      
      // while (containerEl.firstChild) {
      //   containerEl.removeChild(containerEl.firstChild);
      // }
  //     sortedArrayByTime = result.data
  //     sortedArrayByTime.reverse(function(object1, object2) {
  //     var timevar1 = new Date(object1.updated_at),
  //       timevar2 = new Date(object2.updated_at);
  //     // Compare the 2 dates
  //     if (timevar1 < timevar2) return -1;
  //     if (timevar1 > timevar2) return 1;
  //     return 0;
  //     });
  // // the above actually sorts and saves the new array as a new usable sorted array
  //   console.log(sortedArrayByTime);
  // // DOM generate the comments with displayComment
  //     result.data.forEach(entry => {
  //       displayComment(entry);
  //     });
  //   }); 
  // ]);
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
//   //   displayComment(comments[i]);
//   // }

//   //this just resets the form
//   commentForm.reset();
// });



