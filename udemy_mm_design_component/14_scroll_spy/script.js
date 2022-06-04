// const menuItems = document.querySelectorAll('a')
// const scrollSpySections = document.querySelectorAll('.section')

// const handleScrollSpy = () => {
//     if(document.body.classList.contains('main-page')) {

//         const sections = []

//         scrollSpySections.forEach(section => {
//             // console.log(window.scrollY);
//             // wartość scrolla
//             // console.log(section.offsetTop);
//             // odległośc danej sekcji od górnej krawędzi przeglądarki
//             // console.log(section.offsetHeight);
//             // wysokość każdej z sekcji

//             if(window.scrollY <= section.offsetTop + section.offsetHeight -103) {
//                 sections.push(section)

//                 const activeSection = document.querySelector(`[href*="${sections[0].id}"]`)

//                 menuItems.forEach(item => item.classList.remove('active'))

//                 activeSection.classList.add('active')
//             }

//             if ( window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
//                 const lastSection = document.querySelector('a:last-of-type')

//                 menuItems.forEach(item => item.classList.remove('active'))

//                 lastSection.classList.add('active')
//             }

//         })
//     }
// }

//  window.addEventListener('scroll', handleScrollSpy)

const sections = document.querySelectorAll('.section')
const menuItems = document.querySelectorAll('a')

const options = {
	threshold: [0.5, 0.9],
}

const handleScrollspy = entries => {
	entries.forEach(entry => {
		const activeNav = document.querySelector(`a[href='#${entry.target.id}']`)

		if (entry.isIntersecting) {
			menuItems.forEach(item => item.classList.remove('active'))
			activeNav.classList.add('active')
		}
	})
}

const observer = new IntersectionObserver(handleScrollspy, options)

sections.forEach(section => {
	observer.observe(section)
})
