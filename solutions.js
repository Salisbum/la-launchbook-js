// Exercise: Find the top navbar by query for the element type, which is <nav>.
document.getElementsByTagName("nav")[0];
// Exercise: Find the sidebar on the right by using it's id.
document.getElementById('sidebar-right');
// Exercise: Find the "Pages" and "Groups" sections of the sidebar by using their class.
document.getElementsByClassName('groups');
document.getElementsByClassName('pages');
// Exercise: Find all of the comments on the page.
document.getElementsByClassName('comments');
// Exercise: Find the first comment on the page.
document.getElementsByClassName('comments')[0];
// Exercise: Find the last comment on the page.
var comments = document.getElementsByClassName('comments');
var lastCommentIndex = comments.length - 1;
comments[lastCommentIndex];
// Exercise: Find the fourth comment on the page.
document.getElementsByClassName('comments')[3];
// Exercise: Find one of the ads in the sidebar and hide them.
document.getElementsByClassName('ad-slot')[0].style.visibility = "hidden";
// Exercise: Set the visibility to the form that you hid in the previous step to make it visible again.
document.getElementsByClassName('ad-slot')[0].style.visibility = "visible";
// Exercise: Use setAttribute to change src attribute of one of the ads in the sidebar.
var doc = document.getElementsByClassName('ad-slot')[0];
var docImage = doc.getElementsByTagName('img')[0];
docImage.setAttribute('src', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVux_wOfAxHC7P2v2dzOW55f8BCfiqp2Cx1eTK-SYxlGHH-qCYJQn5pWtj");
// Exercise: Find Sam's post and change it's text to something incredible.
var titleArea = document.getElementsByClassName('post')[3];
var listElement = titleArea.getElementsByClassName('media-body')[0];
var link = listElement.getElementsByTagName('p')[0];
link.innerHTML = 'ERMAGERD';
// Exercise: Find the first post and add the .post-liked class to it.
var post = document.getElementsByClassName('post')[0];
var likeLink = post.getElementsByTagName('li')[0];
likeLink.className = likeLink.className + " post-liked";
// Exercise: Find the second post and remove the .post-liked class.
var nextPost = document.getElementsByClassName('post')[1];
nextPost.classList.remove('post-liked');
