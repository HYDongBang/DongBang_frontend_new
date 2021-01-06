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
