var write = document.querySelector(".location-button");
var writeForm = document.querySelector(".write-to-us-form");
var writeClose = writeForm.querySelector(".write-to-us-button-close");
var writeName = writeForm.querySelector("[name=username]");
var writeEmail = writeForm.querySelector("[name=email]");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("writeName");
} catch (err) {
  isStorageSupport = false;
}

write.addEventListener("click", function(evt) {
  evt.preventDefault();
  writeForm.classList.add("modal-show");
  if (storage) {
    writeName.value = storage;
    writeEmail.focus();
  } else {
    writeName.focus();
  }
});

writeClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  writeForm.classList.remove("modal-show");
  writeForm.classList.remove("modal-error")
  writeName.classList.remove("modal-animation");
  writeEmail.classList.remove("modal-animation");
});

writeName.onfocus = function() {
  if (writeName.classList.contains("modal-animation")) {
    writeName.classList.remove("modal-animation");
  }
};

writeEmail.onfocus = function() {
  if (writeEmail.classList.contains("modal-animation")) {
    writeEmail.classList.remove("modal-animation");
  }
};

writeForm.addEventListener("submit", function(evt) {
  if (!writeName.value || !writeEmail.value) {
    evt.preventDefault();
    writeForm.classList.remove("modal-error")
    writeForm.offsetWidth = writeForm.offsetWidth;
    writeForm.classList.add("modal-error")
      if(!writeName.value) {
        writeName.classList.remove("modal-animation");
        writeName.offsetWidth = writeName.offsetWidth;
        writeName.classList.add("modal-animation");
      } if (!writeEmail.value) {
        writeEmail.classList.remove("modal-animation");
        writeEmail.offsetWidth = writeEmail.offsetWidth;
        writeEmail.classList.add("modal-animation");
      }
  } else {
    if (isStorageSupport) {
    localStorage.setItem("writeName", writeName.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writeForm.classList.contains("modal-show")) {
      evt.preventDefault();
      writeForm.classList.remove("modal-show");
      writeForm.classList.remove("modal-error")
      writeName.classList.remove("modal-animation");
      writeEmail.classList.remove("modal-animation");
    }
  }
});
