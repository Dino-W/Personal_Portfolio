$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scroll > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
});

const typed = new Typed(".typing", {
  strings: ["後端工程師"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

function xxx() {
  $.ajax({
    url: "post",
    type: "post",
    data: $("#message").serialize(),
    error: function (xhr, ajaxOption, throwError) {
      alert("Ajax request 發生錯誤");
    },
    success: function (msg) {
      alert(msg);
    },
  });
}
