// Collapsible Navigation for SUMMARY page
document.addEventListener('DOMContentLoaded', function () {
    // Make nested lists collapsible
    const makeCollapsible = () => {
        // Find all list items that contain nested lists
        const listItems = document.querySelectorAll('.md-content ul > li');

        listItems.forEach(item => {
            const nestedList = item.querySelector('ul');

            if (nestedList) {
                // Create toggle button
                const toggle = document.createElement('span');
                toggle.className = 'toc-toggle';
                toggle.innerHTML = '▼';
                toggle.style.cssText = `
          cursor: pointer;
          margin-right: 0.5rem;
          color: var(--md-primary-fg-color, #6B4C9A);
          font-size: 0.8em;
          display: inline-block;
          transition: transform 0.2s;
          user-select: none;
        `;

                // Insert toggle before the first text node
                const firstChild = item.firstChild;
                item.insertBefore(toggle, firstChild);

                // Initially collapse nested lists
                nestedList.style.display = 'none';
                toggle.style.transform = 'rotate(-90deg)';
                item.classList.add('collapsed');

                // Toggle on click
                toggle.addEventListener('click', (e) => {
                    e.stopPropagation();

                    if (item.classList.contains('collapsed')) {
                        nestedList.style.display = 'block';
                        toggle.style.transform = 'rotate(0deg)';
                        item.classList.remove('collapsed');
                    } else {
                        nestedList.style.display = 'none';
                        toggle.style.transform = 'rotate(-90deg)';
                        item.classList.add('collapsed');
                    }
                });
            }
        });
    };

    // Run on page load
    makeCollapsible();

    // Add "Expand All" / "Collapse All" buttons
    const addExpandCollapseButtons = () => {
        const content = document.querySelector('.md-content');
        if (!content) return;

        const buttonContainer = document.createElement('div');
        buttonContainer.style.cssText = `
      margin-bottom: 1rem;
      display: flex;
      gap: 0.5rem;
    `;

        const expandAll = document.createElement('button');
        expandAll.textContent = 'Expand All';
        expandAll.className = 'md-button md-button--primary';
        expandAll.style.cssText = `
      background-color: #6B4C9A;
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.9rem;
    `;

        const collapseAll = document.createElement('button');
        collapseAll.textContent = 'Collapse All';
        collapseAll.className = 'md-button';
        collapseAll.style.cssText = `
      background-color: #3C3228;
      color: white;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 0.9rem;
    `;

        expandAll.addEventListener('click', () => {
            document.querySelectorAll('.md-content ul ul').forEach(ul => {
                ul.style.display = 'block';
            });
            document.querySelectorAll('.toc-toggle').forEach(toggle => {
                toggle.style.transform = 'rotate(0deg)';
                toggle.parentElement.classList.remove('collapsed');
            });
        });

        collapseAll.addEventListener('click', () => {
            document.querySelectorAll('.md-content ul ul').forEach(ul => {
                ul.style.display = 'none';
            });
            document.querySelectorAll('.toc-toggle').forEach(toggle => {
                toggle.style.transform = 'rotate(-90deg)';
                toggle.parentElement.classList.add('collapsed');
            });
        });

        buttonContainer.appendChild(expandAll);
        buttonContainer.appendChild(collapseAll);

        const firstHeading = content.querySelector('h1, h2');
        if (firstHeading && firstHeading.nextSibling) {
            firstHeading.parentNode.insertBefore(buttonContainer, firstHeading.nextSibling);
        }
    };

    // Add buttons if on SUMMARY page
    if (window.location.pathname.includes('SUMMARY')) {
        addExpandCollapseButtons();
    }

    // Add "Back to Index" button on all document pages
    const addBackToIndexButton = () => {
        // Don't add on home, SUMMARY, or explorer pages
        if (window.location.pathname.endsWith('/') ||
            window.location.pathname.includes('SUMMARY') ||
            window.location.pathname.includes('explorer') ||
            window.location.pathname.includes('index.html')) {
            return;
        }

        const content = document.querySelector('.md-content__inner');
        if (!content) return;

        // Create back button container
        const backButtonContainer = document.createElement('div');
        backButtonContainer.style.cssText = `
      margin-bottom: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid #e2e8f0;
    `;

        // Create back button
        const backButton = document.createElement('a');
        backButton.href = '../SUMMARY/';
        backButton.innerHTML = '← Back to Documentation Index';
        backButton.style.cssText = `
      display: inline-block;
      background-color: #6B4C9A;
      color: white;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      text-decoration: none;
      font-weight: 500;
      font-family: 'Poppins', Arial, sans-serif;
      transition: all 0.3s ease;
    `;

        backButton.onmouseover = () => {
            backButton.style.backgroundColor = '#4B2C7A';
            backButton.style.transform = 'translateY(-2px)';
            backButton.style.boxShadow = '0 4px 12px rgba(107, 76, 154, 0.3)';
        };

        backButton.onmouseout = () => {
            backButton.style.backgroundColor = '#6B4C9A';
            backButton.style.transform = 'translateY(0)';
            backButton.style.boxShadow = 'none';
        };

        backButtonContainer.appendChild(backButton);

        // Insert at the top of content
        const firstElement = content.firstElementChild;
        if (firstElement) {
            content.insertBefore(backButtonContainer, firstElement);
        }

        // Also add at the bottom
        const bottomBackButton = backButtonContainer.cloneNode(true);
        bottomBackButton.style.borderBottom = 'none';
        bottomBackButton.style.borderTop = '2px solid #e2e8f0';
        bottomBackButton.style.paddingTop = '1rem';
        bottomBackButton.style.paddingBottom = '0';

        // Re-add event listeners to cloned button
        const bottomBtn = bottomBackButton.querySelector('a');
        bottomBtn.onmouseover = backButton.onmouseover;
        bottomBtn.onmouseout = backButton.onmouseout;

        content.appendChild(bottomBackButton);
    };

    // Add back button on document pages
    addBackToIndexButton();
});
