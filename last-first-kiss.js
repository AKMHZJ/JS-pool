const first = (n) => n[0];

const last = (n) => n[n.length-1];

const kiss = (n) => {
    return [last(n),first(n)];
};
