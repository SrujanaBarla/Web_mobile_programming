function upDate(previewPic) {

    const images = previewPic.getAttribute( "src" );
    const words = previewPic.getAttribute( "alt" );
    document.getElementById('image').style.backgroundImage="url('" + images + "')";

    // updates image text
    document.getElementById('image').innerHTML=words;
}

function unDo() {

    document.getElementById('image').innerText= "Hover over an image below to display here.";
    document.getElementById('image').style.background='peachpuff';
}
