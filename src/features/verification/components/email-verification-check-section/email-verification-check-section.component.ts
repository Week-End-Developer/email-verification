import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { CountdownComponent, CountdownConfig, CountdownEvent } from 'ngx-countdown';
import { firstValueFrom, interval, Subscription } from 'rxjs';

@Component({
    selector: 'app-email-verification-check-section',
    templateUrl: './email-verification-check-section.component.html',
    styleUrls: ['./email-verification-check-section.component.scss']
})
export class EmailVerificationCheckSectionComponent implements OnInit {

    @ViewChild('cd', { static: false }) private countdown?: CountdownComponent;

    //
    @Output() verifySuccess = new EventEmitter;
    @Output() verifyError = new EventEmitter;

    //
    public isError: boolean = false;
    public isSuccess: boolean = false;
    public correctCode = "6666";
    isShowTimerHidden = true;

    config: CountdownConfig = {
        leftTime: 120,
        format: 'mm:ss'
    }

    //
    constructor() { }

    //
    ngOnInit(): void {

    }

    //
    onInputFocus(event: any, index: number) {
        const target = event.currentTarget;
        target.type = 'text';
        target.setSelectionRange(0, target.value.length);
        target.type = 'number';

        if (index == 1) {
            const input1 = document.getElementById("input1");
            input1?.classList.add("selected");

            const underline1 = document.getElementById("underline1");
            underline1?.classList.add("d-block");
            underline1?.classList.remove("d-none");
        } else if (index == 2) {
            const input2 = document.getElementById("input2");
            input2?.classList.add("selected");

            const underline2 = document.getElementById("underline2");
            underline2?.classList.add("d-block");
            underline2?.classList.remove("d-none");
        } else if (index == 3) {
            const input3 = document.getElementById("input3");
            input3?.classList.add("selected");

            const underline3 = document.getElementById("underline3");
            underline3?.classList.add("d-block");
            underline3?.classList.remove("d-none");
        } else if (index == 4) {
            const input4 = document.getElementById("input4");
            input4?.classList.add("selected");

            const underline4 = document.getElementById("underline4");
            underline4?.classList.add("d-block");
            underline4?.classList.remove("d-none");
        }
    }

    //
    onInputBlur(index: number) {
        if (index == 1) {
            const input1 = document.getElementById("input1");
            const underline1 = document.getElementById("underline1");
            input1?.classList.remove("selected");
            underline1?.classList.remove("d-block");
            underline1?.classList.add("d-none");
        } else if (index == 2) {
            const input2 = document.getElementById("input2");
            const underline2 = document.getElementById("underline2");
            input2?.classList.remove("selected");
            underline2?.classList.add("d-none");
        } else if (index == 3) {
            const input3 = document.getElementById("input3");
            const underline3 = document.getElementById("underline3");
            input3?.classList.remove("selected");
            underline3?.classList.add("d-none");
        } else if (index == 4) {
            const input4 = document.getElementById("input4");
            const underline4 = document.getElementById("underline4");
            input4?.classList.remove("selected");
            underline4?.classList.add("d-none");
        }
    }

    //
    checkVerify() {
        const input1 = document.getElementById("input1") as HTMLInputElement;
        const input2 = document.getElementById("input2") as HTMLInputElement;
        const input3 = document.getElementById("input3") as HTMLInputElement;
        const input4 = document.getElementById("input4") as HTMLInputElement;

        if (!(input1.value.length > 0 && input2.value.length > 0 && input3.value.length > 0 && input4.value.length > 0)) {
            this.isError = false;
            this.isSuccess = false;
            return;
        }

        if (input1.value === this.correctCode[0] && input2.value === this.correctCode[1] && input3.value === this.correctCode[2] && input4.value === this.correctCode[3]) {
            this.isError = false;
            this.isSuccess = true;
        } else {
            this.isError = true;
            this.isSuccess = false;
        }
    }

    //
    onPaste(event: ClipboardEvent) {
        let clipboardData = event.clipboardData;
        let pastedText = clipboardData!.getData('text');
        const input1 = document.getElementById("input1") as HTMLInputElement;
        const input2 = document.getElementById("input2") as HTMLInputElement;
        const input3 = document.getElementById("input3") as HTMLInputElement;
        const input4 = document.getElementById("input4") as HTMLInputElement;
        input1.value = pastedText[0];
        input2.value = pastedText[1];
        input3.value = pastedText[2];
        input4.value = pastedText[3];
    }

    //
    onProceedClick() {
        if (this.isSuccess)
            this.verifySuccess.emit(true);
        else
            this.verifyError.emit(true);
    }

    //
    public async onResendClick() {
        if (!this.isShowTimerHidden)
            return;

        this.isShowTimerHidden = false;
        this.countdown!.restart();
        this.countdown!.begin();
        // const count = interval(1000).pipe().subscribe(x => { this.timer > 0 ? this.timer -= 1 : count.unsubscribe(); });
    }

    //
    public async handleEvent(event: CountdownEvent) {
        if (event.action == "done") {
            this.isShowTimerHidden = true;
        }
    }

    //
    public async checkOnlyNumber(value: KeyboardEvent, inputName: string) {
        // console.log(value);
        // console.log((/^([0-9]{1})$/.test(value)));

        if (/^([0-9]{1})$/.test(value.key) == false) {
            const input = document.getElementById(inputName) as HTMLInputElement;
            input.value = ""
            input.focus();
        }
        return;
    }

}
