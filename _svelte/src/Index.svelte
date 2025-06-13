
<script>
    import HeaderSidebar from './components/HeaderSidebar.svelte'
    import Modal from './components/Modal.svelte'
    // import svelteLogo from './assets/svelte.svg'
    // import viteLogo from '/vite.svg'
    // import Counter from './lib/Counter.svelte'
</script>
<html lang="en" data-layout="vertical" data-layout-style="detached" data-layout-position="fixed" data-topbar="light" data-sidebar="dark" data-sidebar-size="lg" data-layout-width="fluid">
    <head>
        <meta charset="utf-8" />
        <title>Title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="Premium Multipurpose Admin & Dashboard Template" name="description" />
        <meta content="Themesbrand" name="author" />
        <link rel="shortcut icon" href="../public/assets/velzon/images/favicon.png">
        <script src="../public/assets/velzon/js/layout.js"></script>
        <link href="../public/assets/velzon/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="../public/assets/velzon/css/icons.min.css" rel="stylesheet" type="text/css" />
        <link href="../public/assets/core/fontawesome-free/css/all.css" rel="stylesheet" type="text/css" />        
        <link href="../public/assets/velzon/css/app.min.css" rel="stylesheet" type="text/css" />
        <link href="../public/assets/velzon/css/custom.min.css" rel="stylesheet" type="text/css" />
        <link href="../public/assets/velzon/libs/sweetalert2/sweetalert2.min.css" rel="stylesheet" type="text/css" />   

        <link href="../public/assets/core/datatables-2.1.8/datatables.css" rel="stylesheet" type="text/css" />  
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css">
        <link href="../public/assets/core/bootstrap-datepicker/css/datepicker.css" rel="stylesheet" type="text/css"/>
        <link href="../public/assets/core/daterangepicker/daterangepicker.css" rel="stylesheet" type="text/css">   
        <link href="../public/assets/core/jconfirm-3.3.4/css/jquery-confirm.css" rel="stylesheet">   
        <link href="../public/assets/core/select2-4.0.8/css/select2.min.css" rel="stylesheet">   
        <link href="../public/assets/core/summernote-0.9.0-dist/summernote-bs5.css" rel="stylesheet">        
        <link href="../public/assets/core/croppie/css/croppie.css" rel="stylesheet" type="text/css"/>

    </head>
    <body>
        <div id="layout-wrapper">
			<!-- <HeaderSidebar/> -->
            <div class="main-content">
                <div class="page-content">
                    <div class="container-fluid">
                        <div id="content-container"></div>
					</div>
                </div>
            </div>
        </div>
        <!-- <Modal/> -->

        <script src="../public/assets/core/jquery/jquery-1.11.3.min.js"></script>           
        <script src="../public/assets/velzon/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="../public/assets/velzon/libs/simplebar/simplebar.min.js"></script>
        <script src="../public/assets/velzon/libs/node-waves/waves.min.js"></script>
        <script src="../public/assets/velzon/libs/feather-icons/feather.min.js"></script>
        <script src="../public/assets/velzon/js/pages/plugins/lord-icon-2.1.0.js"></script>
        <script src="../public/assets/velzon/libs/choices.js/choices.min.js"></script>
        <script src="../public/assets/core/autonumeric-4.1.0.js" type="text/javascript"></script>
        <script src="../public/assets/core/daterangepicker/moment.min.js"></script>
        <script src="../public/assets/core/daterangepicker/daterangepicker.js"></script>	
        <script src="../public/assets/core/bootstrap-datepicker/js/bootstrap-datepicker.js" type="text/javascript"></script>        
        <script src="../public/assets/velzon/libs/apexcharts/apexcharts.min.js" type="text/javascript"></script>
        <script src="../public/assets/core/jconfirm-3.3.4/js/jquery-confirm.js"></script>
        <script src="../public/assets/velzon/js/pages/dashboard-crm.init.js"></script>

		<script src="../public/assets/velzon/js/app.js"></script>
        <script src="../public/assets/velzon/libs/sweetalert2/sweetalert2.min.js"></script>
        <script src="../public/assets/core/select2-4.0.8/js/select2.min.js"></script>    
        <script src="../public/assets/core/summernote-0.9.0-dist/summernote-bs5.js"></script>                
        <script src="../public/assets/core/croppie/js/croppie.min.js"></script>
        <script src="../public/assets/core/datatables-2.1.8/datatables.js"></script>  
        <script src="../public/assets/core/datatables-1.10.24/dataTables.rowGroup.js"></script>    
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/toastify-js"></script>

        <script>
            const lightDarkModeButton = document.querySelector('.light-dark-mode');
            lightDarkModeButton.addEventListener('click', function() {
                // console.log('Light/Dark Mode button clicked!');
                //Start Joe Witaya Custom
                var htmlTheme = document.querySelector('html');
                const bsTheme = htmlTheme.getAttribute('data-bs-theme');

                console.log(bsTheme);
                if(bsTheme=='light'){
                    htmlTheme.setAttribute('data-sidebar','light');
                }else{
                    htmlTheme.setAttribute('data-sidebar','dark');
                }
                //End Joe Witaya Custom        
            });    
            
            $(document).ready(function() {
                let url = "admin";
                let url_auth = "auth";                
                var url_image = '/upload/noimage.png';

                let image_width = 240;
                let image_height = 240;            

                //Croppie
                var upload_crop_img = null;
                upload_crop_img = $('#modal_croppie_canvas').croppie({
                    enableExif: true,
                    viewport: {width: image_width, height: image_height},
                    boundary: {width: parseInt(image_width)+10, height: parseInt(image_height)+10},
                    url: url_image,
                });
                $(document).on('change', '.profile_picture', function(e) {
                    if($(".profile_picture").val() == ''){
                        $("#profile_preview").attr('src', url_image);
                        $("#profile_preview").attr('data-img', '');
                        return;
                    }
                    var reader = new FileReader();
                    reader.onload = function(e) {
                        upload_crop_img.croppie('bind', {
                            url: e.target.result
                        }).then(function () {
                            $("#modal_croppie").modal("show");
                            setTimeout(function(){$('#modal_croppie_canvas').croppie('bind');}, 300);
                        });
                    };
                    reader.readAsDataURL(this.files[0]);
                });
                $(document).on('click', '#btn_croppie_cancel', function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    $(".profile_picture").val('');
                    $("#profile_preview").attr('data-img', '');
                    $("#profile_preview").attr('src', url_image);
                });
                $(document).on('click', '#btn_croppie_save', function(e){
                    e.preventDefault();
                    e.stopPropagation();
                    upload_crop_img.croppie('result', {
                        type: 'canvas',
                        size: 'viewport',
                    }).then(function (resp) {
                        $("#profile_preview").attr('data-img', resp);
                        $("#profile_preview").attr('src', resp);
                        $("#modal_croppie").modal("hide");
                    });
                });

                $(document).on("click","#btn_workspace_new_2", function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    let title   = 'New Workspace';
                    $.confirm({
                        title: title,
                        // icon: 'fas fa-check',
                        columnClass: 'col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1',      
                        // autoClose: 'button_2|10000',
                        // closeIcon: true, closeIconClass: 'fas fa-times', 
                        animation:'zoom', closeAnimation:'bottom', animateFromElement:false, useBootstrap:true,
                        content: function(){
                        },
                        onContentReady: function(e){
                            let self    = this;
                            let content = '';
                            let dsp     = '';
                    
                            dsp += '<form id="jc_form">';
                                dsp += '<div class="col-md-12 col-xs-12 col-sm-12 padding-remove-side">';
                                dsp += '    <div class="form-group">';
                                dsp += '    <label class="form-label">Workspace Name</label>';
                                dsp += '        <input id="jc_input" name="jc_input" class="form-control">';
                                dsp += '    </div>';
                                dsp += '</div>';
                                dsp += '<div class="col-md-12 col-xs-12 col-sm-12 padding-remove-side">';
                                dsp += '    <div class="form-group">';
                                dsp += '    <label class="form-label">Icon</label>';
                                dsp += '        <select id="jc_icon" name="jc_icon" class="form-control">';
                                dsp += '        </select>';
                                dsp += '    </div>';
                                dsp += '</div>';
                            dsp += '</form>';
                            content = dsp;
                            self.setContentAppend(content);

                            $('#jc_icon').select2({
                                dropdownParent:$(".jconfirm-box-container"), //If Select2 Inside Modal, $(".jconfirm-box-container") if jConfirm
                                minimumInputLength: 0,
                                // placeholder: {
                                //     id: '0',
                                //     text: '-- Pilih --'
                                // },
                                placeholder: '<i class="ri-search-2-line fs-30"> Find Icon</i>',
                                allowClear: true,
                                ajax: {
                                    type: "get",
                                    url: "<?= base_url('search');?>",
                                    dataType: 'json',
                                    delay: 250,
                                    cache: true,
                                    data: function (params) {
                                        let query = {
                                            search: params.term,
                                            source: 'icons',
                                            page: params.page || 1
                                        };
                                        return query;
                                    },
                                    processResults: function (result, params){
                                        params.page = params.page || 1;
                                        let datas = [];
                                        $.each(result.data, function(key, val){
                                            datas.push({
                                                'id' : val.session,
                                                'text' : val.text,
                                                'session': val.session
                                            });
                                        });
                                        return {
                                            results: datas,
                                            pagination: {
                                                more: (params.page * 10) < result.count_filtered
                                            }
                                        };
                                    }
                                },    
                                escapeMarkup: function (markup) {
                                    return markup; // Biarkan HTML
                                },
                                templateResult: function(datas){ //When Select on Click
                                    if (!datas.id) { return datas.text; }
                                        console.log('<i class="'+datas.text+' fs-20"></i> '+datas.text);
                                        return '<i class="'+datas.text+' fs-20"></i> '+datas.text;
                                    // }
                                },
                                templateSelection: function(datas) { //When Option on Click
                                    if (!datas.id) { return datas.text; }
            
                                    return '<i class="'+datas.text+' fs-20"></i> '+datas.text;
                                }
                            }); 
                            $(document).on("change","#jc_icon",function(e) {
                                e.preventDefault();
                                e.stopPropagation();
                                var var_custom = $(this).find(':selected').attr('data-column');
                                // alert('#icon on change value => '+var_custom);
                            });
                        },
                        buttons: {
                            button_1: {
                                text:'<i class="fas fa-check white"></i> Process',
                                btnClass: 'btn-primary',
                                keys: ['enter'],
                                action: function(e){
                                    let self      = this;
                    
                                    let input     = self.$content.find('#jc_input').val();
                                    let icon        = self.$content.find('#jc_icon').val();
                                    
                                    if(!input){
                                        $.alert('Name mohon diisi dahulu');
                                        return false;
                                    } else if(!icon){
                                        $.alert('Icon mohon dipilih dahulu');
                                        return false;
                                    } else{
                                        /* let url = "<?= base_url(''); ?>"; */
                    
                                        let form = new FormData();
                                        form.append('action', 'create_workspace');
                                        form.append('workspace_name',input);
                                        form.append('workspace_icon',icon);                                        
                                        $.ajax({
                                            type: "post",
                                            url: url + '/task',
                                            data: form, 
                                            dataType: 'json', cache: 'false', 
                                            contentType: false, processData: false,
                                            beforeSend:function(x){
                                            },
                                            success: function(d) {
                                                let s = d.status;
                                                let m = d.message;
                                                let r = d.result;
                                                if(parseInt(s) == 1){
                                                    notif(s, m);
                                                    setTimeout(function() { 
                                                        location.reload();
                                                    }, 2000);
                                                }else{
                                                    notif(s,m);
                                                }
                                            },
                                            error: function(xhr, status, err) {}
                                        });
                                    }
                                }
                            },
                            button_2: {
                                text: '<i class="fas fa-times white"></i> Close',
                                btnClass: 'btn-danger',
                                keys: ['Escape'],
                                action: function(){
                                    //Close
                                }
                            }
                        }
                    });
                });
                $(document).on("click","#btn_profile_save", function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    let form = new FormData();
                    form.append('action', 'change_image');
                    form.append('upload1', $("#profile_preview").attr('data-img'));
                    form.append('reload_session',true);
                    
                    $.ajax({
                        type: "post",
                        url: url + '/users',
                        data: form, 
                        dataType: 'json', cache: 'false', 
                        contentType: false, processData: false,
                        beforeSend:function(x){
                            // x.setRequestHeader('Authorization',"Bearer " + bearer_token);
                            // x.setRequestHeader('X-CSRF-TOKEN',csrf_token);
                        },
                        success:function(d){
                            let s = d.status;
                            let m = d.message;
                            let r = d.result;
                            if(parseInt(s) == 1){
                                notif(s,m);
                                setTimeout(function() { 
                                    location.reload();
                                }, 2000);
                            }else{
                                notif(s,m);
                            }
                        },
                        error:function(xhr,status,err){
                            notif(0,err);
                        }
                    });
                });  
                $(document).on("click","#btn_relogin, .btn_relogin", function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    var s = $(this).attr('data-s');
                    let form = new FormData();
                    form.append('action', 'relogin');
                    form.append('user_session',s);                    
                    
                    $.ajax({
                        type: "post",
                        url: url_auth + '/relogin',
                        data: form, 
                        dataType: 'json', cache: 'false', 
                        contentType: false, processData: false,
                        beforeSend:function(x){
                            // x.setRequestHeader('Authorization',"Bearer " + bearer_token);
                            // x.setRequestHeader('X-CSRF-TOKEN',csrf_token);
                        },
                        success:function(d){
                            let s = d.status;
                            let m = d.message;
                            let r = d.result;
                            if(parseInt(s) == 1){
                                notif(s,m);
                                setTimeout(function() { 
                                    location.reload();
                                }, 2000);
                            }else{
                                notif(s,m);
                            }
                        },
                        error:function(xhr,status,err){
                            notif(0,err);
                        }
                    });
                });                                
                
            });

            /* Other */
            function numberToLabel(num) {
                if (num >= 1000000000) {
                    return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + ' B';
                }
                if (num >= 1000000) {
                    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + ' M';
                }
                if (num >= 1000) {
                    return (num / 1000).toFixed(1).replace(/\.0$/, '') + ' k';
                }
                return num;
            } 
            function addCommas(string){
                string += '';
                var x = string.split('.');
                var x1 = x[0];
                var x2 = x.length > 1 ? '.' + x[1] : '';
                var rgx = /(\d+)(\d{3})/;
                while (rgx.test(x1)) {
                    x1 = x1.replace(rgx, '$1' + ',' + '$2');
                }
                return x1 + x2;
            }
            function removeCommas(string){

                return string.split(',').join("");
            }
            function numberWithCommas(x) {
                return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }  

            /* Notification */
            function notif(status, title, text = null) {
                var titlee = title;
                if (typeof title === "string") {
                    var titlee = title.replace(/<\/?[^>]+(>|$)/g, "");
                }

                if (parseInt(status) === 1) { //Success
                    Toastify({
                        text: titlee,
                        // className: "success",
                        duration: 3000,
                        destination: "",
                        newWindow: true,
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: "center", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                            background: "#4CAF50",
                            width:"20%",
                        },
                        theme:'dark',
                    onClick: function(){} // Callback after click
                    }).showToast();                    
                } else if (parseInt(status) === 2) { //Info
                    Toastify({
                        text: titlee,
                        // className: "info",
                        duration: 3000,
                        destination: "",
                        newWindow: true,
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: "center", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                            background: "#f7b84b",
                            width:"20%",                            
                        },
                    onClick: function(){} // Callback after click
                    }).showToast();                      
                } else if (parseInt(status) === 0) { //Error only
                    Toastify({
                        text: titlee,
                        // className: "danger",
                        duration: 3000,
                        destination: "",
                        newWindow: true,
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: "center", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                            background: "#f06548",
                            width:"20%",
                        },
                    onClick: function(){} // Callback after click
                    }).showToast();                         
                }
            }

            /* Confirmation */
            function swalDelete(title,text){
                var html = `
                    <div class="mt-3">
                        <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop" colors="primary:#f7b84b,secondary:#f06548" style="width:100px;height:100px"></lord-icon>
                        <div class="mt-4 pt-2 fs-15 mx-5">
                            <h4>${title}</h4>
                            <p class="text-muted mx-4 mb-0">
                                ${text} ?
                            </p>
                        </div>
                    </div>                
                `;                
                return Swal.fire({
                    // title: 'Konfirmasi',
                    html: html,
                    // text: text,
                    // icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Hapus',
                    cancelButtonText: 'Batal'
                }).then((result) => {
                    return new Promise((resolve, reject) => {
                        if(result.isConfirmed){
                            resolve(1);
                        }else{
                            resolve(0);
                        }
                    });               
                });
            } 
            function swalConfirm(title,text,button1,button2){
                return Swal.fire({
                    title: title,
                    html: text,
                    icon: 'info',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: button1,
                    cancelButtonText: button2
                }).then((result) => {
                    return new Promise((resolve, reject) => {
                        if(result.isConfirmed){
                            resolve(1);
                        }else{
                            resolve(0);
                        }
                    });                    
                });
            }                  
            function swalSuccess(title,text){
                var html = `
                <div class="mt-3">
                    <lord-icon src="https://cdn.lordicon.com/lupuorrc.json" trigger="loop" colors="primary:#0ab39c,secondary:#405189" style="width:120px;height:120px"></lord-icon>
                    <div class="mt-4 pt-2 fs-15"><h4>${title}</h4>
                        <p class="text-muted mx-4 mb-0">${text}</p>
                    </div>
                </div>`;
                return Swal.fire({
                    // title: title,
                    // text: text,
                    html:html,
                    // icon: 'info',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Ya',
                    cancelButtonText: 'Tutup'
                }).then((result) => {
                    return new Promise((resolve, reject) => {
                        if(result.isConfirmed){
                            resolve(1);
                        }else{
                            resolve(0);
                        }
                    });                    
                });
            } 
            function swalSuccess2(title,text,button1){
                var html = `
                <div class="mt-3">
                    <lord-icon src="https://cdn.lordicon.com/lupuorrc.json" trigger="loop" colors="primary:#0ab39c,secondary:#405189" style="width:120px;height:120px"></lord-icon>
                    <div class="mt-4 pt-2 fs-15"><h4>${title}</h4>
                        <p class="text-muted mx-4 mb-0">${text}</p>
                    </div>
                </div>`;
                return Swal.fire({
                    // title: title,
                    // text: text,
                    html:html,
                    // icon: 'info',
                    showCancelButton: false,
                    confirmButtonColor: '#364574',
                    // cancelButtonColor: '#364574',
                    confirmButtonText: button1,
                    // cancelButtonText: 'Cancel'
                }).then((result) => {
                    return new Promise((resolve, reject) => {
                        if(result.isConfirmed){
                            resolve(1);
                        }else{
                            resolve(0);
                        }
                    });                    
                });
            }
            function swalInput(title,text,button1,button2){
                return Swal.fire({
                    title: title,
                    input: "text",
                    value: text,
                    inputValue: text,
                    // inputLabel: "Your email address",
                    inputPlaceholder: text,
                    showCancelButton: true, // Display a cancel button
                    confirmButtonColor: '#364574',
                    cancelButtonColor: '#ced4da',                    
                    confirmButtonText: button1, // Customize the confirm button text
                    cancelButtonText: button2, // Optional: Customize the cancel button text                    
                }).then((result) => {
                    return new Promise((resolve, reject) => {
                        if (result.isConfirmed) {
                            resolve(result.value); // Resolve with the input value
                        } else {
                            resolve(null); // Resolve with null if canceled
                        }
                        // resolve(result.value);
                    });                    
                });
            }   
            function swalSelect(title,text,button1,button2,arraydata){
                // console.log(arraydata);
                var ahtml = '';
                for(var a=0; a<arraydata.length; a++){
                    ahtml += '<option value="'+arraydata[a]+'">'+arraydata[a]+'</option>';
                }

                var html = `
                    <div class="mt-3">
                        <div class="mt-4 pt-2 fs-15 mx-5">
                            <h4>${title}</h4>
                            <p class="text-muted mx-4 mb-0">
                                ${text} ?
                            </p>
                            <select id="swal-select" class="form-select swal2-input">
                                <option value="0">Pilih</option>
                                ${ahtml}
                            </select>
                        </div>
                    </div>                
                `;                       


                return Swal.fire({
                    // title: title,
                    html:html,
                    // input: "text",
                    // value: text,
                    // inputValue: text,
                    // // inputLabel: "Your email address",
                    // inputPlaceholder: text,
                    showCancelButton: true, // Display a cancel button
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',                    
                    confirmButtonText: button1, // Customize the confirm button text
                    cancelButtonText: button2, // Optional: Customize the cancel button text                    
                    preConfirm: () => {
                        // Ambil nilai dari <select>
                        const selectedValue = document.getElementById('swal-select').value;
                        if (!selectedValue) {
                            Swal.showValidationMessage('You need to select an option!');
                        }
                        return selectedValue;
                    }
                }).then((result) => {
                    return new Promise((resolve, reject) => {
                        if (result.isConfirmed) {
                            resolve(result.value); // Resolve with the input value
                        } else {
                            resolve(0); // Resolve with null if canceled
                        }
                        // resolve(result.value);
                    });                    
                });
            }      
            function swalSelectIndex(title,text,button1,button2,arraydata){
                console.log(arraydata);
                var ahtml = '';
                for(var a=0; a<arraydata.length; a++){
                    ahtml += '<option value="'+arraydata[a]['workspace_session']+'">'+arraydata[a]['workspace_name']+'</option>';
                }

                var html = `
                    <div class="mt-3">
                        <div class="mt-4 pt-2 fs-15 mx-5">
                            <h4>${title}</h4>
                            <p class="text-muted mx-4 mb-0">
                                ${text} ?
                            </p>
                            <select id="swal-select" class="form-select swal2-input">
                                <option value="0">Pilih</option>
                                ${ahtml}
                            </select>
                        </div>
                    </div>                
                `;                       


                return Swal.fire({
                    // title: title,
                    html:html,
                    // input: "text",
                    // value: text,
                    // inputValue: text,
                    // // inputLabel: "Your email address",
                    // inputPlaceholder: text,
                    showCancelButton: true, // Display a cancel button
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',                    
                    confirmButtonText: button1, // Customize the confirm button text
                    cancelButtonText: button2, // Optional: Customize the cancel button text                    
                    preConfirm: () => {
                        // Ambil nilai dari <select>
                        const selectedValue = document.getElementById('swal-select').value;
                        if (!selectedValue) {
                            Swal.showValidationMessage('You need to select an option!');
                        }
                        return selectedValue;
                    }
                }).then((result) => {
                    return new Promise((resolve, reject) => {
                        if (result.isConfirmed) {
                            resolve(result.value); // Resolve with the input value
                        } else {
                            resolve(0); // Resolve with null if canceled
                        }
                        // resolve(result.value);
                    });                    
                });
            }
                      
            /* Confirmation JConfirm */
            function jConfirmInput(title,text,button1,button2) {
                let dsp     = `
                    <div class="col-md-12 col-xs-12 col-sm-12 padding-remove-side">
                        <div class="form-group">
                            <input id="confirm-input" name="confirm-input" class="form-control" value="${text}" autofocus>
                        </div>
                    </div>
                `;                
                return new Promise((resolve, reject) => {
                    $.confirm({
                        title: title,
                        content: dsp,
                        // columnClass: 'col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1',  
                        // autoClose: 'button2|30000',
                        // closeIcon: true, closeIconClass: 'fas fa-times',
                        animation:'zoom', closeAnimation:'bottom', animateFromElement:false, useBootstrap:true,         
                        onOpenBefore: function () {
                            // this.$el.css('z-index', 1051); // Pastikan modal berada di atas
                        },     
                        onOpen: function () {
                            this.$content.find('#confirm-input').focus();
                        },                                  
                        buttons: {
                            confirm: {
                                text: button1,
                                btnClass: 'btn-primary',
                                action: function () {
                                    let userInput = this.$content.find('#confirm-input').val();
                                    resolve(userInput);
                                }
                            },
                            cancel: {
                                text: button2,
                                btnClass: 'btn-danger',                                
                                action: function () {
                                    reject('User cancelled');
                                    // return false;
                                }
                            }
                        }
                    });
                });
            }
            /* Ajax */
            function ajax(url,data){
                return new Promise((resolve, reject) => {
                    $.ajax({
                        url: url,
                        type: "POST",
                        data: data,
                        dataType: 'json', cache: 'false', 
                        contentType: false, processData: false,                    
                        success: function(response) {
                            resolve(response);
                        },
                        error: function(xhr, status, error) {
                            console.log('Error ajax(): '+error);
                            // notif(0,'Error, Please try again');
                            reject(error);
                        }
                    });
                });                    
            } 
            /*
                Sample sconfirm
                var c = swalDelete("Joe");
                c.then((r) => {
                    if(r === 1){
                        // Delete
                        notif(1,'Deleted');
                    }else{
                        // Cancel
                        notif(0,'Abort');                        
                    }
                })
            */                                                
            /*
                Sample swalInput
                var c = swalInput("Joe");
                c.then((r) => {
                    console.log(r);
                })        
            */   
        </script>
        <script>
            function includeHTML(id, file) {
                fetch(file)
                .then(res => {
                    if (!res.ok) throw new Error('Gagal ambil ' + file);
                    return res.text();
                })
                .then(html => {
                    document.getElementById(id).innerHTML = html;
                })
                .catch(err => console.warn(err));
            }
            
        </script>    
        <script>
            document.addEventListener('DOMContentLoaded', function() {
                var btn_volume_up = document.getElementById('btn_volume_up');
                var btn_volume_down = document.getElementById('btn_volume_down');
                var volumeValue = document.getElementById('volume_value');

                async function updateVolumeDisplay() {
                    if (window.electronAPI && window.electronAPI.getVolume) {
                        const vol = await window.electronAPI.getVolume();
                        if (volumeValue) volumeValue.textContent = vol;
                    }
                }

                if (btn_volume_up && window.electronAPI && window.electronAPI.volumeUp) {
                    btn_volume_up.addEventListener('click', async function(e) {
                        e.preventDefault();
                        await window.electronAPI.volumeUp();
                        updateVolumeDisplay();
                    });
                }

                if (btn_volume_down && window.electronAPI && window.electronAPI.volumeDown) {
                    btn_volume_down.addEventListener('click', async function(e) {
                        e.preventDefault();
                        await window.electronAPI.volumeDown();
                        updateVolumeDisplay();
                    });
                }

                // updateVolumeDisplay(); // Initial fetch on load
            });
        </script>

        <script>
            function loadView(id, file) {
                fetch(file)
                    .then(response => response.text())
                    .then(html => document.getElementById(id).innerHTML = html)
                    .catch(error => console.error("Error loading component:", error));
            }
            function loadPage(page) {
                fetch(page)
                    .then(response => response.text())
                    .then(html => {
                        const contentDiv = document.getElementById("content-container");
                        contentDiv.innerHTML = html;

                        // Mengeksekusi ulang semua skrip dalam halaman yang baru dimuat
                        contentDiv.querySelectorAll("script").forEach(oldScript => {
                            const newScript = document.createElement("script");
                            newScript.textContent = oldScript.textContent;
                            document.body.appendChild(newScript);
                        });
                    });
            }

            loadView("modal-container", "modal.html");
            // loadComponent("footer-container", "views/footer.html");
        </script>
</body>
</html>