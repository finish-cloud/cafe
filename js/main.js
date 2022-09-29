$(function () {
  $('a[href^]=#').click(function(){
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);

    let position = target.offset().top;

    $("html,body").animate({ scrollTop: position }, 600, "swing");
    return false;
  });
})

/*ハンバーガー*/

$(function() {
      //スムーズスクロール
      let runScroll = function() {
          $('a[href^="#"]').click(function() {
              let speed = 400;
              let href = $(this).attr("href");
              let $target = $(href == "#" || href == "" ? 'html' : href);
              let position = $target.offset().top - 100;

              $('body,html').animate({
                  scrollTop: position
              }, speed, 'swing');
              return false;
          });
      };

      // ハンバーガーメニューチェックボックス外す処理
      let unlockCheckBox = function() {
          let $trigger = $('.header__navi a');
          let $target = $('input[type="checkbox"]');

          $trigger.click(function() {
              $target.prop('checked', false);
          });
      };

      // Document Ready
          runScroll();
          unlockCheckBox();
      });
