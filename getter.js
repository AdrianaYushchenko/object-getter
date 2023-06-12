const obj = {
  a: {
    b: {
      c: "d",
    },
    e: "f",
  },
};

const get = (obj, path, defaultValue) => {
  return path
    .split(".")
    .reduce((prev, curr) => prev?.[curr] ?? defaultValue, obj);
};

console.log(get(obj, "a.b"));
console.log(get(obj, "a.b.c"));
console.log(get(obj, "a.e"));
console.log(get(obj, "x.x.e"));
console.log(get(obj, "a.x.e", true));
console.log(get(obj, "a.x.e", "My default value"));
