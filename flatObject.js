const obj1 = {
    a: 1,
    b: {
        c: 2,
        d: 3,
        e: {
            x: 10,
            y: 20,
        },
    },
    aa: 11,
};

// // const obj2 = { a: 1, "b.c": 2, "b.d": 3, "b.e.x": 10, "b.e.y": 20 };

const flat = (obj, key) => {
    let result = {};
    key = key ? key + "." : "";

    for (let k in obj) {
        if (typeof obj[k] === "object") {
            result = { ...result, ...flat(obj[k], key + k) };
        } else {
            result[key + k] = obj[k];
        }
    }
    return result;
};

console.log(flat(obj1));
