import Vue from 'vue'
export default {
    startLoad() {
        let requireContext = require.context('../global', true, /\w.(vue|js)/)
        requireContext.keys().forEach(fileName => {
            const componentConfig = requireContext(fileName);
            const componentName = fileName.split("/").pop().replace(/\.\w+$/, "");
            Vue.component(
                componentName,
                componentConfig.default || componentConfig
            );
           
        });
    }
}