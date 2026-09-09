const fs = require("fs");
const path = require("path");
const vm = require("vm");

const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(__dirname, "..", "data", "world-map.js"), "utf8"), context);
vm.runInContext(fs.readFileSync(path.join(__dirname, "..", "data", "geography.js"), "utf8"), context);

const items = context.window.DISEASE_GEOGRAPHY;
const countries = context.window.WORLD_COUNTRY_PATHS;
if (!Array.isArray(countries) || countries.length < 170) throw new Error("World map must contain Natural Earth country geometry.");
countries.forEach((country) => {
  if (!country.name || !country.d || !/^M/.test(country.d)) throw new Error("Invalid country geometry in world map.");
});
if (!Array.isArray(items) || items.length < 4) throw new Error("Geography data must contain at least four diseases.");
const ids = new Set();
items.forEach((item) => {
  ["id", "disease", "region", "group", "scope", "travelClue", "anchor"].forEach((field) => {
    if (!item[field]) throw new Error(`${item.id || "Unknown item"} is missing ${field}.`);
  });
  if (ids.has(item.id)) throw new Error(`Duplicate geography id: ${item.id}`);
  ids.add(item.id);
  if (!Array.isArray(item.points) || !item.points.length) throw new Error(`${item.id} has no map points.`);
  item.points.forEach((point) => {
    if (!Array.isArray(point) || point.length !== 2 || point[0] < 0 || point[0] > 1000 || point[1] < 0 || point[1] > 500) {
      throw new Error(`${item.id} has an invalid map point.`);
    }
  });
});

console.log(JSON.stringify({ countries: countries.length, diseases: items.length, groups: new Set(items.map((item) => item.group)).size, mapPoints: items.reduce((sum, item) => sum + item.points.length, 0) }, null, 2));
