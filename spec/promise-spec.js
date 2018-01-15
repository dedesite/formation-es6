import * as prom from "../src/promise";

describe("Promise", function() {
  it("Return asynchronously creators's names", function() {
    return prom.getAsyncCreators().then(creators => {
      expect(creators).toEqual([
        { id: 1, name: "Brendan" },
        { id: 2, name: "Guido" },
        { id: 3, name: "Evan" }
      ]);
    });
  });

  // it("Return an error on probleme when retrieving data", function() {
  //   // Mock getCreators
  //   const realFunc = prom.getCreators;
  //   getCreators = function() {
  //     return { err: "Error when retriving data", creators: undefined };
  //   };

  //   return prom
  //     .getAsyncCreators()
  //     .then(creators => {
  //       getCreators = realFunc;
  //     })
  //     .catch(err => {
  //       expect(err).toBe("Error when retriving data");
  //       getCreators = realFunc;
  //     });
  // });

  it("Return the creator of a specified language", function() {
    return prom.getAsyncLanguageCreator("Javascript").then(creator => {
      expect(creator).toEqual({ id: 1, name: "Brendan" });
    });
  });

  it("Return an error if no language found", function() {
    return prom.getAsyncLanguageCreator("Ruby").catch(err => {
      expect(err).toBe("Unknow language");
    });
  });

  it("Return all the datas", function() {
    return prom.getAllData().then(data => {
      expect(data).toEqual({
        languages: [
          { id: 1, name: "Javascript", creator: 1 },
          { id: 2, name: "Python", creator: 2 },
          { id: 3, name: "Elm", creator: 3 }
        ],
        creators: [
          { id: 1, name: "Brendan" },
          { id: 2, name: "Guido" },
          { id: 3, name: "Evan" }
        ]
      });
    });
  });
});
