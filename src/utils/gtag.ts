declare function gtag(...args: unknown[]): void;

export function trackWhatsAppConversion() {
  if (typeof gtag !== "undefined") {
    gtag("event", "conversion", { send_to: "AW-18195439252/T780CN2-77ocEOXz4O5D" });
    gtag("event", "conversion", { send_to: "AW-18217449957/BO2xCK3aw7scEJS9oeRD" });
  }
}
