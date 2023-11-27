
import useAxiosIntercepter from '../../../hooks/useAxiosIntercepter';
import { useQuery } from 'react-query';
import UserTable from './UserTable';

const ManageUSers = () => {
    let AxiosCustomSecure=useAxiosIntercepter()
    let {data:Users,isFetched,refetch} = useQuery(
        {
          queryKey:['AllUser'],
          queryFn:async()=>{
           let data= await AxiosCustomSecure.get('/auth/users')
            return  data.data
          }
        }
      )
   
    return (
        <div>
            {isFetched&& <UserTable Users={Users} refetch={refetch} ></UserTable>}
        </div>
    );
};

export default ManageUSers;