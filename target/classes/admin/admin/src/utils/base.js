const base = {
    get() {
        return {
            url : "http://localhost:8080/gongzuoliangtongji/",
            name: "gongzuoliangtongji",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/gongzuoliangtongji/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "工作量统计系统"
        } 
    }
}
export default base
