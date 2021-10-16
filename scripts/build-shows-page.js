let shows = [
  {
    date: 'Mon Sept 06 ', // we need to figure out time format
    venue: 'Ronald Lane',
    location: 'San Francisco, CA',
  },
  {
    date: 'Tue Sept 21 ', // we need to figure out time format
    venue: 'Pier 3 East',
    location: 'San Francisco, CA',
  },
  {
    date: 'Fri Oct 15 2021', // we need to figure out time format
    venue: 'View Lounge',
    location: 'San Francisco, CA',
  },
  {
    date: 'Sat Nov 06 2021', // we need to figure out time format
    venue: 'Hyatt Agency',
    location: 'San Francisco, CA',
  },
  {
    date: 'Fri Nov 26 2021', // we need to figure out time format
    venue: 'Moscow Center',
    location: 'San Francisco, CA',
  },
  {
    date: 'Wed Dec 15 2021', // we need to figure out time format
    venue: 'Press Club',
    location: 'San Francisco, CA',
  },
]


// create our parent elements (.shows)
// create our child elements (.shows__heading, .shows__date, .shows__venue, .shows__location, .shows__button)
// create our parent-child structure for .shows__container
    // .shows__heading .shows__date .shows__heading .shows__venue
    //.shows__heading .shows__location .shows__button and APPEND it to .shows__container
// create our parent-child structure for .shows
    // .shows__container and APPEND it to .shows

// // Create all elements as below:
// // create our parent elements (.shows)



// let showsParent = document.createElement('section');
// showsParent.classList.add('shows');

// for (let i = 0; i < shows.length; i++)
// shows[i].date

// create our child elements (.shows__card .shows__heading, .shows__date, .shows__venue, .shows__location, .shows__button)
function createShowsCard(date, venue, location, parentSelector) {
  let showsCard = document.createElement('div');
  showsCard.classList.add('shows__card');
  
  let showsSubCard1 = document.createElement('div');
  showsSubCard1.classList.add('shows__sub-card');

  let showsSubCard2 = document.createElement('div');
  showsSubCard2.classList.add('shows__sub-card');

  let showsSubCard3 = document.createElement('div');
  showsSubCard3.classList.add('shows__sub-card');

  let showsSubCard4 = document.createElement('div');
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

  let showsDate = document.createElement('div');
  showsDate.classList.add('shows__copy');
  showsDate.innerText = date;

  let showsVenue = document.createElement('div');
  showsVenue.classList.add('shows__copy');
  showsVenue.innerText = venue;

  let showsLocation = document.createElement('div');
  showsLocation.classList.add('shows__copy');
  showsLocation.innerText = location;

  let showsButton = document.createElement('div');
  showsButton.classList.add('shows__location');
  showsButton.innerText = 'Buy Tickets';

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

  let parent = document.querySelector(parentSelector)
  parent.appendChild(showsCard);
  console.log(showsCard);
}



// setTimeout(function() {
for (let i = 0; i < shows.length; i++) {
  createShowsCard(shows[i].date, shows[i].venue, shows[i].location, '.shows')
}
// }, 2000)

// let parent = document.querySelector('shows');
// parent.appendChild(showsParent);
// console.log(showsParent)