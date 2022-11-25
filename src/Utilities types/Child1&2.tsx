
interface User1 {
    name: string,
    mobileNo: string,
    age: number,
    gender : "male" | "female" | "other"
}

interface User2 {
    address: string,
    city: string,
    age: number,
    gender : 'male' | "female" | "other"
}

type Child12Props = {
    data: Partial<User1> & Partial<User2>;
}



const Child12 = (props: Child12Props) => {
    const { data } = props


    return (
        <div>
            <h1>{data.age}</h1>
            <h2>{data.gender}</h2>
            <h3>{data.city}</h3>
        </div>
    )
}

export default Child12