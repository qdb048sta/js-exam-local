import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'brace';
import 'brace/mode/javascript';
import 'brace/theme/textmate';
import 'brace/theme/monokai';

import CodeWidget from 'components/Widgets/CodeWidget';
import TestWidget from 'components/Widgets/TestWidget';
import TapeWidget from 'components/Widgets/TapeWidget';

import debouncedRunCode from 'utils/runCode';
import { JAVASCRIPT as GRID_LABEL_JAVASCRIPT } from 'utils/gridLabel';

import styles from './JavaScriptPage.module.scss';

class JavaScriptPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: props.height,
      widthCode: props.width,
      widthTests: props.width,
    };
  }

  componentDidMount() {
    const { compiledCode, addTape } = this.props;
    this.setState({
      height: `${window.innerHeight - 160}px`,
      widthCode: `${window.innerWidth * 0.45}px`,
      widthTests: `${window.innerWidth * 0.3}px`,
    });
    debouncedRunCode({ code: compiledCode, onTapeUpdate: addTape });
  }

  shouldComponentUpdate(nextProps) {
    const {
      compiledCode: previousCompiledCode,
      addTape,
      resetTape,
    } = this.props;
    const { compiledCode } = nextProps;
    if (previousCompiledCode !== compiledCode) {
      resetTape();
      debouncedRunCode({ code: compiledCode, onTapeUpdate: addTape });
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
    const { handleCodeChange, code, test, tape } = this.props;
    return (
      <React.Fragment>
        <div className={styles.app}>
          <div style={this.codeWidgetstyle}>
            <div className={styles.label}>{GRID_LABEL_JAVASCRIPT.code}</div>
            <CodeWidget
              handleCodeChange={handleCodeChange}
              data={code}
              mode="javascript"
              theme="monokai"
              readOnly
            />
          </div>
          <div style={this.testWidgetStyle}>
            <div className={styles.rightWidget}>
              <div className={styles.label}>{GRID_LABEL_JAVASCRIPT.tape}</div>
              <TapeWidget data={tape} />
            </div>
            <div className={styles.rightWidget}>
              <div className={styles.label}>{GRID_LABEL_JAVASCRIPT.test}</div>
              <TestWidget data={test} readOnly />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

JavaScriptPage.propTypes = {
  compiledCode: PropTypes.string,
  code: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  test: PropTypes.string,
  tape: PropTypes.array,
  handleCodeChange: PropTypes.func,
  resetTape: PropTypes.func,
  addTape: PropTypes.func,
};

JavaScriptPage.defaultProps = {
  height: '500px',
  width: '500px',
};

export default JavaScriptPage;
