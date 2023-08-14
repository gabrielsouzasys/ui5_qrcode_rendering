sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, formatter) {
        "use strict";
        var category = "VV";
        return Controller.extend("ui5qrcoderendering.controller.Main", {
            formatter: formatter,

            onInit: function () {
                this.GenQR();
            },

            GenQR: function () {
            
                var kinder_parttern = 'https://qr.kinder.com/';
                var qr_key;
                var qr_text_id = this.byId('ID_QRCODE').getText();

                if (!qr_text_id) {

                    qr_text_id = "001";
                    this.byId('ID_QRCODE').setText("VV" + qr_text_id);

                    qr_key = this.byId('ID_QRCODE').getText();
                    this.byId('QrImage').setCode(kinder_parttern + qr_key);

                } else if (!this.byId("id_key_qr").getValue() || this.byId("id_url").getValue()) {

                    //Convert a Url em QR
                    this.byId('QrImage').setCode(this.byId('id_url').getValue);

                } else if (this.byId("id_key_qr").getValue() || !this.byId("id_url").getValue()) {

                    //Monta a Url Kinder com o Id informado
                    qr_key = this.byId('id_key_qr').getValue();
                    this.byId('QrImage').setCode(kinder_parttern + qr_key);
                    this.byId('ID_QRCODE').setText(qr_key);
                }
            },

            getPrevius: function () {
                debugger
                var kinder_parttern = 'https://qr.kinder.com/';
                var qr_key;
                var qr_text_id = this.byId('ID_QRCODE').getText();

                qr_key = qr_text_id.slice(2);

                qr_key = parseInt(qr_key) - 1;
                if (qr_key > 0) {

                    var text_id = this.byId('ID_QRCODE')

                    switch (qr_key.toString().length) {
                        case 1:
                            text_id.setText(category + "00" + qr_key);
                            break;

                        case 2:
                            text_id.setText(category + "0" + qr_key);
                            break;

                        case 3:
                            text_id.setText(category + qr_key);
                            break;

                        default:
                            break;
                    }
                           
                    this.byId('QrImage').setCode(kinder_parttern + text_id.getText());

                }

            },
            getNext: function () {
                debugger
                var kinder_parttern = 'https://qr.kinder.com/';
                var qr_key;
                var qr_text_id = this.byId('ID_QRCODE').getText();

                qr_key = qr_text_id.slice(2);

                qr_key = parseInt(qr_key) + 1;
                if (qr_key > 0) {

                    var text_id = this.byId('ID_QRCODE')

                    switch (qr_key.toString().length) {
                        case 1:
                            text_id.setText(category + "00" + qr_key);
                            break;

                        case 2:
                            text_id.setText(category + "0" + qr_key);
                            break;

                        case 3:
                            text_id.setText(category + qr_key);
                            break;

                        default:
                            break;
                    }
           
                    this.byId('QrImage').setCode(kinder_parttern + text_id.getText());

                }

            },

            ChangeCategory: function () {
                //VUB
                var qr_text_id = "001";
                var kinder_parttern = 'https://qr.kinder.com/';
                var qr_key;
                switch (category) {
                    case 'VV':
                        category = "SD";
                        this.byId("id_key_qr").setPlaceholder(category + qr_text_id);
                        this.byId('ID_QRCODE').setText(category + qr_text_id);

                        break;

                    case 'SD':
                        category = "DV";//VD
                        this.byId("id_key_qr").setPlaceholder(category + qr_text_id);
                        this.byId('ID_QRCODE').setText(category + qr_text_id);

                        break;

                    case 'DV':
                        category = "VU";
                        this.byId("id_key_qr").setPlaceholder(category + qr_text_id);
                        this.byId('ID_QRCODE').setText(category + qr_text_id);
                        break;
                    case 'VU':
                        category = "VV";
                        this.byId("id_key_qr").setPlaceholder(category + qr_text_id);
                        this.byId('ID_QRCODE').setText(category + qr_text_id);

                        break;

                    default:
                        break;
                }

                qr_key = this.byId('ID_QRCODE').getText();
                this.byId('QrImage').setCode(kinder_parttern + qr_key);

            }

        });
    });