describe("Example Home Page Tests", () => {
  it("should display the main elements", () => {
    cy.visit("http://localhost:3000/");
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
