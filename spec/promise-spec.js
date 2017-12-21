describe("Promise", function() {
  it("Return asynchronously creators's names", function(done) {
    getAsyncCreators((err, creators) => {
      expect(err).toBeUndefined();
      expect(creators).toEqual([
        { id: 1, name: "Brendan" },
        { id: 2, name: "Guido" },
        { id: 3, name: "Evan" }
      ]);
      done();
    });
  });

  it("Return an error on probleme when retrieving data", function(done) {
    const realFunc = getCreators;

    // Mock getCreators
    getCreators = function() {
      return { err: "Error when retriving data", creators: undefined };
    };
    getAsyncCreators((err, users) => {
      expect(err).toBe("Error when retriving data");
      expect(users).toBeUndefined();
      getCreators = realFunc;
      done();
    });
  });

  it("Return the creator of a specified language", function(done) {
    getAsyncLanguageCreator("Javascript", (err, creator) => {
      expect(err).toBeUndefined();
      expect(creator).toEqual({ id: 1, name: "Brendan" });
      done();
    });
  });

  it("Return an error if no language found", function(done) {
    getAsyncLanguageCreator("Ruby", (err, creator) => {
      expect(err).toBe("Unknow language");
      expect(creator).toBeUndefined();
      done();
    });
  });

  it("Return all the datas", function(done) {
    getAllData((err, data) => {
      expect(err).toBeUndefined();
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
      done();
    });
  });
});
