import { createStore } from 'vuex'

import movies from './modules/movies'

export default createStore({
  // STATE : Vuex menggunakan pohon status tunggal - yaitu, objek tunggal ini berisi semua status tingkat aplikasi Anda dan berfungsi sebagai "sumber kebenaran tunggal". Ini juga berarti biasanya Anda hanya memiliki satu toko untuk setiap aplikasi. Pohon status tunggal membuatnya mudah untuk menemukan bagian status tertentu, dan memungkinkan kita untuk dengan mudah mengambil cuplikan dari status aplikasi saat ini untuk tujuan debug.

  state: { 
    
  },

  // MUTATIONS: Satu-satunya cara untuk benar-benar mengubah status di toko Vuex adalah dengan melakukan mutasi. Mutasi Vuex sangat mirip dengan kejadian: setiap mutasi memiliki tipe string dan penangan . Fungsi handler adalah tempat kita melakukan modifikasi status aktual, dan akan menerima status sebagai argumen pertama:

  mutations: { 

  },

  // ACTIONS: Tindakan mirip dengan mutasi, perbedaannya adalah: 
  // - Alih-alih mutasi negara, tindakan melakukan mutasi.
  // - Tindakan dapat berisi operasi asinkron arbitrer.

  actions: { 

  },

  modules: {
    movies
  },

  // GETTERS : Jika lebih dari satu komponen perlu menggunakan ini, kita harus menduplikasi fungsi, atau mengekstraknya ke dalam shared helper dan mengimpornya di banyak tempat - keduanya kurang dari ideal.

  // Vuex memungkinkan kita untuk mendefinisikan "getter" di toko. Anda dapat menganggapnya sebagai properti yang dihitung untuk toko. Seperti properti yang dihitung, hasil pengambil di-cache berdasarkan dependensinya, dan hanya akan dievaluasi ulang ketika beberapa dependensinya telah berubah.

  getters:{ 

  }

})
