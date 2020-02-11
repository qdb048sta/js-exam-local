import React from 'react';
import PropTypes from 'prop-types';
import { Input, Rate, Icon, Tooltip, Tag, Typography, Row, Col } from 'antd';
import { rateTips, desc } from './constants';
import './checkableTag.css';

const { TextArea } = Input;
const { Text } = Typography;
const { CheckableTag } = Tag;
const RfInput = ({ input, ...custom }) => <Input {...input} {...custom} />;

const RfTextArea = ({ input }) => (
  <div>
    <TextArea {...input} rows={3} placeholder="Write your opinion..." />
  </div>
);

const RfRate = ({ input, label, type, meta: { touched, error } }) => (
  <Row type="flex" align="middle">
    <Col span={5}>
      <label>{label}</label>
    </Col>
    <Col span={2}>
      <Tooltip title={rateTips[label]} placement="right">
        <Icon type="info-circle" />
      </Tooltip>
    </Col>
    <Col span={8}>
      <Rate {...input} tooltips={desc} type={type} />
    </Col>
    <Col span={9}>
      {touched && error && <Text type="warning">{error}</Text>}
    </Col>
  </Row>
);

class CheckTagGroup extends React.Component {
  checkTagGroup() {
    const { input, options } = this.props;

    return options.map(option => (
      <span className="checkTag" key={option.id}>
        <label>
          <CheckableTag
            style={{ border: '1px solid', marginBottom: '8px' }}
            checked={input.value.indexOf(option.name) !== -1}
            className={!option.analysis ? 'negative-tag' : ''}
            value={option.name}
            onChange={checked => {
              const newValue = [...input.value];
              if (checked) {
                newValue.push(option.name);
              } else {
                newValue.splice(newValue.indexOf(option.name), 1);
              }
              return input.onChange(newValue);
            }}
          >
            {option.name}
          </CheckableTag>
        </label>
      </span>
    ));
  }

  render() {
    return <span>{this.checkTagGroup()}</span>;
  }
}
CheckTagGroup.propTypes = {
  input: PropTypes.string,
  options: PropTypes.object.isRequired,
};

export { RfTextArea, RfInput, RfRate, CheckTagGroup };
