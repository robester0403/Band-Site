let commentsContainer = document.querySelector('.comments__container');

const comments = [
  {
    name: 'Connor Walton',
    date: '02/17/2021',
    msg: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
  },
  {
    name: 'Emilie Beach',
    date: '01/09/2021',
    msg: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day',
  },
  {
    name: 'Miles Acosta',
    date: '12/20/2020',
    msg: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
  }
];
// This is the DOM that builds the comment HTML
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
  dateE1.innerText = comments.date;

  const msgE1 = document.createElement('h4');
  msgE1.classList.add('comments__msg');
  msgE1.innerText = comments.msg;

  leftE1.appendChild(avatarE1);
  rightE1.appendChild(nameE1);
  rightE1.appendChild(dateE1);
  rightE1.appendChild(msgE1);

  commentsE1.appendChild(leftE1);
  commentsE1.appendChild(rightE1);
  
  commentsContainer.appendChild(commentsE1);
}
// This reads the comments in the array
comments.forEach((comments) => {
  showComment(comments);
});

const commentForm = document.querySelector('.comment__form');

commentForm.addEventListener('submit', (event) => {
  event.preventDefault();
// validator
  let x = document.forms["commentForm"]["name"].value;
  if (x == "" || x == "Enter your name") {
    alert("You must enter a name");
    document.querySelector(`.comment__form-input`).classList.add('commentError');
    return false;
  }
  let y = document.forms["commentForm"]["msg"].value;
  if (y == "" || y == "Add a new comment") {
    alert("You must enter a comment");
    document.querySelector(`.comment__form-msg`).classList.add('commentError');
    return false;
  }
// Define the values for the form
  const newForm = {
    name: event.target.name.value,
    date: getFormattedDate(),
    msg: event.target.msg.value
  };

  comments.unshift(newForm);
  commentsContainer.innerHTML = '';
// Limit to only 3 comments
  for (let i = 0; i < 3; i++) {
    showComment(comments[i]);
  }

  commentForm.reset();
});

function getFormattedDate() {
  const currentDate = new Date();

  return `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
}

