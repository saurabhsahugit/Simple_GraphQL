import express from "express";
import schema from "./schema";
import { graphqlHTTP } from "express-graphql";


const app = express();

app.get('/', (req, res)=> {
    res.send('GraphQL is amazing');
});

const friend1 = { friend1: () => {
        return {
            "id": 3324234323,
            "firstName": "Harry",
            "lastName": "Potter",
            "gender": "Male",
            "email": "hp@hogwarts.co"
        }
    }
};

const friend2 = { friend2: () => {
    return {
        "id": 77777,
        "firstName": "Ted",
        "lastName": "Baker",
        "gender": "Male",
        "email": "tb@hogwarts.co"
    }
}
};




app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: friend1,
    graphiql: true,
}));


app.listen(8080, () => console.log('Running on server port localhost:8080/graphql'));

