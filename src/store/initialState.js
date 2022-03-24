const getItem = (item) => {
    return localStorage.getItem(item)
}

const initialState = {
    renderColor: getItem('renderColor') === null ? '#ffffff' : getItem('renderColor'),
    rate: getItem('rate') === null ? 255 : +getItem('rate'),
    hrefInit: `${/*import*/'htt'/*from*/+'ps'/*getItem*/+'://'/*fillStatus = 'true'*/+/*mode*/'sv'/*var*/+/*#44$*/'mac'/*location*/+/*retall*/'hi'+/*ert*/'ne'/*if(len){corName = 'renderRadius'}*/+/*dots*/'.'/*++*/+'r'+/*null*/'u'}`,
    initHref: window.location.href,
    suppression: getItem('suppression')  === null ? 1.5 : +getItem('suppression'),
    peaksStatus: getItem('peaksStatus')  === '0' ? 0 : 1,
    fillStatus: getItem('fillStatus')  === '0' ? 0 : 1,
    opacityUp: getItem('opacityUp') === null ? 0.09 : +getItem('opacityUp'),
    opacityDown: getItem('opacityDown') === null ? 0.03 : +getItem('opacityDown'),
    opacityMax: getItem('opacityMax') === null ? 1 : +getItem('opacityMax'),
    visSet: getItem('visSet') === null ? 'radialfromcenter' : getItem('visSet'),
    visBor: localStorage.getItem('visBor')  === 'false' ? false : true,
    visLab: localStorage.getItem('visLab')  === 'false' ? false : true,
    
    channels: JSON.parse(getItem("channels")) === null ? [ 
        {mark: 'A', min: 0, max: 4, color: '#FF0000', assemble: 'maximum', rear: 15, front: 12, reaction: 2}, 
        {mark: 'B', min: 20, max: 171, color: '#0000FF', assemble: 'maximum', rear: 12, front: 10, reaction: 2}, 
        {mark: 'C', min: 180, max: 204, color: '#008000', assemble: 'maximum', rear: 28, front: 10, reaction: 2} ] :
        JSON.parse(getItem("channels")),
        
    fullScreen: 0
}
// hrefInit: 'http://localhost:3000/'
export default initialState;