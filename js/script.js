// Datos del Embudo Comercial Simulado (Práctica Demostrativa)
const crmFunnelData = [
    {
        stage: "Prospectos Calificados (Leads)",
        volume: "140 leads",
        status: "Actualizado",
        statusClass: "rating-5",
        type: "positive",
        action: "Verificación de datos de contacto en HubSpot",
        reminder: "Alerta programada: Hoy 15:00 hrs"
    },
    {
        stage: "En Seguimiento Activo",
        volume: "95 cuentas",
        status: "En Proceso",
        statusClass: "rating-3",
        type: "neutral",
        action: "Envío de recordatorio y estatus de propuesta",
        reminder: "Alerta programada: Mañana 10:00 hrs"
    },
    {
        stage: "Negociación / Propuesta",
        volume: "65 cuentas",
        status: "En Alerta",
        statusClass: "rating-3",
        type: "neutral",
        metric: "Seguimiento B2B",
        action: "Actualización de notas y estatus en Salesforce",
        reminder: "Alerta programada: En 24 horas"
    },
    {
        stage: "Cuentas Cerradas / Éxito",
        volume: "40 cuentas",
        status: "Completado",
        statusClass: "rating-5",
        type: "negative",
        action: "Traspaso a área de operaciones y onboarding",
        reminder: "Sin pendientes críticos"
    }
];

function filterFeedback(type) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    if (event && event.target) {
        event.target.classList.add('active');
    }

    const tbody = document.getElementById('csat-table-body');
    tbody.innerHTML = '';

    const filtered = type === 'all' 
        ? crmFunnelData 
        : crmFunnelData.filter(item => item.type === type);

    filtered.forEach(item => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${item.stage}</strong></td>
            <td>${item.volume}</td>
            <td><span class="badge-rating ${item.statusClass}">${item.status}</span></td>
            <td>${item.action}</td>
            <td><em>${item.reminder}</em></td>
        `;
        tbody.appendChild(tr);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    filterFeedback('all');

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});