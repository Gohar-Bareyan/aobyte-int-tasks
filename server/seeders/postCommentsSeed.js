const { PostComments } = require('../models/index');

(async () => {
    try {
        console.log('Comments table created successfully.');

        await PostComments.bulkCreate([
            {
                postId: 1,
                body: "Gohar Bareyan",
                sender: "A",
                rate: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 1,
                body: "Consectetur adipiscing elit",
                sender: "B",
                rate: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 1,
                body: "Sed do eiusmod tempor",
                sender: "C",
                rate: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 1,
                body: "Incididunt ut labore et dolore",
                sender: "D",
                rate: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 1,
                body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
                sender: "E",
                rate: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 2,
                body: "Wow",
                sender: "A",
                rate: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 2,
                body: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
                sender: "B",
                rate: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 2,
                body: "It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. ",
                sender: "A",
                rate: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 2,
                body: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
                sender: "C",
                rate: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 3,
                body: "I'm a comment about the post data",
                sender: "A",
                rate: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 3,
                body: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. ",
                sender: "G",
                rate: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 3,
                body: "I'm a comment about the post data",
                sender: "K",
                rate: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 3,
                body: " This book is a treatise on the theory of ethics, very popular during the Renaissance",
                sender: "F",
                rate: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 3,
                body: "The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
                sender: "A",
                rate: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 4,
                body: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
                sender: "A",
                rate: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 4,
                body: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
                sender: "Y",
                rate: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 4,
                body: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
                sender: "P",
                rate: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 4,
                body: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.",
                sender: "L",
                rate: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 4,
                body: "Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
                sender: "O",
                rate: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 4,
                body: "Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
                sender: "A",
                rate: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 5,
                body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
                sender: "A",
                rate: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 5,
                body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
                sender: "G",
                rate: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 5,
                body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
                sender: "D",
                rate: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 6,
                body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
                sender: "A",
                rate: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 6,
                body: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',",
                sender: "U",
                rate: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 7,
                body: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                sender: "A",
                rate: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 7,
                body: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                sender: "U",
                rate: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 7,
                body: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                sender: "R",
                rate: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 7,
                body: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                sender: "E",
                rate: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 7,
                body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
                sender: "A",
                rate: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 7,
                body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
                sender: "A",
                rate: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 7,
                body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
                sender: "M",
                rate: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 8,
                body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
                sender: "A",
                rate: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 8,
                body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
                sender: "N",
                rate: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 8,
                body: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ",
                sender: "R",
                rate: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 9,
                body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                sender: "A",
                rate: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 9,
                body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                sender: "S",
                rate: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 10,
                body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                sender: "A",
                rate: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 10,
                body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                sender: "E",
                rate: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 10,
                body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                sender: "I",
                rate: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 10,
                body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                sender: "Q",
                rate: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 11,
                body: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
                sender: "A",
                rate: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 11,
                body: "I'm a comment about the post data",
                sender: "B",
                rate: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 11,
                body: "I'm a comment about the post data",
                sender: "C",
                rate: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 11,
                body: "I'm a comment about the post data",
                sender: "D",
                rate: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 11,
                body: "I'm a comment about the post data",
                sender: "L",
                rate: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 12,
                body: "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
                sender: "A",
                rate: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 13,
                body: " No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. ",
                sender: "A",
                rate: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 13,
                body: " No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. ",
                sender: "F",
                rate: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 13,
                body: " No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. ",
                sender: "A",
                rate: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 14,
                body: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
                sender: "A",
                rate: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 14,
                body: "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure.",
                sender: "A",
                rate: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 15,
                body: "I'm a comment about the post data",
                sender: "A",
                rate: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 15,
                body: "I'm a comment about the post data",
                sender: "A",
                rate: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 15,
                body: "I'm a comment about the post data",
                sender: "S",
                rate: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 15,
                body: "I'm a comment about the post data",
                sender: "D",
                rate: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 15,
                body: "I'm a comment about the post data",
                sender: "F",
                rate: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 15,
                body: "I'm a comment about the post data",
                sender: "G",
                rate: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 15,
                body: "I'm a comment about the post data",
                sender: "H",
                rate: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 15,
                body: "I'm a comment about the post data",
                sender: "J",
                rate: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 16,
                body: "I'm a comment about the post data",
                sender: "A",
                rate: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 16,
                body: "I'm a comment about the post data",
                sender: "H",
                rate: 3,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 17,
                body: "I'm a comment about the post data",
                sender: "A",
                rate: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 17,
                body: "I'm a comment about the post data",
                sender: "Y",
                rate: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 17,
                body: "I'm a comment about the post data",
                sender: "P",
                rate: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 18,
                body: "I'm a comment about the post data",
                sender: "A",
                rate: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 18,
                body: "I'm a comment about the post data",
                sender: "A",
                rate: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 18,
                body: "I'm a comment about the post data",
                sender: "A",
                rate: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 18,
                body: "I'm a comment about the post data",
                sender: "A",
                rate: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 18,
                body: "I'm a comment about the post data",
                sender: "A",
                rate: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 19,
                body: "I'm a comment about the post data",
                sender: "T",
                rate: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 20,
                body: "I'm a comment about the post data",
                sender: "A",
                rate: 4,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 20,
                body: "I'm a comment about the post data",
                sender: "A",
                rate: 1,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 20,
                body: "I'm a comment about the post data",
                sender: "A",
                rate: 5,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                postId: 20,
                body: "I'm a comment about the post data",
                sender: "A",
                rate: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);

        console.log('Comments data inserted successfully.');
    } catch (error) {
        console.error('Error occurred while seeding comments:', error);
    }
})();
