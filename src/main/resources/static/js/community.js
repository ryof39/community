
/*
提交回复
*/
function post(){
    var questionId = $("#question_id").val();
    var content = $("#comment_content").val();
    comment2Target(questionId,1,content);

}
function comment2Target(targetId,type,content){
    if (!content){
        alert("不能回复空内容");
        return;
    }
    $.ajax({
        type:"POST",
        url:"/comment",
        contentType:'application/json',
        data: JSON.stringify({
            "parentId":targetId,
            "content":content,
            "type":type
        }),
        success:function(response){
            if(response.code==200){
                // $("#comment_section").hide();
                window.location.reload();
            }else{
                if (response.code==2003){
                    var isAccepted = confirm(response.message);
                    if (isAccepted){
                        window.open("https://github.com/login/oauth/authorize?client_id=bee9e0916ee74d7263eb&redirect_uri=http://localhost:8887/callback&scope=user&state=1");
                        window.localStorage.setItem("closable",true);
                    }
                }else{
                    alert(response.message);
                }
            }
            console.log(response)
        },
        dataType:"json"
    });
}
function comment(e){
    var commentId = e.getAttribute("data-id");
    var content = $("#input-"+commentId).val();
    comment2Target(commentId,2,content);
}
/*
展开二级评论
*/
function collapseComments(e){
    var id = e.getAttribute("data-id");
    var comments = $("#comment-"+id);

    // comments.addClass("in");
    comments.toggleClass("in")

}