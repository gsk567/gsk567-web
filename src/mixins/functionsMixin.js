export const functionsMixin = {
    methods: {
        includeScripts(scripts) {
            scripts.forEach(scriptSource => {
                let scriptObject = document.createElement('script');
                scriptObject.setAttribute('src', scriptSource)
                document.head.appendChild(scriptObject);
            });
        }
    }
}