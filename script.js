// ================= SPLASH SCREEN =================

window.addEventListener("load", () => {

    const splash = document.getElementById("splash");

    if (!splash) return;


    // مدة ظهور الـ Splash
    setTimeout(() => {

        splash.classList.add("hide");


        // إزالة العنصر بعد انتهاء Animation
        setTimeout(() => {

            splash.remove();

        }, 600);


    }, 1500);

});