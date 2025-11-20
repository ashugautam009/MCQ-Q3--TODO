import Button from "../button"

const ListItem=(props)=>{
    const{data,DeleteButtonName,DeleteuserClick,EditButtonName,EdituserClick}=props
    
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Sr. No</th>
                        <th>Title</th>
                        <th>Action </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((check,index)=>{
                        
                        return(
                            
                            <tr key={check.id}>
                                <td>{index+1}</td>
                                <td>{check.text}</td>
                                <Button buttonName={DeleteButtonName} onClick={()=>DeleteuserClick(check.id)} />
                                <Button buttonName={EditButtonName} onClick={()=>EdituserClick(check.id)}/>
                            </tr>
                            
                            
                        )
                        
                    })}
                </tbody>
            </table>
        </div>
    )
}


export default ListItem