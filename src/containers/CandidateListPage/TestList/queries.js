export const getTest = `query GetTest($id: ID! $limit: Int) {
    getTest(id: $id) {
      id
      subjectId
      timeBegin
      timeEnd
      results(limit: $limit) {
        items {
          logic
          language
          workwith
          techreview
          perstyreview
          author
          role
        }
        nextToken
      }
      records(limit: $limit) {
        items {
          id
          subjectId
          syncCode
          timeBegin
          timeEnd
          comment {
            items {
              author
              time
              quality
              hint
              completeness
              content
            }
            nextToken
          }
          ques {
            type 
            content
            name
            test
          }
        }
        nextToken
      }
    }
  }`;
