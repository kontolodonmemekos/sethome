/// => {import} <= \\\
import { PHx } from './conf/xtar.js'

///Lista
// const ListaCMD = ['mover', 'add', 'warp', 'eliminar', 'location', 'reubicar', 'set', 'ir', 'remove', 'locate', 'spawn', 'spawnpoint']

// daftar perintah akan masuk ke sini melalui ListCMD.push()
const ListCMD = []



// ---------------------- Add sethome  ---------------------- //
// perintah nambah sethome
ListCMD.push('add', 'set')

///Tambahkan beranda {2 varian} Contoh: (!h add casita1)
const CmdA1 = 'add'
const CmdA2 = 'set'
// ---------------------- Add sethome ---------------------- //




// --------------------- Edit sethome --------------------- //
// perintah memindahkan rumah
ListCMD.push('move', 'change')

///Edit rumah {2 varian} Contoh: (!h pindah rumah1)
const CmdA3 = 'move'
const CmdA4 = 'change'
// --------------------- Edit sethome --------------------- //




// ----------------- Teleport to sethome ----------------- //
// perintah untuk memindahkan user ke sethomenya
ListCMD.push('tp', 'to')
///Tp home {2 varian} Contoh: (!h tp little house1)
const CmdA5 = 'tp'
const CmdA6 = 'to'
// ----------------- Teleport to sethome ----------------- //




// ------------------- Delete sethome ------------------- //
// perintah untuk menghapus sethome
ListCMD.push('delete', 'remove')
///Hapus beranda {2 varian} Contoh: (!h rv casita1)
const CmdA7 = 'delete'
const CmdA8 = 'remove'
// ------------------- Delete sethome ------------------- //




// ----------------- Show list sethome ----------------- //
// perintah untuk menampilkan sethome user
ListCMD.push('homes', 'list')
///Daftar rumah {2 varian} Contoh: (!h rumah casita1)
const CmdA9 = 'homes'
const CmdA10 = 'list'
// ----------------- Show list sethome ----------------- //




// --------- Change spawn point to user sethome --------- //
// perintah untuk mengubah titk spawn user ke sethome mereka
ListCMD.push('spawn', 'default')
///Hone apa yang ingin kamu tampilkan setelah kamu mati {2 variants} Contoh: (!h apt casita1)
const CmdA11 = 'spawn'
const CmdA12 = 'default'
// --------- Change spawn point to user sethome --------- //




// ----------- Show user sethome coordinates ----------- //
// perintah untuk menampilkan kordinat sethome user
ListCMD.push('where', 'locate')
///Locate home {2 varians} Contoh: (!h where casita1)
const CmdA13 = 'where'
const CmdA14 = 'locate'
// ----------- Show user sethome coordinates ----------- //




// ------ --- !!! Delete all user sethome !!! ------- -- //
// perintah untuk menghapus seluruh sethome user
ListCMD.push('clear', 'alldelete')
///Hapus semua rumah {2 varian} Contoh: (!h alldelete little house1)
const CmdA15 = 'clear'
const CmdA16 = 'alldelete'
// ------ --- !!! Delete all user sethome !!! ------- -- //




// const xTartHelpMessage = `§6§lSistem Beranda :§r Menampilkan Perintah Bantuan (${PHx})\n${PHx} 7<${CmdA3}> §oUbah/Pindahkan lokasi rumah Anda§r\n${PHx}  <${ CmdA2}> §8Menetapkan rumah§r\n${PHx} <${CmdA5}> §8Mengirimkan rumah kepada Anda§r\n${PHx} <${CmdA8 }> § 8Hapus rumah Anda§r\n${PHx} <${CmdA13}> §8Lokasi rumah Anda§r\n${PHx} <${CmdA11}> § 8Tetapkan titik spawn di rumah Anda§r\n${PHx} <${CmdA10}> §8Tampilkan daftar rumah yang dibuat§r\n${PHx} <${CmdA16}> §8Hapus semua rumah pemain r\nCatatan:§7 Saat memasukkan nama dengan spasi, ganti dengan §l_§r`
const AosHelpMessage = `§6§Daftar Perintah :§r
${PHx} <${CmdA2}> §8Membuat sethome.§r
${PHx} <${CmdA8}> §8Menghapus sethome kamu.§r
${PHx} <${CmdA3}> §8Memindahkan lokasi sethome kamu ke lokasi baru.§r
${PHx} <${CmdA11}> §8Mengubah spawn point ketika mati ke sethome kamu.§r
${PHx} <${CmdA5}> §8Mengteleportasi ke sethome kamu.§r
${PHx} <${CmdA10}> §8Menampilkan daftar sethome kamu.§r
${PHx} <${CmdA13}> §8Menampilkan kordinat sethome kamu.§r
-------------------------------------------------------------------
${PHx} <${CmdA16}> §8Menghapus seluruh sethome kamu.§r
`
///Jangan sentuh
export { ListCMD, CmdA1, CmdA2, CmdA3, CmdA4, CmdA5, CmdA6, CmdA7, CmdA8, CmdA9, CmdA10, CmdA11, CmdA12, CmdA13, CmdA14, CmdA15, CmdA16, AosHelpMessage }
