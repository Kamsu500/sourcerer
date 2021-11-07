import gql from 'graphql-tag';

export const GET_USER = gql`
{
	user(login: "dylanekamsu") {
    login
    name
    bio
    url
    followers {
      totalCount
    }
    location
    avatarUrl
    repositories(first: 14, orderBy: {field: CREATED_AT, direction: DESC}) {
      	totalCount
        nodes {
        	name
			isPrivate
          	description
          	url
          	createdAt
          	updatedAt 
          	primaryLanguage {
          	  name
          	  color
          	}   
		  	languages(first: 20) {
          	  nodes{
					name
					color
				} 
		  	}  
		  	collaborators{
				nodes{
					name
					login
					avatarUrl
					url
				}
			}   
			defaultBranchRef {
				target {
				onCommit {
					history {
					totalCount
					}
				}
				}
			}
        }
    }
  }
}
`