document.addEventListener('DOMContentLoaded', () => {
  const navLinks = Array.from(document.querySelectorAll('.sidebar nav a'));
  const tabSections = Array.from(document.querySelectorAll('.tab-section'));
  const sidebar = document.querySelector('.sidebar');
  const mobileSidebarQuery = window.matchMedia('(max-width: 1100px)');

  const updateMobileSidebarOffset = () => {
    if (!sidebar) return;

    if (mobileSidebarQuery.matches) {
      const sidebarHeight = Math.ceil(sidebar.getBoundingClientRect().height);
      document.documentElement.style.setProperty('--mobile-sidebar-offset', `${sidebarHeight}px`);
      return;
    }

    document.documentElement.style.setProperty('--mobile-sidebar-offset', '0px');
  };

  updateMobileSidebarOffset();
  window.addEventListener('resize', updateMobileSidebarOffset);
  window.addEventListener('orientationchange', updateMobileSidebarOffset);

  if (typeof ResizeObserver !== 'undefined' && sidebar) {
    const sidebarObserver = new ResizeObserver(() => {
      updateMobileSidebarOffset();
    });
    sidebarObserver.observe(sidebar);
  }

  // Tab Navigation Logic
  navLinks.forEach(link => {
    link.addEventListener('click', event => {
      const tabId = link.getAttribute('data-tab');
      if (!tabId) return;

      event.preventDefault();

      // Update active link
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Update active section
      tabSections.forEach(section => {
        if (section.id === tabId) {
          section.classList.add('active-tab');
          section.classList.add('visible');
          section.style.display = 'block';
          section.style.opacity = '1';
        } else {
          section.classList.remove('active-tab');
          section.classList.remove('visible');
          section.style.display = 'none';
        }
      });
      
      // Instant scroll to top, making it feel like a new page load
      window.scrollTo(0, 0);
    });
  });

  // Query block toggling
  const queryBlocks = Array.from(document.querySelectorAll('.query-block'));
  queryBlocks.forEach(block => {
    const header = block.querySelector('.query-header');
    if (!header) return;

    header.addEventListener('click', () => {
      queryBlocks.forEach(otherBlock => {
        if (otherBlock !== block && otherBlock.classList.contains('open')) {
          otherBlock.classList.remove('open');
        }
      });
      block.classList.toggle('open');
    });
  });

  // Lightbox functionality
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.lightbox-close');
  const expandableImgs = Array.from(document.querySelectorAll('.expandable-img'));

  if (!lightbox || !lightboxImg || !closeBtn || !expandableImgs.length) {
    return;
  }

  const closeLightbox = () => {
    lightbox.style.display = 'none';
  };

  expandableImgs.forEach(img => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'block';
      lightboxImg.src = img.src;
    });
  });

  closeBtn.addEventListener('click', closeLightbox);

  lightbox.addEventListener('click', event => {
    if (event.target !== lightboxImg) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && lightbox.style.display === 'block') {
      closeLightbox();
    }
  });
});
