import React, { Component } from 'react';
import 'brace';
import 'brace/mode/javascript';
import 'brace/theme/textmate';
import 'brace/theme/monokai';

import { Spin, Icon } from 'antd';

import Grid from 'components/Grid';
import GridItem from 'components/Grid/GridItem';
import CodeWidget from 'components/Widgets/CodeWidget';
import TestWidget from 'components/Widgets/TestWidget';
import TapeWidget from 'components/Widgets/TapeWidget';

import debouncedRunCode from 'utils/runCode';
import { JAVASCRIPT as GRID_LABEL_JAVASCRIPT } from 'utils/gridLabel';

import styles from './JavaScriptPage.module.scss';
import CommentArea from '../Comment';

class JavaScriptPage extends Component {
  componentDidMount() {
    const { compiledCode, addTape } = this.props;
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

  getDateOutput(dateTime) {
    const date = new Date(dateTime);
    return date.toLocaleString();
  }

  render() {
    const { handleCodeChange, code, test, tape, isLoading, comments, testDate, interviewee } = this.props;
    // const layout = [
    //   {
    //     key: 'code',
    //     x: 0,
    //     y: 0,
    //     width: window.innerWidth / 2,
    //     height: window.innerHeight / 2,
    //     minWidth: 100,
    //     minHeight: 100,
    //     maxWidth: 700,
    //     maxHeight: 500,
    //   },
    //   {
    //     key: 'test',
    //     x: 0,
    //     y: 1,
    //     width: window.innerWidth / 2,
    //     height: window.innerHeight / 2,
    //     minWidth: 100,
    //     maxWidth: 700,
    //   },
    //   {
    //     key: 'tape',
    //     x: 1,
    //     y: 0,
    //     width: window.innerWidth / 2,
    //     height: window.innerHeight / 2,
    //     minWidth: 100,
    //     minHeight: 100,
    //     maxWidth: 700,
    //     maxHeight: 500,
    //   },
    //   {
    //     key: 'comment',
    //     x: 1,
    //     y: 1,
    //     width: window.innerWidth / 2,
    //     height: window.innerHeight / 2,
    //     minWidth: 100,
    //     minHeight: 100,
    //     maxWidth: 700,
    //     maxHeight: 500,
    //   },
    // ];
    return (
      <>
        <Spin spinning={isLoading} size="large">
          <div style={{display: 'flex'}}>
            <div style={{display: 'flex', flexDirection: 'row', border: '2px solid #000'}}>
              <div style={{width: '500px', height: '450px'}}>
                <CodeWidget
                  handleCodeChange={handleCodeChange}
                  data={code}
                  mode="javascript"
                  theme="monokai"
                  readOnly
                />
              </div>
              <div style={{width: '300px', height: '450px'}}>
                <div style={{height: '225px'}}>
                  <TapeWidget data={tape} />
                </div>
                <div style={{height: '225px'}}>
                  <TestWidget data={test} readOnly />
                </div>
              </div>
            </div>
            <div>
              <div className={styles.icon} id={styles.date}>
                <Icon className={styles.icon} type="calendar" />
                {this.getDateOutput(testDate)}
              </div>
              <div className={styles.icon} id={styles.name}>
                <Icon type="user" />
                {interviewee}
              </div>
              <CommentArea />
            </div>
          </div>
        </Spin>
      </>
    );
  }
}

export default JavaScriptPage;
