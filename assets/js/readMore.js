function toggleReadMore(event) {
    const moreContent = document.getElementById("more-content");
    const readMoreLink = document.getElementById("read-more-link");
    const readLessLink = document.getElementById("read-less-link");
  
    if (moreContent.style.display === "none") {
      // Show content and hide "Read More"
      moreContent.style.display = "block";
      readMoreLink.style.display = "none";
      readLessLink.style.display = "inline-block";
  
      // Scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scroll
      });
    } else {
      // Hide content and show "Read More"
      moreContent.style.display = "none";
      readMoreLink.style.display = "inline-block";
      readLessLink.style.display = "none";
  
      // Scroll to the top of the page when "Read Less" is clicked
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scroll
      });
    }
  }
  