document.addEventListener('DOMContentLoaded', function () {
  const currentPath = window.location.pathname;

  if (!currentPath.includes('/posts/')) return;

  const navLinks = document.querySelectorAll('.md-nav__link');

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');

    // Look for links pointing to category index pages
    if (href && href.startsWith('category/') && href.includes('-index')) {
      // Try to extract category name (e.g., python from category/python-index)
      const categoryMatch = href.match(/category\/(.*?)-index/);
      if (categoryMatch) {
        const category = categoryMatch[1];

        // Check if current path includes this category
        // Supports: /posts/category/, /posts/programming/category/
        const categoryRegex = new RegExp(
          `/posts/(programming/)?${category}/`,
          'i'
        );

        if (categoryRegex.test(currentPath)) {
          const parentItem = link.closest('.md-nav__item--nested');
          if (parentItem) {
            parentItem.classList.add('md-nav__item--active');
            // Also expand all ancestor groups
            let ancestor = parentItem.parentElement;
            while (ancestor) {
              if (ancestor.classList.contains('md-nav__item--nested')) {
                ancestor.classList.add('md-nav__item--active');
              }
              ancestor = ancestor.parentElement;
            }
          }
        }
      }
    }
  });
});
