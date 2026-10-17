# Lagrange 中值定理　`thm.mvt`
Lagrange 中值定理（Mean Value Theorem）
layer 21 · 定理 · 微分中值定理与 Taylor · 分析学
[在星图里打开](../#n=thm.mvt)　·　[节点索引](../index.md)

设 $f$ 在 $[a, b]$ 上连续、在 $(a, b)$ 内可导。则存在 $\xi \in (a, b)$ 使

$$f(b) - f(a) = f'(\xi)\,(b - a)$$

等价地 $f'(\xi) = \dfrac{f(b) - f(a)}{b - a}$：**平均变化率必在某点被瞬时变化率取到**。

## 为什么成立（入边，证明在 proofs/）
- [`thm.rolle`](../nodes/thm.rolle.md) Rolle 中值定理：Rolle 定理 $\implies$ Lagrange 中值定理　[proofs/imp.mvt.md](../proofs/imp.mvt.md)

## 它能推出什么 / 谁在用它
- ⇒ [`thm.mixed-partials`](../nodes/thm.mixed-partials.md) 混合偏导相等

- …另有出边，续页见 [nodes/thm.mvt.2.md](./thm.mvt.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 5；Spivak, Calculus, Ch. 11

> 说明见 `notes/thm.mvt.md`

引用：`thm.mvt`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
