import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  loginForm: FormGroup;
  currentUser: string = "";
  constructor(private authService: AuthService) {
    this.loginForm = new FormGroup({
      correo: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })

  }

  ngOnInit(): void {
  }

  async login({ value, valid }: { value: any, valid: boolean }) {
    if (valid) {
      try {
        const { correo, password } = value
        console.log(correo,password)
        await this.authService.login(correo, password)
        sessionStorage.setItem('correo', correo)
        
        console.log(sessionStorage)
        Swal.fire({
          icon: 'success',
          title: 'Logeo con exito',
          showConfirmButton: false,
          timer: 2000
        })
        this.loginForm.reset()

      } catch (error) {
        //this.message = error;
        Swal.fire({
          icon: 'error',
          title: 'Hubo un error en firebase',
          showConfirmButton: false,
          timer: 2000
        })
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Verifique que los valores sean validos',
        showConfirmButton: false,
        timer: 2000
      })
    }
  }


}
