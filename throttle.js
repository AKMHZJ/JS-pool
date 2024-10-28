function throttle(func, wait = 0) {
    let thr = true
    return (...args) => {
        if (!thr) {
            return
        }
        thr = false
        func(...args)
        setTimeout(() => { thr = true }, wait);
    }
}


function opThrottle(func, wait = 0, option = {}) {
    let opthr = true;

    return (...args) => {

        if (!opthr) {
            return
        }

        opthr = false

        if (option?.leading) {
            func(...args);
        }

        setTimeout(() => {
            if (!option?.leading && option?.trailing) {
                func(...args)
            }
            opthr = true
        }, wait);
    }
}