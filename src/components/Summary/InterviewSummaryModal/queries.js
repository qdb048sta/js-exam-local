export const getTest = `query GetTest($id: ID!) {
    getTest(id: $id) {
      id
      subjectId
      records {
        items {
          id
          ques {
            name
          }
          comment {
            items {
              author
              completeness
              content
              hint
              quality
            }
          }
        }
      }
      users {
        items {
          user {
            id
            name
          }
        }
      }
      results {
        items {
          author
          logic
          language
          perstyreview
          techreview
          workwith
        }
      }
    }
  }`;
