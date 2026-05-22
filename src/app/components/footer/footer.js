
{/* ================= FOOTER ================= */}
<footer className={styles.footer}>
<div className={styles.footerContent}>

  <div>
    <h4>Về chúng tôi</h4>
    <p>Chuyên cung cấp thiết bị gia dụng chính hãng.</p>
  </div>

  <div>
    <h4>Liên hệ</h4>
    <p>Hotline: 1900 1234</p>
    <p>Email: caoanhtu@shop.com</p>
    <p>Địa chỉ: TP.HCM

    </p>
  </div>

  <div>
    <h4>Chính sách</h4>
    <ul>
      <li><Link href="/">Bảo hành</Link></li>
      <li><Link href="/">Đổi trả</Link></li>
      <li><Link href="/">Vận chuyển</Link></li>
    </ul>
  </div>

</div>

<div className={styles.copy}>
  © 2026 Shop. All rights reserved.
</div>
</footer>
import styles from "./page.module.css";
import Link from "next/link";

