let clickScroll = function() {
    let dBox = document.getElementById('d');
    if (dBox) {
        let navBox = document.getElementById('nav-box');
        if (navBox) {
            navBox.scrollTo(dBox.offsetLeft - navBox.clientWidth * 0.5 + dBox.offsetWidth * 0.5, 0);
        }
    }
}