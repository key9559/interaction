// gnb
const gnbWrap = $(".link-wrapper");

gnbWrap.append(`
<div class="l-center">
	<a href="index.html" class="gnb-link">메인</a>
	<a href="buttons.html" class="gnb-link">버튼모음</a>
	<a href="inputs.html" class="gnb-link">인풋모음</a>
	<a href="animations.html" class="gnb-link">애니메이션모음</a>
	<a href="scrolls.html" class="gnb-link">스크롤모음</a>
</div>`);

const gnbLink = $(".gnb-link");

if ($("#page").hasClass("button-page")) {
  gnbLink.eq(1).addClass("on");
} else if ($("#page").hasClass("input-page")) {
  gnbLink.eq(2).addClass("on");
} else if ($("#page").hasClass("ani-page")) {
  gnbLink.eq(3).addClass("on");
} else if ($("#page").hasClass("scroll-page")) {
  gnbLink.eq(4).addClass("on");
}
