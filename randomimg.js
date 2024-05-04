/*/
$(document).ready(function () {
    var classCycle = ['bg1', 'bg2', 'bg3', 'bg4', 'bg5', 'bg6', 'bg7', 'bg8', 'bg9', 'bg10', 'bg11'];

    var randomNumber = Math.floor(Math.random() * classCycle.length);
    var classToAdd = classCycle[randomNumber];

    $('body').addClass(classToAdd);

});
/*/
const images = [
    // URLs
    "https://github.com/Miiyuukii/unstblr.xyz-Website/blob/main/image/vrc/bg1.png?raw=true",
    "https://github.com/Miiyuukii/unstblr.xyz-Website/blob/main/image/vrc/VRChat_2024-04-21_22-45-05.198_1920x1080_wrld_e78b25da-efcb-41e2-8ddd-81e82f654331.png?raw=true",
    "https://github.com/Miiyuukii/unstblr.xyz-Website/blob/main/image/vrc/VRChat_2024-04-01_15-32-09.083_1920x1080_wrld_7d2af18c-e4a1-4084-9cd2-b27432b45980.png?raw=true",
    "https://github.com/Miiyuukii/unstblr.xyz-Website/blob/main/image/vrc/VRChat_2024-04-01_15-20-41.362_1920x1080_wrld_7d2af18c-e4a1-4084-9cd2-b27432b45980.png?raw=true",
    "https://github.com/Miiyuukii/unstblr.xyz-Website/blob/main/image/vrc/VRChat_2024-03-17_02-04-49.412_1920x1080_wrld_88e3c772-894f-418d-b9e5-96059af3d631.png?raw=true",
    "https://github.com/Miiyuukii/unstblr.xyz-Website/blob/main/image/vrc/VRChat_2024-03-05_23-20-11.630_1920x1080_wrld_b6f22e8e-1264-4b9e-9c24-27418e7c67f7.png?raw=true",
    "https://github.com/Miiyuukii/unstblr.xyz-Website/blob/main/image/vrc/VRChat_2024-02-26_02-34-12.337_1920x1080_wrld_c4d572ac-7f36-4ff7-b0e0-0dc8efdab88d.png?raw=true",
    "https://github.com/Miiyuukii/unstblr.xyz-Website/blob/main/image/vrc/VRChat_2023-11-26_15-28-57.367_1920x1080_wrld_7d2af18c-e4a1-4084-9cd2-b27432b45980.png?raw=true",
    "https://github.com/Miiyuukii/unstblr.xyz-Website/blob/main/image/vrc/VRChat%202023-07-20%2023-42-51.png?raw=true",
    "https://github.com/Miiyuukii/unstblr.xyz-Website/blob/main/image/vrc/VRChat%202023-05-18%2017-40-47.png?raw=true",
    "https://github.com/Miiyuukii/unstblr.xyz-Website/blob/main/image/vrc/VRChat%202023-04-17%2000-13-54.png?raw=true",
    "https://github.com/Miiyuukii/unstblr.xyz-Website/blob/main/image/vrc/VRChat_2024-05-02_02-43-00.861_1920x1080.png?raw=true",
    "https://github.com/Miiyuukii/unstblr.xyz-Website/blob/main/image/vrc/VRChat_2024-05-02_02-43-05.916_1920x1080.png?raw=true",
    "https://github.com/Miiyuukii/unstblr.xyz-Website/blob/main/image/vrc/VRChat_2024-05-02_05-14-39.916_1920x1080.png?raw=true",
    "https://github.com/Miiyuukii/unstblr.xyz-Website/blob/main/image/vrc/VRChat_2024-05-02_05-14-42.489_1920x1080.png?raw=true",
    "https://github.com/Miiyuukii/unstblr.xyz-Website/blob/main/image/vrc/VRChat_2024-05-02_05-55-06.048_3840x2160.png?raw=true",
    "https://github.com/Miiyuukii/unstblr.xyz-Website/blob/main/image/vrc/VRChat_2024-05-02_05-55-19.378_3840x2160.png?raw=true",
    "https://github.com/Miiyuukii/unstblr.xyz-Website/blob/main/image/vrc/VRChat_2024-05-02_05-58-43.001_3840x2160.png?raw=true",
    "https://github.com/Miiyuukii/unstblr.xyz-Website/blob/main/image/vrc/VRChat_2024-05-02_06-05-39.554_3840x2160.png?raw=true",
    "https://github.com/Miiyuukii/unstblr.xyz-Website/blob/main/image/vrc/VRChat_2024-05-03_01-10-05.891_3840x2160.png?raw=true",
    "https://github.com/Miiyuukii/unstblr.xyz-Website/blob/main/image/vrc/VRChat_2024-05-03_01-11-03.895_3840x2160.png?raw=true",
    "https://github.com/Miiyuukii/unstblr.xyz-Website/blob/main/image/vrc/VRChat_2024-05-04_01-11-24.362_3840x2160.png?raw=true",
    "https://github.com/Miiyuukii/unstblr.xyz-Website/blob/main/image/vrc/VRChat_2024-05-04_01-11-43.186_3840x2160.png?raw=true",
    "https://github.com/Miiyuukii/unstblr.xyz-Website/blob/main/image/vrc/VRChat_2024-05-04_01-52-49.647_3840x2160.png?raw=true",
    "https://github.com/Miiyuukii/unstblr.xyz-Website/blob/main/image/vrc/VRChat_2024-05-04_01-55-40.661_3840x2160.png?raw=true",
    "https://github.com/Miiyuukii/unstblr.xyz-Website/blob/main/image/vrc/VRChat_2024-05-04_01-56-05.275_3840x2160.png?raw=true"

]
window.onload = () => {
    // preloading
    document.body.style.backgroundImage = `url(${images[0]})`
    document.querySelector('.hidden').src = images[1]
    let i = 1
    setInterval(() => {
        document.body.style.backgroundImage = `url(${images[i++]})`

        if (i === images.length) i = 0
        else {
            // preload the next image, so that it transitions smoothly
            document.querySelector('.hidden').src = images[i]
        }
    }, 7000)
}