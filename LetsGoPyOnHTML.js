const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/pyodide/v0.29.3/full/pyodide.js";
script.onload = async () => {
    const py = await loadPyodide();
};
document.head.append(script);
// PyOdide Loaded.
pyRun = py.runPythonAsync;
