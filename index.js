$(document).ready(function () {
	"use strict";
	var bt_prev = $("#bt_prev")[0];
	var bt_next = $("#bt_next")[0];
	var z = 0;
	var ct = $("#sec3 .ct1");
	var maxHeight = mHeight(ct);
	var arr = [];
	var vp = $(window).innerWidth();


	var img = '<img src="image/companies.webp" alt="companies" width="2029" height="115">';
	var img5 = img.repeat(5);
	$(".pt_scroll").append(img5);   // companies image run horizontal
	
	
	var inViewport = (entries) => {
		entries.forEach(entry => {
			entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
		});
	};
	var Obs = new IntersectionObserver(inViewport);
	var obsOptions = {};
	document.querySelectorAll('[data-inviewport]').forEach(el => {
		Obs.observe(el, obsOptions);
	});
	$(document).scroll(function () {
		var wow = $(".wow");
		for (var i = 0; i < wow.length; i++) {
			var cord = wow[i].getBoundingClientRect().top;
			var vp = $(window).innerHeight() - 50;
			if (vp > cord > 0) {
				wow[i].classList.add("on");
			}
		}
	}); // wow animation


	$(".bt_menu").click(function () {
		$(".nav_hd").slideToggle();
		$(this).toggleClass("on");
		if ($(this).hasClass("on")) {
			$("body").css("overflow", "hidden");
		} else {
			$("body").css("overflow", "auto");
		}
	});
	$(".nav_hd").click(function () {
		$("body").css("overflow", "auto");
		$(this).hide();
		$(".bt_menu").removeClass("on");
	});	// hamburger js


	function fix_ttl() {
		var _h2 = $(".ttl_fixed");
		for (var i = 0; i < _h2.length; i++) {
			var wd = $(window).scrollTop();
			var hd_height = $("header").height();

			var ct_top = $("main>div")[i].offsetTop;
			var _sum = [];
			for (var x = i; x >= 0; x--) {
				var _height = $("main>div")[x].clientHeight;

				_sum.push(_height);
			}
			var _sumheight = _sum.reduce(function getsum(total, num) {
				return total + num;
			}, 0);
			if (wd + 1 > ct_top) {
				_h2[i].classList.add("fix1");
				_h2[i].classList.remove("fix2", "fix3");
				if (wd > _sumheight + hd_height - 250) {
					_h2[i].classList.add("fix2");
					_h2[i].classList.remove("fix1", "fix3");
				}
			} else if (wd < ct_top) {
				_h2[i].classList.add("fix3");
				_h2[i].classList.remove("fix2", "fix1");
			}
		}
	}
	$(window).ready(fix_ttl);
	$(window).scroll(fix_ttl);	// fixed title js


	if (vp < 600) {
		$("#ani5").height("120px").width("84px");
		$("#ani6").height("257px").width("186px");
	}
	if (vp > 599) {
		$("header dotlottie-player").height("239px");
		$("#ani6").height("330px").width("249px");
	}
	if (vp >= 660) {
		$("#sec4 #ani6").height("509px").width("380px");
	}
	if (vp > 767) {
		$("#sec4 #ani6").height("562px").width("388px");
		$("header dotlottie-player").height("369px");
	}
	if (vp > 839) {
		$("#ani5").height("206px").width("177px");
	}
	if (vp > 992) {
		$("#ani5").height("240px").width("187px");
	}
	if (vp > 1200) {
		$("header dotlottie-player").height("500px");
	}	// responsive
	
	
	function mHeight(elems) {
		return Math.max.apply(null, elems.map(function () {
			return $(this).height();
		}).get());
	}
	$("#sec3 .ct").height(maxHeight);
	bt_prev.addEventListener("click", function prev() {
		ct[z].classList.remove("on");

		if (z === 0) {
			z = ct.length - 1;
		} else {
			z--;
		}
		ct[z].classList.add("on");
	});
	bt_next.addEventListener("click", function prev() {
		ct[z].classList.remove("on");
		if (z === ct.length - 1) {
			z = 0;
		} else {
			z++;
		}
		ct[z].classList.add("on");
	}); // button slide of section 3  

	
	for (var i = 1; i < ct.length; i++) {

		var h = ct[i - 1].clientHeight;
		arr.push(h);
		var _sumheight = arr.reduce(function getsum(total, num) {
			return total + num;
		}, 0);
		ct[i].style.transform = "translateY(-" + _sumheight + "px)";
	} //  slide #sec3 

	
	var x, i, j, l, ll, selElmnt, a, b, c;
	/*look for any elements with the class "custom-select":*/
	x = document.getElementsByClassName("custom-select");
	l = x.length;
	for (i = 0; i < l; i++) {
		selElmnt = x[i].getElementsByTagName("select")[0];
		ll = selElmnt.length;
		/*for each element, create a new DIV that will act as the selected item:*/
		a = document.createElement("DIV");
		a.setAttribute("class", "select-selected");
		a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
		x[i].appendChild(a);
		/*for each element, create a new DIV that will contain the option list:*/
		b = document.createElement("DIV");
		b.setAttribute("class", "select-items select-hide");
		for (j = 1; j < ll; j++) {
			/*for each option in the original select element,
			create a new DIV that will act as an option item:*/
			c = document.createElement("DIV");
			c.innerHTML = selElmnt.options[j].innerHTML;
			c.addEventListener("click", function () {
				/*when an item is clicked, update the original select box,
				and the selected item:*/
				var y, i, k, s, h, sl, yl;
				s = this.parentNode.parentNode.getElementsByTagName("select")[0];
				sl = s.length;
				h = this.parentNode.previousSibling;
				for (i = 0; i < sl; i++) {
					if (s.options[i].innerHTML == this.innerHTML) {
						s.selectedIndex = i;
						h.innerHTML = this.innerHTML;
						y = this.parentNode.getElementsByClassName("same-as-selected");
						yl = y.length;
						for (k = 0; k < yl; k++) {
							y[k].removeAttribute("class");
						}
						this.setAttribute("class", "same-as-selected");
						break;
					}
				}
				h.click();
			});
			b.appendChild(c);
		}
		x[i].appendChild(b);
		a.addEventListener("click", function (e) {
			/*when the select box is clicked, close any other select boxes,
			and open/close the current select box:*/
			e.stopPropagation();
			closeAllSelect(this);
			this.nextSibling.classList.toggle("select-hide");
			this.classList.toggle("select-arrow-active");
		});
	}
	function closeAllSelect(elmnt) {
		/*a function that will close all select boxes in the document,
		except the current select box:*/
		var x, y, i, xl, yl, arrNo = [];
		x = document.getElementsByClassName("select-items");
		y = document.getElementsByClassName("select-selected");
		xl = x.length;
		yl = y.length;
		for (i = 0; i < yl; i++) {
			if (elmnt == y[i]) {
				arrNo.push(i);
			} else {
				y[i].classList.remove("select-arrow-active");
			}
		}
		for (i = 0; i < xl; i++) {
			if (arrNo.indexOf(i)) {
				x[i].classList.add("select-hide");
			}
		}
	}
	document.addEventListener("click", closeAllSelect);  	// css for option form

});