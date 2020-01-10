import React from 'react';
import { Connect } from 'aws-amplify-react';
import { graphqlOperation } from 'aws-amplify';

import { listTests } from 'graphql/queries';
import { onCreateTest, onDeleteTest } from 'graphql/subscriptions';

import PageEmpty from 'components/PageEmpty';
import PageSpin from 'components/PageSpin';

import ResultBin from './ResultBin';

const CandidateListPage = () => (
  <Connect
    query={graphqlOperation(listTests, { limit: 1000 })}
    subscription={graphqlOperation(onCreateTest)}
    onSubscriptionMsg={(prev, { onCreateTest: createdTest }) => {
      prev.listTests.items.unshift(createdTest);
      return prev;
    }}
  >
    {({ data: { listTests: tests }, loading, error }) => (
      <Connect
        subscription={graphqlOperation(onDeleteTest)}
        onSubscriptionMsg={(prev, { onDeleteTest: deletedTest }) => deletedTest}
      >
        {({ data: delTest, loading2, error2 }) => {
          if (delTest.id) {
            const delTestIndex = tests.items.findIndex(
              test => test && test.id === delTest.id,
            );
            if (delTestIndex !== -1) tests.items.splice(delTestIndex, 1);
          }
          return (
            <PageSpin spinning={loading}>
              {!loading && error && (
                <PageEmpty description={<span>Error Occuring</span>} />
              )}

              {!loading && !tests && (
                <PageEmpty
                  description={<span>Data Not Found</span>}
                  image="default"
                />
              )}

              {!loading && tests && (
                <ResultBin tests={tests.items} isLoading={loading} />
              )}
            </PageSpin>
          );
        }}
      </Connect>
    )}
  </Connect>
);

export default CandidateListPage;
