package net.JavaPractise.ems_backend.mapper;

import net.JavaPractise.ems_backend.dto.EmployeeDto;
import net.JavaPractise.ems_backend.entity.Employee;

public class EmployeeMapper {
    public static EmployeeDto mapToEmployeeDto(Employee employee){
        return new EmployeeDto(
                employee.getId(),
                employee.getFirstName(),
                employee.getLastName(),
                employee.getPhoneNo(),
                employee.getEmail()
        );
    }
    public static  Employee mapToEmployee(EmployeeDto employeeDto){
        return new Employee(
                employeeDto.getId(),
                employeeDto.getFirstName(),
                employeeDto.getLastName(),
                employeeDto.getPhoneNo(),
                employeeDto.getEmail()
        );
    }
}
