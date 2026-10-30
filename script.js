// Violet storefront interactions. This is a front-end demo, not a payment processor.
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const productInput = document.querySelector("#checkout-product");
  const summaryProduct = document.querySelector("#summary-product");
  if (productInput && params.has("product")) {
    productInput.value = params.get("product");
    if (summaryProduct) summaryProduct.textContent = params.get("product");
  }

  const checkoutForm = document.querySelector("#checkout-form");
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const method = document.querySelector('input[name="payment"]:checked')?.value;
      const message = document.querySelector("#checkout-message");
      if (!method) {
        message.textContent = "Please select a payment method.";
        return;
      }
      message.textContent = `Demo only: ${method} selected. No payment was taken. Connect a trusted payment provider to accept payments securely.`;
    });
  }

  // If an image file is missing, keep the designed placeholder visible.
  document.querySelectorAll(".product-image img, .detail-image img").forEach((img) => {
    img.addEventListener("error", () => { img.style.display = "none"; });
  });
});
