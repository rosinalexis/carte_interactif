let map = document.querySelector('#map')
let paths = map.querySelectorAll('.map__image a')
let links = map.querySelectorAll('.map__list a')

paths.forEach((path) => {

    path.addEventListener('mouseenter', (e) => {
        let id = e.currentTarget.id.replace('region-', '')
        map.querySelectorAll('.is-active').forEach(function (item) {
            item.classList.remove('is-active')
        })
        document.querySelector('#list-' + id).classList.add('is-active')
        document.querySelector('#region-' + id).classList.add('is-active')
    })
})
