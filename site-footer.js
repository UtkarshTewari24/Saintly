const privacyPolicyBtn = document.getElementById("privacyPolicyBtn")
const privacyPolicy = document.getElementById("privacyPolicy")
const termsAndConditions = document.getElementById("termsAndConditions")
function myFunctionTwo(){
        termsAndConditions.style.display = "block"
        overlay.style.display = "block"
}
function myFunction(){
        console.log(privacyPolicy.style.display)
                privacyPolicy.style.display = "block"
                overlay.style.display = "block"
}