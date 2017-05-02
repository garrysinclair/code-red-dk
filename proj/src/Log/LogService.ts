module CodeRed.Log {
    export class LogService {
        public static debug(message: string, ...optionalParams: any[]) {
            console.debug(message, optionalParams);
        }

        public static warn(message: string, ...optionalParams: any[]) {
            console.warn(message, optionalParams);
        }

        public static error(message: string, ...optionalParams: any[]) {
            console.error(message, optionalParams);
        }

        public static info(message: string, ...optionalParams: any[]) {
            console.log(message, optionalParams);
        }
    }
}