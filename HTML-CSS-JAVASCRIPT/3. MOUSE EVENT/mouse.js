const containerEl = document.querySelector(".container");

window.addEventListener("mousemove", (event)=>{
    containerEl.innerHTML = `
        <div class="mouse-event">
            ${event.clientX}
            <h4>Mouse X Possition(px)</h4>
        </div>
        <div class="mouse-event">
            ${event.clientX}
            <h4>Mouse Y Possition(px)</h4>
        </div>
    `
})