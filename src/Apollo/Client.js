import ApolloClient from "apollo-boost";
import { defaults, resolvers } from "./LocalState";

export default new ApolloClient({
    uri: "http://ec2-52-79-235-57.ap-northeast-2.compute.amazonaws.com:4000/",
    clientState: {
        defaults,
        resolvers
    },
    request: async operation => {
        const token = await localStorage.getItem("token");
        operation.setContext({
            headers: {
                Authorization: token ? `Bearer ${token}` : ""
            }
        });
    }
});


// import { ApolloClient, HttpLink, split   , InMemoryCache } from '@apollo/client';
// import { defaults, resolvers } from "./LocalState";
// import { getMainDefinition } from '@apollo/client/utilities';
// import { WebSocketLink } from "apollo-link-ws";

// // WebSOcket 을 연결해 줄 링크를 생성합니다.
// const wsLink = new WebSocketLink({
//     uri: `ws://ec2-52-79-235-57.ap-northeast-2.compute.amazonaws.com:4000`,
//     options: {
//       reconnect: true,
//     //   connectionParams: {
//     //     authToken: localStorage.getItem("token")
//     //   }
//     }
//   });

//   const httpLink = new HttpLink({
//     uri: "http://ec2-52-79-235-57.ap-northeast-2.compute.amazonaws.com:4000",
//   });

//   const link = split(
//     ({ query }) => {
//       const definition = getMainDefinition(query);
//       return (
//         definition.kind === 'OperationDefinition' &&
//         definition.operation === 'subscription'
//       );
//     },
//     wsLink,
//     httpLink,
//   );

// export default new ApolloClient({
//     link,
//     cache : new InMemoryCache(),
//     clientState: {
//         defaults,
//         resolvers
//     },
//     request: async operation => {
//         const token = await localStorage.getItem("token");
//         operation.setContext({
//             headers: {
//                 Authorization: token ? `Bearer ${token}` : ""
//             }
//         });
//     }
// });
