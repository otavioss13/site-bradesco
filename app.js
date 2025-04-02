'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const switcher = document.querySelector('.btn');

    switcher.addEventListener('click', function() {
        
        document.body.classList.toggle('dark-theme');

        
        if (document.body.classList.contains('dark-theme')) {
           
            this.textContent = 'Light';
        } else {
            
            this.textContent = 'Dark';
        }

        
        console.log('Current class name: ' + document.body.className);
    });
});
