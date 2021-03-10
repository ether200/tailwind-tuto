// This file is for adding custom properties when it compiles.
// To get the exact list view you can create a --full tailwind.config and follow it
// In variants, if we add any property outside the extend, we will OVERWRITE, if we don't want that, we apply changes on extend
// If something doesn't work, we probably have to add it in the variant object

// Theme is for colors, font-family etc

module.exports = {
  // When making the production build, we can add the paths in the purge array to get rid of the css utilities classes we don't use
  // purge: [*./src/**/*.jsx ], look for any file that ends with jsx
  // purge only looks for STRINGS, so be careful when using dynamic classes, use objects with the entire string instead
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // THIS OUTPUT IS brand brand-light brand-dark
        brand: {
          DEFAULT: "#0fa9e6",
          light: "#0fa9e6",
          dark: "#0c87b8",
        },
        // brand: "#0fa9e6",
        // "brand-light": "#3fbaeb",
        // "brand-dark": "#0c87b8"
      },
      fontFamily: {
        headline: "Poppins, sans-serif", // font-headline;
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  // Look for plugins for forms for example
  plugins: [],
};
