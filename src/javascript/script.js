const mode = document.getElementById('mode_moon');

mode.addEventListener('click', () => {
    const form = document.getElementById('register_form');

    if (mode.classList.contains('fa-moon')) {
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        form.classList.add('dark');

        return;
    }

    mode.classList.remove('fa-sun');
    mode.classList.add('fa-moon');
    form.classList.remove('dark');
});

document.getElementById("cpf").addEventListener("input", function(e) {
    let input = e.target.value.replace(/\D/g, "");

    input = input.replace(/^(\d{3})(\d)/, "$1.$2");
    input = input.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
    input = input.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");

    e.target.value = input;
});

document.getElementById("phone").addEventListener("input", function(e) {
    let input = e.target.value.replace(/\D/g, "");

    if (input.length > 10) {
        input = input.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (input.length > 6) {
        input = input.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (input.length > 2) {
        input = input.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    } else {
        input = input.replace(/^(\d*)/, "($1");
    }

    e.target.value = input;
});
