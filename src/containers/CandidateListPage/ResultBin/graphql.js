export const listTests = `query ListTests(
    $filter: ModelTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        subjectId
        description
        timeBegin
        host {
          id
          name
        }
        users {
          items {
            id
            user {
              id
              name
            }
          }
        }
        results {
          items {
            author
          }
        }
      }
      nextToken
    }
  }`;

export const onCreateTest = `subscription OnCreateTest {
    onCreateTest {
        id
        subjectId
        description
        timeBegin
        tags
      }
  }`;

export const onDeleteTest = `subscription OnDeleteTest {
    onDeleteTest {
      id
    }
  }`;
