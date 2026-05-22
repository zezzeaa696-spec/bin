"use client";
import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const products = [
  {
    id: 1,
    name: "Quạt làm mát hơi nước điều hòa Hawin HSN120",
    price: "4.500.000₫",
    oldPrice: "6.700.000₫",
    // 4 ảnh giống hệt nhau cho sản phẩm 1
    images: ["/quat.png", "/quat.png", "/quat.png", "/quat.png"], 
    remain: 30,
    desc: "Sử dụng công nghệ làm mát tiên tiến, tiết kiệm điện năng, phù hợp cho không gian mở."
  },
  {
    id: 2,
    name: "Máy xay sinh tố SMEG BLF03BLEU",
    price: "5.950.000₫",
    oldPrice: "9.990.000₫",
    // 4 ảnh giống hệt nhau cho sản phẩm 2
    images: ["/may.png", "/may.png", "/may.png", "/may.png"],
    remain: 20,
    desc: "Thiết kế chuẩn Ý sang trọng, công suất mạnh mẽ xay nhuyễn mọi thực phẩm."
  },
  {
    id: 3,
    name: "Máy lọc nước nóng lạnh DONGA DAD-900",
    price: "15.500.000₫",
    oldPrice: "19.500.000₫",
    images: ["/nuoc.png", "/nuoc.png", "/nuoc.png", "/nuoc.png"],
    remain: 10,
    desc: "Hệ thống lọc RO 9 lõi hiện đại, cung cấp nước nóng lạnh tức thì."
  },
  {
    id: 4,
    name: "Tủ Chống Ẩm Nikatei NC-80S (80 lít)",
    price: "4.925.000₫",
    oldPrice: "5.490.000₫",
    images: ["/tu.png", "/tu.png", "/tu.png", "/tu.png"],
    remain: 15,
    desc: "Kiểm soát độ ẩm cực kỳ chính xác, bảo vệ thiết bị máy ảnh hoàn hảo."
  },
  {
    id: 5,
    name: "Quạt trần đèn 5 cánh Benny BF-C52LUX",
    price: "7.390.000₫",
    oldPrice: "9.070.000₫",
    images: ["/cc.png", "/cc.png", "/cc.png", "/cc.png"],
    remain: 25,
    desc: "Động cơ DC siêu tiết kiệm điện, tích hợp đèn LED đổi màu sang trọng."
  },
  {
    id: 6,
    name: "Nồi chiên không dầu Philips HD9252",
    price: "3.290.000₫",
    oldPrice: "4.500.000₫",
    images: ["/cl.png", "/cl.png", "/cl.png", "/cl.png"],
    remain: 18,
    desc: "Công nghệ Rapid Air độc quyền giúp thức ăn giòn tan mà không cần dầu mỡ."
  }
];

export default function ProductDetail({ params }) {
  const { id } = use(params);
  const product = products.find((item) => item.id.toString() === id.toString());
  const [activeIdx, setActiveIdx] = useState(0);

  if (!product) return <div className={styles.error}>Sản phẩm không tồn tại!</div>;

  const nextSlide = () => setActiveIdx((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setActiveIdx((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backBtn}>← Quay lại trang chủ</Link>

      <div className={styles.card}>
        <div className={styles.mainLayout}>
          
          <div className={styles.imageSection}>
            <div className={styles.mainSlider}>
              <button className={styles.navBtn} onClick={prevSlide}>❮</button>
              <div className={styles.imageDisplay}>
                <Image 
                  src={product.images[activeIdx]} 
                  alt={product.name} 
                  width={500} 
                  height={500} 
                  priority 
                  className={styles.fadeAnim} 
                />
              </div>
              <button className={styles.navBtn} onClick={nextSlide}>❯</button>
              <div className={styles.counter}>{activeIdx + 1} / {product.images.length}</div>
            </div>
          </div>

          <div className={styles.infoSection}>
            <h1 className={styles.title}>{product.name}</h1>
            <div className={styles.priceArea}>
              <span className={styles.current}>{product.price}</span>
              <span className={styles.old}>{product.oldPrice}</span>
            </div>
            <p className={styles.stockStatus}>Tình trạng: <span>Còn hàng ({product.remain} suất)</span></p>
            <div className={styles.description}>
              <h3>Mô tả sản phẩm</h3>
              <p>{product.desc}</p>
            </div>
            <div className={styles.buttonGroup}>
              <button className={styles.cartBtn}>THÊM VÀO GIỎ</button>
              <button className={styles.buyBtn}>MUA NGAY</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}