$(document).ready(function () {
    $('#summernote').summernote({
        height: 300,                 // set editor height
        minHeight: 500,             // set minimum height of editor
        maxHeight: 500,             // set maximum height of editor
        focus: true                  // set focus to editable area after initializing summernote
    });
});
/*获取文本编辑器的内容*/
// $("#tijiao").on("click", function(){
//     var html = $('#summernote').summernote('code');
//     console.log(html);
// });