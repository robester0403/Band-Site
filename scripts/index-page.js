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
    // <div class="comments__flex-container"> <--flex here
        // <div class="comments__left">
          // <aside class="comment__avatar"></aside>
        // </div>
        // <div class="comments__right">
          // <h4 class="comments__name"></h4>
        //   <h4 class="comments__date"></h4>
        //   <h4 class="comments__msg"></h4>
        // <div>
    // </div>
  // </div>
  const commentsE1 = document.createElement('div');
  commentsE1.classList.add('comments');

  // const flxctnrE1 = document.createElement('div');
  // flxctnrE1.classList.add('comments__flxctner');

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
  // flxctnrE1.appendChild(leftE1);
  // flxctnrE1.appendChild(rightE1);

  commentsE1.appendChild(leftE1);
  commentsE1.appendChild(rightE1);
  
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
