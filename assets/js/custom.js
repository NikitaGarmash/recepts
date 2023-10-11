function toggleDropdown(dropdownId) {
    const dropdownContent = document.getElementById(dropdownId);
    const otherDropdowns = document.querySelectorAll('.dropdown-content:not(#' + dropdownId + ')');
  
    // Закрываем все другие dropdowns
    otherDropdowns.forEach(function(dropdown) {
      dropdown.style.display = 'none';
    });
  
    // Открываем/закрываем текущий dropdown
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
  }
  
  window.addEventListener('click', function(event) {
    const dropdownButtons = document.querySelectorAll('.dropbtn');
    dropdownButtons.forEach(function(dropdownButton) {
      const dropdownContent = dropdownButton.nextElementSibling;
      if (dropdownButton !== event.target && !dropdownButton.contains(event.target)) {
        dropdownContent.style.display = 'none';
      }
    });
  });
  

  console.log(25);