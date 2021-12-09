export const state = () => {
	return {
		kanan: [ 'Rizki Putra Julianto', 'Gede Putra Nugraha', 'Alvin Kusuma Putra' ],
		kiri: [ 'Atika Rahmawati', 'Ghany Abdillah Ersa' ]
	};
};

export const actions = {
	setKanan({ commit }, data) {
		commit('pindahKanan', data);
	},
	setKiri({ commit }, data) {
		commit('pindahKiri', data);
	}
};

export const mutations = {
	pindahKanan(state, data) {
		const payload = data;
		state.kanan.forEach((x) => {
			payload.forEach((y) => {
				if (x === y) {
					payload.splice(payload.indexOf(y), 1);
				}
			});
		});
		if (payload.length === 0) {
			return true;
		}
		payload.forEach((element) => {
			state.kanan.push(element);
		});

		payload.forEach((z) => {
			state.kiri = state.kiri.filter((x) => x !== z);
		});
		state.kiri.sort();
		state.kanan.sort();
	},
	pindahKiri(state, data) {
		const payload = data; // data yang akan dipindahkan
		state.kiri.forEach((x) => {
			payload.forEach((y) => {
				if (x === y) {
					payload.splice(payload.indexOf(y), 1); // hapus data yang sama dari payload
				}
			});
		});

		if (payload.length === 0) {
			return true; // jika payload kosong maka return true
		}
		payload.forEach((element) => {
			state.kiri.push(element); // push data ke state kiri
		});
		// filter payload dan state kanan
		payload.forEach((z) => {
			state.kanan = state.kanan.filter((x) => x !== z);
		});
		state.kanan.sort();
		state.kiri.sort();
	}
};
