 {/* ================= HEADER ================= */}
 <header className={styles.header}>
 <div className={styles.logo}>
   <Image src="/next.svg" alt="Logo" width={100} height={24} />
 </div>

 <nav className={styles.nav}>
   <ul>
     <li><Link href="/">Home</Link></li>
     <li><Link href="/">Product</Link></li>
     <li><Link href="/">Sale</Link></li>
     <li><Link href="/">Contact</Link></li>
   </ul>
 </nav>
</header>
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";