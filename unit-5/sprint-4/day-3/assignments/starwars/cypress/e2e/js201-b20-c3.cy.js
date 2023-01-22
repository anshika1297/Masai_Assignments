import data from "../../submissionData.json"; // do not create this file
//let data = [{ submission_link: "http://localhost:8080/", id: 67890 }];
import "cypress-localstorage-commands";
describe("Testing starwars web application", function () {
  let acc_score = 1;

  data.map(({ submission_link: url, id }) => {
    if (url.charAt(url.length - 1) != "/") {
      url = url + "/";
    }
    beforeEach(() => {
      cy.restoreLocalStorage();
    });

    afterEach(() => {
      cy.saveLocalStorage();
    });
    //  - `https://swapi.dev/api/people/?search={your_search_term}`

    it(`when we search for any character Fecth request should be made and results should be visible`, () => {
      cy.intercept("GET", "https://swapi.dev/api/people/?search=war").as(
        "search"
      );
      cy.visit(url);
      cy.get("#searchip").clear().type("war");
      cy.wait("@search").then(() => {
        cy.get("#midcontainer").children().should("have.length", 1);
      });
      cy.then(() => {
        acc_score += 3;
      });
    });

    it(`when we search for any character and clicked on it should add data localstorage with key "details"`, () => {
      cy.visit(url);
      cy.get("#searchip").clear().type("war");
      cy.wait(3000);
      cy.get("#midcontainer").children().first().click();
      cy.wait(500);
      cy.getLocalStorage("details").should(
        "deep.equal",
        JSON.stringify({
          name: "Wicket Systri Warrick",
          height: "88",
          mass: "20",
          hair_color: "brown",
          skin_color: "brown",
          eye_color: "brown",
          birth_year: "8BBY",
          gender: "male",
          homeworld: "https://swapi.dev/api/planets/7/",
          films: ["https://swapi.dev/api/films/3/"],
          species: ["https://swapi.dev/api/species/9/"],
          vehicles: [],
          starships: [],
          created: "2014-12-18T11:21:58.954000Z",
          edited: "2014-12-20T21:17:50.369000Z",
          url: "https://swapi.dev/api/people/30/",
        })
      );
      cy.then(() => {
        acc_score += 3;
      });
    });

    it(`verify whether data rendered to dom or not when we visit detail page`, () => {
      cy.visit(url + "detail.html");
      cy.get("#birthyear").should("have.text", "8BBY");
      cy.get("#gender").should("have.text", "male");
      cy.get("#height").should("have.text", "88");
      cy.get("#eyecolor").should("have.text", "brown");
      cy.get("#mass").should("have.text", "20");
      cy.get("#haircolor").should("have.text", "brown");
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Check goback is working fine or not", () => {
      cy.get("button").click();
      cy.wait(2000);
      cy.location("pathname").should("eq", "/index.html");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it(`generate score`, () => {
      //////////////
      let result = {
        id,
        marks: acc_score,
      };
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});
