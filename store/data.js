export const state = () => {
	return {
		kanan: [ 'Rizki Putra Julianto', 'Gede Putra Nugraha', 'Alvin Kusuma Putra' ],
		kiri: [ 'Atika Rahmawati', 'Ghany Abdillah Ersa' ]
	};
};

export const actions = {
	setKanan({ commit }, data) {
		console.log('masuk kanan');
		commit('pindahKanan', data);
	},
	setKiri({ commit }, data) {
		console.log('masuk kiri');
		commit('pindahKiri', data);
	}
};

export const mutations = {
	pindahKanan(state, data) {
		const payload = data;
		payload.forEach((element) => {
			state.kanan.push(element);
		});
		const sisa = state.kiri.filter((item) => item !== payload);
		console.log(sisa);
		state.kiri = sisa;
	},
	pindahKiri(state, data) {
		const payload = data;
		payload.forEach((element) => {
			state.kiri.push(element);
		});
		const sisa = state.kanan.filter((item) => item !== payload);
		console.log(sisa);
		state.kanan = sisa;
	}
};
