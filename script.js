document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".blog-card");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


function expandCard(card) {
    // Get modal elements
    var modal = document.getElementById("expanded-card");
    var title = document.getElementById("expanded-title");
    var text = document.getElementById("expanded-text");

    // Set modal content from clicked card
    title.textContent = card.querySelector("h3").textContent;
    text.textContent = card.getAttribute("data-content");

    // Show modal
    modal.style.display = "flex";
}

function closeCard() {
    document.getElementById("expanded-card").style.display = "none";
}

// Close modal when clicking outside of content
window.onclick = function(event) {
    var modal = document.getElementById("expanded-card");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};