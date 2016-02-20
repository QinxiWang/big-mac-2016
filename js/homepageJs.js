function alertName() {
    console.log("hellobob");
    bootbox.prompt("What is your name?", function(result) {
      if (result === null) {
        console.log("No answer");
      } else {
        var name = result;
        console.log("Name is: " + name);
        var fileName = "../html/panel0.html";
        window.location = fileName;
      }
    });
    return name;
};

// got from http://bootboxjs.com/#getting-started
