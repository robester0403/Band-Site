const API_KEY_STRING = "?api_key=d1daf4f6-fa47-46b2-98bb-af3e6eb40688";

const getCommentsEndpoint = `https://project-1-api.herokuapp.com/comments${API_KEY_STRING}`;
const getShowdatesEndpoint = `https://project-1-api.herokuapp.com/showdates${API_KEY_STRING}`;

const postCommentsEndpoint = `https://project-1-api.herokuapp.com/comments${API_KEY_STRING}`;

    // change these variable names to more intuitive
let showsContainer = document.querySelector('.shows');


createShowsCard = (showsdates) => {
  let showsCard = document.createElement('ul');
  showsCard.classList.add(`shows__card`);
  showsCard.addEventListener('click', () =>  {
    showsCard.classList.toggle('showsHighlight');
  });
  
  let showsSubCard1 = document.createElement('li');
  showsSubCard1.classList.add('shows__sub-card');
  
  let showsSubCard2 = document.createElement('li');
  showsSubCard2.classList.add('shows__sub-card');
  
  let showsSubCard3 = document.createElement('li');
  showsSubCard3.classList.add('shows__sub-card');
  
  let showsSubCard4 = document.createElement('li');
  showsSubCard4.classList.add('shows__sub-card');
  
  let showsHeadingDate = document.createElement('h5');
  showsHeadingDate.classList.add('shows__heading');
  showsHeadingDate.innerText = 'DATE';
  
  let showsHeadingVenue = document.createElement('h5');
  showsHeadingVenue.classList.add('shows__heading');
  showsHeadingVenue.innerText = 'VENU';
  
  let showsHeadinglocation = document.createElement('h5');
  showsHeadinglocation.classList.add('shows__heading');
  showsHeadinglocation.innerText = 'LOCATION';
  
  console.log(showsdates.date.getFullYear)
  let showsDate = document.createElement('div');
  showsDate.classList.add('shows__copy');
  showsDate.innerText = getFormattedDate(showsdates.date);
  
  let showsVenue = document.createElement('div');
  showsVenue.classList.add('shows__copy');
  showsVenue.innerText = showsdates.place;
  
  let showsLocation = document.createElement('div');
  showsLocation.classList.add('shows__copy');
  showsLocation.innerText = showsdates.location;
  
  let showsButton = document.createElement('div');
  showsButton.classList.add('shows__button');
  showsButton.innerText = 'BUY TICKETS';
  
  showsSubCard1.appendChild(showsHeadingDate);
  showsSubCard1.appendChild(showsDate);
    console.log(showsSubCard1)
    showsSubCard2.appendChild(showsHeadingVenue);
    showsSubCard2.appendChild(showsVenue);
    console.log(showsSubCard2)
    showsSubCard3.appendChild(showsHeadinglocation);
    showsSubCard3.appendChild(showsLocation);
    console.log(showsSubCard3)
    showsSubCard4.appendChild(showsButton);
    console.log(showsSubCard4)
    showsCard.appendChild(showsSubCard1);
    showsCard.appendChild(showsSubCard2);
    showsCard.appendChild(showsSubCard3);
    showsCard.appendChild(showsSubCard4);
    console.log(showsCard)
    
    showsContainer.appendChild(showsCard);
    console.log(showsCard);
  }

    function getFormattedDate(date) {
    const currentDate = new Date(parseInt(date));

    return `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
  }
  
  axios.get(getShowdatesEndpoint)
  .then(showsdata => {
    console.log(showsdata.data);
    showsdata.data.forEach(entry => {
      createShowsCard(entry);
    });
  });
  
