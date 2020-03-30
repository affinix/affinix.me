var clipboard = new ClipboardJS('.copy');

tippy('button', {
    content: 'click to copy',
    placement: 'bottom'
});

tippy('#tooltip', {
    content: 'copied to clipboard !',
    trigger: 'click',
    animation: 'scale',
    inertia: true,
    placement: 'bottom'
});