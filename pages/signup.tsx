import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Link from 'next/link'
import { userService, alertService } from 'services';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import PasswordStrengthMeter from "components/PasswordStrengthMeter";
import {useEffect} from "react";

const Signup = () => {
    const MySwal = withReactContent(Swal)
    const router = useRouter();

    // form validation rules
    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required('Username is required'),
        userid: Yup.string()
            .required('User Id is required')
            .min(3),
        grade: Yup.number()
            .required('User grade is required')
            .max(3)
            .min(1),
        class: Yup.number()
            .required('User class number is required')
            .min(1),
        usernum:Yup.number()
            .required('user number is required')
            .min(1),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters'),
        passwordre: Yup.string()
            .required('required')
            .min(6)
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, formState, watch } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(user) {
        return userService.register(user)
            .then(() => {
                router.push('/signin');
            })
            .catch((e)=>MySwal.fire(
                {
                    title:'에러',
                    text: e,
                    icon: 'error',
                }
            ));
    }
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
                    <h4>📝</h4>
                    <h4 className="text-black mt-2">회원가입</h4>
                    <p style={{
                        textAlign:'right',
                        marginTop:'1em'
                    }}>계정을 가지고 계신가요?<Link href={'/signin'} passHref><a style={{
                        color:'#346aff'
                    }}>로그인하기</a></Link></p>
                    <form style={{marginTop: '1rem'}} onSubmit={handleSubmit(onSubmit)}>
                        <div style={{width:'25vh'}}>
                            <input className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md focus:outline-none focus:ring ${errors.username ?'border-red-500 focus:ring-red-300':'focus:ring-blue-400'}`} type="text"
                                   placeholder="이름"
                                   {...register('username')}/>
                            <p className="text-red-600">{errors?.username&&'이름을 기입해주세요.'}</p>
                        </div>
                        <div style={{width:'25vh'}}>
                            <input className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md focus:outline-none focus:ring ${errors.grade ?'border-red-500 focus:ring-red-300':'focus:ring-blue-400'}`}
                                   type="number"
                                   placeholder="학년"
                                   min={1}
                                   max={3}
                                   {...register('grade')}/>
                            <p className="text-red-600">{errors?.grade&&'학년을 기입해주세요.'}</p>
                        </div>
                        <div style={{width:'25vh'}}>
                            <input className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md focus:outline-none focus:ring ${errors.class ?'border-red-500 focus:ring-red-300':'focus:ring-blue-400'}`}
                                   type="number"
                                   placeholder="반"
                                   min={1}
                                   {...register('class')}/>
                            <p className="text-red-600">{errors?.class&&'반을 기입해주세요.'}</p>
                        </div>
                        <div style={{width:'25vh'}}>
                            <input className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md focus:outline-none focus:ring ${errors.usernum ?'border-red-500 focus:ring-red-300':'focus:ring-blue-400'}`}
                                   type="number"
                                   placeholder="출석 번호"
                                   min={1}
                                   {...register('usernum')}/>
                            <p className="text-red-600">{errors?.usernum&&'출석 번호를 기입해주세요.'}</p>
                        </div>
                        <div style={{width:'25vh'}}>
                            <input className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md focus:outline-none focus:ring ${errors.userid ?'border-red-500 focus:ring-red-300':'focus:ring-blue-400'}`} type="text"
                                   placeholder="아이디"
                                   {...register('userid')}/>
                            <p className="text-red-600">{errors?.userid&&'아이디를 기입해주세요.'}</p>
                        </div>
                        <div style={{marginTop: '0.5rem',width:'25vh'}}>
                            <input className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md focus:outline-none focus:ring ${errors.password ?'border-red-500 focus:ring-red-300':'focus:ring-blue-400'}`} type="password"
                                   placeholder="비밀번호"
                                   {...register('password')}/>
                            <p className="text-red-600">{errors?.password&&'비밀번호를 기입해주세요.'}</p>
                            <PasswordStrengthMeter password={watch('password')||""}/>

                        </div>
                        <div style={{marginTop: '0.5rem',width:'25vh'}}>
                            <input className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md focus:outline-none focus:ring ${errors.passwordre ?'border-red-500 focus:ring-red-300':'focus:ring-blue-400'}`} type="password"
                                   placeholder="비밀번호 확인"
                                   {...register('passwordre')}/>
                            <p className="text-red-600">{errors?.passwordre&&'비밀번호를 재입력해주세요.'}</p>
                            <p className="text-red-600">{watch('password') !== watch('passwordre')&&'비밀번호가 서로 달라요.'}</p>
                        </div>
                        <div style={{textAlign: 'right', marginTop: '0.5rem'}}>
                            <button type="submit" className="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-500 rounded hover:bg-blue-700 focus:outline-none">
                                Signup
                            </button>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
}
export default Signup;
