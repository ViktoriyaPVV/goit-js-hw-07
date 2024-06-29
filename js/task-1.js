const itemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemEl.length}`);
// for (let i = 0; i < itemEl.length; i += 1) {
//   console.log(
//     `Category: ${itemEl[i].firstElementChild.textContent}\nElements: ${itemEl[i].lastElementChild.children.length}`
//   );
// }

itemEl.forEach((item) =>
  console.log(
    `Category: ${item.firstElementChild.textContent}\nElements: ${item.lastElementChild.children.length}`
  )
);
