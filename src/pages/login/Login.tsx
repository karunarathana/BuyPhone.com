import { AppProvider } from '@toolpad/core/AppProvider';
import { SignInPage, type AuthProvider } from '@toolpad/core/SignInPage';
import { useTheme } from '@mui/material/styles';

const providers = [{ id: 'credentials', name: 'Credentials' }];
// preview-start
const BRANDING = {
    logo: (
        <img
            src="https://mui.com/static/logo.svg"
            alt="MUI logo"
            style={{ height: 24 }}
        />
    ),
    title: 'MUI',
};
// preview-end

const signIn: (provider: AuthProvider) => void = async (provider) => {
    const promise = new Promise<void>((resolve) => {
        setTimeout(() => {
            console.log(`Sign in with ${provider.id}`);
            resolve();
        }, 500);
    });
    return promise;
};

function Login() {
    const theme = useTheme();
    return (
        <AppProvider branding={BRANDING} theme={theme}>
            <SignInPage
                signIn={signIn}
                providers={providers}
                slotProps={{ emailField: { autoFocus: false }, form: { noValidate: true } }}
            />
        </AppProvider>
    )
}

export default Login