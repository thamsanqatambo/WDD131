const selectElem = document.getElementById('webdevlist');
const output = document.getElementById('output');

selectElem.addEventListener('change', (e) => {
    const codeValue = e.target.value;

    if (codeValue === "html") {
        output.textContent = "📄 HTML is used to structure web content.";
    } else if (codeValue === "css") {
        output.textContent = "🎨 CSS is used to style web pages.";
    } else if (codeValue === "js") {
        output.textContent = "⚡ JavaScript makes web pages interactive.";
    } else {
        output.textContent = "";
    }
});