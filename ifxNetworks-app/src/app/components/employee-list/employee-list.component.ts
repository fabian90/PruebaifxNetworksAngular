import { EmployeeService } from './../../services/employee.service';
// employee-list.component.ts
import { Component, OnInit } from '@angular/core';
import { EmployeeResponseDTO } from './../../models/employee';
import { RecordsResponse} from './../../models/response';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service'; 
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  employees: EmployeeResponseDTO[] = []; // Almacena la lista de empleados

  constructor(private employeeService: EmployeeService, 
    private router: Router,
    public authService: AuthService) {}

  ngOnInit(): void {
    this.loadEmployees(); // Cargar los empleados al iniciar el componente
  }

  // Método para cargar los empleados
  loadEmployees(): void {
    this.employeeService.getAll({ page: 1, take: 11,filter:'', ids:'',type:''}).subscribe(
      (response: RecordsResponse<EmployeeResponseDTO>) => {
        this.employees = response.items; // Asigna los elementos a la lista
      },
      (error) => {
        console.error('Error al cargar los empleados', error);
      }
    );
  }

  // Método para redirigir a la página de creación
  navigateToCreate(): void {
    this.router.navigate(['/employees/create']);
  }

  // Método para redirigir a la página de edición
  editEmployee(id: number): void {
    this.router.navigate(['/employees/edit', id]);
  }

  // Método para eliminar un empleado
  deleteEmployee(id: number): void {
    console.log("Empleado ID:"+ id)
    this.employeeService.delete(id).subscribe(
      (response) => {
        console.log('Empleado eliminado:', response);
        this.loadEmployees(); // Recargar la lista después de eliminar
      },
      (error) => {
        console.error('Error al eliminar el empleado', error);
      }
    );
  }
}