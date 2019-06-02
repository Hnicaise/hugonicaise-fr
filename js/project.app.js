var app = new Vue({
  el: '#app',
  data: {
    projects: [
      { id: '01', class: 'p0', name: 'Cyber Native', role: 'Project manager', video: 'vid/ghost.mp4', date: 'APR 2019' },
      { id: '02', class: 'p1', name: 'Nailed', role: 'Creator', video: 'vid/ironman.mp4', date: 'MAY 2019' },
      { id: '03', class: 'p2', name: 'from 2060', role: 'Lead developer', video: 'vid/hangover.mp4', date: 'NOV 2018' },
      { id: '04', class: 'p3', name: 'Last Trip', role: 'Director', video: 'vid/movie.mp4', date: 'JUN 2018' },
      { id: '05', class: 'p4', name: 'Flight booking', role: 'Front-end developer', video: 'vid/booking.mp4', date: 'MAR 2018' }
    ]
  }
})