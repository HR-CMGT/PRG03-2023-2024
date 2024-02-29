window.addEventListener('load', init);

function init()
{
  document.getElementById('button').addEventListener('click', getStream);
}

function getUserMedia(options, successCallback, failureCallback)
{
  const api = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
  if (api) {
    return api.bind(navigator)(options, successCallback, failureCallback);
  }
}

function getStream()
{
  if (!navigator.getUserMedia && !navigator.webkitGetUserMedia && !navigator.mozGetUserMedia && !navigator.msGetUserMedia) {
    alert('User Media API not supported.');
    return;
  }

  const constraints = {};
  constraints.video = true;
  getUserMedia(constraints, function (stream) {
    const mediaControl = document.querySelector('video');

    if ('srcObject' in mediaControl) {
      mediaControl.srcObject = stream;
    } else if (navigator.mozGetUserMedia) {
      mediaControl.mozSrcObject = stream;
    } else {
      mediaControl.src = (window.URL || window.webkitURL).createObjectURL(stream);
    }
  }, function (err) {
    alert('Error: ' + err);
  });
}
