context("Actions", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should have a title", () => {
    cy.get("h1")
      .should("contain.text", "List of deals");
  });
});
