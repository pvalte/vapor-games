import React, { useState } from 'react';

const Discussion = () => {

    //Test data
    const [comments] = useState([
        {
            _id: "61c0e247d4e1888410cd5f01",
            commentText: "Test comment 1",
            username: "Paige",
            userId: "61bd2c0595aea8a455c9d9f3",
            gamename: "Animal Crossing",
            gameId: "1234",
            replies: [
                {
                    replyBody: "Heres a reply",
                    username: "Sunny",
                    _id: "61c0e267d4e1888410cd5f05",
                    replyId: "61c0e267d4e1888410cd5f06",
                    createdAt: "Dec 20th, 2021 at 15:7 pm"
                },
                {
                    replyBody: "Heres another reply",
                    username: "Paige",
                    _id: "61c0e267d4e1888410cd5f05",
                    replyId: "61c0e267d4e1888410cd5f06",
                    createdAt: "Dec 20th, 2021 at 15:7 pm"
                }
            ],
            createdAt: "Dec 20th, 2021 at 15:6 pm",
        },
        {
            _id: "61c0e666ffb529afa43e9dec",
            commentText: "Test comment 2",
            username: "Sue",
            userId: "61c0e508ec7479a60d5b36f1",
            gamename: "Skyrim",
            gameId: "5432",
            replies: [
                {
                    "replyBody": "Heres a 3rd reply",
                    "username": "Paige",
                    "_id": "61c0e267d4e1888410cd5f05",
                    "replyId": "61c0e267d4e1888410cd5f06",
                    "createdAt": "Dec 20th, 2021 at 15:7 pm"
                }
            ],
            createdAt: "Dec 20th, 2021 at 15:24 pm",
        },
        {
            _id: "61c0e6adffb529afa43e9df3",
            commentText: "Test comment 3",
            username: "Paige",
            userId: "61bd2c0595aea8a455c9d9f3",
            gamename: "Skyrim",
            gameId: "5432",
            replies: [],
            createdAt: "Dec 20th, 2021 at 15:25 pm",
        }
    ]);

    return (
        <div className='discussion'>
            <h3>
                Discussion:
            </h3>
            <ul>
                {comments.map((comment) => (
                    <li>
                        {comment.createdAt}
                        <div>
                            {comment.commentText}
                            {comment.replies.map((reply) => (
                            <li>
                                {reply.replyBody}
                            </li>
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Discussion;