
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#registro form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const nombre = document.querySelector("#nombre").value.trim();
        const email = document.querySelector("#email").value.trim();
        const password = document.querySelector("#password").value.trim();

        if (!nombre || !email || !password) {
            alert("Por favor, completa todos los campos.");
            return;
        }

       
        alert(`Gracias por registrarte, ${nombre}!`);
        form.reset();
    });


    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    const modal = document.getElementById("modalDetalle");
    modal.addEventListener("shown.bs.modal", () => {
        setTimeout(() => {
            const modalInstance = bootstrap.Modal.getInstance(modal);
            modalInstance.hide();
        }, 5000);

    const cards = document.querySelectorAll("#productos .card");
    cards.forEach((card) => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.05)";
            card.style.transition = "transform 0.3s ease";
        });

        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
        });
    });

    const footer = document.querySelector("#footer p:nth-of-type(2)");
    const currentYear = new Date().getFullYear();
    footer.innerHTML = `&copy; ${currentYear} Repisas_LA. Todos los derechos reservados.`;
});


<script>
  
    const whatsappIcon = document.querySelector('.whatsapp-icon');
    setInterval(() => {
        whatsappIcon.classList.add('shake');
        setTimeout(() => {
            whatsappIcon.classList.remove('shake');
        }, 1000);
    }, 5000); // Intervalo entre vibraciones

   
    const style = document.createElement('style');
    style.textContent = `
        .shake {
            animation: shake 0.5s ease-in-out;
        }
        @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            50% { transform: translateX(5px); }
            75% { transform: translateX(-5px); }
        }
    `;
    document.head.appendChild(style);
</script>
