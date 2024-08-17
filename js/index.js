let encrypt = document.querySelector("#encrypt");
let decrypt = document.querySelector("#decrypt");
let copy = document.querySelector("#copy");

encrypt.addEventListener("click", (e) => {
    let out_text = "";
    let int__textarea = document.querySelector("#int__textarea").value;
    let panel__out__text = document.querySelector("#panel__out__text");
    let out__content__text = document.querySelector("#out__content__text");
    if(int__textarea != ""){
        out_text = encryptText(int__textarea);
        document.querySelector("#out__textarea").textContent = out_text;
        panel__out__text.style.visibility="hidden";
        panel__out__text.style.display="none";
        out__content__text.style.visibility="visible";
        out__content__text.style.display="block";

    }else{
        document.querySelector("#out__textarea").textContent = "";
        panel__out__text.style.visibility="visible";
        panel__out__text.style.display="flex";
        out__content__text.style.visibility="hidden";
        out__content__text.style.display="none";
    }
})

decrypt.addEventListener("click", (e) => {
    let out_text = "";
    let int__textarea = document.querySelector("#int__textarea").value;
    let panel__out__text = document.querySelector("#panel__out__text");
    let out__content__text = document.querySelector("#out__content__text");
    if(int__textarea != ""){
        out_text = decryptText(int__textarea);
        document.querySelector("#out__textarea").textContent = out_text;
        panel__out__text.style.visibility="hidden";
        panel__out__text.style.display="none";
        out__content__text.style.visibility="visible";
        out__content__text.style.display="block";

    }else{
        document.querySelector("#out__textarea").textContent = "";
        panel__out__text.style.visibility="visible";
        panel__out__text.style.display="flex";
        out__content__text.style.visibility="hidden";
        out__content__text.style.display="none";
    }
})

copy.addEventListener("click", (e) => {
    let copy_text = document.querySelector("#out__textarea");
    navigator.clipboard.writeText(copy_text.textContent);
})

function encryptText(text){
    let letters = {"o":"ober","e":"enter","i":"imes","a":"ai","u":"ufat"};
    let encrypt = "";
    let textchar = text.split('');
    for(let i=0;i<textchar.length;i++){
        if(textchar[i] in letters){
            encrypt += letters[textchar[i]];                       
        }else{
            encrypt += textchar[i];            
        }
    }
    return encrypt;
}

function decryptText(text_encrypt){
    let decrypt = text_encrypt;    
    let encryption = {"ober":"o","enter":"e","imes":"i","ai":"a","ufat":"u"};
    for(let part_encryption in encryption){
        decrypt = decrypt.replaceAll(part_encryption, encryption[part_encryption]);        
    }
    return decrypt;
}

function validateText(textarea){
    const regex = /^[a-z\s]*$/;

    let values = textarea.value;

    if (!regex.test(values)) {
        textarea.value = values.replace(/[^a-z\s]/g, '');
    }
}