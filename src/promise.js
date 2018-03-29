"use strict";

function asyncFunc(func) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const data = func();
        if (data.err) {
          reject(data.err);
        } else {
          resolve(data);
        }
      } catch (e) {
        reject(e);
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

function getAsyncCreators() {
  return asyncFunc(getCreators).then(data => data.creators);
}

function getAsyncLanguages() {
  return asyncFunc(getLanguages).then(data => data.languages);
}

function getAsyncLanguageCreator(language) {
  let lang;
  return getAsyncLanguages()
    .then(languages => {
      lang = languages.find(lang => {
        return lang.name === language;
      });
      if (lang) {
        return getAsyncCreators();
      } else {
        return Promise.reject("Unknow language");
      }
    })
    .then(creators => {
      const creator = creators.find(creator => {
        return creator.id === lang.creator;
      });
      if (creator) {
        return creator;
      } else {
        return Promise.reject("Unknow creator");
      }
    });
}

function getAllData() {
  return Promise.all([getAsyncLanguages(), getAsyncCreators()]).then(
    ([languages, creators]) => {
      return { languages, creators };
    }
  );
}
