// let commentForm = document.querySelector('.comment-form');

// submit event without refreshing
// commentForm.addEventListener('submit', (event) => {
//   event.preventDefault();
// });
// remindersContainer = c

let commentsContainer = document.querySelector('.comments-container');

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



const showComment = (comments) => {
  // <div class="comments">
  //   <h4 class="comments__name">
  //   <h4 class="comments__date">
  //   <h4 class="comments__msg">
  // </div>
  const commentsE1 = document.createElement('div');
  commentsE1.classList.add('comments');

  const nameE1 = document.createElement('h4');
  nameE1.classList.add('comments__name');
  nameE1.innerText = comments.name;

  const dateE1 = document.createElement('h4');
  dateE1.classList.add('comments__date');
  dateE1.innerText = comments.date;

  const msgE1 = document.createElement('h4');
  msgE1.classList.add('comments__msg');
  msgE1.innerText = comments.msg;

  commentsE1.appendChild(nameE1);
  commentsE1.appendChild(dateE1);
  commentsE1.appendChild(msgE1);

  commentsContainer.appendChild(commentsE1);
}

comments.forEach((comments) => {
  showComment(comments);
});

const commentForm = document.querySelector('.comment__form');

commentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const newForm = {
    name: event.target.name.value,
    date: getFormattedDate(),
    msg: event.target.msg.value
  };

  comments.unshift(newForm);
  commentsContainer.innerHTML = '';
// This should be ok? because it has been passed into text at this point

  for (let i = 0; i < 3; i++) {
    showComment(comments[i]);
  }

  commentForm.reset();
});

function getFormattedDate() {
  const currentDate = new Date();

  return `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
}
