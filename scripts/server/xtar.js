/// => {import} <= \\\
import { Player, world, Location, system } from '@minecraft/server'
import { PHx } from './custom/conf/xtar.js'
import { ListaCMD, CmdA1, CmdA2, CmdA3, CmdA4, CmdA5, CmdA6, CmdA7, CmdA8, CmdA9, CmdA10, CmdA11, CmdA12, CmdA13, CmdA14, CmdA15, CmdA16, xTartHelpMessage } from './custom/xtar.js'

/// => {Data} <= \\\
let reply = []

function sHome(msg) {
    let srcPlayer = msg.sender;
    let args_ = msg.message.slice(PHx.length).trim().split(' ')
    let command = args_.shift().toLowerCase()
    let args = args_.join('_').toLowerCase()
    let player = srcPlayer.name ?? srcPlayer.nameTag
    msg.cancel = true

    if (ListaCMD.includes(command) && args.length <= 0) {
        runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§cWajib memasukkan nama" } ] }`, srcPlayer.dimension)
        return
    }

    let playerX = Math.floor(srcPlayer.location.x)
    let playerY = Math.floor(srcPlayer.location.y)
    let playerZ = Math.floor(srcPlayer.location.z)
    let playerDimension = currentDimension(srcPlayer)
    let playerDimId = dimToId(playerDimension)
    let playerRotX = srcPlayer.rotation.x.toFixed(3)
    let playerRotY = srcPlayer.rotation.y.toFixed(3)
    let getHomeTag = srcPlayer.getTags().join(", ")
    let homeReg = new RegExp(`§4H_${args}D_(\\d+)X_(-\\d+|\\d+)Y_(-\\d+|\\d+)Z_(-\\d+|\\d+)RX_(-\\d+|\\d+)\\.(-\\d+|\\d+)RY_(-\\d+|\\d+)\\.(-\\d+|\\d+)§r`)
    let homeNamesReg = /(?<=§4H_).+?(?=D_(\d+)X_(-\d+|\d+)Y_(-\d+|\d+)Z_(-\d+|\d+)RX_(-\d+|\d+)\.(\d+)RY_(-\d+|\d+)\.(\d+)§r)/g
    let homeFind = getHomeTag.match(homeReg)
    let homeTagX = 0
    let homeTagY = 0
    let homeTagZ = 0
    let homeRx = 0
    let homeRy = 0
    let homeDimension = 0
    let allHomeName = ['Ž']
    let homeName = "error~"
    let homeDimensionName = "overworld"

    if (homeFind != null) {
        homeTagX = homeFind[0].match(/(?<=X_)(-\d+|\d+)/g)
        homeTagY = homeFind[0].match(/(?<=Y_)(-\d+|\d+)/g)
        homeTagZ = homeFind[0].match(/(?<=Z_)(-\d+|\d+)/g)
        homeRx = homeFind[0].match(/(?<=RX_)(-\d+|\d+)\.(-\d+|\d+)/g)
        homeRy = homeFind[0].match(/(?<=RY_)(-\d+|\d+)\.(-\d+|\d+)/g)
        homeDimension = homeFind[0].match(/(?<=D_)(-\d+|\d+)/g)
        allHomeName = getHomeTag.match(homeNamesReg)
        homeName = homeFind[0].match(homeNamesReg)
        homeDimensionName = idToDim(homeDimension[0])
    }

    switch (command) {
        case `help`:
            runCmd(`tellraw "${player}" { "rawtext": [ { "text": "${xTartHelpMessage}" } ] }`, world.getDimension(playerDimension))
            break
        case `${CmdA1}`:
        case `${CmdA2}`:
            if (allHomeName.includes(args)) {
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§cAnda sudah memiliki rumah yang ditambahkan §l${args}§r§c, gunakan l${PHx} pindahkan <Name Home>§r§c untuk memindahkan lokasi" } ] }`, world.getDimension(playerDimension))
            } else {
                srcPlayer.addTag(`§4H_${args}D_${playerDimId}X_${playerX}Y_${playerY}Z_${playerZ}RX_${playerRotX}RY_${playerRotY}§r`)
                runCmd(`particle minecraft:crop_growth_emitter ${playerX} ${playerY} ${playerZ}`, world.getDimension(playerDimension))
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§6Rumah didirikan dengan nama §e${args} §r§6terletak di X:§e${playerX}§6, Y:§e${playerY}§6, Z:§e${playerZ}\n§r§6Usa §e${PHx} ${CmdA4} ${args} §r§6pindah lokasi" } ] }`, world.getDimension(playerDimension))
            }
            break
        case `${CmdA3}`:
        case `${CmdA4}`:
            if (allHomeName.includes(args)) {
                srcPlayer.removeTag(`§4H_${args}D_${homeDimension[0]}X_${homeTagX[0]}Y_${homeTagY[0]}Z_${homeTagZ[0]}RX_${homeRx[0]}RY_${homeRy[0]}§r`)
                srcPlayer.addTag(`§4H_${args}D_${playerDimId}X_${playerX}Y_${playerY}Z_${playerZ}RX_${playerRotX}RY_${playerRotY}§r`)
                runCmd(`particle minecraft:crop_growth_emitter ${playerX} ${playerY} ${playerZ}`, world.getDimension(playerDimension))
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§6Anda telah memindahkan rumah Anda e${args} 6 ke lokasi §6X:§e${playerX}§6, Y:§e${playerY}§6, Z:§e${playerZ}" } ] }`, world.getDimension(playerDimension))
            } else {
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§cRumah bernama §l${args}§r§c tidak ada, Gunakan perintah l${PHx} ${CmdA2} <Name Home> r§c untuk menambahkannya" } ] }`, world.getDimension(playerDimension))
            }
            break
        case `${CmdA5}`:
        case `${CmdA6}`:
            if (allHomeName.includes(args)) {
                runCmd(`particle minecraft:egg_destroy_emitter ${playerX} ${playerY} ${playerZ}`, world.getDimension(playerDimension))
                srcPlayer.teleport(new Location(parseInt(homeTagX[0]) + 0.5, parseInt(homeTagY[0]) + 0.15, parseInt(homeTagZ[0]) + 0.5), world.getDimension(homeDimensionName), parseFloat(homeRx[0]), parseFloat(homeRy[0]))
                runCmd(`particle minecraft:crop_growth_emitter ${homeTagX[0]} ${homeTagY[0]} ${homeTagZ[0]}`, world.getDimension(homeDimensionName))
                runCmd(`playsound beacon.activate @a ${homeTagX[0]} ${homeTagY[0]} ${homeTagZ[0]} 1`, world.getDimension(homeDimensionName))
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§6Anda dikirim ke panggilan rumah Anda §e${args}" } ] }`, world.getDimension(playerDimension))
            } else {
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§cTidak ada panggilan rumah §l${args}§r§c, Gunakan perintah §l${PHx} ${CmdA2} <Name Home> §r§cuntuk menambahkannya" } ] }`, world.getDimension(playerDimension))
            }
            break
        case `${CmdA7}`:
        case `${CmdA8}`:
            if (allHomeName.includes(args)) {
                srcPlayer.removeTag(`§4H_${args}D_${homeDimension[0]}X_${homeTagX[0]}Y_${homeTagY[0]}Z_${homeTagZ[0]}RX_${homeRx[0]}RY_${homeRy[0]}§r`)
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§6Rumah Anda bernama e${args} 6 berhasil dihapus" } ] }`, world.getDimension(playerDimension))
            } else {
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§cRumah bernama §l${args}§r§c tidak ada, Gunakan perintah l${PHx} ${CmdA2} <Name Home> r§c untuk menambahkannya" } ] }`, world.getDimension(playerDimension))
            }
            break
        case `${CmdA9}`:
        case `${CmdA10}`:
            let allHome = getHomeTag.match(homeNamesReg);
            if (allHome == null) {
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§cAnda tidak memiliki rumah yang ditambahkan" } ] }`, world.getDimension(playerDimension))
            } else {
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§6Rumah Anda saat ini adalah: §e${allHome.sort().join(',', '')}" } ] }`, world.getDimension(playerDimension))
            }
            break
        case `${CmdA11}`:
        case `${CmdA12}`:
            if (allHomeName.includes(args)) {
                runCmd(`spawnpoint "${player}" ${homeTagX[0]} ${homeTagY[0]} ${homeTagZ[0]}`, world.getDimension(homeDimensionName))
                runCmd(`particle minecraft:crop_growth_emitter ${homeTagX[0]} ${homeTagY[0]} ${homeTagZ[0]}`, world.getDimension(homeDimensionName))
                runCmd(`particle minecraft:balloon_gas_particle ${homeTagX[0]} ${homeTagY[0]} ${homeTagZ[0]}`, world.getDimension(homeDimensionName))
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§6Titik spawn Anda disetel ke rumah e${args} §r§6 terletak di X:§e${homeTagX[0]}§6, Y:§e${homeTagY[0]}§6, Z: e${homeTagZ[0]}§6\n§7Catatan: Titik spawn dapat diubah dengan mengklik tempat tidur" } ] }`, world.getDimension(playerDimension))
            } else {
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§cRumah bernama §l${args}§r§c tidak ada, Gunakan perintah l${PHx} ${CmdA2} <Name Home> r§c untuk menambahkannya" } ] }`, world.getDimension(playerDimension))
            }
            break
        case `${CmdA13}`:
        case `${CmdA14}`:
            if (allHomeName.includes(args)) {
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§6> Data beranda e${args} 6<\nLokasi: X:§e${homeTagX[0]}§6 Y:§e${homeTagY[0]}§6 Z:§e${homeTagZ[ 0] }§6\nDimensi: §e${homeDimensionName}" } ] }`, world.getDimension(playerDimension))
            } else {
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§cTidak ada rumah bernama l${args}§r§c, Gunakan perintah §l${PHx} ${CmdA2} <Name Home> §r§cpara agregarla" } ] }`, world.getDimension(playerDimension))
            }
            break
        case `${CmdA15}`:
        case `${CmdA16}`:
            let home = getHomeTag.match(homeNamesReg)
            if (home == null) {
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§cAnda tidak memiliki rumah yang ditambahkan" } ] }`, world.getDimension(playerDimension))
            } else {
                reply.push(player)
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§6Yakin ingin menghapus semua rumah Anda?\nKonfirmasi dengan mengetik e${PHx} si§6\nBatalkan dengan mengetik §e${PHx} no" } ] }`, world.getDimension(playerDimension))
            }
            break
        case `si`:
            if (reply.includes(player)) {
                let home = getHomeTag.match(homeNamesReg)
                if (home == null) {
                    let a = reply.indexOf(player)
                    reply.splice(a, 1);
                    runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§cAnda tidak memiliki rumah yang ditambahkan" } ] }`, world.getDimension(playerDimension))
                } else {
                    for (let i = 0; i < home.length; i++) {
                        let regH = new RegExp(`§4H_${home[i]}D_(\\d+)X_(-\\d+|\\d+)Y_(-\\d+|\\d+)Z_(-\\d+|\\d+)RX_(-\\d+|\\d+)\\.(-\\d+|\\d+)RY_(-\\d+|\\d+)\\.(-\\d+|\\d+)§r`)
                        let honame = getHomeTag.match(regH)
                        srcPlayer.removeTag(`${honame[0]}`)
                    }
                    let a = reply.indexOf(player)
                    reply.splice(a, 1)
                    runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§6Semua milikmu telah dihapus §ehome's" } ] }`, world.getDimension(playerDimension))
                }
            } else {
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§cAnda tidak dapat menggunakan perintah ini sekarang" } ] }`, world.getDimension(playerDimension))
            }
            break
        case `no`:
            if (reply.includes(player)) {
                let a = reply.indexOf(player)
                reply.splice(a, 1)
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§6Operasi dibatalkan" } ] }`, world.getDimension(playerDimension))
            } else {
                runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§cAnda tidak dapat menggunakan perintah ini sekarang" } ] }`, world.getDimension(playerDimension))
            }
            break
        default:
            runCmd(`tellraw "${player}" { "rawtext": [ { "text": "§cPerintah tidak dikenal, gunakan bantuan l${PHx}" } ] }`, world.getDimension(playerDimension))
            break
    }
}

system.events.beforeWatchdogTerminate.subscribe(data => {
    data.cancel = true
})

function currentDimension(player) {
    let dimension = player.dimension.id.replace("minecraft:", "").replace("_", " ")
    return dimension
}

function dimToId(dimension) {
    if (dimension == "overworld") {
        return "0"
    }
    if (dimension == "nether") {
        return "1"
    }
    if (dimension == "the end") {
        return "2"
    }
}

function idToDim(dimension) {
    if (dimension == 0 || dimension == "0") {
        return "overworld"
    }
    if (dimension == 1 || dimension == "1") {
        return "nether"
    }
    if (dimension == 2 || dimension == "2") {
        return "the end"
    }
}

function runCmd(cmd, dim) {
    return dim.runCommandAsync(cmd);
}

function tryCmd(cmd, dim) {
    try {
        return {
            result: runCmd(cmd, dim),
            error: false
        }
    } catch (e) {
        return {
            result: JSON.parse(e),
            error: true
        }
    }
}

/// => {Export} <= \\\
export { sHome }