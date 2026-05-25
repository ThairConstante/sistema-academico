// ============================================================
//  SISTEMA ACADÉMICO - JavaScript Principal
// ============================================================

// ---- DATA STORE ----
const DB = {
  estudiantes: [
    { id: 'EST-001', tipo: 'CC', nombre: 'Valentina', apellido: 'Ospina Reyes', correo: 'v.ospina@uni.edu.co', celular: '3001234567', programa: 'Ingeniería de Sistemas', facultad: 'Ingeniería', ciudad: 'Barranquilla', sexo: 'F', estado: 'Activo', semestre: 4, promedio: 4.2, fechaNacimiento: '2001-05-12', direccion: 'Cra 45 #78-20' },
    { id: 'EST-002', tipo: 'CC', nombre: 'Santiago', apellido: 'Morales Díaz', correo: 's.morales@uni.edu.co', celular: '3109876543', programa: 'Administración de Empresas', facultad: 'Ciencias Económicas', ciudad: 'Bogotá', sexo: 'M', estado: 'Activo', semestre: 6, promedio: 3.8, fechaNacimiento: '2000-11-22', direccion: 'Cll 80 #23-45' },
    { id: 'EST-003', tipo: 'TI', nombre: 'Daniela', apellido: 'García Lozano', correo: 'd.garcia@uni.edu.co', celular: '3205551234', programa: 'Medicina', facultad: 'Ciencias de la Salud', ciudad: 'Medellín', sexo: 'F', estado: 'Activo', semestre: 2, promedio: 4.7, fechaNacimiento: '2003-03-08', direccion: 'Av El Poblado #12-30' },
    { id: 'EST-004', tipo: 'CC', nombre: 'Andrés', apellido: 'Rincón Vargas', correo: 'a.rincon@uni.edu.co', celular: '3156667890', programa: 'Derecho', facultad: 'Ciencias Jurídicas', ciudad: 'Cali', sexo: 'M', estado: 'Inactivo', semestre: 8, promedio: 3.5, fechaNacimiento: '1999-07-14', direccion: 'Cll 5 #50-30' },
    { id: 'EST-005', tipo: 'CC', nombre: 'Laura', apellido: 'Mendoza Pérez', correo: 'l.mendoza@uni.edu.co', celular: '3008889900', programa: 'Ingeniería de Sistemas', facultad: 'Ingeniería', ciudad: 'Barranquilla', sexo: 'F', estado: 'Activo', semestre: 5, promedio: 4.0, fechaNacimiento: '2001-09-25', direccion: 'Cra 52 #68-10' },
    { id: 'EST-006', tipo: 'CC', nombre: 'Camilo', apellido: 'Torres Blanco', correo: 'c.torres@uni.edu.co', celular: '3142223344', programa: 'Psicología', facultad: 'Humanidades', ciudad: 'Bucaramanga', sexo: 'M', estado: 'Activo', semestre: 3, promedio: 3.9, fechaNacimiento: '2002-01-30', direccion: 'Av Santander #15-60' },
    { id: 'EST-007', tipo: 'PP', nombre: 'Isabella', apellido: 'Ramírez Cruz', correo: 'i.ramirez@uni.edu.co', celular: '3224445566', programa: 'Arquitectura', facultad: 'Artes y Diseño', ciudad: 'Cartagena', sexo: 'F', estado: 'Activo', semestre: 7, promedio: 4.5, fechaNacimiento: '2000-04-17', direccion: 'Bocagrande Cll 4' },
    { id: 'EST-008', tipo: 'CC', nombre: 'Felipe', apellido: 'Castro Montoya', correo: 'f.castro@uni.edu.co', celular: '3056667788', programa: 'Contaduría Pública', facultad: 'Ciencias Económicas', ciudad: 'Barranquilla', sexo: 'M', estado: 'Suspendido', semestre: 4, promedio: 3.1, fechaNacimiento: '2001-12-05', direccion: 'Cra 38 #74-40' },
  ],

  docentes: [
    { id: 'DOC-001', nombre: 'Carlos', apellido: 'Jiménez Herrera', correo: 'c.jimenez@uni.edu.co', celular: '3001112233', titulo: 'PhD', departamento: 'Ingeniería', materias: ['Algoritmos', 'Estructuras de Datos'], estado: 'Activo', tipo: 'Tiempo Completo' },
    { id: 'DOC-002', nombre: 'María', apellido: 'Fernández López', correo: 'm.fernandez@uni.edu.co', celular: '3112223344', titulo: 'MSc', departamento: 'Matemáticas', materias: ['Cálculo I', 'Cálculo II'], estado: 'Activo', tipo: 'Tiempo Completo' },
    { id: 'DOC-003', nombre: 'Roberto', apellido: 'Salazar Nieto', correo: 'r.salazar@uni.edu.co', celular: '3203334455', titulo: 'Especialización', departamento: 'Humanidades', materias: ['Filosofía', 'Ética'], estado: 'Activo', tipo: 'Catedrático' },
    { id: 'DOC-004', nombre: 'Ana', apellido: 'Vargas Torres', correo: 'a.vargas@uni.edu.co', celular: '3154445566', titulo: 'PhD', departamento: 'Medicina', materias: ['Anatomía', 'Fisiología'], estado: 'Activo', tipo: 'Tiempo Completo' },
    { id: 'DOC-005', nombre: 'Pedro', apellido: 'Gómez Arias', correo: 'p.gomez@uni.edu.co', celular: '3005556677', titulo: 'MSc', departamento: 'Derecho', materias: ['Derecho Civil', 'Penal'], estado: 'Licencia', tipo: 'Tiempo Parcial' },
  ],

  programas: [
    { id: 'PRG-001', codigo: 'ISI', nombre: 'Ingeniería de Sistemas', facultad: 'Ingeniería', creditos: 165, duracion: 10, estudiantes: 342, estado: 'Activo', modalidad: 'Presencial' },
    { id: 'PRG-002', codigo: 'ADM', nombre: 'Administración de Empresas', facultad: 'Ciencias Económicas', creditos: 152, duracion: 9, estudiantes: 487, estado: 'Activo', modalidad: 'Presencial' },
    { id: 'PRG-003', codigo: 'MED', nombre: 'Medicina', facultad: 'Ciencias de la Salud', creditos: 280, duracion: 12, estudiantes: 215, estado: 'Activo', modalidad: 'Presencial' },
    { id: 'PRG-004', codigo: 'DER', nombre: 'Derecho', facultad: 'Ciencias Jurídicas', creditos: 160, duracion: 10, estudiantes: 390, estado: 'Activo', modalidad: 'Presencial' },
    { id: 'PRG-005', codigo: 'PSI', nombre: 'Psicología', facultad: 'Humanidades', creditos: 145, duracion: 9, estudiantes: 278, estado: 'Activo', modalidad: 'Virtual' },
    { id: 'PRG-006', codigo: 'ARQ', nombre: 'Arquitectura', facultad: 'Artes y Diseño', creditos: 175, duracion: 10, estudiantes: 180, estado: 'Activo', modalidad: 'Presencial' },
  ],

  facultades: [
    { id: 'FAC-001', codigo: 'ING', nombre: 'Ingeniería', programas: 3, docentes: 45, decano: 'Dr. Marcos Hernández', estado: 'Activa' },
    { id: 'FAC-002', codigo: 'ECO', nombre: 'Ciencias Económicas', programas: 4, docentes: 38, decano: 'Dra. Rosa Medina', estado: 'Activa' },
    { id: 'FAC-003', codigo: 'SAL', nombre: 'Ciencias de la Salud', programas: 5, docentes: 67, decano: 'Dr. Alberto Suárez', estado: 'Activa' },
    { id: 'FAC-004', codigo: 'JUR', nombre: 'Ciencias Jurídicas', programas: 2, docentes: 28, decano: 'Dr. Luis Camargo', estado: 'Activa' },
    { id: 'FAC-005', codigo: 'HUM', nombre: 'Humanidades', programas: 6, docentes: 52, decano: 'Dra. Patricia Soto', estado: 'Activa' },
  ],

  aulas: [
    { id: 'AUL-001', codigo: 'A-101', nombre: 'Aula 101', bloque: 'A', capacidad: 40, tipo: 'Aula Regular', estado: 'Disponible', equipada: true },
    { id: 'AUL-002', codigo: 'B-201', nombre: 'Lab Computadores', bloque: 'B', capacidad: 30, tipo: 'Laboratorio', estado: 'En uso', equipada: true },
    { id: 'AUL-003', codigo: 'C-301', nombre: 'Aula Magna', bloque: 'C', capacidad: 200, tipo: 'Auditorio', estado: 'Disponible', equipada: true },
    { id: 'AUL-004', codigo: 'A-102', nombre: 'Aula 102', bloque: 'A', capacidad: 35, tipo: 'Aula Regular', estado: 'Mantenimiento', equipada: false },
    { id: 'AUL-005', codigo: 'D-401', nombre: 'Lab Medicina', bloque: 'D', capacidad: 20, tipo: 'Laboratorio', estado: 'En uso', equipada: true },
  ],

  coordinadores: [
    { id: 'COO-001', nombre: 'Luisa', apellido: 'Pedraza Salas', correo: 'l.pedraza@uni.edu.co', celular: '3001112233', programa: 'Ingeniería de Sistemas', facultad: 'Ingeniería', ciudad: 'Barranquilla', sexo: 'F', estado: 'Activo', fechaNacimiento: '1980-04-10', direccion: 'Cra 50 #80-30' },
    { id: 'COO-002', nombre: 'Hernando', apellido: 'Castro Ríos', correo: 'h.castro@uni.edu.co', celular: '3112223344', programa: 'Administración de Empresas', facultad: 'Ciencias Económicas', ciudad: 'Barranquilla', sexo: 'M', estado: 'Activo', fechaNacimiento: '1975-09-22', direccion: 'Cll 72 #46-10' },
    { id: 'COO-003', nombre: 'Patricia', apellido: 'Mora Quintero', correo: 'p.mora@uni.edu.co', celular: '3203334455', programa: 'Medicina', facultad: 'Ciencias de la Salud', ciudad: 'Barranquilla', sexo: 'F', estado: 'Activo', fechaNacimiento: '1978-01-15', direccion: 'Av Murillo #23-40' },
    { id: 'COO-004', nombre: 'Gonzalo', apellido: 'Díaz Parra', correo: 'g.diaz@uni.edu.co', celular: '3154445566', programa: 'Derecho', facultad: 'Ciencias Jurídicas', ciudad: 'Barranquilla', sexo: 'M', estado: 'Inactivo', fechaNacimiento: '1982-06-30', direccion: 'Cra 43 #68-20' },
    { id: 'COO-005', nombre: 'Sandra', apellido: 'Villalba Torres', correo: 's.villalba@uni.edu.co', celular: '3005556677', programa: 'Psicología', facultad: 'Humanidades', ciudad: 'Barranquilla', sexo: 'F', estado: 'Activo', fechaNacimiento: '1983-11-08', direccion: 'Cll 84 #52-60' },
  ],

  cargaAcademica: [
    { id: 'CA-001', codigoPrograma: 'ISI', nombrePrograma: 'Ingeniería de Sistemas', codigoMateria: 'ISI-101', nombreMateria: 'Fundamentos de Programación', idDocente: 'DOC-001', nombreDocente: 'Carlos Jiménez', codigoAula: 'B-201', hora: '7:00 AM', grupo: '01', dia: 'Lunes', periodo: '2024-1' },
    { id: 'CA-002', codigoPrograma: 'ISI', nombrePrograma: 'Ingeniería de Sistemas', codigoMateria: 'ISI-201', nombreMateria: 'Estructuras de Datos', idDocente: 'DOC-001', nombreDocente: 'Carlos Jiménez', codigoAula: 'B-201', hora: '9:00 AM', grupo: '01', dia: 'Martes', periodo: '2024-1' },
    { id: 'CA-003', codigoPrograma: 'ISI', nombrePrograma: 'Ingeniería de Sistemas', codigoMateria: 'MAT-101', nombreMateria: 'Cálculo Diferencial', idDocente: 'DOC-002', nombreDocente: 'María Fernández', codigoAula: 'A-101', hora: '9:00 AM', grupo: '02', dia: 'Lunes', periodo: '2024-1' },
    { id: 'CA-004', codigoPrograma: 'ADM', nombrePrograma: 'Administración de Empresas', codigoMateria: 'MAT-101', nombreMateria: 'Cálculo Diferencial', idDocente: 'DOC-002', nombreDocente: 'María Fernández', codigoAula: 'A-101', hora: '11:00 AM', grupo: '03', dia: 'Miércoles', periodo: '2024-1' },
    { id: 'CA-005', codigoPrograma: 'MED', nombrePrograma: 'Medicina', codigoMateria: 'MED-101', nombreMateria: 'Anatomía Humana', idDocente: 'DOC-004', nombreDocente: 'Ana Vargas', codigoAula: 'D-401', hora: '7:00 AM', grupo: '01', dia: 'Jueves', periodo: '2024-1' },
    { id: 'CA-006', codigoPrograma: 'ISI', nombrePrograma: 'Ingeniería de Sistemas', codigoMateria: 'HUM-101', nombreMateria: 'Ética Profesional', idDocente: 'DOC-003', nombreDocente: 'Roberto Salazar', codigoAula: 'A-102', hora: '2:00 PM', grupo: '01', dia: 'Viernes', periodo: '2024-1' },
    { id: 'CA-007', codigoPrograma: 'ADM', nombrePrograma: 'Administración de Empresas', codigoMateria: 'HUM-101', nombreMateria: 'Ética Profesional', idDocente: 'DOC-003', nombreDocente: 'Roberto Salazar', codigoAula: 'A-101', hora: '4:00 PM', grupo: '02', dia: 'Viernes', periodo: '2024-1' },
  ],

  materias: [
    { id: 'MAT-001', codigo: 'ISI-101', nombre: 'Fundamentos de Programación', creditos: 3, programa: 'Ingeniería de Sistemas', tipo: 'Obligatoria', semestre: 1 },
    { id: 'MAT-002', codigo: 'MAT-101', nombre: 'Cálculo Diferencial', creditos: 4, programa: 'Común', tipo: 'Obligatoria', semestre: 1 },
    { id: 'MAT-003', codigo: 'ISI-201', nombre: 'Estructuras de Datos', creditos: 3, programa: 'Ingeniería de Sistemas', tipo: 'Obligatoria', semestre: 3 },
    { id: 'MAT-004', codigo: 'HUM-101', nombre: 'Ética Profesional', creditos: 2, programa: 'Común', tipo: 'Electiva', semestre: 2 },
    { id: 'MAT-005', codigo: 'MED-101', nombre: 'Anatomía Humana', creditos: 5, programa: 'Medicina', tipo: 'Obligatoria', semestre: 1 },
  ],

  microcurriculo: [

    {
      id: 'MC-001', codigo: 'MC-ISI-101', materia: 'Fundamentos de Programación', programa: 'Ingeniería de Sistemas', creditos: 3, tipo: 'Obligatoria',
      naturaleza: 'Teórico-Práctica', descripcion: 'Introducción a la lógica de programación, estructuras básicas y desarrollo de algoritmos.', estado: 'Activo'
    },

    {
      id: 'MC-002', codigo: 'MC-MAT-101', materia: 'Cálculo Diferencial', programa: 'Común', creditos: 4, tipo: 'Obligatoria', naturaleza: 'Teórica',
      descripcion: 'Estudio de funciones, límites, derivadas y aplicaciones del cálculo diferencial.', estado: 'Activo'
    },

    { id: 'MC-003', codigo: 'MC-ISI-201', materia: 'Estructuras de Datos', programa: 'Ingeniería de Sistemas', creditos: 3, tipo: 'Obligatoria',
      naturaleza: 'Teórico-Práctica', descripcion: 'Implementación y análisis de estructuras de datos lineales y no lineales.', estado: 'Activo'
    },

  ],
  asistencia: [

  {
    id: 'AS-001',
    codigo: 'AS-2026-001',
    docente: 'Carlos Jiménez',
    asignatura: 'Algoritmos',
    aula: 'B-201',
    hora: '7:00 AM',
    grupo: '01',
    presentes: 28,
    ausentes: 2,
    total: 30,
    estado: 'Finalizada'
  },

  {
    id: 'AS-002',
    codigo: 'AS-2026-002',
    docente: 'María Fernández',
    asignatura: 'Cálculo I',
    aula: 'A-101',
    hora: '9:00 AM',
    grupo: '02',
    presentes: 35,
    ausentes: 5,
    total: 40,
    estado: 'Finalizada'
  },

  {
    id: 'AS-003',
    codigo: 'AS-2026-003',
    docente: 'Ana Vargas',
    asignatura: 'Anatomía',
    aula: 'D-401',
    hora: '11:00 AM',
    grupo: '01',
    presentes: 18,
    ausentes: 2,
    total: 20,
    estado: 'En curso'
  },

  {
    id: 'AS-004',
    codigo: 'AS-2026-004',
    docente: 'Luis Torres',
    asignatura: 'Base de Datos',
    aula: 'C-302',
    hora: '2:00 PM',
    grupo: '03',
    presentes: 26,
    ausentes: 4,
    total: 30,
    estado: 'Finalizada'
  },

  {
    id: 'AS-005',
    codigo: 'AS-2026-005',
    docente: 'Paula Rojas',
    asignatura: 'Redes de Computadores',
    aula: 'LAB-02',
    hora: '4:00 PM',
    grupo: '01',
    presentes: 22,
    ausentes: 3,
    total: 25,
    estado: 'En curso'
  }

],
};

// ---- STATE ----
const state = {
  currentSection: 'dashboard',
  sidebarCollapsed: false,
  editingId: null,
  deleteTarget: null,
  deleteEntity: null,
  filters: {},
};

// ============================================================
//  UTILS
// ============================================================

const colors = ['#1a3a5c','#2980b9','#27ae60','#e8a020','#8e44ad','#c0392b','#16a085','#d35400'];
function getColor(str) {
  let hash = 0;
  for (let c of str) hash = c.charCodeAt(0) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
}
function initials(nombre, apellido) {
  return ((nombre||'')[0]||'').toUpperCase() + ((apellido||'')[0]||'').toUpperCase();
}
function uuid() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5).toUpperCase();
}

// ============================================================
//  SIDEBAR & NAVIGATION
// ============================================================

function initSidebar() {
  const sidebar  = document.getElementById('sidebar');
  const topbar   = document.getElementById('topbar');
  const main     = document.getElementById('mainContent');
  const toggle   = document.getElementById('sidebarToggle');
  const overlay  = document.querySelector('.sidebar-overlay');

  // Helper: ¿estamos en móvil?
  const isMobile = () => window.innerWidth <= 768;

  function openMobileMenu() {
    sidebar.classList.add('mobile-open');
    overlay.classList.add('visible');
  }
  function closeMobileMenu() {
    sidebar.classList.remove('mobile-open');
    overlay.classList.remove('visible');
  }

  toggle.addEventListener('click', () => {
    if (isMobile()) {
      // Móvil: drawer deslizante
      sidebar.classList.contains('mobile-open') ? closeMobileMenu() : openMobileMenu();
    } else {
      // Desktop: colapsar/expandir
      state.sidebarCollapsed = !state.sidebarCollapsed;
      sidebar.classList.toggle('collapsed', state.sidebarCollapsed);
      topbar.classList.toggle('sidebar-collapsed', state.sidebarCollapsed);
      main.classList.toggle('sidebar-collapsed', state.sidebarCollapsed);
    }
  });

  // Cerrar menú móvil al tocar el overlay
  overlay.addEventListener('click', closeMobileMenu);

  // Nav items — en móvil cierra el drawer al navegar
  document.querySelectorAll('.nav-item[data-section]').forEach(item => {
    item.addEventListener('click', () => {
      if (isMobile()) closeMobileMenu();
      navigateTo(item.dataset.section);
    });
  });

  // Al redimensionar, limpiar estados cruzados
  window.addEventListener('resize', () => {
    if (!isMobile()) {
      closeMobileMenu();
    } else {
      sidebar.classList.remove('collapsed');
      topbar.classList.remove('sidebar-collapsed');
      main.classList.remove('sidebar-collapsed');
    }
  });
}

function navigateTo(section) {
  // Update nav
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  const navItem = document.querySelector(`.nav-item[data-section="${section}"]`);
  if (navItem) navItem.classList.add('active');

  // Update pages
  document.querySelectorAll('.page-section').forEach(el => el.classList.remove('active'));
  const page = document.getElementById(`page-${section}`);
  if (page) page.classList.add('active');

  // Update breadcrumb
  const labels = {
    dashboard: 'Dashboard', estudiantes: 'Estudiantes', docentes: 'Docentes',
    programas: 'Programas', facultades: 'Facultades', aulas: 'Aulas',
    materias: 'Materias', asistencia: 'Asistencia', horarios: 'Horarios',
    microcurriculo: 'Microcurrículo',
  };
  document.getElementById('pageTitle').textContent = labels[section] || section;
  state.currentSection = section;

  // Render the section
  renderSection(section);
}

function renderSection(section) {
  switch(section) {
    case 'dashboard':      renderDashboard();   break;
    case 'estudiantes':    renderEstudiantes(); break;
    case 'docentes':       renderDocentes();    break;
    case 'coordinadores':       renderCoordinadores();    break;
    case 'programas':      renderProgramas();   break;
    case 'facultades':     renderFacultades();  break;
    case 'cargaacademica':          renderCargaAcademica();       break;
    case 'aulas':          renderAulas();       break;
    case 'materias':       renderMaterias();    break;
    case 'asistencia':     renderAsistencia();  break;
    case 'horarios':       renderHorarios();    break;
    case 'microcurriculo': renderMicrocurriculo(); break;
  }
}

// ============================================================
//  DASHBOARD
// ============================================================

function renderDashboard() {
  const el = document.getElementById('page-dashboard');
  const totalEst   = DB.estudiantes.length;
  const activos    = DB.estudiantes.filter(e => e.estado === 'Activo').length;
  const totalDoc   = DB.docentes.length;
  const totalProg  = DB.programas.length;
  const totalFac   = DB.facultades.length;

  el.innerHTML = `
  <div class="section-header">
    <div>
      <div class="section-title">Dashboard</div>
      <div class="section-subtitle">Resumen general del sistema académico</div>
    </div>
    <div class="flex gap-8">
      <span class="badge badge-primary">📅 ${new Date().toLocaleDateString('es-CO', {weekday:'long', day:'numeric', month:'long'})}</span>
    </div>
  </div>

  <div class="stats-grid">
    <div class="stat-card" style="--card-color:#1a3a5c;--card-color-light:rgba(26,58,92,0.1)">
      <div class="stat-icon">🎓</div>
      <div>
        <div class="stat-label">Estudiantes</div>
        <div class="stat-value">${totalEst}</div>
      </div>
      <div class="stat-change up">▲ 12% este periodo</div>
    </div>
    <div class="stat-card" style="--card-color:#27ae60;--card-color-light:rgba(39,174,96,0.1)">
      <div class="stat-icon">👨‍🏫</div>
      <div>
        <div class="stat-label">Docentes</div>
        <div class="stat-value">${totalDoc}</div>
      </div>
      <div class="stat-change up">▲ 3 nuevos</div>
    </div>
    <div class="stat-card" style="--card-color:#e8a020;--card-color-light:rgba(232,160,32,0.1)">
      <div class="stat-icon">📚</div>
      <div>
        <div class="stat-label">Programas</div>
        <div class="stat-value">${totalProg}</div>
      </div>
      <div class="stat-change">— Sin cambios</div>
    </div>
    <div class="stat-card" style="--card-color:#8e44ad;--card-color-light:rgba(142,68,173,0.1)">
      <div class="stat-icon">🏛️</div>
      <div>
        <div class="stat-label">Facultades</div>
        <div class="stat-value">${totalFac}</div>
      </div>
      <div class="stat-change up">▲ Activas</div>
    </div>
    <div class="stat-card" style="--card-color:#2980b9;--card-color-light:rgba(41,128,185,0.1)">
      <div class="stat-icon">✅</div>
      <div>
        <div class="stat-label">Est. Activos</div>
        <div class="stat-value">${activos}</div>
      </div>
      <div class="stat-change up">▲ ${Math.round(activos/totalEst*100)}% del total</div>
    </div>
    <div class="stat-card" style="--card-color:#16a085;--card-color-light:rgba(22,160,133,0.1)">
      <div class="stat-icon">🚪</div>
      <div>
        <div class="stat-label">Aulas</div>
        <div class="stat-value">${DB.aulas.length}</div>
      </div>
      <div class="stat-change">Disponibles: ${DB.aulas.filter(a=>a.estado==='Disponible').length}</div>
    </div>
  </div>

  <div class="dash-grid mt-4">
    <div class="card">
      <div class="card-header">
        <div class="card-title">📊 Estudiantes por Programa</div>
      </div>
      <div class="chart-placeholder">
        <div class="chart-bars">
          ${DB.programas.map((p,i) => `
            <div class="chart-bar ${i===0?'active':''}" style="height:${Math.round(p.estudiantes/500*100)}%;background:${colors[i]};opacity:0.8;" title="${p.nombre}: ${p.estudiantes}"></div>
          `).join('')}
        </div>
        <div class="chart-labels">
          ${DB.programas.map(p => `<span title="${p.nombre}">${p.codigo}</span>`).join('')}
        </div>
        <div class="flex gap-8" style="flex-wrap:wrap;padding-top:8px;">
          ${DB.programas.map((p,i) => `
            <div class="flex gap-8 text-sm" style="align-items:center;">
              <div style="width:10px;height:10px;border-radius:2px;background:${colors[i]};flex-shrink:0"></div>
              <span>${p.nombre}: <strong>${p.estudiantes}</strong></span>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-header"><div class="card-title">📈 Ocupación Facultades</div></div>
      <div class="progress-row">
        ${DB.facultades.map((f,i) => `
          <div class="prog-item">
            <div class="prog-header">
              <div class="prog-label">${f.nombre}</div>
              <div class="prog-val">${f.docentes} doc.</div>
            </div>
            <div class="prog-bar"><div class="prog-fill" style="width:${Math.round(f.docentes/70*100)}%;background:${colors[i]}"></div></div>
          </div>
        `).join('')}
      </div>
    </div>
  </div>

  <div class="card mt-24">
    <div class="card-header">
      <div class="card-title">🔔 Actividad Reciente</div>
    </div>
    <div class="activity-list">
      <div class="activity-item">
        <div class="act-icon" style="background:#e3eaf4;color:#1a3a5c;">🎓</div>
        <div class="act-body">
          <div class="act-text"><strong>Valentina Ospina</strong> se matriculó en el programa de Ingeniería de Sistemas</div>
          <div class="act-time">Hace 2 horas</div>
        </div>
      </div>
      <div class="activity-item">
        <div class="act-icon" style="background:#e8f8ee;color:#27ae60;">✅</div>
        <div class="act-body">
          <div class="act-text"><strong>Carlos Jiménez</strong> registró asistencia en Algoritmos — Grupo 01</div>
          <div class="act-time">Hace 3 horas</div>
        </div>
      </div>
      <div class="activity-item">
        <div class="act-icon" style="background:#fef3e2;color:#e8a020;">📚</div>
        <div class="act-body">
          <div class="act-text">Se actualizó el microcurrículo de <strong>Estructuras de Datos</strong></div>
          <div class="act-time">Ayer, 4:30 PM</div>
        </div>
      </div>
      <div class="activity-item">
        <div class="act-icon" style="background:#fce8e8;color:#e84040;">⚠️</div>
        <div class="act-body">
          <div class="act-text">Aula <strong>A-102</strong> reportada en mantenimiento</div>
          <div class="act-time">Ayer, 9:00 AM</div>
        </div>
      </div>
      <div class="activity-item">
        <div class="act-icon" style="background:#e3f0fb;color:#2980b9;">👨‍🏫</div>
        <div class="act-body">
          <div class="act-text"><strong>María Fernández</strong> fue asignada a Cálculo II — Grupo 03</div>
          <div class="act-time">Hace 2 días</div>
        </div>
      </div>
    </div>
  </div>
  `;
}

// ============================================================
//  ESTUDIANTES
// ============================================================

function renderEstudiantes(filter = '') {
  const el = document.getElementById('page-estudiantes');
  const data = DB.estudiantes.filter(e =>
    !filter ||
    e.nombre.toLowerCase().includes(filter) ||
    e.apellido.toLowerCase().includes(filter) ||
    e.id.toLowerCase().includes(filter) ||
    e.programa.toLowerCase().includes(filter) ||
    e.correo.toLowerCase().includes(filter)
  );

  el.innerHTML = `
  <div class="section-header">
    <div>
      <div class="section-title">Estudiantes</div>
      <div class="section-subtitle">${DB.estudiantes.length} estudiantes registrados</div>
    </div>
    <button class="btn btn-primary" onclick="openModal('modal-estudiante', null, 'estudiante')">
      ＋ Nuevo Estudiante
    </button>
  </div>

  <div class="card">
    <div class="table-toolbar">
      <div class="filter-search">
        <span class="fi">🔍</span>
        <input type="text" placeholder="Buscar por nombre, ID, programa..." id="searchEst"
          value="${filter}"
          oninput="renderEstudiantes(this.value.toLowerCase())">
      </div>
      <select class="filter-select" onchange="filterEstByEstado(this.value)">
        <option value="">Todos los estados</option>
        <option value="Activo">Activo</option>
        <option value="Inactivo">Inactivo</option>
        <option value="Suspendido">Suspendido</option>
      </select>
      <select class="filter-select" onchange="filterEstByProg(this.value)">
        <option value="">Todos los programas</option>
        ${[...new Set(DB.estudiantes.map(e=>e.programa))].map(p=>`<option>${p}</option>`).join('')}
      </select>
      <div style="margin-left:auto;" class="text-muted text-sm">${data.length} resultado(s)</div>
    </div>

    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Estudiante</th>
            <th>ID</th>
            <th>Programa</th>
            <th>Semestre</th>
            <th>Promedio</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          ${data.length ? data.map(e => `
            <tr>
              <td>
                <div class="td-avatar">
                  <div class="t-avatar" style="background:${getColor(e.nombre+e.apellido)}">${initials(e.nombre,e.apellido)}</div>
                  <div>
                    <div class="t-name">${e.nombre} ${e.apellido}</div>
                    <div class="t-sub">${e.correo}</div>
                  </div>
                </div>
              </td>
              <td><span class="badge badge-muted">${e.id}</span></td>
              <td>${e.programa}</td>
              <td><strong>${e.semestre}°</strong></td>
              <td>
                <span class="badge ${e.promedio>=4?'badge-success':e.promedio>=3?'badge-warning':'badge-danger'}">
                  ⭐ ${e.promedio.toFixed(1)}
                </span>
              </td>
              <td>
                <span class="badge ${e.estado==='Activo'?'badge-success':e.estado==='Inactivo'?'badge-muted':'badge-danger'}">
                  ${e.estado}
                </span>
              </td>
              <td>
                <div class="flex gap-8">
                  <button class="btn btn-ghost btn-sm btn-icon" title="Ver detalles" onclick="verDetalle('estudiante','${e.id}')">👁️</button>
                  <button class="btn btn-ghost btn-sm btn-icon" title="Editar" onclick="openModal('modal-estudiante','${e.id}','estudiante')">✏️</button>
                  <button class="btn btn-ghost btn-sm btn-icon" title="Eliminar" onclick="confirmDelete('${e.id}','estudiante')">🗑️</button>
                </div>
              </td>
            </tr>
          `).join('') : `
            <tr><td colspan="7">
              <div class="empty-state">
                <div class="empty-icon">🎓</div>
                <div class="empty-title">No se encontraron estudiantes</div>
                <div class="empty-sub">Intenta con otro término de búsqueda</div>
              </div>
            </td></tr>
          `}
        </tbody>
      </table>
    </div>

    <div class="table-footer">
      <div class="table-info">Mostrando ${data.length} de ${DB.estudiantes.length} registros</div>
      <div class="pagination">
        <button class="page-btn" disabled>‹</button>
        <button class="page-btn active">1</button>
        <button class="page-btn">2</button>
        <button class="page-btn">›</button>
      </div>
    </div>
  </div>
  `;
}

function filterEstByEstado(val) { renderEstudiantes(''); }
function filterEstByProg(val)   { renderEstudiantes(''); }

// ============================================================
//  DOCENTES
// ============================================================

function renderDocentes(filter = '') {
  const el = document.getElementById('page-docentes');
  const data = DB.docentes.filter(d =>
    !filter ||
    d.nombre.toLowerCase().includes(filter) ||
    d.apellido.toLowerCase().includes(filter) ||
    d.id.toLowerCase().includes(filter)
  );

  el.innerHTML = `
  <div class="section-header">
    <div>
      <div class="section-title">Docentes</div>
      <div class="section-subtitle">${DB.docentes.length} docentes registrados</div>
    </div>
    <button class="btn btn-primary" onclick="openModal('modal-docente', null, 'docente')">
      ＋ Nuevo Docente
    </button>
  </div>

  <div class="card">
    <div class="table-toolbar">
      <div class="filter-search">
        <span class="fi">🔍</span>
        <input type="text" placeholder="Buscar docente..." id="searchDoc"
          value="${filter}" oninput="renderDocentes(this.value.toLowerCase())">
      </div>
      <div style="margin-left:auto;" class="text-muted text-sm">${data.length} resultado(s)</div>
    </div>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Docente</th><th>ID</th><th>Departamento</th><th>Título</th><th>Tipo</th><th>Estado</th><th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          ${data.map(d => `
            <tr>
              <td>
                <div class="td-avatar">
                  <div class="t-avatar" style="background:${getColor(d.nombre)}">${initials(d.nombre,d.apellido)}</div>
                  <div>
                    <div class="t-name">${d.nombre} ${d.apellido}</div>
                    <div class="t-sub">${d.correo}</div>
                  </div>
                </div>
              </td>
              <td><span class="badge badge-muted">${d.id}</span></td>
              <td>${d.departamento}</td>
              <td><span class="badge badge-info">${d.titulo}</span></td>
              <td>${d.tipo}</td>
              <td><span class="badge ${d.estado==='Activo'?'badge-success':'badge-warning'}">${d.estado}</span></td>
              <td>
                <div class="flex gap-8">
                  <button class="btn btn-ghost btn-sm btn-icon" onclick="verDetalle('docente','${d.id}')">👁️</button>
                  <button class="btn btn-ghost btn-sm btn-icon" onclick="openModal('modal-docente','${d.id}','docente')">✏️</button>
                  <button class="btn btn-ghost btn-sm btn-icon" onclick="confirmDelete('${d.id}','docente')">🗑️</button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    <div class="table-footer">
      <div class="table-info">Mostrando ${data.length} de ${DB.docentes.length} registros</div>
    </div>
  </div>
  `;
}

// ============================================================
//  PROGRAMAS
// ============================================================

function renderProgramas() {
  const el = document.getElementById('page-programas');
  el.innerHTML = `
  <div class="section-header">
    <div>
      <div class="section-title">Programas Académicos</div>
      <div class="section-subtitle">${DB.programas.length} programas registrados</div>
    </div>
    <button class="btn btn-primary" onclick="openModal('modal-programa', null, 'programa')">＋ Nuevo Programa</button>
  </div>
  <div class="card">
    <div class="table-toolbar">
      <div class="filter-search"><span class="fi">🔍</span><input type="text" placeholder="Buscar programa..."></div>
    </div>
    <div class="table-container">
      <table>
        <thead><tr><th>Código</th><th>Nombre</th><th>Facultad</th><th>Créditos</th><th>Duración</th><th>Estudiantes</th><th>Modalidad</th><th>Estado</th><th>Acciones</th></tr></thead>
        <tbody>
          ${DB.programas.map(p => `
            <tr>
              <td><span class="badge badge-primary">${p.codigo}</span></td>
              <td><strong>${p.nombre}</strong></td>
              <td>${p.facultad}</td>
              <td>${p.creditos}</td>
              <td>${p.duracion} sem.</td>
              <td><span class="badge badge-info">👥 ${p.estudiantes}</span></td>
              <td>${p.modalidad}</td>
              <td><span class="badge badge-success">${p.estado}</span></td>
              <td>
                <div class="flex gap-8">
                  <button class="btn btn-ghost btn-sm btn-icon" onclick="verDetalle('programa','${p.id}')">👁️</button>
                  <button class="btn btn-ghost btn-sm btn-icon" onclick="openModal('modal-programa','${p.id}','programa')">✏️</button>
                  <button class="btn btn-ghost btn-sm btn-icon" onclick="confirmDelete('${p.id}','programa')">🗑️</button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    <div class="table-footer"><div class="table-info">Mostrando ${DB.programas.length} registros</div></div>
  </div>`;
}

// ============================================================
//  FACULTADES
// ============================================================

function renderFacultades() {
  const el = document.getElementById('page-facultades');
  el.innerHTML = `
  <div class="section-header">
    <div><div class="section-title">Facultades</div><div class="section-subtitle">${DB.facultades.length} facultades registradas</div></div>
    <button class="btn btn-primary" onclick="openModal('modal-facultad', null, 'facultad')">＋ Nueva Facultad</button>
  </div>
  <div class="stats-grid">
    ${DB.facultades.map((f,i) => `
      <div class="stat-card" style="--card-color:${colors[i]};--card-color-light:${colors[i]}22;cursor:pointer" onclick="verDetalle('facultad','${f.id}')">
        <div class="stat-icon">🏛️</div>
        <div>
          <div class="stat-label">${f.codigo}</div>
          <div class="stat-value" style="font-size:1.3rem">${f.nombre}</div>
        </div>
        <div class="flex gap-8" style="flex-wrap:wrap;margin-top:4px;">
          <span class="badge badge-primary">📚 ${f.programas} prog.</span>
          <span class="badge badge-info">👨‍🏫 ${f.docentes} doc.</span>
          <span class="badge badge-success">${f.estado}</span>
        </div>
        <div class="text-sm text-muted">Decano: ${f.decano}</div>
        <div class="flex gap-8" style="margin-top:6px">
          <button class="btn btn-outline btn-sm" onclick="event.stopPropagation();openModal('modal-facultad','${f.id}','facultad')">✏️ Editar</button>
          <button class="btn btn-ghost btn-sm" onclick="event.stopPropagation();confirmDelete('${f.id}','facultad')">🗑️</button>
        </div>
      </div>
    `).join('')}
  </div>`;
}

// ============================================================
//  AULAS
// ============================================================

function renderAulas() {
  const el = document.getElementById('page-aulas');
  el.innerHTML = `
  <div class="section-header">
    <div><div class="section-title">Aulas</div><div class="section-subtitle">${DB.aulas.length} aulas registradas</div></div>
    <button class="btn btn-primary" onclick="openModal('modal-aula', null, 'aula')">＋ Nueva Aula</button>
  </div>
  <div class="card">
    <div class="table-toolbar">
      <div class="filter-search"><span class="fi">🔍</span><input type="text" placeholder="Buscar aula..."></div>
    </div>
    <div class="table-container">
      <table>
        <thead><tr><th>Código</th><th>Nombre</th><th>Bloque</th><th>Capacidad</th><th>Tipo</th><th>Equipada</th><th>Estado</th><th>Acciones</th></tr></thead>
        <tbody>
          ${DB.aulas.map(a => `
            <tr>
              <td><span class="badge badge-primary">${a.codigo}</span></td>
              <td><strong>${a.nombre}</strong></td>
              <td>${a.bloque}</td>
              <td>👥 ${a.capacidad}</td>
              <td>${a.tipo}</td>
              <td>${a.equipada ? '<span class="badge badge-success">✅ Sí</span>' : '<span class="badge badge-muted">No</span>'}</td>
              <td><span class="badge ${a.estado==='Disponible'?'badge-success':a.estado==='En uso'?'badge-info':'badge-warning'}">${a.estado}</span></td>
              <td>
                <div class="flex gap-8">
                  <button class="btn btn-ghost btn-sm btn-icon" onclick="openModal('modal-aula','${a.id}','aula')">✏️</button>
                  <button class="btn btn-ghost btn-sm btn-icon" onclick="confirmDelete('${a.id}','aula')">🗑️</button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  </div>`;
}

// ============================================================
//  MATERIAS
// ============================================================

function renderMaterias() {
  const el = document.getElementById('page-materias');
  el.innerHTML = `
  <div class="section-header">
    <div><div class="section-title">Materias</div><div class="section-subtitle">${DB.materias.length} materias registradas</div></div>
    <button class="btn btn-primary" onclick="openModal('modal-materia', null, 'materia')">＋ Nueva Materia</button>
  </div>
  <div class="card">
    <div class="table-toolbar">
      <div class="filter-search"><span class="fi">🔍</span><input type="text" placeholder="Buscar materia..."></div>
    </div>
    <div class="table-container">
      <table>
        <thead><tr><th>Código</th><th>Nombre</th><th>Programa</th><th>Créditos</th><th>Semestre</th><th>Tipo</th><th>Acciones</th></tr></thead>
        <tbody>
          ${DB.materias.map(m => `
            <tr>
              <td><span class="badge badge-primary">${m.codigo}</span></td>
              <td><strong>${m.nombre}</strong></td>
              <td>${m.programa}</td>
              <td>${m.creditos}</td>
              <td>${m.semestre}°</td>
              <td><span class="badge ${m.tipo==='Obligatoria'?'badge-primary':'badge-info'}">${m.tipo}</span></td>
              <td>
                <div class="flex gap-8">
                  <button class="btn btn-ghost btn-sm btn-icon" onclick="openModal('modal-materia','${m.id}','materia')">✏️</button>
                  <button class="btn btn-ghost btn-sm btn-icon" onclick="confirmDelete('${m.id}','materia')">🗑️</button>
                </div>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  </div>`;
}

// ============================================================
//  COORDINADORES
// ============================================================

function renderCoordinadores(filter = '') {
  const el = document.getElementById('page-coordinadores');
  const data = DB.coordinadores.filter(c =>
    !filter ||
    c.nombre.toLowerCase().includes(filter) ||
    c.apellido.toLowerCase().includes(filter) ||
    c.id.toLowerCase().includes(filter) ||
    c.programa.toLowerCase().includes(filter)
  );

  el.innerHTML = `
  <div class="section-header">
    <div>
      <div class="section-title">Coordinadores</div>
      <div class="section-subtitle">${DB.coordinadores.length} coordinadores registrados</div>
    </div>
    <button class="btn btn-primary" onclick="openModal('modal-coordinador', null, 'coordinador')">
      ＋ Nuevo Coordinador
    </button>
  </div>

  <div class="card">
    <div class="table-toolbar">
      <div class="filter-search">
        <span class="fi">🔍</span>
        <input type="text" placeholder="Buscar coordinador..." id="searchCoo"
          value="${filter}" oninput="renderCoordinadores(this.value.toLowerCase())">
      </div>
      <select class="filter-select">
        <option value="">Todos los estados</option>
        <option>Activo</option><option>Inactivo</option>
      </select>
      <div style="margin-left:auto;" class="text-muted text-sm">${data.length} resultado(s)</div>
    </div>

    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Coordinador</th><th>ID</th><th>Programa a Cargo</th><th>Facultad</th><th>Celular</th><th>Ciudad</th><th>Estado</th><th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          ${data.length ? data.map(c => `
            <tr>
              <td>
                <div class="td-avatar">
                  <div class="t-avatar" style="background:${getColor(c.nombre+c.apellido)}">${initials(c.nombre,c.apellido)}</div>
                  <div>
                    <div class="t-name">${c.nombre} ${c.apellido}</div>
                    <div class="t-sub">${c.correo}</div>
                  </div>
                </div>
              </td>
              <td><span class="badge badge-muted">${c.id}</span></td>
              <td>${c.programa}</td>
              <td>${c.facultad}</td>
              <td>${c.celular}</td>
              <td>${c.ciudad}</td>
              <td><span class="badge ${c.estado==='Activo'?'badge-success':'badge-muted'}">${c.estado}</span></td>
              <td>
                <div class="flex gap-8">
                  <button class="btn btn-ghost btn-sm btn-icon" title="Ver detalles" onclick="verDetalle('coordinador','${c.id}')">👁️</button>
                  <button class="btn btn-ghost btn-sm btn-icon" title="Editar" onclick="openModal('modal-coordinador','${c.id}','coordinador')">✏️</button>
                  <button class="btn btn-ghost btn-sm btn-icon" title="Eliminar" onclick="confirmDelete('${c.id}','coordinador')">🗑️</button>
                </div>
              </td>
            </tr>
          `).join('') : `
            <tr><td colspan="8">
              <div class="empty-state">
                <div class="empty-icon">🧑‍💼</div>
                <div class="empty-title">No se encontraron coordinadores</div>
              </div>
            </td></tr>
          `}
        </tbody>
      </table>
    </div>

    <div class="table-footer">
      <div class="table-info">Mostrando ${data.length} de ${DB.coordinadores.length} registros</div>
      <div class="pagination">
        <button class="page-btn" disabled>‹</button>
        <button class="page-btn active">1</button>
        <button class="page-btn">›</button>
      </div>
    </div>
  </div>

  <!-- Info de funciones del coordinador -->
  <div class="card mt-24">
    <div class="card-header"><div class="card-title">📋 Funciones del Coordinador (según sistema)</div></div>
    <div style="padding:18px 22px;">
      <div class="dash-grid-3">
        ${[
          ['📅','Gestionar Carga Académica','Asignar docentes, aulas y horarios a las materias del programa'],
          ['🗓️','Consultar Horario Docente','Visualizar la disponibilidad y carga de cada docente'],
          ['👨‍🎓','Consultar Horario Estudiante','Revisar el horario académico de los estudiantes del programa'],
          ['📋','Gestionar Microcurrículo','Crear y actualizar el contenido programático de las asignaturas'],
          ['📊','Seguimiento Microcurrículo','Monitorear el cumplimiento del plan de cada asignatura'],
          ['📝','Plan Microcurrículo','Planificar y aprobar el desarrollo semestral de las materias'],
        ].map(([icon, title, desc]) => `
          <div style="background:var(--bg-main);border-radius:var(--radius-md);padding:16px;display:flex;flex-direction:column;gap:8px;">
            <div style="font-size:1.4rem">${icon}</div>
            <div style="font-weight:700;font-size:0.88rem;color:var(--text-primary)">${title}</div>
            <div style="font-size:0.78rem;color:var(--text-secondary);line-height:1.4">${desc}</div>
          </div>
        `).join('')}
      </div>
    </div>
  </div>
  `;
}


// ============================================================
//  CARGA ACADÉMICA
// ============================================================

function renderCargaAcademica(filter = '') {
  const el = document.getElementById('page-cargaacademica');
  const periodos = [...new Set(DB.cargaAcademica.map(c => c.periodo))];
  const data = DB.cargaAcademica.filter(c =>
    !filter ||
    c.nombreMateria.toLowerCase().includes(filter) ||
    c.nombreDocente.toLowerCase().includes(filter) ||
    c.nombrePrograma.toLowerCase().includes(filter) ||
    c.codigoAula.toLowerCase().includes(filter)
  );

  // Stats
  const totalHoras = DB.cargaAcademica.length * 3;
  const docentesActivos = [...new Set(DB.cargaAcademica.map(c => c.idDocente))].length;
  const programas = [...new Set(DB.cargaAcademica.map(c => c.codigoPrograma))].length;

  el.innerHTML = `
  <div class="section-header">
    <div>
      <div class="section-title">Carga Académica</div>
      <div class="section-subtitle">Distribución de materias, docentes y aulas por periodo</div>
    </div>
    <button class="btn btn-primary" onclick="openModal('modal-cargaacademica', null, 'cargaacademica')">＋ Asignar Carga</button>
  </div>

  <div class="stats-grid">
    <div class="stat-card" style="--card-color:#1a3a5c;--card-color-light:rgba(26,58,92,0.1)">
      <div class="stat-icon">📌</div>
      <div><div class="stat-label">Total Asignaciones</div><div class="stat-value">${DB.cargaAcademica.length}</div></div>
      <div class="stat-change">Periodo ${periodos[0]||'—'}</div>
    </div>
    <div class="stat-card" style="--card-color:#27ae60;--card-color-light:rgba(39,174,96,0.1)">
      <div class="stat-icon">👨‍🏫</div>
      <div><div class="stat-label">Docentes con Carga</div><div class="stat-value">${docentesActivos}</div></div>
      <div class="stat-change">De ${DB.docentes.length} docentes totales</div>
    </div>
    <div class="stat-card" style="--card-color:#e8a020;--card-color-light:rgba(232,160,32,0.1)">
      <div class="stat-icon">📚</div>
      <div><div class="stat-label">Programas Cubiertos</div><div class="stat-value">${programas}</div></div>
      <div class="stat-change">Este periodo</div>
    </div>
    <div class="stat-card" style="--card-color:#2980b9;--card-color-light:rgba(41,128,185,0.1)">
      <div class="stat-icon">⏱️</div>
      <div><div class="stat-label">Horas Semanales</div><div class="stat-value">${totalHoras}</div></div>
      <div class="stat-change">Estimadas en el periodo</div>
    </div>
  </div>

  <div class="card">
    <div class="table-toolbar">
      <div class="filter-search">
        <span class="fi">🔍</span>
        <input type="text" placeholder="Buscar materia, docente, programa..." id="searchCA"
          value="${filter}" oninput="renderCargaAcademica(this.value.toLowerCase())">
      </div>
      <select class="filter-select">
        ${periodos.map(p => `<option>${p}</option>`).join('')}
      </select>
      <select class="filter-select">
        <option value="">Todos los programas</option>
        ${[...new Set(DB.cargaAcademica.map(c=>c.nombrePrograma))].map(p=>`<option>${p}</option>`).join('')}
      </select>
      <div style="margin-left:auto;" class="text-muted text-sm">${data.length} resultado(s)</div>
    </div>

    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>ID</th><th>Programa</th><th>Materia</th><th>Docente</th><th>Aula</th><th>Día</th><th>Hora</th><th>Grupo</th><th>Periodo</th><th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          ${data.length ? data.map(c => `
            <tr>
              <td><span class="badge badge-muted">${c.id}</span></td>
              <td>
                <div style="display:flex;align-items:center;gap:6px;">
                  <div style="width:8px;height:8px;border-radius:50%;background:${getColor(c.codigoPrograma)};flex-shrink:0"></div>
                  <span style="font-size:0.8rem">${c.codigoPrograma}</span>
                </div>
              </td>
              <td>
                <div class="t-name" style="font-size:0.88rem">${c.nombreMateria}</div>
                <div class="t-sub">${c.codigoMateria}</div>
              </td>
              <td>
                <div class="td-avatar">
                  <div class="t-avatar" style="background:${getColor(c.idDocente)};width:28px;height:28px;font-size:0.68rem">${c.nombreDocente.split(' ').map(w=>w[0]).slice(0,2).join('')}</div>
                  <span style="font-size:0.85rem">${c.nombreDocente}</span>
                </div>
              </td>
              <td><span class="badge badge-primary">🚪 ${c.codigoAula}</span></td>
              <td>${c.dia}</td>
              <td>${c.hora}</td>
              <td><span class="badge badge-info">G-${c.grupo}</span></td>
              <td><span class="badge badge-muted">${c.periodo}</span></td>
              <td>
                <div class="flex gap-8">
                  <button class="btn btn-ghost btn-sm btn-icon" title="Editar" onclick="openModal('modal-cargaacademica','${c.id}','cargaacademica')">✏️</button>
                  <button class="btn btn-ghost btn-sm btn-icon" title="Eliminar" onclick="confirmDelete('${c.id}','cargaacademica')">🗑️</button>
                </div>
              </td>
            </tr>
          `).join('') : `
            <tr><td colspan="10">
              <div class="empty-state">
                <div class="empty-icon">📌</div>
                <div class="empty-title">No se encontraron asignaciones</div>
              </div>
            </td></tr>
          `}
        </tbody>
      </table>
    </div>

    <div class="table-footer">
      <div class="table-info">Mostrando ${data.length} de ${DB.cargaAcademica.length} asignaciones</div>
      <div class="pagination">
        <button class="page-btn" disabled>‹</button>
        <button class="page-btn active">1</button>
        <button class="page-btn">›</button>
      </div>
    </div>
  </div>

  <!-- Resumen por docente -->
  <div class="card mt-24">
    <div class="card-header"><div class="card-title">👨‍🏫 Resumen de Carga por Docente</div></div>
    <div class="progress-row">
      ${DB.docentes.map(d => {
        const asignaciones = DB.cargaAcademica.filter(c => c.idDocente === d.id);
        const maxCarga = 5;
        return `
        <div class="prog-item">
          <div class="prog-header">
            <div class="prog-label">${d.nombre} ${d.apellido}</div>
            <div class="prog-val">${asignaciones.length} asig. · ${asignaciones.length * 3}h/sem</div>
          </div>
          <div class="prog-bar">
            <div class="prog-fill" style="width:${Math.min(asignaciones.length/maxCarga*100,100)}%;background:${asignaciones.length>=maxCarga?'var(--danger)':asignaciones.length>=3?'var(--warning)':'var(--success)'}"></div>
          </div>
          <div class="text-sm" style="margin-top:2px;color:var(--text-light)">
            ${asignaciones.map(a=>a.nombreMateria).join(' · ') || 'Sin asignaciones'}
          </div>
        </div>`;
      }).join('')}
    </div>
  </div>
  `;
}


// ============================================================
//  ASISTENCIA
// ============================================================

function renderAsistencia() {

  const el = document.getElementById('page-asistencia');

  const totalAsistencias = DB.asistencia.length;

  const presentes = DB.asistencia.reduce((acc, a) => acc + a.presentes, 0);

  const ausentes = DB.asistencia.reduce((acc, a) => acc + a.ausentes, 0);

  const sesionesActivas = DB.asistencia.length;

  el.innerHTML = `
  <div class="section-header">

    <div>
      <div class="section-title">Control de Asistencia</div>

      <div class="section-subtitle">
        Registro de asistencia por sesión
      </div>
    </div>

    <button class="btn btn-primary"
      onclick="openModal('modal-asistencia', null, 'asistencia')">

      ＋ Registrar Sesión

    </button>

  </div>

  <div class="stats-grid">

    <div class="stat-card"
      style="--card-color:#27ae60;--card-color-light:#e8f8ee">

      <div class="stat-icon">✅</div>

      <div>
        <div class="stat-label">Asistencia Total</div>

        <div class="stat-value">
          ${presentes}
        </div>
      </div>

      <div class="stat-change up">
        ▲ Registros presentes
      </div>

    </div>

    <div class="stat-card"
      style="--card-color:#e8a020;--card-color-light:#fef3e2">

      <div class="stat-icon">📚</div>

      <div>
        <div class="stat-label">Sesiones</div>

        <div class="stat-value">
          ${sesionesActivas}
        </div>
      </div>

      <div class="stat-change">
        Registradas
      </div>

    </div>

    <div class="stat-card"
      style="--card-color:#e84040;--card-color-light:#fce8e8">

      <div class="stat-icon">❌</div>

      <div>
        <div class="stat-label">Ausencias</div>

        <div class="stat-value">
          ${ausentes}
        </div>
      </div>

      <div class="stat-change down">
        ▼ Total ausentes
      </div>

    </div>

  </div>

  <div class="card">

    <div class="table-toolbar">

      <div class="filter-search">
        <span class="fi">🔍</span>

        <input
          type="text"
          placeholder="Buscar asistencia...">
      </div>

    </div>

    <div class="table-container">

      <table>

        <thead>

          <tr>
            <th>Código</th>
            <th>Docente</th>
            <th>Asignatura</th>
            <th>Aula</th>
            <th>Hora</th>
            <th>Grupo</th>
            <th>Asistencia</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>

        </thead>

        <tbody>

          ${DB.asistencia.map(a => `

            <tr>

              <td>
                <span class="badge badge-primary">
                  ${a.codigo}
                </span>
              </td>

              <td>${a.docente}</td>

              <td>
                <strong>${a.asignatura}</strong>
              </td>

              <td>
                🚪 ${a.aula}
              </td>

              <td>${a.hora}</td>

              <td>
                <span class="badge badge-info">
                  G-${a.grupo}
                </span>
              </td>

              <td>

                <span class="badge ${a.presentes >= a.ausentes
                  ? 'badge-success'
                  : 'badge-warning'}">

                  ${a.presentes}/${a.total}

                </span>

              </td>

              <td>

                <span class="badge ${a.estado === 'Finalizada'
                  ? 'badge-success'
                  : 'badge-warning'}">

                  ${a.estado}

                </span>

              </td>

              <td>

                <div class="flex gap-8">

                  <button
                    class="btn btn-ghost btn-sm btn-icon"
                    onclick="verDetalle('asistencia','${a.id}')">

                    👁️

                  </button>


                </div>

              </td>

            </tr>

          `).join('')}

        </tbody>

      </table>

    </div>

    <div class="table-footer">

      <div class="table-info">
        Mostrando ${DB.asistencia.length} registros
      </div>

    </div>

  </div>
  `;
}

// ============================================================
//  HORARIOS
// ============================================================

function renderHorarios() {
  const el = document.getElementById('page-horarios');
  const dias = ['Lunes','Martes','Miércoles','Jueves','Viernes'];
  const horas = ['7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00'];
  const clases = [
    { dia: 0, hora: 0, mat: 'Algoritmos', doc: 'Jiménez', aula: 'B-201', color: '#1a3a5c' },
    { dia: 0, hora: 2, mat: 'Cálculo I', doc: 'Fernández', aula: 'A-101', color: '#27ae60' },
    { dia: 1, hora: 1, mat: 'Estructuras', doc: 'Jiménez', aula: 'B-201', color: '#1a3a5c' },
    { dia: 2, hora: 0, mat: 'Ética', doc: 'Salazar', aula: 'A-102', color: '#8e44ad' },
    { dia: 3, hora: 3, mat: 'Cálculo II', doc: 'Fernández', aula: 'A-101', color: '#27ae60' },
    { dia: 4, hora: 2, mat: 'Anatomía', doc: 'Vargas', aula: 'D-401', color: '#e84040' },
  ];
  const grid = Array.from({length: horas.length}, () => Array(dias.length).fill(null));
  clases.forEach(c => { grid[c.hora][c.dia] = c; });

  el.innerHTML = `
  <div class="section-header">
    <div><div class="section-title">Horarios</div><div class="section-subtitle">Cuadrícula semanal de clases</div></div>
    <div class="flex gap-8">
      <select class="filter-select"><option>Ingeniería de Sistemas</option>${DB.programas.map(p=>`<option>${p.nombre}</option>`).join('')}</select>
      <button class="btn btn-primary">＋ Agregar Clase</button>
    </div>
  </div>
  <div class="card">
    <div class="table-container">
      <table>
        <thead><tr><th>Hora</th>${dias.map(d=>`<th>${d}</th>`).join('')}</tr></thead>
        <tbody>
          ${horas.map((h,hi) => `
            <tr>
              <td style="font-weight:600;color:var(--text-secondary);font-size:0.78rem;white-space:nowrap">${h} AM</td>
              ${dias.map((_,di) => {
                const c = grid[hi][di];
                return c ? `<td>
                  <div style="background:${c.color};color:white;border-radius:8px;padding:8px 10px;font-size:0.78rem;line-height:1.3">
                    <strong>${c.mat}</strong><br>${c.doc}<br>🚪 ${c.aula}
                  </div>
                </td>` : `<td style="background:rgba(240,244,248,0.5)"></td>`;
              }).join('')}
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  </div>`;
}

// ============================================================
//  MICROCURRÍCULO
// ============================================================

function renderMicrocurriculo() {

  const el = document.getElementById('page-microcurriculo');

  el.innerHTML = `
  <div class="section-header">

    <div>
      <div class="section-title">Microcurrículo</div>

      <div class="section-subtitle">
        ${DB.microcurriculo.length} microcurrículos registrados
      </div>
    </div>

    <button class="btn btn-primary"
      onclick="openModal('modal-microcurriculo', null, 'microcurriculo')">

      ＋ Nuevo Microcurrículo

    </button>

  </div>

  <div class="card">

    <div class="table-toolbar">

      <div class="filter-search">
        <span class="fi">🔍</span>

        <input
          type="text"
          placeholder="Buscar microcurrículo...">
      </div>

    </div>

    <div class="table-container">

      <table>

        <thead>
          <tr>
            <th>Código</th>
            <th>Materia</th>
            <th>Programa</th>
            <th>Créditos</th>
            <th>Tipo</th>
            <th>Naturaleza</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>

          ${DB.microcurriculo.map(m => `

            <tr>

              <td>
                <span class="badge badge-primary">
                  ${m.codigo}
                </span>
              </td>

              <td>
                <strong>${m.materia}</strong>
              </td>

              <td>${m.programa}</td>

              <td>📚 ${m.creditos}</td>

              <td>
                <span class="badge ${m.tipo === 'Obligatoria'
                  ? 'badge-info'
                  : 'badge-muted'}">

                  ${m.tipo}

                </span>
              </td>

              <td>${m.naturaleza}</td>

              <td>

                <span class="badge ${m.estado === 'Activo'
                  ? 'badge-success'
                  : 'badge-warning'}">

                  ${m.estado}

                </span>

              </td>

              <td>

                <div class="flex gap-8">

                  <button
                    class="btn btn-ghost btn-sm btn-icon"
                    onclick="verDetalle('microcurriculo','${m.id}')">

                    👁️

                  </button>

                  <button
                    class="btn btn-ghost btn-sm btn-icon"
                    onclick="openModal('modal-microcurriculo','${m.id}','microcurriculo')">

                    ✏️

                  </button>

                  <button
                    class="btn btn-ghost btn-sm btn-icon"
                    onclick="confirmDelete('${m.id}','microcurriculo')">

                    🗑️

                  </button>

                </div>

              </td>

            </tr>

          `).join('')}

        </tbody>

      </table>

    </div>

  </div>
  `;
}

// ============================================================
//  MODALS
// ============================================================

function openModal(modalId, id, entity) {
  state.editingId = id;
  state.editingEntity = entity;

  const overlay = document.getElementById('modalOverlay');
  const modalBody = document.getElementById('dynamicModal');

  let record = null;
  if (id) {
    if (entity === 'estudiante') record = DB.estudiantes.find(e => e.id === id);
    if (entity === 'docente')    record = DB.docentes.find(d => d.id === id);
    if (entity === 'coordinador') record = DB.coordinadores.find(c => c.id === id);
    if (entity === 'programa')   record = DB.programas.find(p => p.id === id);
    if (entity === 'facultad')   record = DB.facultades.find(f => f.id === id);
    if (entity === 'cargaacademica')   record = DB.cargaAcademica.find(a => a.id === id);
    if (entity === 'microcurriculo')   record = DB.microcurriculo.find(a => a.id === id);
    if (entity === 'asistencia')   record = DB.asistencia.find(a => a.id === id);
    if (entity === 'aula')       record = DB.aulas.find(a => a.id === id);
    if (entity === 'materia')    record = DB.materias.find(m => m.id === id);
  }

  const title = `${id ? 'Editar' : 'Nuevo'} ${capitalize(entity)}`;
  let formHtml = '';

  if (entity === 'estudiante') {
    formHtml = `
    <div class="form-grid">
      <div class="form-group">
        <label class="form-label">Tipo Documento</label>
        <select class="form-control">
          <option ${record?.tipo==='CC'?'selected':''}>CC</option>
          <option ${record?.tipo==='TI'?'selected':''}>TI</option>
          <option ${record?.tipo==='PP'?'selected':''}>Pasaporte</option>
          <option ${record?.tipo==='CE'?'selected':''}>CE</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Número de Documento</label>
        <input class="form-control" placeholder="Ej: 1234567890" value="${record?.id||''}">
      </div>
      <div class="form-group">
        <label class="form-label">Nombre(s)</label>
        <input class="form-control" placeholder="Nombre" value="${record?.nombre||''}">
      </div>
      <div class="form-group">
        <label class="form-label">Apellido(s)</label>
        <input class="form-control" placeholder="Apellido" value="${record?.apellido||''}">
      </div>
      <div class="form-group">
        <label class="form-label">Fecha de Nacimiento</label>
        <input type="date" class="form-control" value="${record?.fechaNacimiento||''}">
      </div>
      <div class="form-group">
        <label class="form-label">Sexo</label>
        <select class="form-control">
          <option ${record?.sexo==='M'?'selected':''} value="M">Masculino</option>
          <option ${record?.sexo==='F'?'selected':''} value="F">Femenino</option>
          <option value="O">Otro</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Correo Institucional</label>
        <input type="email" class="form-control" placeholder="correo@uni.edu.co" value="${record?.correo||''}">
      </div>
      <div class="form-group">
        <label class="form-label">Celular</label>
        <input class="form-control" placeholder="3001234567" value="${record?.celular||''}">
      </div>
      <div class="form-group">
        <label class="form-label">Dirección</label>
        <input class="form-control" placeholder="Cra 45 #78-20" value="${record?.direccion||''}">
      </div>
      <div class="form-group">
        <label class="form-label">Ciudad</label>
        <input class="form-control" placeholder="Ciudad" value="${record?.ciudad||''}">
      </div>
      <div class="form-group">
        <label class="form-label">Facultad</label>
        <select class="form-control">
          ${DB.facultades.map(f=>`<option ${record?.facultad===f.nombre?'selected':''}>${f.nombre}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Programa</label>
        <select class="form-control">
          ${DB.programas.map(p=>`<option ${record?.programa===p.nombre?'selected':''}>${p.nombre}</option>`).join('')}
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Semestre</label>
        <input type="number" class="form-control" min="1" max="12" value="${record?.semestre||1}">
      </div>
      <div class="form-group">
        <label class="form-label">Estado</label>
        <select class="form-control">
          <option ${record?.estado==='Activo'?'selected':''}>Activo</option>
          <option ${record?.estado==='Inactivo'?'selected':''}>Inactivo</option>
          <option ${record?.estado==='Suspendido'?'selected':''}>Suspendido</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Puntaje ICFES</label>
        <input type="number" class="form-control" value="${record?.puntajeICFES||''}">
      </div>
      <div class="form-group">
        <label class="form-label">SISBEN</label>
        <select class="form-control">
          <option>No aplica</option><option>A1</option><option>A2</option><option>B1</option><option>B2</option>
        </select>
      </div>
    </div>
    <div style="margin-top:16px;padding-top:16px;border-top:1px solid var(--border)">
      <div class="form-label" style="margin-bottom:10px">Datos del Acudiente</div>
      <div class="form-grid">
        <div class="form-group"><label class="form-label">Nombre Acudiente</label><input class="form-control" value="${record?.nombreAcudiente||''}"></div>
        <div class="form-group"><label class="form-label">Apellido Acudiente</label><input class="form-control" value="${record?.apellidoAcudiente||''}"></div>
        <div class="form-group"><label class="form-label">Celular Acudiente</label><input class="form-control" value="${record?.celularAcudiente||''}"></div>
      </div>
    </div>`;
  } else if (entity === 'docente') {
    formHtml = `
    <div class="form-grid">
      <div class="form-group"><label class="form-label">Nombre(s)</label><input class="form-control" value="${record?.nombre||''}"></div>
      <div class="form-group"><label class="form-label">Apellido(s)</label><input class="form-control" value="${record?.apellido||''}"></div>
      <div class="form-group"><label class="form-label">Correo</label><input type="email" class="form-control" value="${record?.correo||''}"></div>
      <div class="form-group"><label class="form-label">Celular</label><input class="form-control" value="${record?.celular||''}"></div>
      <div class="form-group">
        <label class="form-label">Título</label>
        <select class="form-control">
          <option ${record?.titulo==='Pregrado'?'selected':''}>Pregrado</option>
          <option ${record?.titulo==='Especialización'?'selected':''}>Especialización</option>
          <option ${record?.titulo==='MSc'?'selected':''}>MSc</option>
          <option ${record?.titulo==='PhD'?'selected':''}>PhD</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Tipo Vinculación</label>
        <select class="form-control">
          <option ${record?.tipo==='Tiempo Completo'?'selected':''}>Tiempo Completo</option>
          <option ${record?.tipo==='Tiempo Parcial'?'selected':''}>Tiempo Parcial</option>
          <option ${record?.tipo==='Catedrático'?'selected':''}>Catedrático</option>
        </select>
      </div>
      <div class="form-group"><label class="form-label">Departamento</label><input class="form-control" value="${record?.departamento||''}"></div>
      <div class="form-group">
        <label class="form-label">Estado</label>
        <select class="form-control">
          <option ${record?.estado==='Activo'?'selected':''}>Activo</option>
          <option ${record?.estado==='Licencia'?'selected':''}>Licencia</option>
          <option ${record?.estado==='Inactivo'?'selected':''}>Inactivo</option>
        </select>
      </div>
    </div>`;
  } else if (entity === 'coordinador') {
    formHtml = `
    <div class="form-grid">

      <div class="form-group">
        <label class="form-label">Nombre(s)</label>
        <input class="form-control" value="${record?.nombre || ''}">
      </div>

      <div class="form-group">
        <label class="form-label">Apellido(s)</label>
        <input class="form-control" value="${record?.apellido || ''}">
      </div>

      <div class="form-group">
        <label class="form-label">Correo</label>
        <input type="email" class="form-control" value="${record?.correo || ''}">
      </div>

      <div class="form-group">
        <label class="form-label">Celular</label>
        <input class="form-control" value="${record?.celular || ''}">
      </div>

      <div class="form-group">
        <label class="form-label">Programa a Cargo</label>
        <input class="form-control" value="${record?.programa || ''}">
      </div>

      <div class="form-group">
        <label class="form-label">Facultad</label>
        <select class="form-control">
          ${DB.facultades.map(f => `
            <option ${record?.facultad === f.nombre ? 'selected' : ''}>
              ${f.nombre}
            </option>
          `).join('')}
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Ciudad</label>
        <input class="form-control" value="${record?.ciudad || ''}">
      </div>

      <div class="form-group">
        <label class="form-label">Estado</label>
        <select class="form-control">
          <option ${record?.estado === 'Activo' ? 'selected' : ''}>Activo</option>
          <option ${record?.estado === 'Inactivo' ? 'selected' : ''}>Inactivo</option>
        </select>
      </div>

    </div>
    `;
  } else if (entity === 'programa') {
    formHtml = `
    <div class="form-grid">
      <div class="form-group"><label class="form-label">Código</label><input class="form-control" value="${record?.codigo||''}"></div>
      <div class="form-group"><label class="form-label">Nombre del Programa</label><input class="form-control" value="${record?.nombre||''}"></div>
      <div class="form-group">
        <label class="form-label">Facultad</label>
        <select class="form-control">${DB.facultades.map(f=>`<option ${record?.facultad===f.nombre?'selected':''}>${f.nombre}</option>`).join('')}</select>
      </div>
      <div class="form-group"><label class="form-label">Número de Créditos</label><input type="number" class="form-control" value="${record?.creditos||''}"></div>
      <div class="form-group"><label class="form-label">Duración (semestres)</label><input type="number" class="form-control" value="${record?.duracion||''}"></div>
      <div class="form-group">
        <label class="form-label">Modalidad</label>
        <select class="form-control">
          <option ${record?.modalidad==='Presencial'?'selected':''}>Presencial</option>
          <option ${record?.modalidad==='Virtual'?'selected':''}>Virtual</option>
          <option ${record?.modalidad==='Híbrido'?'selected':''}>Híbrido</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Estado</label>
        <select class="form-control">
          <option ${record?.estado==='Activo'?'selected':''}>Activo</option>
          <option ${record?.estado==='Inactivo'?'selected':''}>Inactivo</option>
        </select>
      </div>
    </div>`;
  } else if (entity === 'facultad') {
    formHtml = `
    <div class="form-grid">
      <div class="form-group"><label class="form-label">Código</label><input class="form-control" value="${record?.codigo||''}"></div>
      <div class="form-group"><label class="form-label">Nombre</label><input class="form-control" value="${record?.nombre||''}"></div>
      <div class="form-group"><label class="form-label">Decano/a</label><input class="form-control" value="${record?.decano||''}"></div>
      <div class="form-group">
        <label class="form-label">Estado</label>
        <select class="form-control"><option>Activa</option><option>Inactiva</option></select>
      </div>
    </div>`;
  } else if (entity === 'cargaacademica') {
    formHtml = `
    <div class="form-grid">

      <div class="form-group">
        <label class="form-label">Programa</label>

        <select class="form-control">
          ${DB.programas.map(p => `
            <option ${record?.codigoPrograma === p.codigo ? 'selected' : ''}>
              ${p.nombre}
            </option>
          `).join('')}
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Materia</label>

        <select class="form-control">
          ${DB.materias.map(m => `
            <option ${record?.codigoMateria === m.codigo ? 'selected' : ''}>
              ${m.nombre}
            </option>
          `).join('')}
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Docente</label>

        <select class="form-control">
          ${DB.docentes.map(d => `
            <option ${record?.idDocente === d.id ? 'selected' : ''}>
              ${d.nombre} ${d.apellido}
            </option>
          `).join('')}
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Aula</label>

        <select class="form-control">
          ${DB.aulas.map(a => `
            <option ${record?.codigoAula === a.codigo ? 'selected' : ''}>
              ${a.codigo}
            </option>
          `).join('')}
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Día</label>

        <select class="form-control">
          <option ${record?.dia === 'Lunes' ? 'selected' : ''}>Lunes</option>
          <option ${record?.dia === 'Martes' ? 'selected' : ''}>Martes</option>
          <option ${record?.dia === 'Miércoles' ? 'selected' : ''}>Miércoles</option>
          <option ${record?.dia === 'Jueves' ? 'selected' : ''}>Jueves</option>
          <option ${record?.dia === 'Viernes' ? 'selected' : ''}>Viernes</option>
          <option ${record?.dia === 'Sábado' ? 'selected' : ''}>Sábado</option>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Hora</label>

        <input
          class="form-control"
          placeholder="7:00 AM - 9:00 AM"
          value="${record?.hora || ''}">
      </div>

      <div class="form-group">
        <label class="form-label">Grupo</label>

        <input
          class="form-control"
          value="${record?.grupo || ''}">
      </div>

      <div class="form-group">
        <label class="form-label">Periodo</label>

        <input
          class="form-control"
          placeholder="2026-1"
          value="${record?.periodo || ''}">
      </div>

    </div>
    `;
  } else if (entity === 'microcurriculo') {

    formHtml = `
    <div class="form-grid">

      <div class="form-group">
        <label class="form-label">Código</label>
        <input class="form-control"
          value="${record?.codigo || ''}">
      </div>

      <div class="form-group">
        <label class="form-label">Materia</label>

        <select class="form-control">
          ${DB.materias.map(m => `
            <option>
              ${m.nombre}
            </option>
          `).join('')}
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Programa</label>

        <select class="form-control">
          ${DB.programas.map(p => `
            <option>
              ${p.nombre}
            </option>
          `).join('')}
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Créditos</label>

        <input type="number"
          class="form-control" value="${record?.creditos || ''}">
      </div>

      <div class="form-group">
        <label class="form-label">Tipo</label>

        <select class="form-control">
          <option>Obligatoria</option>
          <option>Electiva</option>
        </select>
      </div>

      <div class="form-group">
        <label class="form-label">Naturaleza</label>

        <select class="form-control">
          <option>Teórica</option>
          <option>Práctica</option>
          <option>Teórico-Práctica</option>
        </select>
      </div>

      <div class="form-group" style="grid-column:1/-1">
        <label class="form-label">Descripción</label>

        <textarea class="form-control"
          rows="4"
          placeholder="Descripción del microcurrículo">${record?.descripcion || ''}</textarea>
      </div>

    </div>
    `;
  } else if (entity === 'asistencia') {

    formHtml = `

    <div class="form-grid">

      <div class="form-group">

        <label class="form-label">Código</label>

        <input
          class="form-control"
          value="${record?.id || ''}">

      </div>

      <div class="form-group">

        <label class="form-label">Docente</label>

        <select class="form-control">

          ${DB.docentes.map(d => `
            <option ${record?.docente === `${d.nombre} ${d.apellido}` ? 'selected' : ''}>
              ${d.nombre} ${d.apellido}
            </option>
          `).join('')}

        </select>

      </div>

      <div class="form-group">

        <label class="form-label">Asignatura</label>

        <select class="form-control">

          ${DB.materias.map(m => `
            <option ${record?.asignatura === m.nombre ? 'selected' : ''}>
              ${m.nombre}
            </option>
          `).join('')}

        </select>

      </div>

      <div class="form-group">

        <label class="form-label">Aula</label>

        <select class="form-control">

          ${DB.aulas.map(a => `
            <option ${record?.aula === a.codigo ? 'selected' : ''}>
              ${a.codigo}
            </option>
          `).join('')}

        </select>

      </div>

      <div class="form-group">

        <label class="form-label">Hora</label>

        <input
          type="text"
          class="form-control"
          placeholder="7:00 AM"
          value="${record?.hora || ''}">

      </div>

      <div class="form-group">

        <label class="form-label">Grupo</label>

        <input
          class="form-control"
          value="${record?.grupo || ''}">

      </div>

      <div class="form-group">

        <label class="form-label">Presentes</label>

        <input
          type="number"
          class="form-control"
          value="${record?.presentes || 0}">

      </div>

      <div class="form-group">

        <label class="form-label">Ausentes</label>

        <input
          type="number"
          class="form-control"
          value="${record?.ausentes || 0}">

      </div>

      <div class="form-group">

        <label class="form-label">Total Estudiantes</label>

        <input
          type="number"
          class="form-control"
          value="${record?.total || 0}">

      </div>

      <div class="form-group">

        <label class="form-label">Estado</label>

        <select class="form-control">

          <option ${record?.estado === 'En curso' ? 'selected' : ''}>
            En curso
          </option>

          <option ${record?.estado === 'Finalizada' ? 'selected' : ''}>
            Finalizada
          </option>

        </select>

      </div>

    </div>

    `;
  } else if (entity === 'aula') {
    formHtml = `
    <div class="form-grid">
      <div class="form-group"><label class="form-label">Código</label><input class="form-control" value="${record?.codigo||''}"></div>
      <div class="form-group"><label class="form-label">Nombre</label><input class="form-control" value="${record?.nombre||''}"></div>
      <div class="form-group"><label class="form-label">Bloque</label><input class="form-control" value="${record?.bloque||''}"></div>
      <div class="form-group"><label class="form-label">Capacidad</label><input type="number" class="form-control" value="${record?.capacidad||''}"></div>
      <div class="form-group">
        <label class="form-label">Tipo</label>
        <select class="form-control">
          <option>Aula Regular</option><option>Laboratorio</option><option>Auditorio</option><option>Sala de cómputo</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">Estado</label>
        <select class="form-control"><option>Disponible</option><option>En uso</option><option>Mantenimiento</option></select>
      </div>
    </div>`;
  } else if (entity === 'materia') {
    formHtml = `
    <div class="form-grid">
      <div class="form-group"><label class="form-label">Código</label><input class="form-control" value="${record?.codigo||''}"></div>
      <div class="form-group"><label class="form-label">Nombre</label><input class="form-control" value="${record?.nombre||''}"></div>
      <div class="form-group"><label class="form-label">Créditos</label><input type="number" class="form-control" value="${record?.creditos||''}"></div>
      <div class="form-group"><label class="form-label">Semestre</label><input type="number" class="form-control" value="${record?.semestre||''}"></div>
      <div class="form-group">
        <label class="form-label">Programa</label>
        <select class="form-control">${DB.programas.map(p=>`<option>${p.nombre}</option>`).join('')}<option>Común</option></select>
      </div>
      <div class="form-group">
        <label class="form-label">Tipo</label>
        <select class="form-control"><option>Obligatoria</option><option>Electiva</option></select>
      </div>
    </div>`;
  }

  modalBody.innerHTML = `
  <div class="modal modal-lg">
    <div class="modal-header">
      <div class="modal-title">${title}</div>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>
    <div class="modal-body">${formHtml}</div>
    <div class="modal-footer">
      <button class="btn btn-outline" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-primary" onclick="saveRecord('${entity}')">
        ${id ? '💾 Guardar Cambios' : '＋ Crear Registro'}
      </button>
    </div>
  </div>`;

  overlay.classList.add('open');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  state.editingId = null;
}

function saveRecord(entity) {
  closeModal();
  const action = state.editingId ? 'actualizado' : 'creado';
  showToast(`✅ Registro ${action} correctamente`, 'success');
  renderSection(state.currentSection);
}

// ============================================================
//  DETAIL VIEW
// ============================================================

function verDetalle(entity, id) {
  let record = null;
  let fields = [];
  let title = '';

  if (entity === 'estudiante') {
    record = DB.estudiantes.find(e => e.id === id);
    title = `${record.nombre} ${record.apellido}`;
    fields = [
      ['ID / Documento', record.id], ['Tipo Doc.', record.tipo],
      ['Correo', record.correo], ['Celular', record.celular],
      ['Programa', record.programa], ['Facultad', record.facultad],
      ['Semestre', `${record.semestre}°`], ['Promedio', `⭐ ${record.promedio}`],
      ['Ciudad', record.ciudad], ['Estado', record.estado],
      ['Dirección', record.direccion], ['Sexo', record.sexo==='M'?'Masculino':'Femenino'],
    ];
  } else if (entity === 'docente') {
    record = DB.docentes.find(d => d.id === id);
    title = `${record.nombre} ${record.apellido}`;
    fields = [
      ['ID', record.id], ['Correo', record.correo],
      ['Celular', record.celular], ['Título', record.titulo],
      ['Departamento', record.departamento], ['Tipo', record.tipo],
      ['Estado', record.estado], ['Materias', record.materias?.join(', ')],
    ];
  } else if (entity === 'coordinador') {
    record = DB.coordinadores.find(c => c.id === id);

    title = `${record.nombre} ${record.apellido}`;

    fields = [
      ['ID', record.id],
      ['Correo', record.correo],
      ['Celular', record.celular],
      ['Programa', record.programa],
      ['Facultad', record.facultad],
      ['Ciudad', record.ciudad],
      ['Estado', record.estado],
    ];
  } else if (entity === 'programa') {
    record = DB.programas.find(p => p.id === id);
    title = record.nombre;
    fields = [
      ['Código', record.codigo], ['Facultad', record.facultad],
      ['Créditos', record.creditos], ['Duración', `${record.duracion} semestres`],
      ['Estudiantes', record.estudiantes], ['Modalidad', record.modalidad],
      ['Estado', record.estado],
    ];
  } else if (entity === 'microcurriculo') {

    record = DB.microcurriculo.find(m => m.id === id);

    title = record.materia;

    fields = [
      ['Código', record.id],
      ['Materia', record.materia],
      ['Programa', record.programa],
      ['Créditos', record.creditos],
      ['Tipo', record.tipo],
      ['Naturaleza', record.naturaleza],
      ['Descripción', record.descripcion],
      ['Estado', record.estado]
    ];
  } else if (entity === 'asistencia') {

    record = DB.asistencia.find(a => a.id === id);

    title = `${record.asignatura} — ${record.codigo}`;

    fields = [

      ['Código', record.codigo],

      ['Docente', record.docente],

      ['Asignatura', record.asignatura],

      ['Aula', record.aula],

      ['Hora', record.hora],

      ['Grupo', record.grupo],

      ['Presentes', `✅ ${record.presentes}`],

      ['Ausentes', `❌ ${record.ausentes}`],

      ['Total Estudiantes', `👥 ${record.total}`],

      ['Estado', record.estado],

      ['Porcentaje Asistencia',
        `${Math.round((record.presentes / record.total) * 100)}%`
      ]

    ];
  }else if (entity === 'facultad') {
    record = DB.facultades.find(f => f.id === id);
    title = record.nombre;
    fields = [
      ['Código', record.codigo], ['Decano/a', record.decano],
      ['Programas', record.programas], ['Docentes', record.docentes],
      ['Estado', record.estado],
    ];
  }

  const color = getColor(title);
  const overlay = document.getElementById('modalOverlay');
  const modalBody = document.getElementById('dynamicModal');

  modalBody.innerHTML = `
  <div class="modal">
    <div class="modal-header">
      <div class="modal-title">Detalle — ${title}</div>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>
    <div class="modal-body">
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:20px;padding-bottom:18px;border-bottom:1px solid var(--border)">
        <div style="width:58px;height:58px;border-radius:16px;background:${color};display:flex;align-items:center;justify-content:center;font-size:1.5rem;font-weight:800;color:white;flex-shrink:0">
          ${initials(record.nombre||title, record.apellido||'')}
        </div>
        <div>
          <div style="font-family:var(--font-display);font-size:1.1rem;font-weight:800">${title}</div>
          <div class="text-muted">${entity.charAt(0).toUpperCase()+entity.slice(1)}</div>
        </div>
      </div>
      <div class="detail-grid">
        ${fields.map(([label,val]) => `
          <div class="detail-item">
            <div class="detail-label">${label}</div>
            <div class="detail-value">${val||'—'}</div>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline" onclick="closeModal()">Cerrar</button>
      <button class="btn btn-primary" onclick="closeModal();openModal('modal-${entity}','${id}','${entity}')">✏️ Editar</button>
    </div>
  </div>`;

  overlay.classList.add('open');
}

// ============================================================
//  DELETE CONFIRMATION
// ============================================================

function confirmDelete(id, entity) {
  state.deleteTarget = id;
  state.deleteEntity = entity;

  const overlay = document.getElementById('modalOverlay');
  const modalBody = document.getElementById('dynamicModal');

  modalBody.innerHTML = `
  <div class="modal modal-sm">
    <div class="modal-header">
      <div class="modal-title">Confirmar eliminación</div>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>
    <div class="modal-body">
      <div class="confirm-content">
        <div class="confirm-icon danger">🗑️</div>
        <h3>¿Eliminar este registro?</h3>
        <p>Esta acción no se puede deshacer. El registro con ID <strong>${id}</strong> será eliminado permanentemente del sistema.</p>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-outline" onclick="closeModal()">Cancelar</button>
      <button class="btn btn-danger" onclick="executeDelete()">Sí, eliminar</button>
    </div>
  </div>`;

  overlay.classList.add('open');
}

function executeDelete() {
  const { deleteTarget, deleteEntity } = state;
  if (deleteEntity === 'estudiante') DB.estudiantes = DB.estudiantes.filter(e => e.id !== deleteTarget);
  if (deleteEntity === 'docente')    DB.docentes    = DB.docentes.filter(d => d.id !== deleteTarget);
  if (deleteEntity === 'coordinador')DB.coordinadores = DB.coordinadores.filter(c => c.id !== deleteTarget);
  if (deleteEntity === 'programa')   DB.programas   = DB.programas.filter(p => p.id !== deleteTarget);
  if (deleteEntity === 'facultad')   DB.facultades  = DB.facultades.filter(f => f.id !== deleteTarget);
  if (deleteEntity === 'cargaacademica')       DB.cargaAcademica       = DB.cargaAcademica.filter(a => a.id !== deleteTarget);
  if (deleteEntity === 'microcurriculo')       DB.microcurriculo       = DB.aulas.filter(a => a.id !== deleteTarget);
  if (deleteEntity === 'aula')       DB.aulas       = DB.aulas.filter(a => a.id !== deleteTarget);
  if (deleteEntity === 'materia')    DB.materias    = DB.materias.filter(m => m.id !== deleteTarget);
  closeModal();
  showToast('🗑️ Registro eliminado', 'error');
  renderSection(state.currentSection);
}

// ============================================================
//  TOAST NOTIFICATIONS
// ============================================================

function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icons = { success: '✅', error: '🗑️', warning: '⚠️', info: 'ℹ️' };
  toast.innerHTML = `
    <div class="toast-icon">${icons[type]||'ℹ️'}</div>
    <div class="toast-text">${message}</div>
    <button class="toast-close" onclick="this.parentElement.remove()">✕</button>`;
  container.appendChild(toast);
  setTimeout(() => { toast.classList.add('hide'); setTimeout(() => toast.remove(), 300); }, 3500);
}

// ============================================================
//  HELPERS
// ============================================================

function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

// Click outside modal to close
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('modalOverlay').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
});

// ============================================================
//  INIT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  navigateTo('dashboard');
});