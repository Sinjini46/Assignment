// const sub = document.getElementById("done");
// function submit() {
//     let fieldErrorMsg = "Please enter the";
//     let fieldvalue = item.value;
//     let fieldlabel = item.label;
//     if (!fieldvalue) {
//         item.setCustomValidity(fieldErrorMsg + ' ' + fieldlabel);
//     }
// }
    function NextPage() {
      window.location.href = "file.html";
      const name = document.getElementById('name').value;
      const designation = document.getElementById('designation').value;
      const work = document.getElementById('work').value;

      localStorage.setItem("NAME", name);
      localStorage.setItem("Designation", designation);
      localStorage.setItem("Work", work);

      return;
      

    document.location.href = url;

    } 
 