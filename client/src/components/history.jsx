import React from 'react';
import { Table } from 'semantic-ui-react';

const TransHistBox = ({ transactionHistory }) => (
  <div className="history">
    <h2 style={{ padding:'10px' }}> Transaction History </h2>
    <div style={{ margin: 0, padding:'10px' }}>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>User</Table.HeaderCell>
            <Table.HeaderCell>Node Type</Table.HeaderCell>
            <Table.HeaderCell>Transaction Id</Table.HeaderCell>
            <Table.HeaderCell>Amount</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {transactionHistory.map((tran, idx) => (
            <Table.Row key={idx}>
              <Table.Cell>{tran.user}</Table.Cell>
              <Table.Cell>{tran.nodeType}</Table.Cell>
              <Table.Cell>{tran.transactionId}</Table.Cell>
              <Table.Cell style={{ textAlign: 'left' }}>
                <b>{`$ ${tran.amount}`}</b>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  </div>
);

export default TransHistBox;
