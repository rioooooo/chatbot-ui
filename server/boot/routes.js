const request = require('request');
const querystring = require('querystring');
const newSessionId = require('../../common/utils/new-session-id.js');

const callUsApi = function callUsApi(res, question, newURL, newCID, sessionId) {
  let newIP = newURL;
  const cid = newCID;
  let url = `http://${newIP}/chatbot/ask.do?debug=1`;
  console.log('URL = ');
  console.log(url);

  console.log('cid = ');
  console.log(cid);

  if (cid === '') {
    url += `&sid=${querystring.escape(sessionId)}&q=${querystring.escape(question)}`;
  } else {
    url += `&sid=${querystring.escape(sessionId)}&cid=${cid}&q=${querystring.escape(question)}`;
  }

  console.log('final url:');
  console.log(url);


  request.get({ url, form: {} }, (error, response, body) => {
    if (error) {
      console.log('error:', error); // Print the error if one occurred
      console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
      console.log('body:', body); // Print the HTML for the Google homepage.
      let newbody = '{"response": "There is error with instance URL: ';
      newIP = newIP.concat('"}');
      newbody = newbody.concat(newIP);
      res.send(newbody);
    } else if (!error && response.statusCode === 200) {
      console.log(response.statusCode);
      let newbody = JSON.parse(body);
      newbody.queryUrl = url;
      newbody = JSON.stringify(newbody);
      res.send(newbody);
    }
  });
};

module.exports = (server) => {
  server.get('/callUsApi', (req, res) => {
    const sessionId = req.cookies.sessionId;
    const sessionIdTime = req.cookies.sessionIdTime;

    const idleTime = 30 * 60 * 1000;
    const now = Date.now();
    const sessionExpired = (now - sessionIdTime) > idleTime;

    const sessionEndedByUser = req.query.endSession;


    let nsi;
    if (sessionExpired || sessionEndedByUser) {
      nsi = newSessionId();
    } else {
      nsi = sessionId;
    }

    res.cookie('sessionId', nsi);
    res.cookie('sessionIdTime', now);

    const question = req.query.q;
    const url = req.query.newURL;
    const cid = req.query.newCID;
    callUsApi(res, question, url, cid, nsi);
  });

  server.get('/getInitSessionId', (req, res) => {
    const sessionId = newSessionId();
    const sessionIdTime = Date.now();
    res.cookie('sessionId', sessionId);
    res.cookie('sessionIdTime', sessionIdTime);
    res.send('dfd');
  });
};
