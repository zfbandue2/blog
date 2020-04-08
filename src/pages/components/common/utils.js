export default {
    isScrollBottom() {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        if(scrollTop + clientHeight == scrollHeight) {
            return true;
        }
        return false;
    }
}