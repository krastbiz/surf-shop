document.addEventListener("DOMContentLoaded", function() {
  var modalVisibility = false;

  var toggle = document.querySelector('.aside-toggle');
  var aside = document.querySelector('.aside');
  var modal = document.querySelector('.modal');

  toggle.addEventListener('click', onToggleClick);

  function onToggleClick() {

    // 1. Show modal overlay
    modalVisibility = !modalVisibility;
    changeModalState(modalVisibility);

    // 2. Update toggle 
    this.classList.toggle('aside-toggle_active');

    // 3. Show aside menu
    changeAsideState(modalVisibility);
  }


  function changeAsideState(show) {
    if (show) {
      showAside();
    } else {
      hideAside();
    }
  }

  function showAside() {
    aside.classList.toggle('aside_active');
  }

  function hideAside() {
    aside.classList.remove('aside_active');
  }

  function changeModalState(show) {
    if (show) {
      showModal();
    } else {
      hideModal();
    }
  }

  function showModal() {
    modal.classList.toggle('modal_active');
  }

  function hideModal() {
    modal.classList.remove('modal_active');
  }
});

