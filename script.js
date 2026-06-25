function startTracking() {

    const name = document.getElementById("employeeName").value;

    if(name.trim() === ""){
        alert("Please enter employee name");
        return;
    }

    document.getElementById("trackerSection").classList.remove("hidden");
    document.getElementById("welcomeText").innerText =
        `Welcome, ${name}`;
}

const tasks = document.querySelectorAll(".task");

tasks.forEach(task => {
    task.addEventListener("change", updateProgress);
});

function updateProgress() {

    const totalTasks = tasks.length;

    const completedTasks =
        document.querySelectorAll(".task:checked").length;

    const percentage =
        Math.round((completedTasks / totalTasks) * 100);

    document.getElementById("progressBar").style.width =
        percentage + "%";

    document.getElementById("progressText").innerText =
        percentage + "% Completed";

    if(percentage === 100){
        document.getElementById("progressText").innerText =
            "🎉 Onboarding Completed Successfully!";
    }
}