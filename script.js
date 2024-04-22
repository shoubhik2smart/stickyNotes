const but = document.querySelector("#add-btn");
const body = document.querySelector("body");


but.addEventListener("click", () => {
    addSticky();

});
function saveAll() {
    let arr = [];
    const data = document.querySelectorAll(".notes textarea");
    data.forEach(function (e) {
        arr.push(e.value);
    })
    //console.log(arr);
    localStorage.setItem("sticky", JSON.stringify(arr));


}

function addSticky(text = "") {
    let notes = document.createElement("div");
    notes.classList.add("notes");
    notes.innerHTML = `
    <div class="top">
            <i id="save" class="ri-save-2-line"></i>
            <i id="del" class="ri-delete-bin-7-fill"></i>
        </div>
        <textarea>${text}</textarea>`
    body.appendChild(notes);
    saveAll();
    notes.querySelector("#del").addEventListener("click", () => {
        notes.remove();
        saveAll();

    })
    notes.querySelector("#save").addEventListener("click", () => {
        saveAll();
    })
}

(function () {
    const local = JSON.parse(localStorage.getItem("sticky"));
    //console.log(local);
    local.forEach(function (e) {
        addSticky(e);
   
    })

})();