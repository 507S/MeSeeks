function PasswordReset() {
  // eslint-disable-next-line no-undef
  $("form.reset-password-form").on("submit", function (e) {
    e.preventDefault();
    // eslint-disable-next-line no-undef
    $(".reset-form").removeClass("d-block").addClass("d-none");
    // eslint-disable-next-line no-undef
    $(".reset-confirmation").addClass("d-block");
  });
}

window.addEventListener("load", function () {
  PasswordReset();
});
