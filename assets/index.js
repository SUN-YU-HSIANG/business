
// 為每個 .img-wrapper 添加點擊事件監聽器
$('.img-wrapper').on('click', function() {
  // 1. 取得 data-id 屬性
  const videoId = $(this).data('id');

  // 2. 確認 data-id 是否為空，為空則返回
  if (!videoId) {
    return;
  }

  // 3. 創建新的 iframe 並設置屬性
  const newIframe = $('<iframe>', {
    src: `https://www.youtube.com/embed/${videoId}`,
    allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
    referrerpolicy: 'strict-origin-when-cross-origin',
    allowfullscreen: true
  });

  // 4. 替換 .iframe-wrapper 中的內容
  $('.iframe-wrapper').empty().append(newIframe);

});

