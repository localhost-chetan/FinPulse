const getAppName = () => {
    const appName = process.env.NEXT_PUBLIC_APP_NAME;
    if (!appName) {
        throw new Error(`NEXT_PUBLIC_APP_NAME environment variable is required`);
    }
    return appName;
}

export const APP_NAME = getAppName();