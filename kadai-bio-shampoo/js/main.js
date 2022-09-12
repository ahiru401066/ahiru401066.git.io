/* global $ */


$('.product').waypoint({
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInUp');
      this.destroy();
    }
  },
  
  offset: '60%',
});

$('.right_in').waypoint({
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInRight');
      this.destroy();
    }
  },
  
  offset: '60%',
});

$('.left_in').waypoint({
  handler: function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInLeft');
      this.destroy();
    }
  },
  
  offset: '60%',
});



/*global click*/

$('#submit_button').on ('click', function(e) {
  var usermunicipalities = $('#usermunicipalities').val();
  var userphone_number = $('#userphone_number').val();
  var usermailadress = $('#usermailadress').val();
  var userpassword = $('#userpassword').val();
  
  var error_text = '';
  
  if (!usermunicipalities.match(/^[^ -~｡-ﾟ]+$/)) {
    error_text = '市区町村を全角で記入してください。';
  }
  else if (!userphone_number.match(/^[0-9]{10,11}$/)) {
    error_text = '電話番号を半角かつ10桁or11桁で記入してください。';
  }
  else if (!usermailadress.match(/^[a-zA-Z0-9_+-]+(.[a-zA-Z0-9_+-]+)*@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/)) {
    error_text = 'メールアドレスを正しい書式で記入してください。';
  }
  else if (!userpassword.match(/^[0-9a-zA-Z]{4,}$/)) {
    error_text = '４字以上の英数字を記入してください。';
  }
  
  $('#form_has_error').text(error_text);
  
  if (error_text === '') {
    // $('#contact_form').submit();
  }
});





