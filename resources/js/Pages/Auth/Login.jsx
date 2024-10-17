import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Navsec from '@/Components/navbar/Navbar';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        // <GuestLayout>
        //     <Head title="Log in" />

        //     {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

        //     <form onSubmit={submit}>
        //         <div>
        //             <InputLabel htmlFor="email" value="Email" />

        //             <TextInput
        //                 id="email"
        //                 type="email"
        //                 name="email"
        //                 value={data.email}
        //                 className="mt-1 block w-full"
        //                 autoComplete="username"
        //                 isFocused={true}
        //                 onChange={(e) => setData('email', e.target.value)}
        //             />

        //             <InputError message={errors.email} className="mt-2" />
        //         </div>

        //         <div className="mt-4">
        //             <InputLabel htmlFor="password" value="Password" />

        //             <TextInput
        //                 id="password"
        //                 type="password"
        //                 name="password"
        //                 value={data.password}
        //                 className="mt-1 block w-full"
        //                 autoComplete="current-password"
        //                 onChange={(e) => setData('password', e.target.value)}
        //             />

        //             <InputError message={errors.password} className="mt-2" />
        //         </div>

        //         <div className="block mt-4">
        //             <label className="flex items-center">
        //                 <Checkbox
        //                     name="remember"
        //                     checked={data.remember}
        //                     onChange={(e) => setData('remember', e.target.checked)}
        //                 />
        //                 <span className="ms-2 text-sm text-gray-600">Remember me</span>
        //             </label>
        //         </div>

        //         <div className="flex items-center justify-end mt-4">
        //             {canResetPassword && (
        //                 <Link
        //                     href={route('password.request')}
        //                     className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        //                 >
        //                     Forgot your password?
        //                 </Link>
        //             )}

        //             <PrimaryButton className="ms-4" disabled={processing}>
        //                 Log in
        //             </PrimaryButton>
        //         </div>
        //     </form>
        // </GuestLayout>
        <>
            <Navsec />

            <div class="row no-gutters container">
                <div class="col-lg-4">

                </div>
                <div class="col-lg-7">
                    <div class="padding_eight_all">
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="login" role="tabpanel">
                                <div className="heading_s1 mb-3">
                                    <h4>Login</h4>
                                </div>
                                <Head title="Log in" />

                                {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
                                <form onSubmit={submit} className="login">
                                    <div className="form-group mb-3">
                                        <input
                                            id="email"
                                            type="email"
                                            name="email"
                                            value={data.email}
                                            className="form-control"
                                            placeholder='Enter Email'
                                            autoComplete="username"
                                            isFocused={true}
                                            onChange={(e) => setData('email', e.target.value)} />
                                    </div>
                                    <div className="form-group mb-3">
                                        <input className="form-control"
                                            id="password"
                                            type="password"
                                            name="password"
                                            value={data.password}
                                            placeholder='Enter Your Password'
                                            autoComplete="current-password"
                                            onChange={(e) => setData('password', e.target.value)}
                                        />
                                    </div>
                                    <div className="login_footer form-group">
                                        <Link  href={route('password.request')}>Lost your password?</Link>
                                        <div className="chek-form mb-3">
                                            <div className="custome-checkbox">
                                                <input className="form-check-input" name="remember"
                                                    checked={data.remember}
                                                    onChange={(e) => setData('remember', e.target.checked)} />
                                                <label className="form-check-label" htmlFor="exampleCheckbox3">Remember me</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn-default btn-block" name="login" disabled={processing}>Log in</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}
