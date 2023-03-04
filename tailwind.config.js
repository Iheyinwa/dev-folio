module.exports = {
	content: [ './src/**/*.{js,jsx,ts,tsx}' ],
	theme: {
		extend: {
			boxShadow: {
				outerShadow: 'var(--outer-shadow)',

				innerShadow: 'var(--inner-shadow)'
			},
			fontFamily: {
				noir: [ 'Noir', 'sans-serif' ]
			},
			backgroundImage: {
				ice: "url('/src/img/ice.jpg')"
			},
			backgroundColor: {
				'skills-section': 'rgba(17, 17, 17, 0.5);'
			},
			backdropBlur: {
				xs: '41px'
			}
		}
	},
	plugins: []
};
