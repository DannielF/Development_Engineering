const jwt = require('jsonwebtoken');

const secret = 'scoobyDoo';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjM3NjA5Nzk5fQ.Phj8YTvd-209ok6Up15f4LSo5QcaTQS_oVQYN-Z5cFY';

function verifyToken(token, secret) {
  return jwt.verify(token, secret);
}

const payload = verifyToken(token, secret);
console.log(payload);