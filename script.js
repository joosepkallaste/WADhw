
async function loadPosts() {
    try {
        const response = await fetch("./posts.json");
        //const response = await fetch("https://api.npoint.io/7836b8d575c5e386aefa");


        if (!response.ok) {
            throw new Error("Could not load posts");
        }

        const posts = await response.json();
        const feed = document.getElementById("posts");

        posts.forEach(post => {
            const article = document.createElement("article");

            const header = document.createElement("header");

            const author = document.createElement("span");
            author.textContent = post.author;

            const date = document.createElement("time");
            date.textContent = post.createdAt;

            header.append(author, date);
            article.appendChild(header);

            if (post.image) {
                const img = document.createElement("img");
                img.src = post.image;
                img.alt = "Post image";
                article.appendChild(img);
            }

            const message = document.createElement("p");
            message.textContent = post.text;
            article.appendChild(message);

            const like = document.createElement("p");
            like.className = "like";
            like.textContent = "Like";
            article.appendChild(like);

            feed.appendChild(article);
        });

    } catch (error) {
        console.error("Error loading posts:", error);
    }
}

loadPosts();

 // Profile dropdown
const profileButton = document.getElementById("profileButton");
const profileMenu = document.getElementById("profileMenu");

profileButton.addEventListener("click", function() {
    profileMenu.classList.toggle("show");
});

