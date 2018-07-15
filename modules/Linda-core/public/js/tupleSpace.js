$(function() {
  var watchTuple = $("#main").data("watch");
  const ts = new LindaClient();

  ts.connect(
    "http://localhost:3000/masuilab",
    () => {
      ts.onDisconnected(() => {
        location.reload();
      });

      ts.watch(watchTuple, res => {
        $("<li>" + JSON.stringify(res._payload) + "</li>")
          .prependTo("#content")
          .hide()
          .fadeIn(500);
      });
    }
  );
  $("#write-button").on("click", () => {
    ts.write(watchTuple, res => {
      console.log(JSON.stringify(res));
    });
  });
});
