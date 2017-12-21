function asyncFunc(func, callback) {
  setTimeout(callback(func()), 200);
}

function getCreators() {
  return {
    err: undefined,
    creators: [
      { id: 1, name: "Brendan" },
      { id: 2, name: "Guido" },
      { id: 3, name: "Evan" }
    ]
  };
}

function getLanguages() {
  return {
    err: undefined,
    languages: [
      { id: 1, name: "Javascript", creator: 1 },
      { id: 2, name: "Python", creator: 2 },
      { id: 3, name: "Elm", creator: 3 }
    ]
  };
}

function getAsyncCreators(callback) {
  asyncFunc(getCreators, function(data) {
    callback(data.err, data.creators);
  });
}

function getAsyncLanguageCreator(language, callback) {
  asyncFunc(getLanguages, function(data) {
    var lang = data.languages.find(function(lang) {
      return lang.name === language;
    });
    if (lang) {
      getAsyncCreators(function(err, data) {
        var creator = data.find(function(creator) {
          return creator.id === lang.creator;
        });
        callback(undefined, creator);
      });
    } else {
      callback("Unknow language", undefined);
    }
  });
}

function getAllData(callback) {
  const allData = {};
  asyncFunc(getLanguages, function(data) {
    allData.languages = data.languages;
    if (allData.creators) {
      callback(err, allData);
    }
  });
  getAsyncCreators(function(err, data) {
    allData.creators = data;
    if (allData.languages) {
      callback(err, allData);
    }
  });
}
