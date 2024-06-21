<script>
    function updateDescription() {
        const width = window.innerWidth;
        const fullDescription = document.querySelector('.full-description');
        const desktopDescriptions = document.querySelectorAll('.desktop-description');

        if (width >= 768) {
            fullDescription.style.display = 'none';
            desktopDescriptions.forEach(p => p.style.display = 'block');
        } else {
            fullDescription.style.display = 'block';
            desktopDescriptions.forEach(p => p.style.display = 'none');
        }
    }

    window.addEventListener('resize', updateDescription);
    window.addEventListener('load', updateDescription);
</script>
