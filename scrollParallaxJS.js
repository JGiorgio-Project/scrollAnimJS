/**
 * Fonction qui crée un mouvement pour un élément donné en fonction du scroll sur la page.
 * @param element - élément du DOM qui recevra l'effet
 * @param type - type d'effet appliqué translateX, translateY ou scale
 * @param amplitude - valeur numérique qui multiplie la valeur du scroll
 * @param minValue - valeur de départ, s'ajoute à la valeur minimale du scroll ( 0 par defaut)
 * @param reverse - permet d'inverser le sens du mouvement ( false par defaut )
 */
function parallax(element, type, amplitude, minValue = 0, reverse = false, smooth = false) {
    window.addEventListener("scroll", function () {
        let hauteurTotal = document.body.clientHeight - document.documentElement.clientHeight
        let distDuScroll = window.scrollY
        let value = 0
        let direction = 1
        if (reverse) {
            direction = -1
        }

        if (distDuScroll <= hauteurTotal && distDuScroll >= 0) {
            value = (((distDuScroll * amplitude) / (hauteurTotal)) + minValue) * direction;
            if (smooth) {
                element.style.transition = 'all 2s cubic-bezier(0, 0, 0, 1)'
            }
            switch (type) {
                case 'translateX' : {
                    element.style.transform = 'translateX(' + value + '%)'
                    break
                }
                case 'translateY' : {
                    element.style.transform = 'translateY(' + value + '%)'
                    break
                }
                case 'scale' : {
                    element.style.transform = 'scale(' + value + ')'
                    break
                }
            }
        }
    });
}
