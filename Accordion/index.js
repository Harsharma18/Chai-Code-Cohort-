const accordionBtn = document.querySelectorAll(".accordion-button");
const accordionContent = document.querySelectorAll(".accordion-content");
accordionBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    accordionBtn.forEach((button, btnindex) => {
      const content = accordionContent[btnindex];
      // console.log(content);
      const arrow = document.querySelector(".arrow");
      if (index === btnindex) {
        const isActive = btn.classList.contains("active");
        button.classList.toggle("active",!isActive);
        content.style.maxHeight = isActive
          ? content.scrollHeight + "px"
          : "0px";
        arrow.style.transform = isActive ? "rotate(0deg)" : "rotate(180deg)";
      } else {
        button.classList.remove("active");
        content.style.maxHeight = "0px";
        arrow.style.transform = "rotate(0deg)";
      }
    });
  });
});
