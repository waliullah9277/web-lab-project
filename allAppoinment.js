const loadAllAppoinment = () => {
    const patient_id = localStorage.getItem("patient_id");
    fetch(`https://testing-8az5.onrender.com/appointment/?patient_id=${patient_id}`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data);
        data.forEach((item)=>{
        const parent = document.getElementById("appoinment-list");
        const tr = document.createElement("tr");
        tr.innerHTML = `
                <td>${item.id}</td>
                <td>${item.symptom.slice(0,10)}</td>
                <td>${item.patient}</td>
                <td>${item.doctor}</td>
                <td>${item.appointment_status}</td>
                <td><button>delete</button></td>
        `;
        parent.appendChild(tr);
        })
    })
};

loadAllAppoinment();