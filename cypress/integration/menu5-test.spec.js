function clickNthInMenu(nr) {
  cy.get('.list-group a:nth-child(' + nr + ')').click();
}

describe("Test menu", () => {
  it("should visit home page", () => {
    cy.visit("http://localhost:4200/");
  });

  it("should visit all menu pages", () => {
    for (let round = 2; round <= 6; round++) {
      clickNthInMenu(2);
      cy.get('#all-contacts .col-lg-4:nth-of-type(' + round + ') input[name="ime"]').type('popravek imena');
      cy.get('#all-contacts .col-lg-4:nth-of-type(' + round + ') a').click();
      cy.get('input[name="priimek"]').type('popravek priimka ' + round);
      clickNthInMenu(3);
      cy.get('.table tbody tr:nth-of-type(' + round + ') input[name="opravilo"]').type('popravek opravila ' + round);
      clickNthInMenu(4);
      cy.get('.rounded tbody > tr:nth-child(4) .btn-dark').click();
      clickNthInMenu(5);
      cy.get('.form-group .btn-secondary').click();
      clickNthInMenu(6);
      for (let i = 1; i <= 2; i++) {
        cy.get('.col-md-4:nth-child(' + i + ') input[name="showContent"]').click();
        cy.get('.col-md-4:nth-child(' + i + ') main p:nth-child(2) button').click();
        cy.get('.col-md-4:nth-child(' + i + ') main p:nth-child(5) button').click();
        cy.get('.col-md-4:nth-child(' + i + ') input[name="showContent"]').click();
      }
      cy.get('input[name="inputField"]').type('dopis');
      cy.get('.col-md-4:nth-child(3) .btn').click();
    }
  });

  it("should go home", () => {
    clickNthInMenu(1);
  });
});
