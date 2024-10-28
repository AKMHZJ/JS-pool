const sign = (n) => {
    if (n > 0){
        return 1
    } else if (n < 0){
        return -1
    } else {
        return 0
    }
};

const sameSign = (n,m) => {
    if (n >0 && m > 0 || n <0 && m < 0){
        return true;
    } else if (n == 0 && m == 0){
        return true;
    } else {
        return false;
    }
};
