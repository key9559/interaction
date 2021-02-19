// 정리
var contm = 0;
var mc;
function bgMove($btnName, imgHeight, sliceCnt) {
  $btnName.hover(
    function () {
      mc = setInterval(function () {
        var position = -1 * (contm * imgHeight);
        $btnName.css("background-position-y", position);
        contm++;
        if (contm == sliceCnt) {
          contm = 0;
        }
      }, 40);
    },
    function () {
      clearInterval(mc);
      $btnName.css("background-position-y", 0);
    }
  );
}
// arr for

var btnClass = [".btn_start1", ".btn_start2"];
var btnHeight = [99, 91];
var btnRepeat = [37, 31];

if (
  btnClass.length == btnHeight.length &&
  btnHeight.length == btnRepeat.length
) {
  for (i = 0; i < btnClass.length; i++) {
    bgMove($(btnClass[i]), btnHeight[i], btnRepeat[i]);
  }
}
