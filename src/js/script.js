document.querySelectorAll('.collapsible').forEach(section => {
    section.addEventListener('mouseenter', () => {
        const content = section.querySelector('.content');
        content.style.maxHeight = `${content.scrollHeight}px`;
        content.style.opacity = 1;
    });

    section.addEventListener('mouseleave', () => {
        const content = section.querySelector('.content');
        content.style.maxHeight = '0';
        content.style.opacity = 0;
    });
});

// Animate skill progress circles
document.querySelectorAll('.circle').forEach(circle => {
    const progress = circle.dataset.progress;
    setTimeout(() => {
        circle.style.setProperty('--rotation', `${(progress / 100) * 360}deg`);
    }, 100);
});
