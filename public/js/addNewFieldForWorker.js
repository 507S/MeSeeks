/* eslint-disable no-undef */
$("#rowAdder").click(function () {
  newRowAdd =
    '<div id="row"> <div class="input-group m-3">' +
    '<div class="input-group-prepend">' +
    '<button class="btn btn-danger" id="DeleteRow" type="button">' +
    '<i class="bi bi-trash"></i> Delete</button> </div>' +
    '<input type="text" class="form-control m-input"> </div> </div>';

  // eslint-disable-next-line no-undef
  $("#newinput").append(newRowAdd);
});

$("body").on("click", "#DeleteRow", function () {
  $(this).parents("#row").remove();
});
