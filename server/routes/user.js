const express = require('express');
const router = express.Router();
const keys = require('../../config/keys');

const SynapsePay = require('synapsepay');
const Clients = SynapsePay.Clients;
const Helpers = SynapsePay.Helpers;
const Users = SynapsePay.Users;

const client = new Clients(
    // client id should be stored as an environment variable
    keys.CLIENT_ID,
    // client secret should be stored as an environment variable
    keys.CLIENT_SECRET,
    // is_production boolean determines sandbox or production endpoints used
    false
);

/* Create A User */

router.post('/createUser', (req, res) => {

  const createPayload = {
    logins: [
      {
        email: req.body.email,
        password: req.body.password,
        read_only: false,
      },
    ],
    phone_numbers: [req.body.phone_numbers],
    legal_names: [req.body.legal_names],
    extra: {
      note: 'Personal User',
    }

  };

  Users.create(
    client,
    //fingerprint (specific to user or static for application)
    keys.FINGERPRINT,
    Helpers.getUserIP(),
    createPayload,
    (err, userResponse) => {
      // error or user object
      // user = userResponse;
      res.send(userResponse);
    }
  );

});

/* Get A User */

router.post('/getUser', (req, res) => {

  const options = {
    _id: req.body.selectedUserId,
    fingerprint: keys.FINGERPRINT,
    ip_address: Helpers.getUserIP(),
    full_dehydrate: 'yes' // optional
  };

  Users.get(
      client,
      options,
      (errResp, userResponse) => {
        // error or user object
        const user = userResponse;
        res.send(user);
      }
  );

});

/* Get All Users */

router.get('/getAllUsers', (req, res) => {

  const options = {
    ip_address: Helpers.getUserIP(),
    page: '', // optional
    per_page: '', // optional
    query: '' // optional
  };

  Users.get(
      client,
      options,
      (err, usersResponse) => {
        res.send(usersResponse.users);
      }
  );

});

module.exports = router;
