function showSection(sectionName) {
    let sections = document.querySelectorAll('.section');
    let subtitles = document.querySelectorAll(".subtitle");
    document.body.style.backgroundImage = `url(${sectionName}.svg)`;
    sections.forEach(item => {
        item.style.display = 'none';
    });
    subtitles.forEach(item => {
        item.classList.remove("active-subtitle");
    })
    let section = document.querySelector(`#${sectionName}`);
    let subtitle = document.querySelector(`#${sectionName}-subtitle`);
    if(section) {
        section.style.display = 'block';
    }
    if(subtitle) {
        subtitle.classList.add(`active-subtitle`);
    }
}