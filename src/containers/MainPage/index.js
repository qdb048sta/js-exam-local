import React from 'react';
import PropTypes from 'prop-types';
import { Connect } from 'aws-amplify-react';
import { connect } from 'react-redux';
import { graphqlOperation } from 'aws-amplify';

import { listRooms } from 'graphql/queries';
import { onCreateRoom } from 'graphql/subscriptions';

import RoomList from './RoomList';
import CreateRoomView from './CreateRoomView';

import style from './MainPage.module.scss';

const MainPage = ({ history, signedOn, hostings }) => (
  <div className={style.Mainpage}>
    <div className={`${style.column} ${style.list}`}>
      {/* TODO: Room list with with lazy-loading next dataset. Here we load 1000 rooms instead. */}
      <Connect
        query={graphqlOperation(listRooms, { limit: 1000 })}
        subscription={graphqlOperation(onCreateRoom)}
        onSubscriptionMsg={(prev, { onCreateRoom: createdRoom }) => {
          prev.listRooms.items.unshift(createdRoom);
          return prev;
        }}
      >
        {({ data: { listRooms: rooms }, loading, error }) => {
          if (error) return <h3>Error</h3>;
          if (loading || !listRooms) return <RoomList isLoading={loading} />;
          return (
            <RoomList
              rooms={rooms.items}
              isLoading={loading}
              signedOn={signedOn}
              hostings={hostings}
            />
          );
        }}
      </Connect>
    </div>
    <div className={`${style.column} ${style.createRoom}`}>
      <CreateRoomView history={history} />
    </div>
  </div>
);

MainPage.propTypes = {
  history: PropTypes.object.isRequired,
  signedOn: PropTypes.bool,
  hostings: PropTypes.array,
};

const mapStateToProps = state => ({
  signedOn: !!state.login.username,
  hostings: state.login.hostings,
});

export default connect(mapStateToProps)(MainPage);
