gsap.from(".text-container h1", {
    duration: 1.5,
    y: 50,
    opacity: 0,
    ease: "power3.out",
    delay: 0.5,
    stagger:0.5
  });
  
  gsap.from(".images", {
    duration: 1.5,
    scale: 0.9,
    opacity: 1,
    stagger: 0.3,
    ease: "back.out(1.7)",
  });



  // Hover Interaction for images
  document.querySelectorAll(".img-details").forEach((imgDetail) => {
    imgDetail.addEventListener("mouseenter", () => {
      gsap.to(imgDetail.querySelector(".images"), {
        scale: 1.05,
        filter: "brightness(1)",
        ease: "power3.out",
        duration: 0.5,
      });
      document.querySelectorAll(".img-details").forEach((other) => {
        if (other !== imgDetail) {
          gsap.to(other.querySelector(".images"), {
            filter: "grayscale(1) brightness(0.5)",
            ease: "power3.out",
            duration: 0.5,
          });
        }
      });
    });
  
    imgDetail.addEventListener("mouseleave", () => {
      document.querySelectorAll(".images").forEach((img) => {
        gsap.to(img, {
          scale: 1,
          filter: "none",
          ease: "power3.out",
          duration: 0.5,
        });
      });
    });
  });


 
    // Mouse movement effect for parallax on image and text
document.querySelectorAll(".img-details").forEach((imgDetail) => {
  const img = imgDetail.querySelector(".images");
  const text = imgDetail.querySelector(".img-para");

  imgDetail.addEventListener("mousemove", (e) => {
    const rect = imgDetail.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 80;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 80;

    // Move the image
    gsap.to(img, {
      x: x,
      y: y,
      ease: "power3.out",
      duration: 0.5,
    });

    // Move the text slightly to create a parallax effect
    gsap.to(text, {
      x: x * 0.5, // Move text in the opposite direction (half the amount)
      y: y * 0.5, // Move text in the opposite direction (half the amount)
      ease: "power3.out",
      duration: 0.5,
    });
  });

  imgDetail.addEventListener("mouseleave", () => {
    // Reset the image and text positions
    gsap.to(img, {
      x: 0,
      y: 0,
      ease: "power3.out",
      duration: 0.5,
    });

    gsap.to(text, {
      x: 0,
      y: 0,
      ease: "power3.out",
      duration: 0.5,
    });
  });
});


  // // Mouse movement effect for parallax
  // document.querySelectorAll(".img-details").forEach((imgDetail) => {
  //   imgDetail.addEventListener("mousemove", (e) => {
  //     const rect = imgDetail.getBoundingClientRect();
  //     const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
  //     const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
  //     gsap.to(imgDetail.querySelector(".images"), {
  //       x: x,
  //       y: y,
  //       ease: "power3.out",
  //       duration: 0.5,
  //     });
  //   });
  
  //   imgDetail.addEventListener("mouseleave", () => {
  //     gsap.to(imgDetail.querySelector(".images"), {
  //       x: 0,
  //       y: 0,
  //       ease: "power3.out",
  //       duration: 0.5,
  //     });
  //   });
  // });
  

  // Select heading and images
const heading = document.querySelector('.text-container h1');
const imageContainers = document.querySelectorAll('.img-details');

// Add stroke effect on image hover
imageContainers.forEach((container) => {
  container.addEventListener('mouseenter', () => {
    heading.classList.add('stroked');
  });

  container.addEventListener('mouseleave', () => {
    heading.classList.remove('stroked');
  });
});



document.querySelectorAll(".img-details").forEach((imgDetail) => {
  imgDetail.addEventListener("mouseenter", () => {
    imgDetail.style.zIndex = "3";
  });

  imgDetail.addEventListener("mouseleave", () => {
    imgDetail.style.zIndex = "0";
  });
});

