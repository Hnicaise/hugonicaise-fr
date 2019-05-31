var app = new Vue({
  el: '#app',
  data: {
    projects: [
      { id: '01', class: 'p0', link: 'cybernative.php', name: 'Cyber Native', role: 'Project manager', video: 'vid/shell.mp4', date: 'APR 2019' },
      { id: '02', class: 'p1', link: 'nailed.php', name: 'Nailed', role: 'Creator', video: 'vid/nailed.mp4', date: 'MAY 2019' },
      { id: '03', class: 'p2', link: 'from-2060.php', name: 'from 2060', role: 'Lead developer', video: 'vid/hangover.mp4', date: 'NOV 2018' },
      { id: '04', class: 'p3', link: 'last-trip.php', name: 'Last Trip', role: 'Director', video: 'vid/last.mp4', date: 'JUN 2018' },
      { id: '05', class: 'p4', link: 'flight-booking.php', name: 'Flight booking', role: 'Front-end developer', video: 'vid/customair.mp4', date: 'MAR 2018' }
    ],
    
    cybernative: [{title: 'Cybernative', date: 'FEB - APR 2019', role: 'Project Manager & front-end developer', format: 'Print & web', mood: 'F*CK guys we\'re late!!!'}],

    nailed: [{title: 'Nailed', date: 'APRIL 2019 - FOREVER', role: 'Creator & developer', format: 'Web', mood: 'Tell me it works.'}],

    from2060: [{title: 'From 2060', date: 'NOVEMBER 2018', role: 'Lead developer, UX designer & project manager', format: 'Print & Web', mood: 'I\'m a JQuery master now.'}],

    lasttrip: [{title: 'Last trip', date: 'JUNE 2018', role: 'Director', format: 'Video', mood: 'No cops arount? Go!'}],

    custom: [{title: 'Flight booking', date: 'MARCH 2018', role: 'Front-end developer', format: 'Web', mood: 'Interesting!'}],
  }
})