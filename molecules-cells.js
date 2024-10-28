function RNA(dna) {
    let rna = '';
    for (let i = 0; i < dna.length; i++) {
        let dnaBase = dna[i];
        switch(dnaBase) {
            case 'G':
                rna += 'C';
                break;
            case 'C':
                rna += 'G';
                break;
            case 'T':
                rna += 'A';
                break;
            case 'A':
                rna += 'U';
                break;
        }
    }
    return rna;
}


function DNA(rna) {
    let dna = '';
    for (let i = 0; i < rna.length; i++) {
        let rnaBase = rna[i];
        switch(rnaBase) {
            case 'C':
                dna += 'G';
                break;
            case 'G':
                dna += 'C';
                break;
            case 'A':
                dna += 'T';
                break;
            case 'U':
                dna += 'A';
                break;
        }
    }
    return dna;
}

// console.log(DNA('GCTACCGA'))

// console.log(RNA('CGAUUAGC'))