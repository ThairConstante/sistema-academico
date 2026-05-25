# 🎓 Sistema Académico — Proyecto Final
## Ingeniería de Software II

---

## 📁 Estructura del Proyecto

```
sistema-academico/
├── index.html              ← Punto de entrada principal
├── css/
│   └── styles.css          ← Todos los estilos (variables, layout, componentes)
├── js/
│   └── app.js              ← Lógica del sistema (datos, navegación, modales, CRUD)
├── views/                  ← (Para expansión futura - vistas separadas)
└── img/                    ← (Para imágenes/logos institucionales)
```

---

## 🚀 Cómo abrir

Solo abre `index.html` en cualquier navegador moderno. No requiere servidor.

---

## 📋 Módulos Implementados

| Módulo           | CRUD | Detalle | Filtros |
|-----------------|------|---------|---------|
| Dashboard       | —    | ✅      | —       |
| Estudiantes     | ✅   | ✅      | ✅      |
| Docentes        | ✅   | ✅      | ✅      |
| Programas       | ✅   | ✅      | ✅      |
| Facultades      | ✅   | ✅      | —       |
| Materias        | ✅   | —       | —       |
| Aulas           | ✅   | —       | —       |
| Horarios        | —    | ✅ (grid semanal) | ✅ |
| Asistencia      | —    | ✅      | —       |
| Microcurrículo  | ✅   | —       | —       |

---

## ✨ Características

- **Sidebar vertical** colapsable con íconos y etiquetas
- **Dashboard** con estadísticas en tiempo real, gráficas de barras, progreso por facultad y actividad reciente
- **CRUD completo** con modales: crear, editar, ver detalle, eliminar con confirmación
- **Horario semanal** visual tipo cuadrícula
- **Notificaciones toast** al guardar/eliminar registros
- **Búsqueda y filtros** en tablas
- **Badges de estado** codificados por colores
- Diseño **responsive** (colapsa el sidebar en móvil)
- Datos de ejemplo pre-cargados (8 estudiantes, 5 docentes, 6 programas, 5 facultades, 5 aulas, 5 materias)

---

## 🏗️ Entidades del Sistema (según especificación)

- ✅ Administrador
- ✅ Coordinador (menú)
- ✅ Docente
- ✅ Estudiante
- ✅ Facultad
- ✅ Programa
- ✅ Aula
- ✅ Materia
- ✅ Asistencia / DetalleAsistencia
- ✅ HorarioEstudiante / HorarioDocente
- ✅ MateriaDocente
- ✅ Microcurrículo / PlanMicrocurrículo
- ✅ CargaAcademica

---

*Proyecto Visual — Solo Frontend. Datos en memoria (sin base de datos).*
