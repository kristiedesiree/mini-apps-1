'use strict';

var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3000,
  user: 'root',
  password: ''
});

connection.connect(function (error) {
  if (error) {
    console.log('error connecting', error);
  } else {
    console.log('connected to mysql');
  }
});
module.exports = connection;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2RhdGFiYXNlLmpzIl0sIm5hbWVzIjpbIm15c3FsIiwicmVxdWlyZSIsImNvbm5lY3Rpb24iLCJob3N0IiwicG9ydCIsInVzZXIiLCJwYXNzd29yZCIsImNvbnNvbGUiLCJtb2R1bGUiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsUUFBUUMsUUFBWixPQUFZQSxDQUFaO0FBQ0EsSUFBSUMsYUFBYSxNQUFBLGdCQUFBLENBQXVCO0FBQ3RDQyxRQURzQyxXQUFBO0FBRXRDQyxRQUZzQyxJQUFBO0FBR3RDQyxRQUhzQyxNQUFBO0FBSXRDQyxZQUFVO0FBSjRCLENBQXZCLENBQWpCOztBQU9BSixXQUFBQSxPQUFBQSxDQUFtQixVQUFBLEtBQUEsRUFBZ0I7QUFDakMsTUFBQSxLQUFBLEVBQVc7QUFDVEssWUFBQUEsR0FBQUEsQ0FBQUEsa0JBQUFBLEVBQUFBLEtBQUFBO0FBREYsR0FBQSxNQUVPO0FBQ0xBLFlBQUFBLEdBQUFBLENBQUFBLG9CQUFBQTtBQUNEO0FBTEhMLENBQUFBO0FBT0FNLE9BQUFBLE9BQUFBLEdBQUFBLFVBQUFBIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG15c3FsID0gcmVxdWlyZSgnbXlzcWwnKTtcbnZhciBjb25uZWN0aW9uID0gbXlzcWwuY3JlYXRlQ29ubmVjdGlvbih7XG4gIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICBwb3J0OiAzMDAwLFxuICB1c2VyOiAncm9vdCcsXG4gIHBhc3N3b3JkOiAnJ1xufSk7XG5cbmNvbm5lY3Rpb24uY29ubmVjdChmdW5jdGlvbihlcnJvcikge1xuICBpZiAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZygnZXJyb3IgY29ubmVjdGluZycsIGVycm9yKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnY29ubmVjdGVkIHRvIG15c3FsJyk7XG4gIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBjb25uZWN0aW9uO1xuXG4iXX0=