(function () {
  const elem = document.querySelector('.products__list');
  const iso = new Isotope(elem, {
    // options
    itemSelector: '.products__item',
    filter: '.popular',
  });

  const controlls = document.querySelectorAll('.filter__link');
  const activeClass = 'filter__item--active';

  controlls.forEach((control) => {
    control.addEventListener('click', (e) => {
      e.preventDefault();

      const filterName = control.getAttribute('data-filter');

      controlls.forEach((link) => {
        link.closest('.filter__item').classList.remove(activeClass);
      });
      control.closest('.filter__item').classList.add(activeClass);

      iso.arrange({
        filter: `.${filterName}`,
      });
    });
  });
})();
