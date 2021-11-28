// window.addEventListener('load',()=>{
//     const params=(new URL(document.location)).searchParams;
//     const name=params.get('name');
//     const designation=params.get('designation');
//     const work=params.get('work');
//     document.getElementById('n').innerHTML=name;
//     document.getElementById('des').innerHTML=designation;
//     document.getElementById('w').innerHTML=work;
// });
window.addEventListener('load', () => {


    const name =localStorage.getItem('NAME');
    const designation = localStorage.getItem('Designation');
    const work = localStorage.getItem('Work');

    document.getElementById('n').innerHTML = name;
    document.getElementById('des').innerHTML = designation;
    document.getElementById('w').innerHTML = work;


});

const file = document.getElementById("up");
const btn = document.getElementById("realfile");
const txt=document.getElementById("text");
btn.addEventListener("click",function()
{
    file.click();
});
file.addEventListener("change",function()
{
    if(file.value)
    {
        txt.innerHTML=file.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    }
});
function upload() {
    if (file.value) {
        alert("uploaded successfully");
    }
    else{
        alert("no file is chosen yet");
    }
}
file.onchange = ({ target }) => {
    let f = target.files[0];
    if (f) {
        let name = f.name;
        console.log(name);
    }
}