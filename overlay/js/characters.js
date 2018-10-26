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
  "bayonetta": {
    "value": "bayonetta",
    "name": "bayonetta",
    "names": [
      "bayo",
      "bayonetta",
    ],
    
  },
  "bowser": {
    "value": "bowser",
    "name": "united arab emirates",
    "names": [
      "bowser",
    ],
  },  
  "bowser jr": {
    "value": "bj",
    "name": "bowser jr",
    "names": [
      "bj",
      "bowser jr"
    ],
  },
  "captain falcon": {
    "value": "falcon",
    "name": "captain falcon",
    "names": [
      "falcon",
      "captain falcon",
      "cf",
    ],
  },
  "charizard": {
    "value": "charizard",
    "name": "charizard",
    "names": [
      "charizard",
      "zard"
    ],
  },
  "cloud": {
    "value": "cloud",
    "name": "cloud",
    "names": [
      "cloud",
      "broken",
    ],
  },
  "corrin": {
    "value": "corrin",
    "name": "corrin",
    "names": [
      "corrin",
    ],
  },
  "dark pit": {
    "value": "dp",
    "name": "dark pit",
    "names": [
      "dark pit",
      "dp",
      "edgy pit",
    ],
  },
  "diddy kong": {
    "value": "diddy",
    "name": "diddy kong",
    "names": [
      "diddy kong",
      "diddy"
    ],
  },
  "donkey kong": {
    "value": "dk",
    "name": "donkey kong",
    "names": [
      "donkey kong",
      "dk"
    ],
  },
  "dr. mario": {
    "value": "doc",
    "name": "dr. mario",
    "names": [
      "dr. mario",
      "doc",
      "doctor mario"
    ],
  },
  "duck hunt": {
    "value": "dh",
    "name": "dunk hunt",
    "names": [
      "dh",
      "duck hunt",
    ],
  },
  "falco": {
    "value": "falco",
    "name": "falco",
    "names": [
      "falco"
    ],
  },
  "fox": {
    "value": "fox",
    "name": "fox",
    "names": [
      "fox",
      "honest"
    ],
  },
  "ganondorf": {
    "value": "ganon",
    "name": "ganondorf",
    "names": [
      "ganon",
      "ganondorf"
    ],
  },
  "greninja": {
    "value": "greninja",
    "name": "greninja",
    "names": [
      "greninja"
    ],
  },
  "ike": {
    "value": "ike",
    "name": "ike",
    "names": [
      "ike",
    ],
  },
  "jigglypuff": {
    "value": "jiggs",
    "name": "jigglypuff",
    "names": [
      "jigglypuff",
      "jiggs"
    ],
  },
  "king dedede": {
    "value": "ddd",
    "name": "bking dedede",
    "names": [
      "dedede",
      "king dedede",
      "ddd"
    ],
  },
  "kirby": {
    "value": "kirby",
    "name": "kirby",
    "names": [
      "kirby"
    ],
  },
  "link": {
    "value": "link",
    "name": "link",
    "names": [
      "link"
    ],
  },
  "little mac": {
    "value": "little mac",
    "name": "little mac",
    "names": [
      "little mac",
      "lm"
    ],
  },
  "lucario": {
    "value": "lucario",
    "name": "lucario",
    "names": [
      "lucario"
    ],
  },
  "lucas": {
    "value": "lucas",
    "name": "lucas",
    "names": [
      "lucas"
    ],
  },
  "lucina": {
    "value": "lucina",
    "name": "lucina",
    "names": [
      "lucina"
    ],
  },
  "luigi": {
    "value": "luigi",
    "name": "luigi",
    "names": [
      "luigi"
    ],
  },
  "mario": {
    "value": "mario",
    "name": "mario",
    "names": [
      "mario"
    ],
  },
  "marth": {
    "value": "marth",
    "name": "marth",
    "names": [
      "marth"
    ],
  },
  "mega man": {
    "value": "mm",
    "name": "mega man",
    "names": [
      "mega man",
      "mm"
    ],
  },
  "meta knight": {
    "value": "mk",
    "name": "meta knight",
    "names": [
      "mk",
      "meta knight"
    ],
  },
  "mewtwo": {
    "value": "mewtwo",
    "name": "mewtwo",
    "names": [
      "mewtwo",
      "m2"
    ],
  },
  "mii brawler": {
    "value": "brawler",
    "name": "mii brawler",
    "names": [
      "brawler",
      "mii brawler"
    ],
  },
  "mii gunner": {
    "value": "gunner",
    "name": "mii gunner",
    "names": [
      "gunner",
      "mii gunner"
    ],
  },
  "mii swordfighter": {
    "value": "swordfighter",
    "name": "swordfighter",
    "names": [
      "swordfighter",
      "mii swordfighter"
    ],
  },
  "mr. game & watch": {
    "value": "g&w",
    "name": "mr. game & watch",
    "names": [
      "mr. game & watch",
      "g&w"
    ],
  },
  "ness": {
    "value": "ness",
    "name": "ness",
    "names": [
      "ness"
    ],
  },
  "olimar": {
    "value": "olimar",
    "name": "olimar",
    "names": [
      "olimar"
    ],
  },
  "pacman": {
    "value": "pacman",
    "name": "pacman",
    "names": [
      "pacman"
    ],
  },
  "palutena": {
    "value": "palu",
    "name": "palutena",
    "names": [
      "palu",
      "palutena"
    ],
  },
  "peach": {
    "value": "peach",
    "name": "peach",
    "names": [
      "peach"
    ],
  },
  "pikachu": {
    "value": "pika",
    "name": "pikachu",
    "names": [
      "pika",
      "pikachu"
    ]  
  },
  "pit": {
    "value": "pit",
    "name": "pit",
    "names": [
      "pit"
    ],
  },
  "rob": {
    "value": "rob",
    "name": "rob",
    "names": [
      "rob",
      "r.o.b."
    ],
  },
  "robin": {
    "value": "robin",
    "name": "robin",
    "names": [
      "robin"
    ],
  },
  "rosalina": {
    "value": "rosa",
    "name": "rosalina",
    "names": [
      "rosa",
      "rosalina"
    ],
  },
  "roy": {
    "value": "roy",
    "name": "roy",
    "names": [
      "roy"
    ],
  },
  "ryu": {
    "value": "ryu",
    "name": "ryu",
    "names": [
      "ryu"
    ],
  },
  "samus": {
    "value": "samus",
    "name": "samus",
    "names": [
      "samus"
    ],
  },
  "sheik": {
    "value": "sheik",
    "name": "sheik",
    "names": [
      "sheik"
    ],
  },
  "shulk": {
    "value": "shulk",
    "name": "shulk",
    "names": [
      "shulk"
    ],
  },
  "sonic": {
    "value": "sonic",
    "name": "sonic",
    "names": [
      "sonic"
    ],
  },
  "toon link": {
    "value": "toon link",
    "name": "toon link",
    "names": [
      "toon link"
    ],
  },
  "villager": {
    "value": "villager",
    "name": "villager",
    "names": [
      "villager"
    ],
  },
  "wario": {
    "value": "wario",
    "name": "wario",
    "names": [
      "wario"    
    ],
  },
  "wii fit trainer": {
    "value": "wft",
    "name": "wii fit trainer",
    "names": [
      "wii fit trainer",
      "wft"
    ],
  },
  "yoshi": {
    "value": "yoshi",
    "name": "yoshi",
    "names": [
      "yoshi"
    ],
  },
  "zelda": {
    "value": "zelda",
    "name": "zelda",
    "names": [
      "zelda"
    ],
  },
  "zero suit samus": {
    "value": "zss",
    "name": "zero suit samus",
    "names": [
      "zero suit samus",
      "zss"
    ],
  },
  "oregon": {
    "value": "or",
    "name": "oregon",
    "names": [
      "or"
    ],
  },
  "wa": {
    "value": "wa",
    "name": "washington",
    "names": [
      "wa"
    ],
  },
    "california": {
    "value": "ca",
    "name": "california",
    "names": [
      "ca"
    ],
  },
  "canada": {
    "value": "can",
    "name": "canada",
    "names": [
      "canada",
      "can"
    ],
  },
  "us": {
    "value": "us",
    "name": "us",
    "names": [
      "us"
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