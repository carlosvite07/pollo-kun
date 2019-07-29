

$(function(){

  $('#billy-btn').click(function(){
    showModal('billy');
  });

  $('#christian-btn').click(function(){
    showModal('christian');
  });

  $('#fany-btn').click(function(){
    showModal('fany');
  });

  $('#giovanni-btn').click(function(){
    showModal('giovanni');
  });

  function showModal(user){
    $('#modalEnterPass').modal('show');
    $('#name-modal').text(user+'?');
    $('#user-field').val(user);
  }

  $('#sendPass').click(function(){
    $('#modalEnterPass').modal('hide');
    var user = $('#user-field').val();
    if(user == 'billy'){
      if($('#password').val() == '12345'){
        console.log('success');
      }
      else{
        console.log('fail');
      }
    }

  });

});
