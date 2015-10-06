
var cookieStand = function(place, min, max, avgCookieCust) {
      //var pikePlace = {
  this.location = location;
        //location: 'Pike Place Market',
  this.min = min;
        //min: 17,
  this.max = max;
        //max: 88,
  this.avgCookieCust = avgCookieCust;
        //avgCookieCust: 5.2,
  this.totalCookieHour = [];
        //totalCookieHour: [],
  this.totalCookieDay = [];
        //totalCookieDay: [],
  this.hours = ['10am', '11am', '12pm','1pm','2pm','3pm','4pm','5pm'];
        //hours: ['10am', '11am', '12pm','1pm','2pm','3pm','4pm','5pm'],
  this.randCustHour = function() {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
        // randCustHour: function() {
        //   return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min
  };
  this.makeUL = function(id) {
    var total = 0;
    var parent = document.getElementById(id);
    console.log(parent);
    for( i = 0; i < 8; i++) {
      this.totalCookieHour[i] = Math.floor(this.randCustHour() * this.avgCookieCust);
      console.log(id)
        // makeUL: function(id) {
        //   var total = 0;
        //   for( i = 0; i < 8; i++) {
        //     this.totalCookieHour[i] = Math.floor(this.randCustHour() * this.avgCookieCust))
      var item = document.createElement('li');
      item.appendChild(document.createTextNode(this.hours[i] + ': ' + this.totalCookieHour[i] + " cookies"));
      parent.appendChild(item);
      total += this.totalCookieHour[i];
    };
    console.log(total)
    var itemTotal = document.createElement('li');
    itemTotal.appendChild(document.createTextNode('Total: ' + total + ' cookies'));
    parent.appendChild(itemTotal);
  };
};

var pikePlace = new cookieStand('Pike Place Market', 17, 88, 5.2);
pikePlace.makeUL('pike');
var seatac = new cookieStand('SeaTac Airport', 6, 44, 1.2);
seatac.makeUL('seatac')
var southcenter = new cookieStand('Southcenter Mall', 11, 38, 1.9);
southcenter.makeUL('southcenter')
var bellevue = new cookieStand('Bellevue square', 20, 48, 3.3);
bellevue.makeUL('bellevue')
var alki = new cookieStand('Alki', 3, 24, 2.6);
alki.makeUL('alki')
// git checkout -b monday
// git checkout -b tuesday-contrutor-table
// git push origin tuesday-contrutor-table
