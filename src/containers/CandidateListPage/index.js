import React from 'react';
import { Connect } from 'aws-amplify-react';
import { graphqlOperation } from 'aws-amplify';

import { listTests } from 'graphql/queries';
import { onCreateTest } from 'graphql/subscriptions';

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
    {({ data: { listTests: tests }, loading, error }) => {

      return (
        <PageSpin
          spinning={loading}
        >
          {!loading && error &&
            <PageEmpty description={<span>Error Occuring</span>}/>
          }

          {!loading && !tests &&
            <PageEmpty description={<span>Data Not Found</span>} image="default"/>
          }

          {!loading && tests &&
            <ResultBin tests={tests.items} isLoading={loading} />
          }

        </PageSpin>
      );
    }}
  </Connect>
);

export default CandidateListPage;
