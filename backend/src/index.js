import express from "express";
import { ApolloServer } from "@apollo/server"; 
import { expressMiddleware } from '@apollo/server/express4';
import bodyParser from 'body-parser';
import cors from 'cors';
import {typeDefs} from './graphql/schemas/typeDefs.js'
import {resolvers} from './graphql/resolvers/resolvers.js'
import prisma from './libs/prisma.js'
import {login,logout,register,refreshToken} from './controllers/authController.js'

async function start() {
    const app = express();
    const port = 4000;

    const gqlServer = new ApolloServer({
        typeDefs,
        resolvers
    })
    await gqlServer.start()

    app.use(cors(), express.json())
    app.post('/login', login)
    app.post('/logout', logout)
    app.post("/register", register)
    app.post('/refresh', refreshToken)

    app.use(
        '/graphql',
        expressMiddleware(gqlServer, {
            context: async () => ({ prisma }),
        })
    )

    app.listen(port, ()=>{
        console.log(`Server ready at :${port}/graphql`)
    })
}

start();

