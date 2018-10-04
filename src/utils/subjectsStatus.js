export const SUBJECT_STATUS = {
    OPEN: '0',
    IN_PROGRESS: '1',
    CLOSE: '2'
}

export const getStatusString = id => {
    switch(id) {
        case SUBJECT_STATUS.CLOSE:
            return 'Fechada'
        case SUBJECT_STATUS.IN_PROGRESS:
            return 'Em Andamento'
        case SUBJECT_STATUS.OPEN:
            return 'Matrículas Abertas'
        default:
            return 'N/A'
    }
}

