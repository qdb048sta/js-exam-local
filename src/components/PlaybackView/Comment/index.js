import React from 'react';
import PropTypes from 'prop-types';
import { List, Avatar } from 'antd';

import style from './comment.module.scss';

const ListItem = List.Item;
const ListItemMeta = List.Item.Meta;

const CommentArea = ({ comments }) => (
  <div className={style.commentarea}>
    <h4 className={style.title}>Comments</h4>
    <div className={style.comments}>
      {comments ? (
        <List
          itemLayout="horizontal"
          dataSource={comments}
          renderItem={item => (
            <ListItem className={style.listItem}>
              <ListItemMeta
                className={style.listMeta}
                avatar={<Avatar className={style.avatar} icon="user" />}
                title={item.author}
                description={item.content}
              />
            </ListItem>
          )}
        />
      ) : (
        <></>
      )}
    </div>
  </div>
);

CommentArea.propTypes = {
  comments: PropTypes.array,
};
export default CommentArea;
