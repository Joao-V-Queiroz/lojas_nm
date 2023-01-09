const formatInput = document.querySelector('.js-format')

new Cleave("#codigo", {
    numericOnly: true,
    prefix: '0',
    blocks: [5],
});

new Cleave("#matricula", {
    numericOnly: true,
    prefix: '0',
    blocks: [5],
});

new Cleave('#cpf', {
    numericOnly: true,
    blocks: [3, 3, 3, 2],
    delimiters: [".", ".", "-"]
});

