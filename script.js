
        // Create code particles
        const codeParticles = document.getElementById('codeParticles');
        const particleCount = 30;
        const codeSamples = [
            '{ code: true }',
            '<div>',
            'function()',
            'dig',
            'console.log()',
            'sudo',
            '#!/bin/bash',
            'SELECT * FROM',
            'git commit',
            'sudo nmap',
            'chmod +x',
            'ssh -p 22',
            '/etc/passwd',
            'curl https://',
            '401',
            'XSS Prevention'
        ];
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('code-particle');
            
            // Random code sample
            particle.textContent = codeSamples[Math.floor(Math.random() * codeSamples.length)];
            
            // Random position
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // Random opacity
            particle.style.opacity = Math.random() * 0.8 + 0.2;
            
            // Animation
            const animDuration = Math.random() * 20 + 10;
            particle.style.animation = `float ${animDuration}s ease-in-out infinite`;
            
            codeParticles.appendChild(particle);
        }
        
        // Button functionality
        document.getElementById('portfolioButton').addEventListener('click', function() {
            alert('this page is under development');
        });

        
        // Animate code particles occasionally
        setInterval(() => {
            const randomParticle = Math.floor(Math.random() * particleCount);
            const particles = document.querySelectorAll('.code-particle');
            if (particles[randomParticle]) {
                const oldText = particles[randomParticle].textContent;
                particles[randomParticle].style.color = '#ffffff';
                
                setTimeout(() => {
                    particles[randomParticle].textContent = codeSamples[Math.floor(Math.random() * codeSamples.length)];
                    particles[randomParticle].style.color = '#32cd32';
                }, 300);
            }
        }, 1000);
        
        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            const bars = document.querySelectorAll('.bar');
            bars[0].classList.toggle('change');
            bars[1].classList.toggle('change');
            bars[2].classList.toggle('change');
            
            if (bars[0].classList.contains('change')) {
                bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                bars[1].style.opacity = '0';
                bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bars[0].style.transform = 'none';
                bars[1].style.opacity = '1';
                bars[2].style.transform = 'none';
            }
        });
        
        // Smooth scrolling for navigation links
        // document.querySelectorAll('.nav-link').forEach(link => {
        //     link.addEventListener('click', function(e) {
        //         e.preventDefault();
                
        //         // Here you would normally add code to scroll to the section
        //         // but we'll just show an alert for this demo
        //         alert(`Navigation to ${this.textContent} section`);
                
        //         // Close mobile menu if open
        //         if (navLinks.classList.contains('active')) {
        //             menuToggle.click();
        //         }
        //     });
        // });
    