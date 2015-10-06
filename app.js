var pikePlace = {
  location: 'Pike Place Market',
  min: 17,
  max: 88,
  avgCookieCust: 5.2,
  totalCookieHour: [],
  totalCookieDay: [],
  hours: ['10am', '11am', '12pm','1pm','2pm','3pm','4pm','5pm'],
  randCustHour: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
  },
  makeUL: function() {
    var total = 0;
    for( i = 0; i < 8; i++) {
      this.totalCookieHour[i] = Math.floor(this.randCustHour() * this.avgCookieCust);

      var awesomeList = document.getElementById('pike');

      var item = document.createElement('li');

      item.appendChild(document.createTextNode(this.hours[i] + ': ' + this.totalCookieHour[i] + " cookies"));

      awesomeList.appendChild(item);

      total += this.totalCookieHour[i];
    };
    console.log(total)
    var itemTotal = document.createElement('li');

    itemTotal.appendChild(document.createTextNode('Total: ' + total + ' cookies'));
    awesomeList.appendChild(itemTotal);
  }
}
pikePlace.makeUL();

//--------------------------------------------

var seaTac = {
  location: 'SeaTac Airport',
  min: 6,
  max: 44,
  avgCookieCust: 1.2,
  totalCookieHour: [],
  totalCookieDay: [],
  hours: ['10am', '11am', '12pm','1pm','2pm','3pm','4pm','5pm'],
  randCustHour: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
  },
  makeUL: function() {
    var total = 0;
    for( i = 0; i < 8; i++) {
      this.totalCookieHour[i] = Math.floor(this.randCustHour() * this.avgCookieCust);

      var awesomeList = document.getElementById('seatac');

      var item = document.createElement('li');

      item.appendChild(document.createTextNode(this.hours[i] + ': ' + this.totalCookieHour[i] + " cookies"));

      awesomeList.appendChild(item);

      total += this.totalCookieHour[i];
    };
    console.log(total)
    var itemTotal = document.createElement('li');

    itemTotal.appendChild(document.createTextNode('Total: ' + total + ' cookies'));
    awesomeList.appendChild(itemTotal);
  }
}
seaTac.makeUL();

//-----------------------------------------

var southCenter = {
  location: 'Southcenter Mall',
  min: 11,
  max: 38,
  avgCookieCust: 1.9,
  totalCookieHour: [],
  totalCookieDay: [],
  hours: ['10am', '11am', '12pm','1pm','2pm','3pm','4pm','5pm'],
  randCustHour: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
  },
  makeUL: function() {
    var total = 0;
    for( i = 0; i < 8; i++) {
      this.totalCookieHour[i] = Math.floor(this.randCustHour() * this.avgCookieCust);

      var awesomeList = document.getElementById('south');

      var item = document.createElement('li');

      item.appendChild(document.createTextNode(this.hours[i] + ': ' + this.totalCookieHour[i] + " cookies"));

      awesomeList.appendChild(item);

      total += this.totalCookieHour[i];
    };
    console.log(total)
    var itemTotal = document.createElement('li');

    itemTotal.appendChild(document.createTextNode('Total: ' + total + ' cookies'));
    awesomeList.appendChild(itemTotal);
  }
}
southCenter.makeUL();

//------------------------------------------

var bellevue = {
  location: 'Bellevue Square',
  min: 20,
  max: 48,
  avgCookieCust: 3.3,
  totalCookieHour: [],
  totalCookieDay: [],
  hours: ['10am', '11am', '12pm','1pm','2pm','3pm','4pm','5pm'],
  randCustHour: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
  },
  makeUL: function() {
    var total = 0;
    for( i = 0; i < 8; i++) {
      this.totalCookieHour[i] = Math.floor(this.randCustHour() * this.avgCookieCust);

      var awesomeList = document.getElementById('bellevue');

      var item = document.createElement('li');

      item.appendChild(document.createTextNode(this.hours[i] + ': ' + this.totalCookieHour[i] + " cookies"));

      awesomeList.appendChild(item);

      total += this.totalCookieHour[i];
    };
    console.log(total)
    var itemTotal = document.createElement('li');

    itemTotal.appendChild(document.createTextNode('Total: ' + total + ' cookies'));
    awesomeList.appendChild(itemTotal);
  }
}
bellevue.makeUL();



var alki = {
  location: 'Alki',
  min: 3,
  max: 24,
  avgCookieCust: 2.6,
  totalCookieHour: [],
  totalCookieDay: [],
  hours: ['10am', '11am', '12pm','1pm','2pm','3pm','4pm','5pm'],
  randCustHour: function() {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
  },
  makeUL: function() {
    var total = 0;
    for( i = 0; i < 8; i++) {
      this.totalCookieHour[i] = Math.floor(this.randCustHour() * this.avgCookieCust);

      var awesomeList = document.getElementById('alki');

      var item = document.createElement('li');

      item.appendChild(document.createTextNode(this.hours[i] + ': ' + this.totalCookieHour[i] + " cookies"));

      awesomeList.appendChild(item);

      total += this.totalCookieHour[i];
    };
    console.log(total)
    var itemTotal = document.createElement('li');

    itemTotal.appendChild(document.createTextNode('Total: ' + total + ' cookies'));
    awesomeList.appendChild(itemTotal);
  }
}
alki.makeUL();
