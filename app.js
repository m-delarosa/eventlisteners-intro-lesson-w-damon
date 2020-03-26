const students = [
  {
    name: "Mike De La Rosa",
    hometown: "Miami, FL",
    bio: "kjlhdskljhdsff jhasdlkhlkdfh lhasdfkljhfsad"
  },
  {
    name: "Kristine",
    hometown: "Union, NJ",
    bio: "kjlhdskljhdsff jhasdlkhlkdfh lhasdfkljhfsad"
  },
  {
    name: "Todd",
    hometown: "Colorado Springs, CO",
    bio: "kjlhdskljhdsff jhasdlkhlkdfh lhasdfkljhfsad"
  },
  {
    name: "Parada",
    hometown: "New York, NY",
    bio: "kjlhdskljhdsff jhasdlkhlkdfh lhasdfkljhfsad"
  }
]

const ul = document.querySelector(".students")

students.map(student => {
  const li = document.createElement("li")
  const h2 = document.createElement("h2")
  const h3 = document.createElement("l3")
  const p = document.createElement("p")

  li.id = student.name
  h2.innerText = student.name
  h3.innerText = student.hometown
  p.innerText = student.bio

  li.append(h2, h3, p)

  li.addEventListener("click", onClick)
  li.addEventListener("mouseover", onClick)
  li.addEventListener("mouseout", onClick)

  ul.appendChild(li)
})

function onClick() {
  event.target.classList.toggle("color")
  event.target.classList.toggle("no-show")
}
