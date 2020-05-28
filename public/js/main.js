$(document).ready(function(){
    $('.delete-article').on('click', function(e){
        e.preventDefault();
        const id = $(e.target).attr('data-id');

        $.ajax({
            type:'DELETE',
            url: '/users/dashboard/'+id,
            success: function(response){
                alert('Deleting Article');
                window.location.href='/users/dashboard';
            },
            error: function(err){
                console.log(err);
            }
        });
    });
});