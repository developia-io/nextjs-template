import CypressTestComponent from "@/components/common/CypressTestComponent";

describe("CypressComponentTest", () => {
  it("should render CypressTestComponent", () => {
    cy.mount(<CypressTestComponent />);
    cy.get("span").contains("CYPRUS TEST COMPONENT");
  });
  it("should log to the console when the button is clicked", () => {
    cy.mount(<CypressTestComponent />);
    cy.get("button").contains("Click me").should("exist").click();
    cy.log("Button clicked");
  });
});
