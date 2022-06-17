import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Link from 'next/link'
import { userService, alertService } from 'services';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const Signin = () => {
    const MySwal = withReactContent(Swal)
    const router = useRouter();

    // form validation rules
    const validationSchema = Yup.object().shape({
        userid: Yup.string().required('Userid is required'),
        password: Yup.string().required('Password is required')
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        return userService.login(data.userid, data.password)
            .then(() => {
                // get return url from query parameters or default to '/'
                const returnUrl = router.query.returnUrl || '/';
                router.push(returnUrl);
            })
            .catch((e)=>MySwal.fire(
                {
                    title:'에러',
                    text: e,
                    icon: 'error',
                }
            ));
    }
    // @ts-ignore
    return (
        <div style={{height: '100vh', display: 'flex'}}>
            <div style={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div style={{textAlign: 'center'}}>
                    <h4>🔓</h4>
                    <h4 className="text-black mt-2">로그인</h4>
                    <p style={{
                        textAlign:'right',
                        marginTop:'1em'
                    }}>계정이 없으신가요?<Link href={'/signup'} passHref><a style={{
                        color:'#346aff'
                    }}>가입하기</a></Link></p>
                    <form style={{marginTop: '1rem'}} onSubmit={handleSubmit(onSubmit)}>
                        <div style={{width:'25vh'}}>
                            <input className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md focus:outline-none focus:ring  ${errors.userid ?'border-red-500 focus:ring-red-300':'focus:ring-blue-400'}`} type="text"
                                placeholder="아이디" {...register('userid')}/>
                            <p className="text-red-600">{errors?.userid&&'아이디를 기입해주세요.'}</p>
                        </div>
                        <div style={{marginTop: '0.5rem',width:'25vh'}}>
                            <input className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md focus:outline-none focus:ring ${errors.password ?'border-red-500 focus:ring-red-300':'focus:ring-blue-400'}`} type="password"
                                placeholder="비밀번호" {...register('password')}/>
                            <p className="text-red-600">{errors?.password&&'비밀번호를 기입해주세요.'}</p>
                        </div>
                        <div style={{textAlign: 'right', marginTop: '0.5rem',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                            <Link href={'/signup'} passHref><a style={{
                                color:'#346aff'
                            }}>
                                계정찾기
                            </a></Link>
                            <button type="submit" className="btn bg-blue-600 border-none no-animation text-white w-24 hover:bg-blue-500">
                                로그인
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
}
export default Signin;
