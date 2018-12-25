export interface IEmployeeForm {
    employeeFirstName: string
    employeeLastName: string
    hireDate: Date
    employeeTitle: string
    employeeDepartment: EmployeeDepartment
    performanceEvaluation: Rate
    overall: Rate
    moreDetails: String
    SupervisorFirstName: String
    supervisorLastName: String
}

export enum EmployeeDepartment {
    Marketing, 
    Sales, 
    Human, 
    Resources, 
    Pricing, 
    CustomerService = "Customer Service",
    ProductDevelopment = "Product Development",
    Research = "Product Development",
}

export enum Rate {
    Good, 
    Fair, 
    Poor, 
    VeryGood = "Very Good", 
    VeryPoor = "Very Poor", 
}