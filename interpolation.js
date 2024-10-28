function interpolation({ step, start, end, callback, duration }) {
    let distance = (end - start) / step


    let differential = duration / step

    let move = start
    let mmove = differential
    let stop = duration
    let time = setInterval(() => {
        if (duration === 0) {
            clearTimeout(time)
            return
        }

        callback([move, mmove])

        if (mmove + differential <= stop) {

            move += distance
            mmove += differential
        } else {
            clearTimeout(time)
            return
        }

        if (duration - differential >= 0) {
            duration -= differential
        }


    }, differential);
}