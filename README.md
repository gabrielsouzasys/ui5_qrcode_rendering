## Application Details
“Desenvolvi este webapp que gera QR Codes para os personagens das coleções Appplaydu e kinder, para poder praticar e exercitar algumas atividades relacioandas a QRCODE com UI5. Apliquei meus conhecimentos e utilizei uma biblioteca que gera imagens de QR Codes de URL ou valores. bem como utilizei a biblioteca de QRReader para decodificar os Códigos gerados por este WebApp”

* É possível gerar um QRCode por uma Url qualquer
* Gerar um QRCode para um ID diretamente. (Exemplo VV380) 
* Inicialmente Gera o QRCode VV001 com o link para download dos modelos 3d de Realidade Aumentada dentro do Appplaydu (https://play.google.com/store/apps/details?id=com.ferrero.applayduGP&hl=pt_PT&gl=US&pli=1) o Webapp incrementa a sequencia de códigos e gera o QRCode do novo link para o Scan.
* Existe a opção de modificar a categoria dos grupos de QRCode. VV, VD, VU. Aumentando as possibilidades de Scan dos Modelos de RA. 


## ui5_qrcode_rendering
ui5_qrcode_rendering utiliza uma lib dentro da pasta do projeto, não associada aos componentes do SAPUI5/OPENUI5
Utilizei um custom control para poder renderizar os componentes em XML VIew.

### Starting the generated app
Para executarS por NPM, realizar o npm install(npm start a seguir). (verificar em index.html comentários sobre resources UI5)
Caso queira testar a aplicação sem npm, executar apenas o index.html diretamente no localhost.


##Scripts Padrões Fiori generator 
    "start-local": "fiori run --config ./ui5-local.yaml --open \"test/flpSandbox.html?sap-ui-xx-viewCache=false#ui5qrcoderendering-display\"",
    "build": "ui5 build --config=ui5.yaml --clean-dest --dest dist",
    "deploy": "fiori verify",
    "deploy-config": "fiori add deploy-config",
    "start-noflp": "fiori run --open \"index.html?sap-ui-xx-viewCache=false\"",
    "start-variants-management": "fiori run --open \"preview.html?sap-ui-xx-viewCache=false&fiori-tools-rta-mode=true&sap-ui-rta-skip-flex-validation=true#preview-app\"",
    "unit-tests": "fiori run --open 'test/unit/unitTests.qunit.html'",
    "int-tests": "fiori run --open 'test/integration/opaTests.qunit.html'" 