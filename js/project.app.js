var app = new Vue({
  el: '#app',
  data: {
    projects: [
      { id: '01', class: 'p0', link: 'cybernative.php', name: 'Cyber Native', role: 'Project manager', video: 'vid/shell.mp4', date: 'APR 2019' },
      { id: '02', class: 'p1', link: 'nailed.php', name: 'Nailed', role: 'Creator', video: 'vid/nailed.mp4', date: 'MAY 2019' },
      { id: '03', class: 'p2', link: 'from-2060.php', name: 'from 2060', role: 'Lead developer', video: 'vid/hangover.mp4', date: 'NOV 2018' },
      { id: '04', class: 'p3', link: 'last-trip.php', name: 'Last Trip', role: 'Director', video: 'vid/last.mp4', date: 'JUN 2018' },
      { id: '05', class: 'p4', link: 'flight-booking.php', name: 'Flight booking', role: 'Front-end developer', video: 'vid/customair.mp4', date: 'MAR 2018' }
    ]
  }
})