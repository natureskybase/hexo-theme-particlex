mixins.search = {
    data() {
        return { rawSearch: "" };
    },
    watch: {
        search(value) {
            // archives page
            if (this.$refs.timeline) {
                let timeline = this.$refs.timeline.childNodes;
                for (let i of timeline)
                    if (!value || i.dataset.title.includes(value)) {
                        i.style.opacity = 1;
                        i.style.visibility = "visible";
                        i.style.marginTop = 0;
                    } else {
                        i.style.opacity = 0;
                        i.style.visibility = "hidden";
                        i.style.marginTop = -i.offsetHeight - 30 + "px";
                    }
            }
            // home page
            let posts = document.querySelectorAll(".post[data-title]");
            for (let i of posts)
                if (!value || i.dataset.title.includes(value)) {
                    i.style.opacity = 1;
                    i.style.visibility = "visible";
                    i.style.height = "";
                    i.style.marginBottom = "";
                } else {
                    i.style.opacity = 0;
                    i.style.visibility = "hidden";
                    i.style.height = 0;
                    i.style.marginBottom = 0;
                }
        },
    },
    computed: {
        search() {
            return this.rawSearch.toLowerCase().replace(/\s+/g, "");
        },
    },
};
