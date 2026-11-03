
/* =========================================
   EDUCAWEB - SISTEMA DE CURSOS EN LINEA
   HTML + CSS + JAVASCRIPT
   Almacenamiento: localStorage
========================================= */

const STORAGE = {
    users: "educaweb_users",
    enrollments: "educaweb_enrollments",
    results: "educaweb_results",
    session: "educaweb_session"
};

/* =========================================
   INFORMACIÓN DE LOS CURSOS
========================================= */

const courses = [
    {
        id: "web",
        title: "Desarrollo Web",
        icon: "💻",
        category: "Tecnología",
        level: "Principiante",
        duration: "4 semanas",
        description: "Aprende a crear páginas web modernas utilizando HTML, CSS y JavaScript.",
        lessons: [
            {
                title: "Introducción al desarrollo web",
                body: "El desarrollo web consiste en crear sitios y aplicaciones que funcionan desde un navegador. Se divide principalmente en frontend (lo que ve el usuario) y backend (la lógica y los datos).",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1000",
                link: "https://developer.mozilla.org/es/docs/Learn"
            },
            {
                title: "HTML: estructura",
                body: "HTML define la estructura del contenido mediante etiquetas. Algunos elementos esenciales son header, nav, main, section, article y footer. Utiliza títulos y etiquetas semánticas para organizar tu página.",
                image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1000",
                link: "https://developer.mozilla.org/es/docs/Web/HTML"
            },
            {
                title: "CSS y diseño",
                body: "CSS controla la presentación visual: colores, tamaños, espacios y distribución. Flexbox y Grid permiten crear diseños adaptables. Las media queries ajustan la página a diferentes pantallas.",
                image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=1000",
                link: "https://developer.mozilla.org/es/docs/Web/CSS"
            },
            {
                title: "JavaScript",
                body: "JavaScript agrega interacción a una página. Permite responder a eventos, validar formularios, modificar el DOM y almacenar datos en el navegador.",
                image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000",
                link: "https://developer.mozilla.org/es/docs/Web/JavaScript"
            }
        ]
    },
    {
        id: "python",
        title: "Programación básica",
        icon: "🧩",
        category: "Programación",
        level: "Principiante",
        duration: "3 semanas",
        description: "Comprende algoritmos, variables, condicionales, ciclos y resolución de problemas.",
        lessons: [
            {
                title: "Pensamiento computacional",
                body: "Resolver un problema mediante programación requiere analizarlo, dividirlo en pasos, identificar entradas y salidas y diseñar un algoritmo.",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000",
                link: "https://www.freecodecamp.org/espanol/"
            },
            {
                title: "Variables y tipos de datos",
                body: "Una variable almacena información. Los tipos comunes son enteros, decimales, cadenas de texto y valores booleanos. El tipo determina qué operaciones se pueden realizar.",
                image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1000",
                link: "https://developer.mozilla.org/es/docs/Glossary/Variable"
            },
            {
                title: "Condicionales y ciclos",
                body: "Las estructuras if/else permiten tomar decisiones. Los ciclos for y while repiten instrucciones mientras se cumpla una condición o durante una cantidad determinada de iteraciones.",
                image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=1000",
                link: "https://www.w3schools.com/"
            },
            {
                title: "Funciones",
                body: "Una función agrupa instrucciones reutilizables. Puede recibir parámetros y devolver un resultado, ayudando a organizar el código en partes pequeñas.",
                image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1000",
                link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions"
            }
        ]
    },
    {
        id: "database",
        title: "Bases de datos",
        icon: "🗄️",
        category: "Tecnología",
        level: "Intermedio",
        duration: "4 semanas",
        description: "Aprende los fundamentos de bases de datos relacionales y consultas SQL.",
        lessons: [
            {
                title: "¿Qué es una base de datos?",
                body: "Una base de datos permite almacenar información organizada para consultarla, modificarla y administrarla. En el modelo relacional los datos se organizan en tablas.",
                image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=1000",
                link: "https://www.mysql.com/"
            },
            {
                title: "Tablas y relaciones",
                body: "Una tabla contiene filas y columnas. La clave primaria identifica cada registro y la clave foránea relaciona información entre tablas.",
                image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000",
                link: "https://www.w3schools.com/sql/"
            },
            {
                title: "Consultas SQL",
                body: "SELECT consulta información; INSERT agrega registros; UPDATE modifica datos y DELETE elimina registros. WHERE permite filtrar los resultados.",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1000",
                link: "https://dev.mysql.com/doc/"
            },
            {
                title: "Buenas prácticas",
                body: "Diseña tablas sin duplicación innecesaria, valida los datos, crea respaldos y utiliza consultas preparadas para reducir riesgos de inyección SQL.",
                image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000",
                link: "https://owasp.org/"
            }
        ]
    },
    {
        id: "cyber",
        title: "Ciberseguridad",
        icon: "🛡️",
        category: "Seguridad",
        level: "Principiante",
        duration: "2 semanas",
        description: "Conoce amenazas digitales, contraseñas seguras y buenas prácticas de protección.",
        lessons: [
            {
                title: "Principios de seguridad",
                body: "La seguridad de la información busca proteger la confidencialidad, integridad y disponibilidad de los datos.",
                image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1000",
                link: "https://www.cisa.gov/"
            },
            {
                title: "Amenazas comunes",
                body: "El phishing intenta engañar a las personas para obtener información. El malware es software malicioso y puede robar datos o dañar equipos.",
                image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1000",
                link: "https://owasp.org/www-project-top-ten/"
            },
            {
                title: "Contraseñas y autenticación",
                body: "Utiliza contraseñas largas y únicas, un administrador de contraseñas y autenticación multifactor. Nunca compartas códigos de verificación.",
                image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1000",
                link: "https://www.cisa.gov/secure-our-world"
            },
            {
                title: "Navegación segura",
                body: "Verifica los dominios, mantén tus programas actualizados, evita archivos sospechosos y realiza copias de seguridad.",
                image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1000",
                link: "https://www.incibe.es/"
            }
        ]
    },
    {
        id: "design",
        title: "Diseño digital",
        icon: "🎨",
        category: "Creatividad",
        level: "Principiante",
        duration: "3 semanas",
        description: "Aprende principios visuales, color, composición y diseño centrado en el usuario.",
        lessons: [
            {
                title: "Principios del diseño",
                body: "Un buen diseño comunica con claridad. Jerarquía, contraste, alineación, proximidad y repetición ayudan a organizar la información.",
                image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1000",
                link: "https://www.canva.com/"
            },
            {
                title: "Color y tipografía",
                body: "El color transmite sensaciones y ayuda a destacar elementos. La tipografía debe ser legible y mantener una jerarquía coherente entre títulos y textos.",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=1000",
                link: "https://fonts.google.com/"
            },
            {
                title: "Composición",
                body: "Distribuye los elementos para guiar la mirada. El espacio en blanco evita la saturación y permite identificar las secciones.",
                image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1000",
                link: "https://www.figma.com/"
            },
            {
                title: "Diseño adaptable",
                body: "Una interfaz adaptable se ajusta a celulares, tabletas y computadoras. Prioriza contenido, navegación sencilla y controles accesibles.",
                image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1000",
                link: "https://web.dev/learn/design/"
            }
        ]
    },
    {
        id: "office",
        title: "Productividad digital",
        icon: "📊",
        category: "Productividad",
        level: "Principiante",
        duration: "2 semanas",
        description: "Organiza información, documentos y tareas con herramientas digitales.",
        lessons: [
            {
                title: "Organización digital",
                body: "Organiza tus archivos con carpetas claras, nombres descriptivos y copias de respaldo. Mantén una estructura constante.",
                image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000",
                link: "https://support.microsoft.com/"
            },
            {
                title: "Documentos efectivos",
                body: "Un documento efectivo tiene objetivo claro, títulos, párrafos breves, tablas cuando aporten valor y revisión ortográfica.",
                image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1000",
                link: "https://workspace.google.com/"
            },
            {
                title: "Hojas de cálculo",
                body: "Las hojas de cálculo organizan datos en celdas. Las fórmulas permiten realizar operaciones y las gráficas facilitan interpretar resultados.",
                image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1000",
                link: "https://support.microsoft.com/excel"
            },
            {
                title: "Gestión del tiempo",
                body: "Divide tareas grandes en actividades pequeñas, establece prioridades y utiliza calendarios o listas para dar seguimiento.",
                image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1000",
                link: "https://todoist.com/"
            }
        ]
    }
];

/* =========================================
   PREGUNTAS DE LAS EVALUACIONES
========================================= */

const quizzes = {
    web: [
        {q:"¿Qué lenguaje define la estructura de una página web?",type:"radio",opts:["CSS","HTML","SQL","Python"],a:1},
        {q:"Selecciona las tecnologías utilizadas directamente en el frontend.",type:"check",opts:["HTML","CSS","JavaScript","MySQL"],a:[0,1,2]},
        {q:"¿Qué etiqueta se utiliza normalmente para el título principal?",type:"select",opts:["<p>","<h1>","<footer>"],a:"<h1>"},
        {q:"¿Qué propiedad CSS cambia el color del texto?",type:"text",a:"color"},
        {q:"JavaScript puede responder a eventos realizados por el usuario.",type:"radio",opts:["Verdadero","Falso"],a:0},
        {q:"¿Cuántos componentes tiene el modelo de caja CSS: contenido, padding, borde y margen?",type:"number",a:4}
    ],
    python: [
        {q:"¿Cuál es el objetivo de un algoritmo?",type:"radio",opts:["Decorar una página","Resolver un problema mediante pasos","Guardar imágenes"],a:1},
        {q:"Selecciona tipos de datos comunes.",type:"check",opts:["Entero","Cadena","Booleano","Monitor"],a:[0,1,2]},
        {q:"¿Qué estructura permite tomar decisiones?",type:"select",opts:["if/else","print","input"],a:"if/else"},
        {q:"¿Qué palabra se utiliza comúnmente para definir una función en Python?",type:"text",a:"def"},
        {q:"Un ciclo permite repetir instrucciones.",type:"radio",opts:["Verdadero","Falso"],a:0},
        {q:"¿Cuánto es 5 + 7?",type:"number",a:12}
    ],
    database: [
        {q:"¿Qué significa SQL?",type:"radio",opts:["Structured Query Language","Simple Question List","System Quick Link"],a:0},
        {q:"Selecciona comandos SQL de manipulación de datos.",type:"check",opts:["INSERT","UPDATE","DELETE","PAINT"],a:[0,1,2]},
        {q:"¿Qué comando consulta datos?",type:"select",opts:["SELECT","UPDATE","DROP"],a:"SELECT"},
        {q:"¿Cómo se llama el campo que identifica de forma única un registro?",type:"text",a:"clave primaria"},
        {q:"Una clave foránea permite relacionar tablas.",type:"radio",opts:["Verdadero","Falso"],a:0},
        {q:"Si una tabla tiene 8 registros y agregas 2, ¿cuántos tendrá?",type:"number",a:10}
    ],
    cyber: [
        {q:"¿Cuál es uno de los principios de seguridad de la información?",type:"radio",opts:["Confidencialidad","Velocidad","Decoración"],a:0},
        {q:"Selecciona buenas prácticas de seguridad.",type:"check",opts:["Usar contraseñas únicas","Activar MFA","Compartir códigos","Actualizar programas"],a:[0,1,3]},
        {q:"¿Qué es el phishing?",type:"select",opts:["Un engaño para robar información","Un tipo de teclado","Un respaldo"],a:"Un engaño para robar información"},
        {q:"¿Cómo se llama el software malicioso?",type:"text",a:"malware"},
        {q:"La autenticación multifactor agrega una capa de seguridad.",type:"radio",opts:["Verdadero","Falso"],a:0},
        {q:"¿Cuántos factores de autenticación como mínimo sugiere el término multifactor?",type:"number",a:2}
    ],
    design: [
        {q:"¿Qué principio ayuda a destacar información importante?",type:"radio",opts:["Contraste","Desorden","Duplicación"],a:0},
        {q:"Selecciona elementos que mejoran la legibilidad.",type:"check",opts:["Tipografía clara","Jerarquía visual","Texto saturado","Espacio en blanco"],a:[0,1,3]},
        {q:"¿Qué herramienta se utiliza para elegir combinaciones tipográficas?",type:"select",opts:["Google Fonts","MySQL","Git"],a:"Google Fonts"},
        {q:"¿Qué concepto describe la organización visual de elementos?",type:"text",a:"composición"},
        {q:"El diseño adaptable se ajusta a distintos tamaños de pantalla.",type:"radio",opts:["Verdadero","Falso"],a:0},
        {q:"¿Cuántos colores primarios tiene el modelo RGB?",type:"number",a:3}
    ],
    office: [
        {q:"¿Qué herramienta permite organizar datos en filas y columnas?",type:"radio",opts:["Hoja de cálculo","Reproductor","Navegador"],a:0},
        {q:"Selecciona prácticas de organización digital.",type:"check",opts:["Nombres descriptivos","Carpetas ordenadas","Copias de respaldo","Guardar todo sin orden"],a:[0,1,2]},
        {q:"¿Qué recurso ayuda a visualizar datos?",type:"select",opts:["Gráfica","Contraseña","Carpeta"],a:"Gráfica"},
        {q:"¿Qué se recomienda establecer para organizar el tiempo?",type:"text",a:"prioridades"},
        {q:"Dividir una tarea grande en actividades pequeñas facilita su ejecución.",type:"radio",opts:["Verdadero","Falso"],a:0},
        {q:"Si completas 3 tareas de 5, ¿cuántas quedan pendientes?",type:"number",a:2}
    ]
};

/* =========================================
   VARIABLES GENERALES
========================================= */

let currentUser = null;
let activeCourse = null;
let activeLesson = 0;
let toastTimer;

/* =========================================
   ALMACENAMIENTO
========================================= */

function read(key, fallback = []) {
    try {
        return JSON.parse(localStorage.getItem(key)) ?? fallback;
    } catch {
        return fallback;
    }
}

function write(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function users() {
    return read(STORAGE.users, []);
}

function enrollments() {
    return read(STORAGE.enrollments, []);
}

function results() {
    return read(STORAGE.results, []);
}

/* =========================================
   INICIALIZAR SISTEMA
========================================= */

function init() {

    // Crear administrador de prueba
    if (!users().some(u => u.username === "admin")) {

        const all = users();

        all.push({
            id: "admin",
            name: "Administrador",
            lastname: "EducaWeb",
            email: "admin@educaweb.local",
            username: "admin",
            password: "1234",
            role: "admin"
        });

        write(STORAGE.users, all);
    }

    // Recuperar sesión
    const saved = read(STORAGE.session, null);

    if (saved) {
        currentUser = users().find(u => u.id === saved.id) || null;
    }

    renderCourses();
    updateNav();

    if (currentUser) {
        currentUser.role === "admin"
            ? showAdmin()
            : showDashboard();
    }
}

/* =========================================
   MOSTRAR TARJETAS
========================================= */

function renderCourses() {

    document.getElementById("courseGrid").innerHTML =
        courses.map(c => `

        <article class="course-card"
            tabindex="0"
            onclick="flipCard(this)"
            onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();flipCard(this)}"
            aria-label="${c.title}, haz clic para girar">

            <div class="card-inner">

                <div class="card-face card-front">

                    <div>
                        <div class="course-icon">${c.icon}</div>
                        <h3>${c.title}</h3>
                        <p>${c.category} · ${c.level}</p>
                    </div>

                    <span class="flip-hint">
                        HAZ CLIC PARA DESCUBRIR ↻
                    </span>

                </div>

                <div class="card-face card-back">

                    <div>
                        <h3>${c.title}</h3>
                        <p>${c.description}</p>

                        <div class="card-meta">
                            ◷ ${c.duration} · ${c.lessons.length} lecciones
                        </div>
                    </div>

                    <button onclick="event.stopPropagation();courseAction('${c.id}')">
                        Ver curso →
                    </button>

                </div>

            </div>
        </article>

    `).join("");
}

/* Girar tarjeta con clic */

function flipCard(card) {
    card.classList.toggle("flipped");
}

/* =========================================
   NAVEGACIÓN Y SESIÓN
========================================= */

function updateNav() {

    const b = document.getElementById("navAction");
    const loginBox = document.getElementById("loginBox");
    const userBox = document.getElementById("userBox");

    if (currentUser) {

        loginBox.classList.add("hidden");
        userBox.classList.remove("hidden");

        document.getElementById("userName").textContent =
            currentUser.name;

        document.getElementById("userRole").textContent =
            currentUser.role === "admin"
                ? "Administrador"
                : "Estudiante";

        b.textContent = currentUser.role === "admin"
            ? "Panel administrador"
            : "Mi panel";

        b.onclick = () => {
            currentUser.role === "admin"
                ? showAdmin()
                : showDashboard();
        };

    } else {

        loginBox.classList.remove("hidden");
        userBox.classList.add("hidden");

        b.textContent = "Iniciar sesión";
        b.onclick = openAuth;
    }
}

function showHome() {

    document.getElementById("homeView").classList.remove("hidden");
    document.getElementById("contentView").classList.add("hidden");

    updateNav();
    window.scrollTo(0, 0);
}

function showContent(html) {

    document.getElementById("homeView").classList.add("hidden");

    const v = document.getElementById("contentView");

    v.classList.remove("hidden");
    v.innerHTML = html;

    window.scrollTo(0, 0);
}

function openAuth() {

    showHome();

    document.getElementById("loginUser").focus();

    document.getElementById("loginBox").scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

/* =========================================
   REGISTRO DE ESTUDIANTES
========================================= */

function openRegister() {

    document.getElementById("modalRoot").innerHTML = `

    <div class="modal-backdrop"
        onclick="if(event.target===this)closeModal()">

        <div class="modal">

            <h2>Crear cuenta de estudiante</h2>

            <p class="muted">
                Completa tus datos para comenzar a aprender.
            </p>

            <form id="registerForm">

                <label class="form-label">Nombre</label>
                <input class="field" name="name"
                    required maxlength="45"
                    placeholder="Tu nombre">

                <label class="form-label">Apellidos</label>
                <input class="field" name="lastname"
                    required maxlength="60"
                    placeholder="Tus apellidos">

                <label class="form-label">Correo electrónico</label>
                <input class="field" name="email"
                    type="email" required
                    placeholder="correo@ejemplo.com">

                <label class="form-label">Nombre de usuario</label>
                <input class="field" name="username"
                    required minlength="4" maxlength="25"
                    placeholder="Mínimo 4 caracteres">

                <label class="form-label">Contraseña</label>
                <input class="field" name="password"
                    type="password" required minlength="4"
                    placeholder="Mínimo 4 caracteres">

                <div class="modal-actions">

                    <button type="button"
                        class="btn btn-outline"
                        onclick="closeModal()">
                        Cancelar
                    </button>

                    <button class="btn btn-primary">
                        Registrarme
                    </button>

                </div>

            </form>

        </div>
    </div>
    `;

    document.getElementById("registerForm")
        .addEventListener("submit", register);
}

function closeModal() {
    document.getElementById("modalRoot").innerHTML = "";
}

function register(e) {

    e.preventDefault();

    const d = Object.fromEntries(new FormData(e.target));
    const list = users();

    if (list.some(u =>
        u.username.toLowerCase() === d.username.toLowerCase()
    )) {
        return toast("Ese usuario ya está registrado.");
    }

    if (list.some(u =>
        u.email.toLowerCase() === d.email.toLowerCase()
    )) {
        return toast("Ese correo ya está registrado.");
    }

    list.push({
        id: "u" + Date.now(),
        ...d,
        role: "student"
    });

    write(STORAGE.users, list);

    closeModal();

    toast("Cuenta creada. Ya puedes iniciar sesión.");

    document.getElementById("loginUser").value = d.username;
}

/* =========================================
   INICIO DE SESIÓN
========================================= */

document.getElementById("loginForm").addEventListener("submit", e => {

    e.preventDefault();

    const username = document.getElementById("loginUser")
        .value.trim().toLowerCase();

    const password = document.getElementById("loginPassword").value;

    const found = users().find(u =>
        (
            u.username.toLowerCase() === username ||
            u.email.toLowerCase() === username
        ) &&
        u.password === password
    );

    if (!found) {

        document.getElementById("loginMessage").textContent =
            "Usuario o contraseña incorrectos.";

        return;
    }

    currentUser = found;

    write(STORAGE.session, {
        id: found.id
    });

    updateNav();

    toast("Bienvenido, " + found.name);

    found.role === "admin"
        ? showAdmin()
        : showDashboard();

});

function logout() {

    currentUser = null;

    localStorage.removeItem(STORAGE.session);

    document.getElementById("loginForm").reset();
    document.getElementById("loginMessage").textContent = "";

    updateNav();
    showHome();

    toast("Sesión cerrada correctamente.");
}

/* =========================================
   INSCRIPCIÓN A CURSOS
========================================= */

function courseAction(id) {

    const c = courses.find(x => x.id === id);

    if (!currentUser) {
        toast("Inicia sesión o regístrate para acceder al curso.");
        openAuth();
        return;
    }

    if (currentUser.role === "admin") {
        toast("El administrador puede consultar los cursos desde su panel.");
        return;
    }

    const list = enrollments();

    if (!list.some(x =>
        x.userId === currentUser.id &&
        x.courseId === id
    )) {

        list.push({
            userId: currentUser.id,
            courseId: id,
            date: new Date().toISOString()
        });

        write(STORAGE.enrollments, list);

        toast("Te has inscrito en " + c.title);
    }

    showCourse(id);
}

/* =========================================
   PANEL DEL ESTUDIANTE
========================================= */

function showDashboard() {

    if (!currentUser) return showHome();

    const mine = enrollments().filter(x =>
        x.userId === currentUser.id
    );

    const passed = results().filter(x =>
        x.userId === currentUser.id &&
        x.score >= 70
    );

    showContent(`

    <div class="page-top">

        <div>
            <span class="eyebrow">ÁREA DEL ESTUDIANTE</span>
            <h1>¡Hola, ${escapeHTML(currentUser.name)}!</h1>
            <p class="muted">
                Continúa aprendiendo y revisa tu progreso.
            </p>
        </div>

        <button class="btn btn-outline no-print"
            onclick="logout()">
            Cerrar sesión
        </button>

    </div>

    <div class="dashboard-grid">

        <div class="stat-card">
            <span class="muted">Cursos inscritos</span>
            <strong>${mine.length}</strong>
        </div>

        <div class="stat-card">
            <span class="muted">Evaluaciones aprobadas</span>
            <strong>${passed.length}</strong>
        </div>

        <div class="stat-card">
            <span class="muted">Promedio obtenido</span>
            <strong>${average(currentUser.id)}%</strong>
        </div>

    </div>

    <div class="page-top" style="margin-top:32px">
        <h2>Mis cursos</h2>

        <button class="btn btn-primary"
            onclick="showHome()">
            Explorar cursos
        </button>
    </div>

    <div class="student-course-list">

        ${mine.length ? mine.map(en => {

            const c = courses.find(x => x.id === en.courseId);

            const last = results()
                .filter(r =>
                    r.userId === currentUser.id &&
                    r.courseId === c.id
                )
                .sort((a,b) => b.date.localeCompare(a.date))[0];

            return `

            <div class="mini-course">

                <span class="tag">${c.category}</span>

                <h3>${c.icon} ${c.title}</h3>

                <p>${c.description}</p>

                <p>
                    ${last
                        ? `Última nota: <b>${last.score}/100</b>`
                        : "Aún no has realizado la evaluación."
                    }
                </p>

                <button class="btn btn-primary"
                    onclick="showCourse('${c.id}')">
                    Continuar curso
                </button>

                ${last && last.score >= 70
                    ? `<button class="btn btn-outline"
                        onclick="showCertificate('${c.id}')">
                        Ver diploma
                       </button>`
                    : ""
                }

            </div>

            `;

        }).join("") : `

            <div class="panel empty-state">
                Todavía no tienes cursos inscritos.
                Explora los cursos disponibles para comenzar.
            </div>

        `}

    </div>

    `);
}

function average(id) {

    const r = results().filter(x => x.userId === id);

    return r.length
        ? Math.round(r.reduce((s,x) => s + x.score, 0) / r.length)
        : 0;
}

/* =========================================
   CONTENIDO DE LOS CURSOS
========================================= */

function showCourse(id) {

    const c = courses.find(x => x.id === id);

    if (!c) return;

    activeCourse = c;
    activeLesson = 0;

    renderLesson();
}

function renderLesson() {

    const c = activeCourse;
    const l = c.lessons[activeLesson];

    showContent(`

    <div class="page-top">

        <div>
            <span class="eyebrow">
                ${c.category.toUpperCase()} · ${c.duration}
            </span>

            <h1>${c.icon} ${c.title}</h1>
            <p class="muted">${c.description}</p>
        </div>

        <button class="btn btn-outline no-print"
            onclick="showDashboard()">
            ← Mi panel
        </button>

    </div>

    <div class="lesson-layout">

        <aside class="panel lesson-menu">

            <h3>Contenido del curso</h3>

            ${c.lessons.map((x,i) => `

                <button
                    class="${i === activeLesson ? "active" : ""}"
                    onclick="activeLesson=${i};renderLesson()">

                    ${i+1}. ${x.title}

                </button>

            `).join("")}

            <hr>

            <button onclick="showQuiz('${c.id}')">
                📝 Ir a la evaluación
            </button>

        </aside>

        <article class="panel lesson-content">

            <span class="tag">
                Lección ${activeLesson+1} de ${c.lessons.length}
            </span>

            <h2>${l.title}</h2>

            <p>${l.body}</p>

            <img src="${l.image}"
                alt="Imagen ilustrativa de ${c.title}"
                onerror="this.style.display='none'">

            <p>
                <b>Recurso para profundizar:</b>

                <a class="resource-link"
                    href="${l.link}"
                    target="_blank"
                    rel="noopener">

                    Consultar material externo ↗

                </a>
            </p>

            ${activeLesson === 0 ? `

                <h3>Video introductorio</h3>

                <iframe
                    class="video-frame"
                    src="https://www.youtube-nocookie.com/embed/UB1O30fR-EE"
                    title="Video educativo"
                    allowfullscreen
                    loading="lazy">
                </iframe>

                <small class="muted">
                    Video de referencia sobre fundamentos web.
                </small>

            ` : ""}

            <div class="modal-actions no-print">

                ${activeLesson > 0 ? `

                    <button class="btn btn-outline"
                        onclick="activeLesson--;renderLesson()">
                        Lección anterior
                    </button>

                ` : ""}

                ${activeLesson < c.lessons.length - 1 ? `

                    <button class="btn btn-primary"
                        onclick="activeLesson++;renderLesson()">
                        Siguiente lección →
                    </button>

                ` : `

                    <button class="btn btn-primary"
                        onclick="showQuiz('${c.id}')">
                        Realizar evaluación →
                    </button>

                `}

            </div>

        </article>

    </div>

    `);
}

/* =========================================
   EVALUACIONES
========================================= */

function showQuiz(id) {

    const c = courses.find(x => x.id === id);
    const qs = quizzes[id];

    showContent(`

    <div class="page-top">

        <div>
            <span class="eyebrow">EVALUACIÓN FINAL</span>
            <h1>${c.title}</h1>

            <p class="muted">
                Responde las 6 preguntas.
                Cada pregunta vale aproximadamente 16.67 puntos.
            </p>
        </div>

        <button class="btn btn-outline no-print"
            onclick="showCourse('${id}')">
            ← Volver al curso
        </button>

    </div>

    <form id="quizForm" class="panel">

        <div class="tag">
            6 preguntas · Calificación sobre 100
        </div>

        ${qs.map((q,i) => `

            <section class="quiz-question">

                <h3>${i+1}. ${q.q}</h3>

                ${renderQuestion(q,i)}

            </section>

        `).join("")}

        <button class="btn btn-primary full" type="submit">
            Enviar evaluación y ver resultado
        </button>

    </form>

    `);

    document.getElementById("quizForm")
        .addEventListener("submit", e => gradeQuiz(e,id));
}

function renderQuestion(q,i) {

    if (q.type === "radio") {

        return q.opts.map((o,j) => `

            <label class="option">
                <input type="radio"
                    name="q${i}"
                    value="${j}"
                    required>
                ${escapeHTML(o)}
            </label>

        `).join("");
    }

    if (q.type === "check") {

        return q.opts.map((o,j) => `

            <label class="option">
                <input type="checkbox"
                    name="q${i}"
                    value="${j}">
                ${escapeHTML(o)}
            </label>

        `).join("");
    }

    if (q.type === "select") {

        return `

            <select class="field" name="q${i}" required>

                <option value="">
                    Selecciona una respuesta
                </option>

                ${q.opts.map(o => `
                    <option>${escapeHTML(o)}</option>
                `).join("")}

            </select>

        `;
    }

    if (q.type === "text") {

        return `
            <input class="field"
                type="text"
                name="q${i}"
                required
                placeholder="Escribe tu respuesta">
        `;
    }

    return `
        <input class="field"
            type="number"
            name="q${i}"
            required
            placeholder="Escribe un número">
    `;
}

/* =========================================
   CALIFICAR EVALUACIÓN
========================================= */

function gradeQuiz(e,id) {

    e.preventDefault();

    const fd = new FormData(e.target);
    const qs = quizzes[id];

    let correct = 0;

    qs.forEach((q,i) => {

        let ok = false;

        if (q.type === "radio") {
            ok = Number(fd.get("q"+i)) === q.a;
        }

        if (q.type === "check") {

            const got = fd.getAll("q"+i)
                .map(Number)
                .sort((a,b) => a-b);

            ok = JSON.stringify(got) ===
                JSON.stringify([...q.a].sort((a,b) => a-b));
        }

        if (q.type === "select") {
            ok = fd.get("q"+i) === q.a;
        }

        if (q.type === "text") {

            ok = String(fd.get("q"+i) || "")
                .trim()
                .toLowerCase() === q.a.toLowerCase();
        }

        if (q.type === "number") {
            ok = Number(fd.get("q"+i)) === q.a;
        }

        if (ok) correct++;

    });

    const score = Math.round(correct / qs.length * 100);

    const record = {
        id: "r" + Date.now(),
        userId: currentUser.id,
        courseId: id,
        correct,
        total: qs.length,
        score,
        date: new Date().toISOString()
    };

    const all = results();

    all.push(record);

    write(STORAGE.results, all);

    showResult(record);
}

/* =========================================
   MOSTRAR RESULTADOS
========================================= */

function showResult(r) {

    const c = courses.find(x => x.id === r.courseId);
    const approved = r.score >= 70;

    showContent(`

    <div class="panel"
        style="text-align:center;padding:45px 20px">

        <span class="eyebrow">
            RESULTADO DE EVALUACIÓN
        </span>

        <h1>
            ${approved ? "¡Felicidades!" : "Sigue practicando"}
        </h1>

        <div class="result-score">
            ${r.score}
            <small style="font-size:18px">/100</small>
        </div>

        <h3>
            ${approved
                ? "Has aprobado el curso."
                : "Aún no alcanzas la nota mínima."
            }
        </h3>

        <p class="muted">
            Respuestas correctas: ${r.correct} de ${r.total}
            · Nota mínima de aprobación: 70
        </p>

        <p>
            ${approved
                ? "Tu diploma está disponible para imprimir."
                : "Puedes repasar las lecciones y volver a realizar la evaluación."
            }
        </p>

        <div class="modal-actions"
            style="justify-content:center;max-width:520px;margin:25px auto">

            <button class="btn btn-outline"
                onclick="showCourse('${c.id}')">
                Repasar curso
            </button>

            ${approved ? `

                <button class="btn btn-primary"
                    onclick="showCertificate('${c.id}')">
                    Obtener diploma
                </button>

            ` : `

                <button class="btn btn-primary"
                    onclick="showQuiz('${c.id}')">
                    Intentar nuevamente
                </button>

            `}

            <button class="btn btn-outline"
                onclick="showDashboard()">
                Mi panel
            </button>

        </div>

    </div>

    `);
}

/* =========================================
   GENERAR DIPLOMA
========================================= */

function showCertificate(id) {

    const c = courses.find(x => x.id === id);

    const passed = results()
        .filter(r =>
            r.userId === currentUser.id &&
            r.courseId === id &&
            r.score >= 70
        )
        .sort((a,b) => b.date.localeCompare(a.date))[0];

    if (!passed) {
        toast("Debes aprobar la evaluación para obtener el diploma.");
        return;
    }

    const date = new Date(passed.date)
        .toLocaleDateString("es-GT", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });

    showContent(`

    <div class="page-top no-print">

        <div>
            <span class="eyebrow">CERTIFICACIÓN</span>
            <h1>Tu diploma</h1>
        </div>

        <div>

            <button class="btn btn-outline"
                onclick="showDashboard()">
                Volver
            </button>

            <button class="btn btn-primary"
                onclick="window.print()">
                Imprimir / Guardar PDF
            </button>

        </div>

    </div>

    <div class="certificate">

        <div class="cert-brand">
            EDUCAWEB · INSTITUCIÓN EDUCATIVA
        </div>

        <h1>Diploma de Aprobación</h1>

        <p>
            Se otorga el presente reconocimiento a
        </p>

        <div class="student-name">
            ${escapeHTML(currentUser.name + " " + currentUser.lastname)}
        </div>

        <p>
            Por haber completado satisfactoriamente el curso
        </p>

        <div class="cert-course">
            ${c.title}
        </div>

        <p>
            Con una calificación de
            <b>${passed.score}/100 puntos</b>.
        </p>

        <p>Fecha de emisión: ${date}</p>

        <div style="display:flex;justify-content:space-around;margin-top:45px">

            <div>
                ____________________
                <br>
                <small>Dirección académica</small>
            </div>

            <div>
                ____________________
                <br>
                <small>EducaWeb</small>
            </div>

        </div>

        <p style="font-size:10px;margin-top:35px">
            Código de certificado: ${passed.id.toUpperCase()}
        </p>

    </div>

    `);
}

/* =========================================
   PANEL DE ADMINISTRADOR
========================================= */

function showAdmin() {

    if (!currentUser || currentUser.role !== "admin") {
        return showHome();
    }

    const us = users().filter(u => u.role === "student");
    const ens = enrollments();
    const res = results();

    showContent(`

    <div class="page-top">

        <div>

            <span class="eyebrow">CONTROL GENERAL</span>

            <h1>Panel de administrador</h1>

            <p class="muted">
                Bienvenido, ${escapeHTML(currentUser.name)}.
                Consulta la actividad de EducaWeb.
            </p>

        </div>

        <button class="btn btn-outline"
            onclick="logout()">
            Cerrar sesión
        </button>

    </div>

    <div class="dashboard-grid">

        <div class="stat-card">
            <span class="muted">Estudiantes registrados</span>
            <strong>${us.length}</strong>
        </div>

        <div class="stat-card">
            <span class="muted">Inscripciones</span>
            <strong>${ens.length}</strong>
        </div>

        <div class="stat-card">
            <span class="muted">Evaluaciones realizadas</span>
            <strong>${res.length}</strong>
        </div>

    </div>

    <div class="panel" style="margin-top:22px">

        <h2>Estudiantes registrados</h2>

        <div class="table-wrap">

            <table class="admin-table">

                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Usuario</th>
                        <th>Correo</th>
                        <th>Inscripciones</th>
                    </tr>
                </thead>

                <tbody>

                    ${us.length ? us.map(u => `

                        <tr>
                            <td>${escapeHTML(u.name + " " + u.lastname)}</td>
                            <td>${escapeHTML(u.username)}</td>
                            <td>${escapeHTML(u.email)}</td>
                            <td>
                                ${ens.filter(x => x.userId === u.id).length}
                            </td>
                        </tr>

                    `).join("") : `

                        <tr>
                            <td colspan="4">
                                No hay estudiantes registrados.
                            </td>
                        </tr>

                    `}

                </tbody>

            </table>

        </div>

    </div>

    <div class="panel" style="margin-top:22px">

        <h2>Resultados de evaluaciones</h2>

        <div class="table-wrap">

            <table class="admin-table">

                <thead>
                    <tr>
                        <th>Estudiante</th>
                        <th>Curso</th>
                        <th>Correctas</th>
                        <th>Nota</th>
                        <th>Estado</th>
                        <th>Fecha</th>
                    </tr>
                </thead>

                <tbody>

                    ${res.length ? res.slice().reverse().map(r => {

                        const u = us.find(x => x.id === r.userId);
                        const c = courses.find(x => x.id === r.courseId);

                        return `

                            <tr>

                                <td>
                                    ${u
                                        ? escapeHTML(u.name + " " + u.lastname)
                                        : "Usuario"
                                    }
                                </td>

                                <td>${c ? c.title : "Curso"}</td>

                                <td>${r.correct}/${r.total}</td>

                                <td><b>${r.score}</b></td>

                                <td>
                                    <span class="tag">
                                        ${r.score >= 70 ? "Aprobado" : "Reprobado"}
                                    </span>
                                </td>

                                <td>
                                    ${new Date(r.date).toLocaleDateString("es-GT")}
                                </td>

                            </tr>

                        `;

                    }).join("") : `

                        <tr>
                            <td colspan="6">
                                Todavía no hay evaluaciones.
                            </td>
                        </tr>

                    `}

                </tbody>

            </table>

        </div>

    </div>

    <div class="panel" style="margin-top:22px">

        <h2>Cursos publicados</h2>

        <div class="student-course-list">

            ${courses.map(c => `

                <div class="mini-course">

                    <span class="tag">${c.category}</span>

                    <h3>${c.icon} ${c.title}</h3>

                    <p>
                        ${c.duration} · ${c.lessons.length} lecciones
                    </p>

                </div>

            `).join("")}

        </div>

    </div>

    `);
}

/* =========================================
   FUNCIONES AUXILIARES
========================================= */

function showAbout() {

    if (!document.getElementById("homeView").classList.contains("hidden")) {
        document.getElementById("nosotros")
            .scrollIntoView({ behavior: "smooth" });
    } else {
        showHome();
        setTimeout(() => {
            document.getElementById("nosotros")
                .scrollIntoView({ behavior: "smooth" });
        }, 100);
    }
}

function escapeHTML(s) {

    return String(s).replace(/[&<>"']/g, c => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    }[c]));
}

function toast(msg) {

    const el = document.getElementById("toast");

    el.textContent = msg;
    el.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {
        el.classList.remove("show");
    }, 2800);
}

/* =========================================
   INICIAR APLICACIÓN
========================================= */

init();
