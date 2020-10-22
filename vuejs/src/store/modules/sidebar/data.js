// Sidebar Routers
export const menus = {
	'Menu': [
		{
			action: 'zmdi-view-dashboard',
			title: 'message.dashboard',
			active: true,
			path: '/onecard/dashboard/one',
			exact: true,
			label: 'Old'
		},
		{
			action: 'zmdi-assignment-account',
			title: 'Cursos',
			active: false,
			path: '/onecard/courses/list',
			exact: true,
			label: 'Old'
		},
		{
			action: 'zmdi-collection-text',
			title: 'Temas',
			active: false,
			path: '/onecard/subjects/list',
			exact: true,
			label: 'Old'
		},
		{
			action: 'zmdi-copy',
			title: 'Flash Cards',
			active: false,
			path: '/onecard/cards/list',
			exact: true,
			label: 'Old'
		}
	// {
	// 	action: 'zmdi-copy',
	// 	title: 'Acciones',
	// 	active: false,
	// 	label: 'New',
	// 	items: [
	//     { title: 'message.marketCap', path: '/crypto/market-cap',label: 'New'},
	// 		{ title: 'message.wallet', path: '/crypto/wallet',label: 'New' },
	// 		{ title: 'message.trade', path:'/crypto/trade',label: 'New'},
	// 	]
	// },
	]
}
