import Sample from './lib/Sample';
import $ from 'jquery';

const sample = new Sample({
    name: 'world'
});

$('.wrapper').on('click', () => {
    console.log(`hello, ${sample.name}.`);
});

function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    const reader = new FileReader();
    console.log(file[0]);
    
    reader.readAsBinaryString(files[0]);
    reader.onload = (theFile) => {
        const formData = new FormData();
        formData.append('apikey', 'mrRalhmnrn-cdgLCEDnbhm8BtTZ8GbywkVfU8fJTm8g');
        formData.append('wav', theFile.target.result);
        
        // const myHeaders = new Headers({
        //     'Content-Type': 'multipart/form-data'
        // });

        $.ajax({
            url: 'https://api.webempath.net/v2/analyzeWav',
            method: 'post',
            // dataに FormDataを指定
            data: formData,
            // Ajaxがdataを整形しない指定
            processData: false,
            // contentTypeもfalseに指定
            contentType: false
        }).done(function( res ) {
            // 送信せいこう！
            console.log( 'SUCCESS', res );
        }).fail(function( jqXHR, textStatus, errorThrown ) {
            // しっぱい！
            console.log( 'ERROR', jqXHR, textStatus, errorThrown );
        });
      
        // fetch('https://api.webempath.net/v1/analyzeWav', {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: formData
        // })
        // .then(response => {
        //     console.log(response.json());
        //     return response.json();
        // });
    };
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);


