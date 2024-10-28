export const build = (TotalBricks) => {
    let column = 1;
    for (let i = 1; i <= TotalBricks; i++) {
        setTimeout(() => {
            const brick = document.createElement('div');
            brick.id = `brick-` + i;

            if (column === 2) {
                brick.dataset.foundation = 'true';
            }

            document.body.appendChild(brick);

            column = column % 3 + 1;
        }, i * 100);
    }
}

export const repair = (...ids) => {
    ids.forEach(id => {
        const brick = document.getElementById(id);
        if (brick.dataset.foundation === 'true') {
            brick.dataset.repaired = 'in progress';
        } else {
            brick.dataset.repaired = 'true';
        }
    });
}

export const destroy = () => {
    const GetName = document.getElementsByTagName('div')
    GetName[GetName.length-1].remove();
}