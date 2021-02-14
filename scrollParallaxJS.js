/**
 * Fonction qui crée un mouvement pour un élément donné en fonction du scroll sur la page.
 * @param container - container auquel appliquer l'effet - élément qui contient le scroll
 * @param element - élément du DOM qui recevra l'effet
 * @param type - type d'effet appliqué translateX, translateY ou scale
 * @param amplitude - valeur numérique qui multiplie la valeur du scroll
 * @param minValue - valeur de départ, s'ajoute à la valeur minimale du scroll ( 0 par defaut)
 * @param reverse - permet d'inverser le sens du mouvement ( false par defaut )
 * @param smooth - ajouter un effet de transition douce ( par defaut false )
 * @param smoothDuration - permet de determiner la durée de l'effet de transition ( par defaut 2s )
 */
function parallax(container = window, element, type, amplitude, minValue = 0, reverse = false, smooth = false, smoothDuration = 2) {
    container.addEventListener("scroll", function () {
        let hauteurTotal = document.body.clientHeight - document.documentElement.clientHeight
        let distDuScroll = container.scrollY
        let value = 0
        let direction = 1

        if (distDuScroll <= hauteurTotal && distDuScroll >= 0) {
            if (reverse) {
                direction = -1
            }
            if (smooth) {
                element.style.transition = 'all ' + smoothDuration + 's cubic-bezier(0, 0, 0, 1)'
            }

            value = (((distDuScroll * amplitude) / (hauteurTotal)) + minValue) * direction;

            switch (type) {
                case 'translateX' : {
                    element.style.transform = 'translate3d(' + value + '%,0,0)'
                    break
                }
                case 'translateY' : {
                    element.style.transform = 'translate3d(0,' + value + '%,0)'
                    break
                }
                case 'scale' : {
                    element.style.transform = 'scale3d(' + value + ',' + value + ',' + value + ')'
                    break
                }
            }
        }
    });
}
