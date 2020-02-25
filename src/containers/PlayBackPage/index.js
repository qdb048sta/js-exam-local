import React from 'react';
import { Connect } from 'aws-amplify-react';
import { graphqlOperation } from 'aws-amplify';

import PropTypes from 'prop-types';

import PageEmpty from 'components/PageEmpty';
import PageSpin from 'components/PageSpin';

import MainView from './MainView';

import { getTest } from './queries';

const sortRecords = records =>
  records.sort(
    (a, b) => new Date(a.timeBegin).getTime() - new Date(b.timeBegin).getTime(),
  );

class PlaybackPage extends React.PureComponent {
  render() {
    const { testId } = this.props.match.params;
    return (
      <div>
        <Connect
          query={graphqlOperation(getTest, {
            id: testId,
          })}
        >
          {({ data, loading, error }) => {
            const test = data && data.getTest ? data.getTest : null;
            return data && data.getTest ? (
              <PageSpin spinning={loading}>
                {!loading && error && (
                  <PageEmpty description={<span>Error Occuring</span>} />
                )}

                {!loading && !test && (
                  <PageEmpty
                    description={<span>Data Not Found</span>}
                    image="default"
                  />
                )}

                {!loading && test && (
                  <MainView
                    testData={test}
                    records={sortRecords(test.records.items)}
                  />
                )}
              </PageSpin>
            ) : null;
          }}
        </Connect>
      </div>
    );
  }
}

PlaybackPage.propTypes = {
  match: PropTypes.object,
};

export default PlaybackPage;
