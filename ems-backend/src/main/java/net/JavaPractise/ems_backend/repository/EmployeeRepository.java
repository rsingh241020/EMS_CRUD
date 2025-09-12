package net.JavaPractise.ems_backend.repository;

import net.JavaPractise.ems_backend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository  extends JpaRepository<Employee,Long> {
}
