$(document).ready(function () {
    const nameInput = $('#name');
    const emailInput = $('#email');
    const messageArea = $('#message');

  $('#connectMeContainer').mouseover(function () {
      nameInput.on('input  blur', () => {
          if (nameInput.val() === '') {
              nameInput.css('border', '5px solid #ff6347');
              nameInput.next('.errorDiv').addClass('error');
              nameInput.addClass('shootOutError');
              nameInput.next('.errorDiv').text('Enter Your Name Please');
              $('#post').hide();
          } else {
              nameInput.css('border', '5px solid #28a745');
              nameInput.next('.errorDiv').removeClass('error');
              nameInput.next('.errorDiv').text('');
              $('#post').show();
          }
      })
      emailInput.on('input blur', () => {
          if (emailInput.val() === '' || !emailInput.val().includes('@')) {
              emailInput.css('border', '5px solid #ff6347');
              emailInput.next('.errorDiv').addClass('error');
              emailInput.next('.errorDiv').text('Enter valid email address and include @');
              $('#post').hide();
          } else {
              emailInput.css('border', '5px solid #28a745');
              emailInput.next('.errorDiv').removeClass('error');
              emailInput.next('.errorDiv').text('');
              $('#post').show();
          }
      })
      messageArea.on('input blur', () => {
          if (messageArea.val() === '') {
              messageArea.css('border', '5px solid #ff6347');
              messageArea.next('.errorDiv').remove('success');
              messageArea.next('.errorDiv').addClass('error');
              messageArea.next('.errorDiv').text('Enter Your Message Please');
              $('#post').hide();
          } else {

              messageArea.css('border', '5px solid #28a745');
              messageArea.next('.errorDiv').removeClass('error');
              messageArea.next('.errorDiv').text('');
              $('#post').show();
          }
      })
  })



})