export type Employee = {
    id: string;
    name: string;
    job: string;
    address: string;
    imageUrl: string;
}



export const employees: Employee[] = [
    {
        id: "e1",
        name: "John Doe",
        job: "Senior Developer",
        address: "123 Main St, New York",
        imageUrl: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        id: "e2",
        name: "Kate Klein",
        job: "Product Manager",
        address: "456 Park Ave, San Francisco",
        imageUrl: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
        id: "e3",
        name: "Emma Johns",
        job: "UX Designer",
        address: "789 Sunset Blvd, Los Angeles",
        imageUrl: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        id: "e4",
        name: "Michael Smith",
        job: "DevOps Engineer",
        address: "321 Ocean Dr, Miami",
        imageUrl: "https://randomuser.me/api/portraits/men/76.jpg"
    },
    {
        id: "e5",
        name: "Maya Shechter",
        job: "Senior Developer",
        address: "123 Main St, New York",
        imageUrl: "https://randomuser.me/api/portraits/women/33.jpg"
    },
];


