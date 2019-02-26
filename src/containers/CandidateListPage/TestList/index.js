import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { List, Avatar } from 'antd';
import style from './TestList.module.scss';

function getDateTime(string) {
  const T = new Date(string);
  return `${T.getMonth() + 1}-
    ${T.getDate()}-${T.getFullYear()} ${T.getHours()}:
    ${T.getMinutes()}:${T.getSeconds()}`;
}

const TestList = ({ data }) => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={item => (
      <List.Item
        actions={[
          // <span>Overview</span>,
          <Link
            to={{
              pathname: `/admin/playback/${item.id}`,
            }}
          >
            Playback
          </Link>,
        ]}
      >
        <List.Item.Meta
          avatar={<Avatar icon="code" className={style.avatar} />}
          title={item.subjectId}
          description={getDateTime(item.timeBegin)}
        />
      </List.Item>
    )}
  />
);

TestList.propTypes = {
  data: PropTypes.array,
};

export default TestList;
