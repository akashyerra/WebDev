const myObject = {
    js : "JavaScript",
    cpp : "C++",
    rb : "ruby",
    swift : "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} :-- ${myObject[key]}`);
}

const dc = ["flash", "superman", "batman", "wonderwomen"];
for (const key in dc) {
    console.log(dc[key]);
}

const map = new Map();
map.set("IN", "India");
map.set("UAE", "United Arab Emirates");
map.set("FR", "France");

for (const key in map) {
    console.log(key)
}