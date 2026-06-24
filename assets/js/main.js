document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header');
    if (header) {
        const onScroll = () => {
            header.classList.toggle('is-scrolled', window.scrollY > 8);
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    document.querySelectorAll('.team-photo').forEach((img) => {
        const markMissing = () => img.classList.add('is-missing');

        img.addEventListener('error', markMissing);
        if (img.complete && img.naturalWidth === 0) {
            markMissing();
        }
    });
});