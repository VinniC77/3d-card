const pre = document.querySelector('pre');

document.addEventListener('mousemove', (e) => {
    rotateElement(e, pre)
})

function rotateElement(event, element) {
    // Pegar a posição do mouse
    const x = event.clientX;
    const y = event.clientY;

    // Encontrando a metade da página (que é onde estará o card, portanto a base para a movimentação do mesmo)
    const middleX = window.innerWidth / 2;
    const middleY = window.innerHeight / 2;

    // Obter o deslocamento do meio (para verificar a posição do mouse a partir do meio)
    const offSetX = ((x - middleX) / middleX) * 45;
    const offSetY = ((y - middleY) / middleY) * 45;
    console.log(offSetX, offSetY)

    element.style.setProperty("--rotateX", -1 * offSetX + "deg");
    element.style.setProperty("--rotateY", offSetY + "deg");

}