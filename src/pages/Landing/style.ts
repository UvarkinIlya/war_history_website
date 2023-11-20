

export function h2() {
    return({
        fontVariant: 'normal',
        fontStyle: 'normal'
    })
}

export function Background() {
    return({
        backgroundColor: '#00150B',
        fontFamily: 'Fortuna',
    })
}

export function First_block() {
    return({
        width: '94vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        marginLeft: '5vw',
    })
}

export function Logo_text_block() {
    return({
    margin: '0 0 0 20px',
    fontSize: '10vh',
    color: '#e2e2e2',
    })
}

export function Header () {
    return({
        fontSize: '48px',
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 'normal'
    })
}

export function First_img() {
    return({
        position: 'absolute',
        left: '60vw',
        width: '15vw',
        top: '10vh',
        borderRadius: '30px',
        boxShadow: '10px 0px 28px 0px rgba(161, 161, 161, 0.25)'
    }as const)
}

export function  Second_img() {
    return({
        position: 'absolute',
        left: '70vw',
        width: '20vw',
        top: '75vh',
        borderRadius: '30px',
        boxShadow: '10px 4px 28px 0px rgba(161, 161, 161, 0.25)',
    }as const)
}

export function Third_img() {
    return({
    position: 'absolute',
    width: '40vw',
    top: '30vh',
    left: '55vw',
    borderRadius: '30px',
    boxShadow: '10px 4px 28px 0px rgba(161, 161, 161, 0.25)'
} as const)
}

export function Second_block () {
    return({
        width: '90vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        marginLeft: '5vw',
        marginRight: '5vw'
    })
}

export function Second_block_text() {
    return({
        color: '#e2e2e2'
    })
}



