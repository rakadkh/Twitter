
const Tweeter = function () {
    const _posts=[{
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c4", text: "Don't wory second poster, you'll be first one day." },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." }
        ]
    }]
    let postIdCounter=3
    let commentIdCounter=7
    const getPosts = function (){
        return _posts
    }
    const addPost = function (msg){
        _posts.push(text=msg,id="p"+postIdCounter,comments=[])
        postIdCounter++
    }
    const removePost = function (postID){
        for(index in _posts){
            if (_posts[index].id==postID){
                _posts.splice(index,1)
                break
            }
        }
    }    
    const addComment = function (msg,postID){
        for(index in _posts){
            if (_posts[index].id==postID){
                _posts[index].comments.push(id="c"+commentIdCounter,text=msg)
                break
            }
        }
        commentIdCounter++
    }
    const removeComment = function (postID,commentID){
        for(index in _posts){
            if (_posts[index].id==postID){
                for(indexc in _posts.comments){
                    if (_posts.comments[indexc].id==commentID){
                        _posts.comments.splice(indexc,1)
                        break
                    }
                }
            }
        }
    }  
    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
      }
}
/*
const tweeter = Tweeter()
tweeter.addPost("This is my own post!")
console.log(tweeter.getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

tweeter.removePost("p1")
console.log(tweeter.getPosts())
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}
tweeter.addComment("Damn straight it is!", "p3")
tweeter.addComment("Second the best!", "p2")
console.log(tweeter.getPosts())
//This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}

//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}

tweeter.removeComment("p2", "c6")
console.log(tweeter.getPosts())
//This comment should be removed:
//{id: "c6", text: "Haha second place what a joke."}
*/