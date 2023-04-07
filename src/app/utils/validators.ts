import { AbstractControl } from "@angular/forms";
import { CategoryService } from "../services/category.service";
import { map } from "rxjs";

export class CustomValidators {
    static validPassword(control: AbstractControl) {
        const value = control.value
        if (!containsNumber(value)) {
            return ({ invalid_password: true })
        }
        return null
    }

    static matchPassword(control: AbstractControl) {
        const password: string = control.get('password')?.value
        const confirmPassword: string = control.get('confirmPassword')?.value
        if (password === confirmPassword) {
            return null
        }
        return ({ notMatched_password: true })
    }

    static validateCategory(service: CategoryService) {
        return (control: AbstractControl) => {
            const value = control.value
            return service.isAvailable(value)
                .pipe(
                    map((response) => response.isAvailable ? null : { name_exist: true })
                )
        }
    }
}

const containsNumber = (value: string) => {
    return value.split('').find(v => isNumber(v)) !== undefined
}
const isNumber = (value: string) => {
    return !isNaN(parseInt(value, 10))
}