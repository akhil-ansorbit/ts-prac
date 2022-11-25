import Child12 from "./Child1&2"


const Parent1 = () => {

    return (
        <div>
            <Child12 data={
                {
                    name: 'ABC',
                    mobileNo: '123',
                    age: 12,gender:'male'
                }
            } />
        </div>
    )

}
export default Parent1