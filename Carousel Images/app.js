const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Beautiful Mountain Landscape",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ocean Sunset View",
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Autumn Forest Path",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Urban City Skyline",
  },
];

let carouselImages = document.getElementById("carouselTrack");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const caption = document.getElementById("caption");
let carouselDot = document.getElementById("carouselNav");
const autoPlay = document.getElementById("autoPlayButton");
const timerDisplay = document.getElementById("timerDisplay");

//  Track the current image index
let currentIndex = 0;

//  Function to show the current image, hide others, and update caption
const updateImages = () => {
  const allImages = document.querySelectorAll(".carousel-images");

  allImages.forEach((img, index) => {
    img.style.display = index === currentIndex ? "block" : "none";
  });

  // Update the caption for current image
  caption.textContent = images[currentIndex].caption;

  // Update the active dot
  updateIndicators();
};

images.forEach((img, index) => {
  const imgElement = document.createElement("img");
  imgElement.src = img.url;
  imgElement.className = "carousel-images";
  imgElement.style.display = index === currentIndex ? "block" : "none";
  carouselImages.appendChild(imgElement);
});

prevButton.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  updateImages();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImages();
});

//Create carousel dots and add click functionality
images.forEach((_, index) => {
  let dot = document.createElement("div");

  // When a dot is clicked, jump to that image
  dot.addEventListener("click", () => {
    currentIndex = index;
    updateImages();
  });

  dot.classList.add("carousel-indicator");
  carouselDot.appendChild(dot);

  // Make the first dot active initially
  if (currentIndex === index) {
    dot.classList.add("active");
  }
});

//  Update which dot is active
const updateIndicators = () => {
  const indicators = document.querySelectorAll(".carousel-indicator");

  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === currentIndex);
  });
};

//  Setup autoplay and countdown
let intervalId = null; // For the image sliding interval
let countdown = null; // For the countdown display

const startAutoPlay = () => {
  let timeLeft = 5;

  // Show countdown initially
  timerDisplay.innerText = `Next slide in ${timeLeft}s`;

  // Countdown timer every second
  countdown = setInterval(() => {
    timeLeft--;
    timerDisplay.innerText = `Next slide in ${timeLeft}s`;
  }, 1000);

  // Slide change every 5 seconds
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImages();
    timeLeft = 5; // Reset countdown after each slide
  }, 5000);
};

//  Stop autoplay and clear countdown
const stopAutoPlay = () => {
  clearInterval(countdown);
  clearInterval(intervalId);
  timerDisplay.innerText = "";
};

//  Toggle autoplay when button is clicked
autoPlay.addEventListener("click", () => {
  if (intervalId) {
    stopAutoPlay();
    autoPlay.innerText = "Start Auto Play";
  } else {
    startAutoPlay();
    autoPlay.innerText = "Stop Auto Play";
  }
});

// Initialize the first image and dot on initally page load 
updateImages();
