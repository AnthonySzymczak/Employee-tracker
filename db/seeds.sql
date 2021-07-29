-- Insert name into department
INSERT INTO department
    (name)

    -- Set list of values for departments
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');

-- Role declaratioons

INSERT INTO role
    (title, salary, department_id)

    --Values including Job Title, Job Salary, and Department ID 
VALUES
    ('Sales Lead', 100000, 1),
    ('Salesperson', 80000, 1),
    ('Lead Engineer', 150000, 2),
    ('Software Engineer', 120000, 2),
    ('Account Manager', 175000, 3),
    ('Accountant', 125000, 3),
    ('Legal Team Lead', 250000, 4),
    ('Lawyer', 190000, 4);

-- Employee Declarations

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)

    -- Employee table seeds from Challenge example.
    --Values are as follows
            --first_name,
            --last_name,
            --role_id,
            --manager_id  
VALUES
    ('John', 'Doe', 1, 3),
    ('Mike', 'Chan', 2, 1),
    ('Ashley', 'Rodriguez', 3, NULL),
    ('Kevin', 'Tupik', 4, 3),
    ('Malia', 'Brown', 6, NULL),
    ('Sarah', 'Lourd', 7, NULL),
    ('Tom', 'Allen', 8, 7),
    ('Christian', 'Eckenrode', 9, 2)