import React from 'react';
import { Card, Image, Loader, Segment, Icon } from 'semantic-ui-react';

const ProfileBox = (props) => {
  if (props.nodeDropDownFromOptions.length === 0) {
    return (
      <div className="profile">
        <h2 style={{ display: 'inline-block', margin: 0, marginRight: 20 }}>Loading Profile</h2>
        <Loader active inline />
      </div>
    );
  }
  
  let userName = props.justCreatedUser.json.legal_names;
  let accountNickname = props.nodeDropDownFromOptions[0].nickname;
  return (
    <div className="profile">
      <h2>Profile Card</h2>
      <Card>
        <Image src='./../img/kristy.png' />
        <Card.Content>
          <Card.Header>
            {userName}
          </Card.Header>
          <Card.Description>
            {accountNickname}
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default ProfileBox;