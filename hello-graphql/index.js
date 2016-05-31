import {
	GraphQLInt,
	GraphQLFloat,
	GraphQLString,
	GraphQLList,
	GraphQLObjectType,
	GraphQLEnumType,
	GraphQLNonNull,
	GraphQLSchema,
	graphql
} from 'graphql';

const Query = new GraphQLObjectType( {
	name: 'RootQueries',
	fields: () => ( {
		echo: {
			type: GraphQLString,
			args: {
				message: {
					type: GraphQLString
				}
			},
			resolve( rootValue, args ) {
				return `received: ${args.message}`;
			}
		}
	} )
} );

const Schema = new GraphQLSchema( {
	query: Query
} );

let query = `
  query getEcho($inputMessage: String) {
    receivedMessage: echo(message: $inputMessage)
  }
`;

graphql( Schema, query, null, {
		inputMessage: "Hello"
	})
	.then( function ( result ) {
		console.log( result );
	});
