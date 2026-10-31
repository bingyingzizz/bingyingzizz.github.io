# 整函数的阶与型　`def.entire-order`
整函数的阶与型：用增长速度给整函数排队
layer 23 · 定义 · 解析延拓与整函数 · 复变函数
[在星图里打开](../#n=def.entire-order)　·　[节点索引](../index.md)

设 $f$ 是整函数。它的**阶**定义为

$$\rho := \limsup_{r \to \infty} \frac{\log^{+} \log^{+} M(r)}{\log r},\qquad M(r) := \max_{|z| = r} |f(z)|.$$
> 陈述续见 [nodes/def.entire-order.2.md](./def.entire-order.2.md)


## 它能推出什么 / 谁在用它
- ⇒ [`thm.weierstrass-product`](../nodes/thm.weierstrass-product.md) Weierstrass 乘积定理

- …另有出边，续页见 [nodes/def.entire-order.4.md](./def.entire-order.4.md)

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/def.entire-order.3.md](./def.entire-order.3.md)

refs: 王晓光《复变函数》· 整函数的增长阶；Ahlfors, Complex Analysis (3rd ed.), Ch. 8 §2.3 · The Order of an Entire Function；Stein–Shakarchi, Complex Analysis, Ch. 8 §8.4 · Entire functions of finite order

> 说明见 `notes/def.entire-order.md`

引用：`def.entire-order`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
