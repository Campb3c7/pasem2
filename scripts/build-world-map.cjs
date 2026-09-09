const fs = require("fs");
const path = require("path");

const sourcePath = process.argv[2];
if (!sourcePath) throw new Error("Pass the Natural Earth countries GeoJSON path.");
const geojson = JSON.parse(fs.readFileSync(sourcePath, "utf8"));

function project(coordinate) {
  return [
    Number(((coordinate[0] + 180) / 360 * 1000).toFixed(1)),
    Number(((90 - coordinate[1]) / 180 * 500).toFixed(1))
  ];
}

function ringPath(ring) {
  let previous = null;
  let output = "";
  ring.forEach((coordinate) => {
    const point = project(coordinate);
    const split = previous && Math.abs(point[0] - previous[0]) > 500;
    output += `${!previous || split ? "M" : "L"}${point[0]} ${point[1]}`;
    previous = point;
  });
  return `${output}Z`;
}

function geometryPath(geometry) {
  const polygons = geometry.type === "Polygon" ? [geometry.coordinates] : geometry.coordinates;
  return polygons.map((polygon) => polygon.map(ringPath).join("")).join("");
}

const countries = geojson.features
  .filter((feature) => feature.geometry && feature.properties.ADM0_A3 !== "ATA")
  .map((feature) => ({
    name: feature.properties.NAME || feature.properties.ADMIN || "Country",
    d: geometryPath(feature.geometry)
  }));

const output = `(function () {\n  "use strict";\n  // Derived from Natural Earth 1:110m Admin 0 Countries (public domain).\n  window.WORLD_COUNTRY_PATHS = ${JSON.stringify(countries)};\n}());\n`;
fs.writeFileSync(path.join(__dirname, "..", "data", "world-map.js"), output, "utf8");
console.log(`Generated ${countries.length} country paths.`);
