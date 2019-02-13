import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { List, Avatar } from 'antd';
import style from './RoomList.module.scss';

const RoomList = ({ rooms, isLoading, signedOn, hostings }) => (
  <List
    itemLayout="horizontal"
    dataSource={rooms}
    loading={isLoading}
    renderItem={room => (
      <Link
        to={{
          pathname: `/admin/dispatch/${room.id}`,
        }}
      >
        <List.Item
          style={{ borderBottom: '1px solid #ddd' }}
          className={style.listItem}
        >
          <List.Item.Meta
            className={style.listMeta}
            avatar={<Avatar icon="home" className={style.avatar} />}
            title={
              <div>
                <div className={style.roomNameHeader}>Room </div>
                <div className={style.roomName}>{room.description}</div>
              </div>
            }
            description={
              <div>
                <div className={style.subjectIdHeader}>Candidate </div>
                <div className={style.subjectId}>{room.subjectId}</div>
              </div>
            }
          />
          {signedOn && hostings.includes(room.id) && (
            <div className={style.listContent}>Host</div>
          )}
        </List.Item>
      </Link>
    )}
  />
);

RoomList.propTypes = {
  rooms: PropTypes.array,
  isLoading: PropTypes.bool,
  signedOn: PropTypes.bool,
  hostings: PropTypes.array,
};

export default RoomList;
