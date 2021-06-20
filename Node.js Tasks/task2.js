/*
Ödev 2:

Blog oluşturmaya hazır mısınız? Konsol ekranında postlarımızı sıralayalım, sonrasında yeni bir post oluşturalım ve yeni post ile birlikte postlarımızı tekrar sıralayalım.

Postları dizin içerisinde bulunan nesneler şeklinde oluşturalım.

Post nesnesi şablonu {title: 'Post Başlık 1', detail: 'Post Detay 1'} olarak düşünülebilir.

Promise ve Async - Await yöntemleri ile ayrı ayrı yapalım. */

const posts = [
    { title: "Post 1", content: "content 1" },
    { title: "Post 2", content: "content 2" },
]

const addNewPost = (post) => {
    return new Promise((resolve, reject) => {
        posts.push(post);
        //reject("Error");
        resolve(posts);
    });
};

const showPosts = () => {
    posts.map(book => {
        console.log(book);
    })
};

// addNewPost({ title: "New Post", content: "New post content" })
//     .then(() => {
//         showPosts();
//     }).catch((err) => {
//         console.log(err);
//     });


const createNewPost = async () => {
    try {
        await addNewPost({ title: "New Post -2 ", content: "New post content -2" });
        showPosts();
    } catch (err) {
        console.log(err);
    }
}

createNewPost();

