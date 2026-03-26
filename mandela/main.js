document.getElementById("compare-btn").addEventListener("click", function(event){
    event.preventDefault();
    let expected = document.getElementById("expected").value;
    let actual = document.getElementById("actual").value;
    let result = document.getElementById("result");

    result.innerHTML = "";

    if(expected === "" && actual === ""){
        result.innerHTML = "<li>Please enter text in both areas</li>";
        return;
    }

    let expectedLines = expected.split("\n");
    let actualLines = actual.split("\n");

    let differences = document.createElement("ol");
    differences.id = "differences";

    let hasDifference = false;

    let maxLength = Math.max(expectedLines.length, actualLines.length);

    for(let i = 0; i < maxLength; i++){

        if(expectedLines[i] !== actualLines[i]){
            let li = document.createElement("li");
            li.textContent = "Line " + (i + 1) + " is different";
            differences.appendChild(li);
            hasDifference = true;
        }

    }

    if(expectedLines.length !== actualLines.length){
        let li = document.createElement("li");
        li.textContent = "Number of lines differ: Expected = " + expectedLines.length + ", Actual = " + actualLines.length;
        differences.appendChild(li);
        hasDifference = true;
    }

    if(hasDifference){
        differences.classList.add("change");

        let title = document.createElement("li");
        title.textContent = "Texts are different";
        differences.prepend(title);

        result.appendChild(differences);
    } else {
        let li = document.createElement("li");
        li.textContent = "No differences found";
        result.appendChild(li);
        result.classList.add("nochange");
    }

})

document.getElementById("clear-btn").addEventListener("click", function(event){
      
    event.preventDefault();

    document.getElementById("expected").value = "";
    document.getElementById("actual").value = "";
    document.getElementById("result").innerHTML = "";

})