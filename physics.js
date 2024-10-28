const getAcceleration = (obj) => {
    if (obj.f && obj.m) return obj.f/obj.m;
    else if (obj.Δv && obj.Δt) return obj.Δv/obj.Δt;
    else if (obj.d && obj.t) return 2*(obj.d/obj.t**2);
    else return "impossible";
};

// console.log(getAcceleration({
//     f: 10,
//     m: 5,
//     Δv: 100,
//     Δt: 50,
//     t:1,
//     d: 10
//   }))