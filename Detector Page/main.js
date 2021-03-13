function getBaseUrl() {
  var file = document.querySelector("input[type=file]")["files"][0];
  var reader = new FileReader();
  var baseString;
  reader.onloadend = function () {
    baseString = reader.result;
    console.log(baseString);
  };

  reader.readAsBinaryString(file);

  var v = reader.readAsBinaryString(file);
  console.log(v);
}

const dropArea = document.getElementById("drop-area");

dropArea.addEventListener("dragover", (event) => {
  event.stopPropagation();
  event.preventDefault();
  // Style the drag-and-drop as a "copy file" operation.
  event.dataTransfer.dropEffect = "copy";
});

dropArea.addEventListener("drop", (event) => {
  event.stopPropagation();
  event.preventDefault();
  const fileList = event.dataTransfer.files;
  console.log(fileList[0]);
});
