export default () => {
    async function copyTargetText(e) {
        try {
            const code = document.querySelector(".bonus-code__code")
            await navigator.clipboard.writeText(code.innerText);
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    }

    document.querySelector(".bonus-code__btn-copy").addEventListener("click", (e) => {
        copyTargetText(e);
        document.querySelector(".bonus-code__btn-copy").innerHTML = 'COPIED';
        document.querySelector(".bonus-code__btn-copy").style.color = 'red';
        setTimeout(() => {
            document.querySelector(".bonus-code__btn-copy").innerHTML = "COPY CODE";
            document.querySelector(".bonus-code__btn-copy").style.color = 'white';
        }, 1000);
    });
}
