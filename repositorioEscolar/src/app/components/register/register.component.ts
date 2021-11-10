import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interface/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userForm: FormGroup;
  user: User = {
    nombre: "",
    correo: ""
  }

  constructor(private authService: AuthService) {
    this.userForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  createUser({ value, valid }: { value: any, valid: boolean }) {
    if (valid) {
      const { nombre, correo, password } = value
      Swal.fire({
        icon: 'success',
        title: 'Registro con exito',
        showConfirmButton: false,
        timer: 2000
      })
      this.user.nombre = nombre
      this.user.correo = correo
      this.authService.register(this.user, password)

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
