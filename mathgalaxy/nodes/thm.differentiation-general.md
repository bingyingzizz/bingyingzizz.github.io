# 可缩族的微分定理　`thm.differentiation-general`
定理：对可缩族，Lebesgue 微分定理仍然成立
layer 26 · 定理 · 微分定理 · 分析学
[在星图里打开](../#n=thm.differentiation-general)　·　[节点索引](../index.md)

设 $f \in L^1_{loc}$，$x \in L_f$。则对**每一个**可缩地趋于 $x$ 的族 $\{E_r\}_{r>0}$：

$$\lim_{r\to0} \frac{1}{m(E_r)} \int_{E_r} |f(y) - f(x)| dy = 0, $$
$$\lim_{r\to0} \frac{1}{m(E_r)} \int_{E_r} f(y) dy = f(x)$$

## 它能推出什么 / 谁在用它
- ⇒ [`thm.rn-pointwise`](../nodes/thm.rn-pointwise.md) RN 导数的点态公式

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.differentiation-general.2.md](./thm.differentiation-general.2.md)

refs: Folland, Real Analysis, Theorem 3.21

> 说明见 `notes/thm.differentiation-general.md`

引用：`thm.differentiation-general`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
