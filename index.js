const datas = [{
    title: "Can you accept all credit cards",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsa? Nam nobis repudiandae ullam,",
},
{
    title: "Can you accept all credit cards",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsa? Nam nobis repudiandae ullam,",
},
{
    title: "Can you accept all credit cards",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsa? Nam nobis repudiandae ullam,",
}
];


let container = document.querySelector(".container");
let accordion = document.querySelector(".accordion");
let accordion__content = document.querySelectorAll(".accordion__content");
let accordion__show = document.querySelectorAll(".accordion__show");


accordion__show.forEach(function (current, index) {
current.addEventListener("click", (e) => {
    e.preventDefault();
    accordion__content[index].classList.toggle("show_text");
    accordion__content[index].innerHTML = datas[0].content;

    if (current.innerHTML === "+") {
        current.innerHTML = "-";
    } else {
        current.innerHTML = "+";
    }

})
})