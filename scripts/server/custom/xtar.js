/// => {import} <= \\\
import { PHx } from './conf/xtar.js'

///Lista
const ListaCMD = ['mover', 'add', 'warp', 'eliminar', 'location', 'reubicar', 'set', 'ir', 'remove', 'locate', 'spawn', 'spawnpoint']

///Tambahkan beranda {2 varian} Contoh: (!h add casita1)
const CmdA1 = 'add'
const CmdA2 = 'set'

///Edit rumah {2 varian} Contoh: (!h pindah rumah1)
const CmdA3 = 'mover'
const CmdA4 = 'reubicar'

///Tp home {2 varian} Contoh: (!h tp little house1)
const CmdA5 = 'tp'
const CmdA6 = 'ir'

///Hapus beranda {2 varian} Contoh: (!h rv casita1)
const CmdA7 = 'delete'
const CmdA8 = 'rv'

///Daftar rumah {2 varian} Contoh: (!h rumah casita1)
const CmdA9 = 'homes'
const CmdA10 = 'lista'

///Hone apa yang ingin kamu tampilkan setelah kamu mati {2 variants} Contoh: (!h apt casita1)
const CmdA11 = 'spawn'
const CmdA12 = 'apt'

///Locate home {2 varians} Contoh: (!h gps casita1)
const CmdA13 = 'gps'
const CmdA14 = 'locate'

///Hapus semua rumah {2 varian} Contoh: (!h alldelete little house1)
const CmdA15 = 'clear'
const CmdA16 = 'alldelete'


const xTartHelpMessage = `§6§lSistem Beranda :§r Menampilkan Perintah Bantuan (${PHx})\n${PHx} 7<${CmdA3}> §oUbah/Pindahkan lokasi rumah Anda§r\n${PHx}  <${ CmdA2}> §8Menetapkan rumah§r\n${PHx} <${CmdA5}> §8Mengirimkan rumah kepada Anda§r\n${PHx} <${CmdA8 }> § 8Hapus rumah Anda§r\n${PHx} <${CmdA13}> §8Lokasi rumah Anda§r\n${PHx} <${CmdA11}> § 8Tetapkan titik spawn di rumah Anda§r\n${PHx} <${CmdA10}> §8Tampilkan daftar rumah yang dibuat§r\n${PHx} <${CmdA16}> §8Hapus semua rumah pemain r\nCatatan:§7 Saat memasukkan nama dengan spasi, ganti dengan §l_§r`
///Jangan sentuh
export { ListaCMD, CmdA1, CmdA2, CmdA3, CmdA4, CmdA5, CmdA6, CmdA7, CmdA8, CmdA9, CmdA10, CmdA11, CmdA12, CmdA13, CmdA14, CmdA15, CmdA16, xTartHelpMessage }
