# ∮dz/z　`ex.contour-1-over-z`
$\oint_{|z| = 1} \dfrac{\mathrm{d}z}{z} = 2\pi i$：最简单的「闭而不恰当」
layer 20 · 例 · 复变函数基础 · 复变函数
[在星图里打开](../#n=ex.contour-1-over-z)　·　[节点索引](../index.md)

取单位圆 $\gamma(\theta) = e^{i\theta}$（$0 \le \theta \le 2\pi$，逆时针）。则

$$\oint_{\gamma} \frac{\mathrm{d}z}{z} = \int_{0}^{2\pi} \frac{ie^{i\theta}\,\mathrm{d}\theta}{e^{i\theta}} = i\int_{0}^{2\pi}\mathrm{d}\theta = 2\pi i.$$

## 为什么成立（入边，证明在 proofs/）
- [`def.contour-integral`](../nodes/def.contour-integral.md) 复围道积分：用到了定义 复围道积分　[proofs/dep.contour-z.md](../proofs/dep.contour-z.md)

- …另有入边，续页见 [nodes/ex.contour-1-over-z.2.md](./ex.contour-1-over-z.2.md)

refs: Ahlfors, Complex Analysis, Ch. 4

> 说明见 `notes/ex.contour-1-over-z.md`

引用：`ex.contour-1-over-z`（内容 v0.9.3）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
