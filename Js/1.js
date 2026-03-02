const canvas = document.getElementById('backgroundCanvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        let mouse = { x: null, y: null, radius: 150 }; // Radio de influencia del mouse

        // Configuración de partículas
        const PARTICLE_COUNT = 100;
        const MAX_DISTANCE = 120; // Distancia máxima para dibujar líneas entre partículas
        const REPULSION_FORCE = 0.5; // Fuerza con la que el mouse repele las partículas

        // Clase Partícula
        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.radius = 3;
                this.baseX = x; // Posición original (opcional, para restaurar)
                this.baseY = y;
            }

            update() {
                // Movimiento normal
                this.x += this.vx;
                this.y += this.vy;

                // Rebote en bordes
                if (this.x < 0 || this.x > width) {
                    this.vx *= -1;
                    this.x = Math.min(Math.max(this.x, 0), width);
                }
                if (this.y < 0 || this.y > height) {
                    this.vy *= -1;
                    this.y = Math.min(Math.max(this.y, 0), height);
                }

                // Interacción con el mouse (repulsión)
                if (mouse.x !== null && mouse.y !== null) {
                    let dx = this.x - mouse.x;
                    let dy = this.y - mouse.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius) {
                        let angle = Math.atan2(dy, dx);
                        let force = (mouse.radius - distance) / mouse.radius;
                        this.x += Math.cos(angle) * force * REPULSION_FORCE * 10;
                        this.y += Math.sin(angle) * force * REPULSION_FORCE * 10;
                    }
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
                ctx.fill();
            }
        }

        // Inicializar partículas
        function initParticles() {
            particles = [];
            for (let i = 0; i < PARTICLE_COUNT; i++) {
                let x = Math.random() * width;
                let y = Math.random() * height;
                particles.push(new Particle(x, y));
            }
        }

        // Dibujar líneas entre partículas cercanas
        function drawLines() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    let dx = particles[i].x - particles[j].x;
                    let dy = particles[i].y - particles[j].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < MAX_DISTANCE) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / MAX_DISTANCE})`;
                        ctx.lineWidth = 1;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        }

        // Animación
        function animate() {
            ctx.clearRect(0, 0, width, height);
            
            // Dibujar líneas primero (para que estén detrás de las partículas)
            drawLines();
            
            // Actualizar y dibujar partículas
            particles.forEach(p => {
                p.update();
                p.draw();
            });

            requestAnimationFrame(animate);
        }

        // Ajustar tamaño del canvas y reiniciar partículas al redimensionar
        function resizeCanvas() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            initParticles(); // Recrear partículas para adaptarse al nuevo tamaño
        }

        // Seguimiento del mouse
        window.addEventListener('mousemove', (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        });

        window.addEventListener('mouseleave', () => {
            mouse.x = null;
            mouse.y = null;
        });

        window.addEventListener('resize', resizeCanvas);

        // Iniciar
        resizeCanvas();
        animate();