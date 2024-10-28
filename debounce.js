function debounce(fn, wait){
    let deb;
    return function(...args){
        clearTimeout(deb)
        deb = setTimeout(() => fn.apply(this, args), wait)
    }
}

function opDebounce(fn, wait, leading=false){
    let opdeb;
    let called = false;

    return function(...args){
        
        if (leading && !opdeb && !called) {
            fn.apply(this, args);
            called = true;
        }
        
        clearTimeout(opdeb)

        opdeb = setTimeout(() => {
            opdeb = null;
            if (!leading){
                fn.apply(this, args)
            }
            called = false;
        }, wait);
    }
}