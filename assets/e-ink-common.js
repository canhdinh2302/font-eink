const e__formatText = (str) => str.replaceAll(/\n|\t/g, "");

const e__getLink = (selector) =>
  $(selector)
    .map(function () {
      return {
        href: $(this).attr("href"),
        text: e__formatText($(this).text()),
      };
    })
    .toArray();

const e__linkBody = () => {
  $("body").text("");
  $("body").addClass("e-ink---body");

  let scrollTop = 0;
  let blockScroll = false;

  $(window).on("scroll", function () {
    if (blockScroll) return $(window).scrollTop(scrollTop);

    blockScroll = true;
    const newScrollTop = $(window).scrollTop();
    const vh = window.innerHeight;
    const scrollH = document.documentElement.scrollHeight;
    scrollTop = scrollTop + (newScrollTop > scrollTop ? vh - 32 : 32 - vh);
    if (scrollTop < 0) {
      scrollTop = 0;
    }
    if (scrollTop > scrollH) {
      scrollTop = scrollH - vh;
    }
    $(window).scrollTop(scrollTop);
    setTimeout(() => {
      blockScroll = false;
    }, 1000);
  });
};

const e__addHomeBtn = () => {
  $("body").append(`
    <div class="e--home-btn">${e__homeBtn}</div>
  `);

  $(".e--home-btn").on("click", function () {
    location.pathname = "/";
  });
};
