function scrollDown() {
  const aboutProject = document.querySelector('#about-project');

  window.scroll({
    left: 0,
    top: aboutProject.offsetTop,
    behavior: 'smooth',
  })
}

export default scrollDown;
