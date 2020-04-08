/**
 * 运行 npm add_page 添加新的页面
 */

const path = require("path");
const fs = require("fs");
const script_path = __dirname;
const templates_path = path.resolve(script_path, "templates");

function add_page (argv) {
    for(let page_name of argv) {
        open_template("common");
    }
}


// 读取模板文件
function open_template(name) {
    const template_path = path.resolve(templates_path, name);
    if(fs.existsSync(template_path)) {
        console.log(template_path);
        return;
    }
    throw new Error(`未找到模板"${template_path}"`);
}

// 处理模板文件
function template_process() {

}

// 保存模板文件
function save_template() {

}

//
(function() {
    let command_arg = process.argv.splice(2);
    add_page(command_arg);
})();