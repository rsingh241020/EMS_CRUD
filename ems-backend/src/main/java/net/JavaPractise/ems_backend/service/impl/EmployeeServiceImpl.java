package net.JavaPractise.ems_backend.service.impl;

import lombok.AllArgsConstructor;
import net.JavaPractise.ems_backend.dto.EmployeeDto;
import net.JavaPractise.ems_backend.entity.Employee;
import net.JavaPractise.ems_backend.exception.ResourceNotFoundException;
import net.JavaPractise.ems_backend.mapper.EmployeeMapper;
import net.JavaPractise.ems_backend.repository.EmployeeRepository;
import net.JavaPractise.ems_backend.service.EmployeeService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);

        Employee savedEmployee =  employeeRepository.save(employee);


        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(()->
                        new ResourceNotFoundException("Employee is not exists with given Id : "+employeeId));
        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        employeeRepository.findAll();
        List<Employee> employees = employeeRepository.findAll();
        return employees.stream().map(employee -> EmployeeMapper.mapToEmployeeDto(employee))
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(Long employeeId,EmployeeDto updatedEmployee) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(()->
                        new ResourceNotFoundException("Employee is not Exists with given Id:"+employeeId));

        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setEmail(updatedEmployee.getEmail());
        employee.setPhoneNo(updatedEmployee.getPhoneNo());

        Employee updatedEmployeeObj = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(updatedEmployeeObj);
    }

    @Override
    public void deleteEmployee(Long employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(()->
                        new ResourceNotFoundException("Employee is not Exists with given Id:"+employeeId));

        employeeRepository.deleteById(employeeId);

    }
}
