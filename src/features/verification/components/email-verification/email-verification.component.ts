import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/root/services/auth.service';
import Swal, { SweetAlertResult } from 'sweetalert2';

@Component({
    selector: 'app-email-verification',
    templateUrl: './email-verification.component.html',
    styleUrls: ['./email-verification.component.scss']
})
export class EmailVerificationComponent implements OnInit {
    //
    constructor(
        private _authService: AuthService
    ) { }

    //
    public async ngOnInit() {
    }

    //
    public async verifySuccess() {
        let _this: this;
        let result = Swal.fire({
            title: "Successful!",
            text: "Success message",
            timer: 2000,
            icon: "success",
            iconColor: "#00BA88",
            showConfirmButton: false,
        })

        if (await result)
            this._authService.signIn();
    }
    //
    public verifyError() {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Error message',
            showConfirmButton: false,
        })
    }
}
