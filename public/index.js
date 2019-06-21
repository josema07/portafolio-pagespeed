const $burger = document.getElementById('burger')
const $menu = document.querySelector('.menu')
//------------- MEDIA QUERYS EN JS ----------------
const $ipad = window.matchMedia('screen and (max-width: 767px)')

$ipad.addListener(validar)

function validar(event) {
	if (event.matches) {
		$burger.addEventListener('click', (event) => {
			$menu.classList.toggle('is-active')
		})
	} else {
		$burger.removeEventListener('click', (event) => {
			$menu.classList.toggle('is-active')
		})
	}
}

$burger.addEventListener('click', (event) => {
	$menu.classList.toggle('is-active')
})