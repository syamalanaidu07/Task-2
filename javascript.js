document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("viewBtn");
    const profile = document.getElementById("profileInfo");

    btn.addEventListener("click", function () {

        profile.innerHTML = `
            <div class="alert alert-success">
                <h4>Student Profile</h4>
                <hr>
                <p><strong>Name:</strong> Naidu Syamala Durga</p>
                <p><strong>Roll Number:</strong> A24126511160</p>
                <p><strong>Branch:</strong> Information Technology</p>
                <p><strong>Email:</strong> naidusyamaladurga.24.it@anits.edu.in</p>
                <p><strong>College:</strong> ANITS</p>
            </div>
        `;

    });

});