function asyncFunc(func) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = func();
      if (data.err) {
        reject(data.err);
      } else {
        resolve(data);
      }
    }, 200);
  });
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

export function getAsyncCreators() {
  return asyncFunc(getCreators).then(data => data.creators);
}

export function getAsyncLanguageCreator(language) {
  let lang;
  return asyncFunc(getLanguages)
    .then(data => {
      lang = data.languages.find(lang => {
        return lang.name === language;
      });
      if (lang) {
        return getAsyncCreators();
      } else {
        return Promise.reject("Unknow language");
      }
    })
    .then(data => {
      const creator = data.find(creator => {
        return creator.id === lang.creator;
      });
      if (creator) {
        return creator;
      } else {
        return Promise.reject("Unknow creator");
      }
    });
}

export function getAllData() {
  return Promise.all([asyncFunc(getLanguages), getAsyncCreators()]).then(
    ([{ languages }, creators]) => {
      return { languages, creators };
    }
  );
}
