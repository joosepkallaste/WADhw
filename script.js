// JSON online filelink: https://www.npoint.io/docs/98a68cb9b8036dcb2ab0
// We used https://www.npoint.io/ for this. it is a free service that allows you to create a JSON file and get a URL for it. 
// This is useful for testing and prototyping.

// For the photos we used https://picsum.photos/ which is a free service that provides random images.

// For the JSON file we used https://jsonformatter.org/json-pretty-print which is a free service that allows you to format and validate JSON data.

async function loadPosts() {
    try {
        const response = await fetch("./posts.json");
        //const response = await fetch("https://api.npoint.io/98a68cb9b8036dcb2ab0");


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

if (document.getElementById("posts")) {
    loadPosts();
}



const profileButton = document.getElementById("profileButton");
const profileMenu = document.getElementById("profileMenu");


profileButton.addEventListener("click", function() {
    profileMenu.classList.toggle("show");
});