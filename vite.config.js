import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, "index.html"),
        homeDecor: resolve(__dirname, "home-decor.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
        products: resolve(__dirname, "products.html"),
        bulkOrders: resolve(__dirname, "bulk-orders.html"),
        cancellationPolicy: resolve(__dirname, "cancellation-policy.html"),
        cookiePolicy: resolve(__dirname, "cookie-policy.html"),
        disclaimerPolicy: resolve(__dirname, "disclaimer-policy.html"),
        grievancePolicy: resolve(__dirname, "grievance-policy.html"),
        privacyPolicy: resolve(__dirname, "privacy-policy.html"),
        securityPolicy: resolve(__dirname, "security-policy.html"),
        termsConditions: resolve(__dirname, "terms-and-conditions.html"),
        faqs: resolve(__dirname, "faqs.html"),
        login: resolve(__dirname, "login.html")
      }
    }
  }
});
