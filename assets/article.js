// share
//social share
window.fbAsyncInit = function() {
  FB.init({
    appId      : '1235742279860141',
    xfbml      : true,
    version    : 'v2.11'
  });
  FB.AppEvents.logPageView();
};

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$('.btn-x').click(function(){
  const dataHref =  $(this).attr('data-href');
  if (!dataHref) {
    return;
  }
  const twitterhref = "http://twitter.com/share?url=" + dataHref;
  window.open(twitterhref, 'window', 'width=550, height=450,personalbar=0,toolbar=0,scrollbars=1,resizable=1'); return false;
});
$('.btn-fb').click(function () {
  const dataHref =  $(this).attr('data-href');
  if (!dataHref) {
    return;
  }
  FB.ui({
    method: 'share',
    href: dataHref + `${dataHref.indexOf('?') === - 1 ? '?' : '&'}utm_source=facebook&utm_medium=share&utm_campaign=fbuser`
  }, function () { });
  return false;
});
$('.btn-line').click(function () {
    let url = $(this).attr('data-href');
    if (!url) {
      return;
    }
    url += (url.indexOf("?") === -1) ? "?" : "&";
    url += 'utm_source=LINE&utm_medium=share&utm_campaign=lineuser';
    window.location.href = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}`;
    return false;
});
// 複製網址
$('.btn-copy').click(function() {
  navigator.clipboard.writeText(window.location.href)
    .catch(() => console.error('copy fail'));
});

// 列印
$('.btn-print').click(function() {
  window.print();
})