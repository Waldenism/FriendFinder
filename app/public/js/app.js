$(function () {
  $('#erMes').hide()
  $('#modal').hide()
})

$('#submitButton').on('click', function (event) {
  event.preventDefault()

  if (($('#nameInput').val() === '') || ($('#photoInput').val() === '')) {
    $('#erMes').show()
  } else {
    if (!($("input[name='q1']:checked").val()) ||
      !($("input[name='q2']:checked").val()) ||
      !($("input[name='q3']:checked").val()) ||
      !($("input[name='q4']:checked").val()) ||
      !($("input[name='q5']:checked").val()) ||
      !($("input[name='q6']:checked").val()) ||
      !($("input[name='q7']:checked").val()) ||
      !($("input[name='q8']:checked").val()) ||
      !($("input[name='q9']:checked").val()) ||
      !($("input[name='q10']:checked").val())) {
      $('#erMes').show()
    } else {
      $('#submitButton').hide()

      var userInput = {
        name: $('#nameInput').val(),
        photo: $('#photoInput').val(),
        scores: [
          $("input[name='q1']:checked").val(),
          $("input[name='q2']:checked").val(),
          $("input[name='q3']:checked").val(),
          $("input[name='q4']:checked").val(),
          $("input[name='q5']:checked").val(),
          $("input[name='q6']:checked").val(),
          $("input[name='q7']:checked").val(),
          $("input[name='q8']:checked").val(),
          $("input[name='q9']:checked").val(),
          $("input[name='q10']:checked").val()
        ]
      }

      $.post('/api/friends', userInput)
        .done(function (data) {
          $('#userMatch').html(data.matchName)
          $('#userMatchImage').attr('src', data.matchImg)
          $('#modal').show()
        })
    }
  }
})

$('.close').on('click', function (e) {
  $('#modal').hide()
})
