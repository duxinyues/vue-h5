/*
 * @Author: duxinyues weiyy26445@yunrong.cn
 * @Date: 2023-09-14 12:32:51
 * @LastEditors: duxinyues weiyy26445@yunrong.cn
 * @LastEditTime: 2023-09-14 22:48:52
 * @FilePath: /vue-h5/src/main.js
 * @Description: 
 * Copyright (c) 2023 by ${duxinyues} email: ${weiyy26445@yunrong.cn}, All Rights Reserved.
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
window.onload = () => {
    document.addEventListener("touchstart", function (event) {
        // 两个手指操作
        if (event.touches.length > 0) {
            event.preventDefault();
        }
    });

    let lastTouchEnd = 0;
    document.addEventListener("touchend", function (event) {
        let now = (new Date()).getTime();

        // 判断是否是双击，两次间隔小于300ms，认为是双击
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }

        lastTouchEnd = now;
    })
}
createApp(App).mount('#app')
