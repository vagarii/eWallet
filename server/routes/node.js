const express = require('express');
const router = express.Router();

const SynapsePay = require('synapsepay');
const Nodes = SynapsePay.Nodes;

/* Add SYNAPSE-US Node */

router.post('/createNode', (req, res) => {

  const synapseNodePayload = {
    type: 'SYNAPSE-US',
    info: {
      nickname: req.body.nickname,
    },
    extra: {
      supp_id: '123sa',
    }
  };

  const user = req.body.user;

  Nodes.create(
      user,
      synapseNodePayload,
      (err, nodeResponse) => {
        res.send(nodeResponse);
      }
  );

});

/* Get All Nodes */
router.post('/getAllNodes', (req, res) => {

  const user = req.body;
  Nodes.get(
      user,
      null,
      (err, nodesResponse) => {
        res.send(nodesResponse);
      }
  );

});

/* Get a Specific Node */

router.post('/getOneNode', (req, res) => {

  const user = req.body.selectedUser;
  const node_id = req.body.selectedNode_id;

  Nodes.get(
    user,
    {
      _id: node_id,
      full_dehydrate: 'yes', // optional
    },
    (err, nodeResponse) => {
      // error or node object
      res.send(nodeResponse);
    }
  );

});

module.exports = router;
