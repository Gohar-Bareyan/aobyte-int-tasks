const { Posts } = require('../models/index');

(async () => {
    try {
        console.log('Posts table created successfully.');

        // Insert data into the Posts table
        await Posts.bulkCreate([
            {
                userId: 1,
                title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
                body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
                averageRate: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 1,
                title: 'qui est esse',
                body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
                averageRate: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 1,
                title: "qui est esse",
                body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
                averageRate: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 1,
                title: "eum et est occaecati",
                body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
                averageRate: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 1,
                title: "nesciunt quas odio",
                body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
                averageRate: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 1,
                title: "dolorem eum magni eos aperiam quia",
                body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
                averageRate: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 1,
                title: "magnam facilis autem",
                body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
                averageRate: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 1,
                title: "dolorem dolore est ipsam",
                body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae",
                averageRate: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 1,
                title: "nesciunt iure omnis dolorem tempora et accusantium",
                body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas",
                averageRate: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 1,
                title: "optio molestias id quia eum",
                body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error",
                averageRate: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 2,
                title: "et ea vero quia laudantium autem",
                body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi",
                averageRate: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 2,
                title: "in quibusdam tempore odit est dolorem",
                body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio",
                averageRate: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 2,
                title: "dolorum ut in voluptas mollitia et saepe quo animi",
                body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam",
                averageRate: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 2,
                title: "voluptatem eligendi optio",
                body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum",
                averageRate: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 2,
                title: "eveniet quod temporibus",
                body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae",
                averageRate: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 2,
                title: "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
                body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta",
                averageRate: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 2,
                title: "fugit voluptas sed molestias voluptatem provident",
                body: "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo",
                averageRate: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 2,
                title: "voluptate et itaque vero tempora molestiae",
                body: "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam",
                averageRate: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 2,
                title: "adipisci placeat illum aut reiciendis qui",
                body: "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas",
                averageRate: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 2,
                title: "doloribus ad provident suscipit at",
                body: "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo",
                averageRate: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);

        console.log('Posts data inserted successfully.');
    } catch (error) {
        console.error('Error occurred while seeding posts:', error);
    }
})();


