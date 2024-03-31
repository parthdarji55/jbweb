$(document).ready(function() {

    /*
    //  Gallery
    const galleryVolume = 36;
    const container = $("#galleryContent");
    for (let i = 0; i < galleryVolume; i++) {
        const imgElement = $("<img>").attr({
            src: `img/gallery/g${i}.jpg`,
            alt: `Juice Box Battery ${i}`
        });
        container.append(imgElement);
    }
    */

    const clientImages = [
        [
            'img/clients/clientImage1.jpg',
            'img/clients/clientImage2.jpg'
        ],
        [
            'img/clients/clientImage4.jpg',
            'img/clients/clientImage5.jpg',
            'img/chargingBank.jpg'
        ],
        [
            'img/clients/clientImage3.jpg',
            'img/clients/clientImage4.jpg',
            'img/clients/clientImage5.jpg'
        ]
    ];
    let idx = 0;
    const $imageContainer = $('#clientImgLoop');
    function flash() {        
        let imgHtml = '';
        for (let i = 0; i < clientImages[idx].length; i++)
            imgHtml += `<img src="${clientImages[idx][i]}">`;
        $imageContainer.html(imgHtml);
        idx = (idx + 1) % clientImages.length;
    }
    flash();
    setInterval(flash, 2000);
});