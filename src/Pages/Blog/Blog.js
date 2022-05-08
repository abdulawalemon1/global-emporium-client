import React from 'react';
import { Table } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='container'>
            <div>
                <h3 className='text-info text-center'> Difference between JavaScript and NodeJS</h3>
                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th className='text-info text-center'>JavaScript</th>
                            <th className='text-info text-center'>NodeJS</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>JavaScript is a programming language. It is running in any web browser with a proper browser engine.</td>
                            <td>It is an interpreter and environment for JavaScript with some specific useful libraries which JavaScript programming can use separately.
                            </td>

                        </tr>
                        <tr>

                            <td>Mainly using for any client-side activity for a web application, like possible attribute validation or refreshing the page in a specific interval or provide some dynamic changes in web pages without refreshing the page.</td>
                            <td>It mainly used for accessing or performing any non-blocking operation of any operating system, like creating or executing a shell script or accessing any hardware-specific information or running any backend job.
                            </td>

                        </tr>
                        <tr>

                            <td>JavaScript running any engine like Spider monkey (FireFox), JavaScript Core (Safari), V8 (Google Chrome).</td>
                            <td>Node JS only run in a V8 engine which mainly used by google chrome. And javascript program which will be written under this Node JS will be always run in V8 Engine.
                            </td>
                        </tr>
                        <tr>
                            <td>Javascript can only be run in the browsers.</td>
                            <td>We can run Javascript outside the browser with the help of NodeJS
                            </td>
                        </tr>
                        <tr>
                            <td>It is basically used on the client-side.

                            </td>
                            <td>It is mostly used on the server-side.
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className='mt-4 mb-4'>
                <h2 className='text-center text-info'>What is the purpose of jwt and how does it work?</h2>
                <p className='container mt-4'>
                    JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.


                    <h4 className='mt-3'>How JWT works?</h4>
                    <p>JWT differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                        A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

                        Once decoded, you will get two JSON strings:(1)The header and the payload.(2)The signature.


                        The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.

                        The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

                        There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.

                        The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.  </p>
                </p>
            </div>
            <div>
                <h3 className='text-info text-center'> Difference between SQL and NOSQL</h3>
                <Table striped bordered hover>

                    <thead>
                        <tr>

                            <th className='text-info text-center'>SQL</th>
                            <th className='text-info text-center'>NOSQL</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                            <td>Non-relational or distributed database system.
                            </td>

                        </tr>
                        <tr>

                            <td>These databases have fixed or static or predefined schema</td>
                            <td>They have dynamic schema
                            </td>

                        </tr>
                        <tr>

                            <td>These databases are not suited for hierarchical data storage.</td>
                            <td>These databases are best suited for hierarchical data storage.
                            </td>
                        </tr>
                        <tr>
                            <td>These databases are best suited for complex queries.</td>
                            <td>These databases are not so good for complex queries
                            </td>
                        </tr>
                        <tr>
                            <td>Vertically Scalable

                            </td>
                            <td>Horizontally scalable
                            </td>
                        </tr>
                        <tr>
                            <td>Follows ACID property
                            </td>
                            <td>Follows CAP(consistency, availability, partition tolerance)
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>

        </div>
    );
};

export default Blog;