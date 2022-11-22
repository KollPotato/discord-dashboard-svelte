declare namespace App {
    interface Locals {
        session: import("svelte-kit-cookie-session").Session<SessionData>;
    }

    interface Platform { }

    interface PrivateEnv { }

    interface PublicEnv { }
}