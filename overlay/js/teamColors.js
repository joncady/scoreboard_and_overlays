(function() {

  var iso = {};

  // global on the server, window in the browser
  var root = this,
    previous_iso = root.iso;

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = iso;
  } else {
    root.iso = iso;
  }

  iso.noConflict = function() {
    root.iso = previous_iso;
    return iso;
  };

  iso.version = '0.1';

  iso.countries = {
  "blue": {
    "value": "blue",
    "name": "blue",
    "names": [
      "blue"
    ],  
  },
    "red": {
    "value": "red",
    "name": "red",
    "names": [
      "red"
    ],  
  },  
  "yellow": {
    "value": "yellow",
    "name": "yellow",
    "names": [
      "yellow"
    ],  
  },
  "green": {
    "value": "green",
    "name": "green",
    "names": [
      "green"
    ],  
  }
}   

  iso.findCountryByCode = function(code) {
    for (var prop in iso.countries) {
      if (iso.countries.hasOwnProperty(prop)) {
        if (iso.countries[prop].alpha2 == code.toLowerCase() || iso.countries[prop].alpha3 == code.toLowerCase()) return iso.countries[prop];
      }
    }
  };

  iso.findCountryByNumber = function(num) {
    num = parseInt(num, 10);
    for (var prop in iso.countries) {
      if (iso.countries.hasOwnProperty(prop)) {
        if (parseInt(iso.countries[prop].number, 10) == num) return iso.countries[prop];
      }
    }
  };

  iso.findCountryByName = function(name) {
    for (var prop in iso.countries) {
      if (iso.countries.hasOwnProperty(prop)) {
        if (iso.countries[prop]['name'] == name.toLowerCase()) return iso.countries[prop];
        else if (iso.countries[prop]['names'] && iso.countries[prop]['names'].indexOf(name.toLowerCase()) > -1) return iso.countries[prop];
      }
    }
  };

  iso.findCountriesByRegion = function(region) {
    var results = [];

    for (var prop in iso.countries) {
      if (iso.countries.hasOwnProperty(prop)) {
        if (iso.countries[prop]['region'] == region) {
          results.push(iso.countries[prop]);
        }
      }
    }
    if (!results.length) return undefined;
    return results;
  };

  iso.getSimpleCountryList = function() {
    var results = [];

    for(var prop in iso.countries) {
      results.push({
        value: iso.countries[prop].value,
        name: iso.countries[prop].name
      });
    }

    return results.sort(function(a,b) {
      if (a.name < b.name)  return -1;
      if (a.name > b.name)  return 1;
      return 0;
    });
  };

  iso.findCurrency = function(currency) {
    for (var prop in iso.currencies) {
      if (iso.currencies.hasOwnProperty(prop)) {
        if (iso.currencies[prop]['value'] == currency) return iso.currencies[prop];
      }
    }
  };

}());