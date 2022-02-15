const app = Vue.createApp({
	data: function () {
		return {
			courseGoal: 'Finished the course and learn Vue.js',
			vueLink: 'https://vuejs.org/',
		};
	},
	methods: {
		outputGoal() {},
	},
});

app.mount('#user-goal');
