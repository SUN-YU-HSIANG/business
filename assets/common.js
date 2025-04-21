$(document).ready(function() {
  const $searchButton = $(".header-util-search");
  const $searchForm = $(".header-util-form");
  const $searchInput = $(".header-util-input");
  if ($searchButton.length && $searchForm.length) {
    $searchButton.on("click", function(e) {
      e.preventDefault();
      if ($searchForm.hasClass("is-hide")) {
        $searchForm.removeClass("is-hide");
        if ($searchInput.length) {
          window.requestAnimationFrame(() => {
            $searchInput.focus();
          });
        }
      } else {
        if ($searchInput.length && $.trim($searchInput.val()) !== "") {
          $searchForm.submit();
        } else {
          $searchForm.addClass("is-hide");
        }
      }
    });
    $(document).on("click", function(e) {
      if (!$(e.target).closest($searchForm).length && !$(e.target).closest($searchButton).length) {
        $searchForm.addClass("is-hide");
        $searchInput.val("");
      }
    });
  }
  $("#mb-menu").on("click", function() {
    $(this).toggleClass("is-open");
    $("#mb-overlay").toggleClass("is-open");
  });
  $(".gdpr-btn").on("click", function() {
    $(".gdpr").fadeOut(300);
  });
});
