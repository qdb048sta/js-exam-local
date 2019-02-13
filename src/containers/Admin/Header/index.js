import React, { PureComponent } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { Auth } from 'aws-amplify';

import { clearUser } from 'redux/login/actions';

import { Menu, Icon, Modal } from 'antd';

const SubMenu = Menu.SubMenu;

class TabWidget extends PureComponent {
  logOut = history => {
    Modal.confirm({
      title: 'Are you sure you want to sign out?',
      okText: 'Sign out',
      onOk: () => {
        Auth.signOut()
          .then(() => history.push('/'))
          .catch(err => console.log(err));
        this.props.onClearUser();
      },
      onCancel: () => {},
    });
  };

  render() {
    const {
      location: { pathname },
      history,
      username,
    } = this.props;
    const currentKey = pathname.split('/')[2] || 'room';
    return (
      <Menu selectedKeys={[currentKey]} mode="horizontal" theme="dark">
        <Menu.Item key="title">
          <Link to="/">
            <h2
              style={{
                display: 'inline',
                margin: '0 13px 0 13px',
                color: 'white',
              }}
            >
              JS-EXAM
            </h2>
          </Link>
        </Menu.Item>
        <Menu.Item key="room">
          <Link to="/">
            <Icon type="home" theme="filled" />
            Room
          </Link>
        </Menu.Item>
        <SubMenu
          key="library"
          title={
            <div>
              <Icon type="database" theme="filled" /> Library
            </div>
          }
        >
          <Menu.Item key="add">
            <Link to="/admin/add">
              <Icon type="file-add" theme="filled" />
              Add
            </Link>
          </Menu.Item>
          <Menu.Item key="edit">
            <Link to="/admin/edit">
              <Icon type="edit" theme="filled" />
              Edit
            </Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="candidates">
          <Link to="/admin/candidates">
            <Icon type="user" />
            Candidates
          </Link>
        </Menu.Item>
        <SubMenu
          key="username"
          style={{ float: 'right' }}
          title={
            <div>
              <Icon type="user" />
              {username || 'UNSET'}
            </div>
          }
        >
          <Menu.Item
            key="signout"
            onClick={() => {
              this.logOut(history);
            }}
          >
            <Icon type="logout" />
            Sign out
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

TabWidget.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
  username: PropTypes.string,
  onClearUser: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  username: state.login.username,
});

const mapDispatchToProps = dispatch => ({
  onClearUser: () => dispatch(clearUser()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withRouter,
  withConnect,
)(TabWidget);
