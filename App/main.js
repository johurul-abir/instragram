// Get the postForm element
const postForm = document.getElementById("postForm");
const postArea = document.querySelector(".post-section");

const showPost = () => {
  const post = getData("post")
  let post_content="";
  post.reverse().map((item) =>{
    post_content +=`
    <div style="width:100%;">
    <div class="post-container"style = "background-color:#FFF;">
        <!------- Post Header ------>
        <div class="post-header">
            <div class="author">
                <div class="author-profile-img">
                    <img src="${item.user_photo}">
                </div>
                <div class="post-author-name">
                    <a href="#">taylorswift</a>
                    <span><i class="fas fa-circle"></i> 1w</span>
                    <a href="#"></a>
                    <p> ${item.user_name} </p>
                </div>
            </div>
            <div class="three-dot">
                <a href="#"><i class="fas fa-ellipsis-h"></i></a>
            </div>
        </div>

        <!------ Post Body ------>
        <div class="post-body">
            <div class="post-img">
                <img src=" ${item.post_photo} ">
            </div>
            <div class="post-reaction">
                <div class="p-reaction-left">
                    <div class="post-like post-icon">
                        <span><i class="far fa-heart"></i></span>
                    </div>
                    <div class="post-comment post-icon">
                        <span><i class="far fa-comment"></i></span>
                    </div>
                    <div class="post-share post-icon">
                        <span><i class="far fa-paper-plane"></i></span>
                    </div>
                </div>
                <div class="post-save post-icon">
                    <span><i class="far fa-bookmark"></i></span>
                </div>
            </div>
            <div class="post-like-total">
                <p>5,691,354 likes</p>
            </div>
            <div class="post-content">
                <p> <a href="#">taylorswift</a> ${item.post_content} <a href="#" class="post-tag">@taylorehill / @gettyimages</a></p>
            </div>
            <div class="write-comment">
                <p>View all 204 comments</p>
                <form action="#">
                    <input type="text" name="" id="" placeholder="Add a comment…">
                </form>
                <span><i class="far fa-smile"></i></span>
            </div>
        </div>    
        
      </div>  
  </div>
`;
postArea.innerHTML = post_content;
  });

};

showPost();

// Attach event listener to form submission
postForm.onsubmit = (e) => {
  e.preventDefault();

  // Get form data using FormData
  const form_data = new FormData(e.target);
  const data = Object.fromEntries(form_data.entries());

  // Get existing post data from local storage
  const preData = getData("post");

  // Check if preData is not an array or is null/undefined
  const postDataArray = Array.isArray(preData) ? preData : [];

  // Add the new post data to the existing array
  postDataArray.push({
    user_name: data.user_name,
    user_photo: data.user_photo,
    post_content: data.post_content,
    post_photo: data.post_photo,
    post_date: Date.now(),
  });

  // Set the updated post data to local storage
  setData("post", postDataArray);

  // Reset the form after submission
  e.target.reset();

  showPost();
};





const leftBar = document.querySelector(".fixed");
const letP = document.querySelectorAll(".fixed p");
const rightSide = document.getElementById("rightSide")

const risize = () => {
    const disWidth = window.innerWidth;

    if (disWidth < 900) {
        rightSide.style.marginLeft = "4%"
        leftBar.style.width = "100px";
        leftBar.style.border = "none";
        // Convert the NodeList to an array using Array.from() or the spread operator [...nodeList]
        Array.from(letP).map((item, index) => {
            item.style.display = "none";
        });
        
    }
};

risize();