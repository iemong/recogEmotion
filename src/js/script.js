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
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModifiedDate.toLocaleDateString(), '</li>');
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
    const reader = new FileReader();
    reader.readAsBinaryString(files[0]);
    reader.onload = (theFile) => {
        const formData = new FormData();
        formData.append('apikey', 'mrRalhmnrn-cdgLCEDnbhm8BtTZ8GbywkVfU8fJTm8g');
        formData.append('wav', theFile.target.result);
         
        const myHeaders = new Headers({
            'Content-Type': 'multipart/form-data'
        });

        fetch('https://api.webempath.net/v1/analyzeWav', {
            method: 'POST',
            //headers: myHeaders,
            body: formData,
            mode: 'cors'
        })
        .then(response => {
            console.log(response.json());
            return response.json();
        });
    };
   
  }

document.getElementById('files').addEventListener('change', handleFileSelect, false);


