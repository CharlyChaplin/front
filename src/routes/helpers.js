//
// App paths
//

export const pathsPublic = {
	home: '/',
	login: '/login',
	logout: '/logout',
	productDetails: '/product/:idOrSlug',
	favorites: '/favorites',
	cart: '/cart',
};

export const pathsPrivate = {
	accountSettings: '/account-settings',
};

export const paths = Object.assign({}, pathsPublic, pathsPrivate);


export function checkPathMatch(pathname, paths) {
	let isMatch = false;

	const allPaths = Object.values(paths);
	const pathFirstSection = pathname.split('/')[1];

	allPaths.forEach(p => {
		if (p.slice(1) === pathFirstSection) isMatch = true;
	});

	return isMatch;
}