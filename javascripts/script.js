var actionButtonMC = document.getElementsByClassName('action-button-header minecraft')[0]
var actionButtonDS = document.getElementsByClassName('action-button-header discord')[0]

document.addEventListener('DOMContentLoaded', async (e) => {
    let header = document.getElementsByTagName('header')[0]
    console.log("Documento caricato")
    setTimeout(() => {
        header.style.backgroundColor = "rgb(128 128 128 / 0%)"
        /*header.style.backgroundBlendMode = ""*/
    }, 1000);
    
})

updatePlayers(actionButtonMC.getElementsByTagName('p')[1])

updateOnlineDsMembers(actionButtonDS.getElementsByTagName('p')[1])

async function updatePlayers(el) {
    let mc = await getMCServer('stgnetwork.sytes.net')
    console.log(mc)
    //console.log(el.innerHTML.match(/[0-9]/g).join(''))
    el.innerHTML = el.innerHTML.replace(el.innerHTML.match(/[0-9]/g).join(''), mc.players.now)
    //console.log(el.innerHTML = ds.approximate_presence_count)
}

async function updateOnlineDsMembers(el) {
    let ds = await serverDaInvito('trarrCXh3k')
    //console.log(ds)
    el.innerHTML = el.innerHTML.replace(el.innerHTML.match(/[0-9]/g).join(''), ds.approximate_presence_count)
}

async function getMCServer(ip) {
    return await fetch(`https://mcapi.us/server/status?ip=${ip}`).then
        (async (data) => {
            return await data.json()
        })
}

async function serverDaInvito(codInvito) {
    const result = await fetch(`https://discord.com/api/v9/invites/${codInvito}?with_counts=true&with_expiration=true`)
    const ris = await result.json()
    return ris
    //return result.json()
}