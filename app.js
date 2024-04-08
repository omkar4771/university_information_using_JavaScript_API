let url = "http://universities.hipolabs.com/search?country=";
let country = document.querySelector("input");
let btn = document.querySelector("button");
let ol = document.querySelector("ol");
let list = document.querySelector(".list");

btn.addEventListener("click",check =>{
    if(country.value != ""){
        getUniversity();
    }
});

async function getUniversity(){
    try{
        let newUrl = url+country.value;
        let res = await fetch(newUrl);
        let data = await res.json();
        for(college of data)
        {
            let li = document.createElement("li");
            li.innerHTML=`<a href="${college.web_pages}" target="_blank" > ${college.name }</a>`; 
            list.style.height="350px";
            li.classList.add("list");
            ol.appendChild(li);
            country.value="";
        }
    }
    catch(error){
        console.log(error);
    }
}