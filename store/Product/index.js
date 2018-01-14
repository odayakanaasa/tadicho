export default {
	state: {
		loadedProducts: [
			{
				id: 'fsds45nf7687YHmdsds',
				title: 'Thit', 
				imageUrl: 'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/10/depositphotos_24482323_original.jpg?itok=OwMb5y4O&fc=50,50',
				createdDate: new Date(),
				location: 'Ha Noi',
				phone: '01065922210',
				description: '',
				author: 'pdthang',
				price: 200,
				priceUnit: 'VND',
				type: process.env.productType.MEAT,
				rate: 10,
				comments: [
					{
						reviewer: 'pdthang',
						content: 'It looks good',
						commentDate: new Date()
					}
				]
			},
			{
				id: 'fsds45nf7687YHmdsds',
				title: 'Rau', 
				imageUrl: 'https://media.istockphoto.com/photos/vegetable-basket-picture-id511378964?k=6&m=511378964&s=612x612&w=0&h=qt3SJVjM-_hikHxDKlTsgSzgNUOoxKc9DZ0qZ791tNQ=',
				createdDate: new Date(),
				location: 'Ha Noi',
				phone: '01065922210',
				description: '',
				author: 'pdthang',
				price: 200,
				priceUnit: 'VND',
				type: process.env.productType.VEGETABLE,
				rate: 10,
				comments: [
					{
						reviewer: 'pdthang',
						content: 'It looks good',
						commentDate: new Date()
					}
				]
			},
			{
				id: 'vsdvs',
				title: 'Ca', 
				imageUrl: 'https://www.flynow.vn/blog/wp-content/uploads/2017/02/nghe-thuat-nau-lau-hai-san-thom-ngon-don-mung-xuan-moi3.jpg',
				createdDate: new Date(),
				location: 'Ha Noi',
				phone: '01065922210',
				description: '',
				author: 'pdthang',
				price: 200,
				priceUnit: 'VND',
				type: process.env.productType.SEAFOOD,
				rate: 10,
				comments: [
					{
						reviewer: 'pdthang',
						content: 'It looks good',
						commentDate: new Date()
					}
				]
			},
			{
				id: 'fsds45f7687YHmdsds',
				title: 'Thit', 
				imageUrl: 'https://www.popsci.com/sites/popsci.com/files/styles/1000_1x_/public/images/2017/10/depositphotos_24482323_original.jpg?itok=OwMb5y4O&fc=50,50',
				createdDate: new Date(),
				location: 'Ha Noi',
				phone: '01065922210',
				description: '',
				author: 'pdthang',
				price: 200,
				priceUnit: 'VND',
				type: process.env.productType.MEAT,
				rate: 10,
				comments: [
					{
						reviewer: 'pdthang',
						content: 'It looks good',
						commentDate: new Date()
					}
				]
			},
			{
				id: 'bdbfdb',
				title: 'Rau', 
				imageUrl: 'https://media.istockphoto.com/photos/vegetable-basket-picture-id511378964?k=6&m=511378964&s=612x612&w=0&h=qt3SJVjM-_hikHxDKlTsgSzgNUOoxKc9DZ0qZ791tNQ=',
				createdDate: new Date(),
				location: 'Ha Noi',
				phone: '01065922210',
				description: '',
				author: 'pdthang',
				price: 200,
				priceUnit: 'VND',
				type: process.env.productType.VEGETABLE,
				rate: 10,
				comments: [
					{
						reviewer: 'pdthang',
						content: 'It looks good',
						commentDate: new Date()
					}
				]
			},
			{
				id: 'fsds45nf7bfdb687YHmdsds',
				title: 'Ca', 
				imageUrl: 'https://www.flynow.vn/blog/wp-content/uploads/2017/02/nghe-thuat-nau-lau-hai-san-thom-ngon-don-mung-xuan-moi3.jpg',
				createdDate: new Date(),
				location: 'Ha Noi',
				phone: '01065922210',
				description: '',
				author: 'pdthang',
				price: 200,
				priceUnit: 'VND',
				type: process.env.productType.SEAFOOD,
				rate: 10,
				comments: [
					{
						reviewer: 'pdthang',
						content: 'It looks good',
						commentDate: new Date()
					}
				]
			}
		]
	},
	mutations:{

	},
	actions: {

	},
	getters: {
		loadedProducts (state) {
      return state.loadedProducts
    }
	}
}