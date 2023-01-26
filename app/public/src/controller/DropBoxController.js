class DropBoxController {

    constructor() {

        this.btnSendFileEl = document.querySelector('#btn-send-file');
        this.inputFilesEl = document.querySelector('#files');
        this.snackModalEl = document.querySelector('#react-snackbar-root');
        
        this.initEvents();


    }

    initEvents(){

        this.btnSendFileEl.addEventListener('click', event => {
            
            this.inputFilesEl.click();
            this.uploadTask(event.target.files);

        });

        this.inputFilesEl.addEventListener('change', event => {

            this.snackModalEl.style.display = 'block';

        });

    }

    uploadTask(files){

        let promises = [];

        return Promise.all(promises);

    }

}