document.addEventListener('DOMContentLoaded', function() {

    var sections = document.getElementsByClassName('rad_section');

    for (var i = sections.length; i--;) {
        sections[i].addEventListener('change', function() {
            storeSelection(this.id);
        }, false);
    }

    var selection = localStorage.latexcheatsheet == undefined ? 'ac-head' : localStorage.latexcheatsheet;
    document.getElementById(selection)
        .checked = true;
});

function storeSelection(id) {
    localStorage.latexcheatsheet = id;
}
