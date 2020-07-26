 (function(){
    function handleInput(e) {
        var input = e.target;
        var initialValue = input.getAttribute("value");
        initialValue !== input.value
            ? input.classList.add("red")
            : input.classList.remove("red");
    }

    document.addEventListener('input', handleInput);
})();
