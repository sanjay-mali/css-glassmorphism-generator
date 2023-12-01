const inputs = document.querySelectorAll('.form input')
inputs.forEach(input => input.addEventListener('change', update))
inputs.forEach(input => input.addEventListener('mousemove', update))

function update() {

    const card = document.querySelector('.card')
    const opacityValue = document.getElementById('opacity').value
    const blurValue = document.getElementById('blur').value
    const blur = document.getElementById('blur')
    const blur_ = document.querySelector('.blur_')
    const colorValue = document.getElementById('colorPicker').value

    const opacity__ = document.querySelector('.opacity__')
    opacity__.innerHTML = `background = rgba( 255, 255, 255,${opacityValue})`
    card.style.background = `rgba(${hexToRgb(colorValue)}, ${opacityValue})`;
    card.style.webkitBackdropFilter = `blur(${blurValue}px)`;

    // card.style.webkitBackdropFilter = `blur(${blurValue}px)`;

    const webkit_filter__ = document.querySelector('.webkit_filter__')
    webkit_filter__.innerHTML = `-webkit-backdrop-filter: blur(${blurValue})`
    card.style.backdropFilter = `blur(${blurValue}px)`;

    const filter__ = document.querySelector('.filter__')
    filter__.innerHTML = `backdrop-filter: blur(${blurValue}));`

}

update()

function hexToRgb(hex) {

    const bigint = parseInt(hex.substring(1), 16);

    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `${r}, ${g}, ${b}`;

}

function copyToClipboard() {
    
    const cssCode = document.querySelector('.css-code').innerHTML;

    const el = document.createElement('textarea');
    el.value = cssCode;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);

    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('CSS code copied to clipboard');
}