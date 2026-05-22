import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {

  const products = [
    {
      id: 1,
      name: "Quạt làm mát hơi nước điều hòa Hawin HSN120",
      price: "4.500.000₫",
      oldPrice: "6.700.000₫",
      image: "/quat.png",
      remain: 30
    },
    {
      id: 2,
      name: "Máy xay sinh tố SMEG BLF03BLEU",
      price: "5.950.000₫",
      oldPrice: "9.990.000₫",
      image: "/may.png",
      remain: 20
    },
    {
      id: 3,
      name: "Máy lọc nước nóng lạnh DONGA DAD-900",
      price: "15.500.000₫",
      oldPrice: "19.500.000₫",
      image: "/nuoc.png",
      remain: 10
    },
    {
      id: 4,
      name: "Tủ Chống Ẩm Nikatei NC-80S (80 lít)",
      price: "4.925.000₫",
      oldPrice: "5.490.000₫",
      image: "/tu.png",
      remain: 15
    },
    {
      id: 5,
      name: "Quạt trần đèn 5 cánh Benny BF-C52LUX",
      price: "7.390.000₫",
      oldPrice: "9.070.000₫",
      image: "/cc.png",
      remain: 25
    },
    {
      id: 6,
      name: "Nồi chiên không dầu Philips HD9252",
      price: "3.290.000₫",
      oldPrice: "4.500.000₫",
      image: "/cl.png",
      remain: 18
    }
  ];

  return (
    <div className={styles.container}>
      <header/>

      {/* ================= CONTENT ================= */}
      <main className={styles.mainContent}>
        <h2 className={styles.title}>🔥 Flash Sale Hôm Nay</h2>

        <div className={styles.productList}>
          {products.map((item) => (
            <div key={item.id} className={styles.product}>

              {/* SALE BADGE */}
              <span className={styles.saleBadge}>SALE</span>

              <div className={styles.productImage}>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={120}
                />
              </div>
              
              <h5 className={styles.productName}>{item.name}</h5>

              <div className={styles.productPrice}>
                <strong className={styles.price}>{item.price}</strong>

                <div className={styles.discount}>
                  <span className={styles.oldPrice}>{item.oldPrice}</span>
                  <span className={styles.percent}>-20%</span>
                </div>
              </div>

              <div className={styles.productRemain}>
                <Image
                  src="/flash-sale.png"
                  alt="remain"
                  width={20}
                  height={20}
                />
                <span>Còn {item.remain}/30 suất</span>
              </div>

              <Link href={`/products/${item.id}`} className={styles.buyButton}>
  Mua ngay
</Link>
            </div>
          ))}
        </div>
      </main>

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

    </div>
  );
}