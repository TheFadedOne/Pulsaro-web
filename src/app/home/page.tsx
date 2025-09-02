"use client";

import { useSession, signIn, signOut, SessionProvider } from "next-auth/react";
import styles from "./page.module.css";

export default function HomePage() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className={styles.page}>
        <div className={styles.signOnBox}>
          <h1>Sign On</h1>
          <p>Your gateway to seamless authentication with Keycloak.</p>
          <div className={styles.signOnButtonBox}>
            <button
              onClick={() => signIn("keycloak")}
              className={styles.signOnButtonText}
            >
              Sign In with Keycloak
            </button>
          </div>
        </div>
      </div>
    );
  } else if (session) {
    return (
      <>
        <div className={styles.page}>
          <div className={styles.signedInBox}>
            <h1>Welcome, {session.user?.name || "User"}!</h1>
            <p>You have successfully signed in using Keycloak.</p>
            <div className={styles.signOutButtonBox}>
              <button
                onClick={() => signOut()}
                className={styles.signOutButtonText}
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
