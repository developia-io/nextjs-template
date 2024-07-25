const sizes: (Cypress.ViewportPreset | [number, number])[] = [
  "iphone-6",
  "ipad-2",
  [1024, 768],
];

describe("Example Home Page Tests", () => {
  sizes.forEach((size) => {
    it(`should display the main elements on ${
      Array.isArray(size) ? `${size[0]}x${size[1]}` : size
    }`, () => {
      cy.visit("http://localhost:3000/");

      if (Array.isArray(size)) {
        cy.viewport(size[0], size[1]);
      } else {
        cy.viewport(size as Cypress.ViewportPreset);
      }

      // Check for main container
      cy.get("main").should("exist");

      // Verify "Get started by editing" text
      cy.contains("Get started by editing").should("be.visible");

      // Ensure the Vercel logo image is present
      cy.get('img[alt="Vercel Logo"]').should("be.visible");

      // Confirm the Next.js logo is visible
      cy.get('img[alt="Next.js Logo"]').should("be.visible");

      // Check for the presence and visibility of links
      const links = [
        { text: "Docs", href: /https:\/\/nextjs\.org\/docs/ },
        { text: "Learn", href: /https:\/\/nextjs\.org\/learn/ },
        {
          text: "Templates",
          href: /https:\/\/vercel\.com\/templates\?framework=next\.js/,
        },
        { text: "Deploy", href: /https:\/\/vercel\.com\/new/ },
      ];

      links.forEach((link) => {
        cy.contains("a", link.text)
          .should("be.visible")
          .and("have.attr", "href")
          .and("match", link.href);
      });
    });
  });
});
