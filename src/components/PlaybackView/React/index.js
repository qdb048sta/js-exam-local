import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'brace';
import 'brace/mode/jsx';
import 'brace/mode/javascript';
import 'brace/theme/textmate';
import 'brace/theme/monokai';

import { Spin } from 'antd';

import CodeWidget from 'components/Widgets/CodeWidget';
import ResultWidget from 'components/Widgets/ResultWidget';
import AnswerWidget from 'components/Widgets/AnswerWidget';

import debouncedRunCode from 'utils/runCode';
import { REACT as GRID_LABEL_REACT } from 'utils/gridLabel';

import styles from './ReactPage.module.scss';

class ReactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: props.height,
      widthCode: props.width,
      widthTests: props.width,
    };
  }

  async componentDidMount() {
    const { compiledCode, addTape } = this.props;

    this.setState({
      height: `${window.innerHeight - 160}px`,
      widthCode: `${window.innerWidth * 0.45}px`,
      widthTests: `${window.innerWidth * 0.3}px`,
    });
    debouncedRunCode({ code: compiledCode, onTapeUpdate: addTape });
  }

  shouldComponentUpdate(nextProps) {
    
    const { compiledCode: previousCompiledCode } = this.props;
    const { compiledCode } = nextProps;
    if (previousCompiledCode !== compiledCode) {
      debouncedRunCode({ code: compiledCode });
    }
    return true;
  }

  render() {
    this.codeWidgetstyle = {
      height: this.state.height,
      width: this.state.widthCode,
      position: 'relative',
    };
    this.testWidgetStyle = {
      height: this.state.height,
      width: this.state.widthTests,
      position: 'relative',
    };
    const { handleCodeChange, test, code } = this.props;
    return (
      <React.Fragment>
        <div className={styles.app}>
          <div style={this.codeWidgetstyle}>
            <div className={styles.label}>Code</div>
            <CodeWidget
              handleCodeChange={handleCodeChange}
              data={code}
              mode="jsx"
              theme="monokai"
              readOnly
            />
          </div>
          <div style={this.testWidgetStyle}>
            <div className={styles.rightWidget}>
              <div className={styles.label}>{GRID_LABEL_REACT.test}</div>
              <CodeWidget data={test} mode="jsx" theme="textmate" readOnly />
            </div>
            <div className={styles.rightWidget}>
              <div className={styles.label}>{GRID_LABEL_REACT.answer}</div>
              <AnswerWidget />
            </div>
            <div className={styles.rightWidget}>
              <div className={styles.label}>{GRID_LABEL_REACT.result}</div>
              <ResultWidget />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ReactPage.propTypes = {
  compiledCode: PropTypes.string,
  code: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  test: PropTypes.string,
  handleCodeChange: PropTypes.func,
  addTape: PropTypes.func,
};

export default ReactPage;
