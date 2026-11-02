# Lagrange 中值定理　`thm.mvt`
Lagrange 中值定理
layer 21 · 定理 · 微分中值定理与 Taylor · 数学分析
[在星图里打开](../#n=thm.mvt)　·　[节点索引](../index.md)

设 $f$ 在 $[a, b]$ 上连续、在 $(a, b)$ 内可导。则存在 $\xi \in (a, b)$ 使

$$f(b) - f(a) = f'(\xi)\,(b - a)$$

等价地 $f'(\xi) = \dfrac{f(b) - f(a)}{b - a}$：**平均变化率必在某点被瞬时变化率取到**。

## 为什么成立（入边，证明在 proofs/）
- [`thm.taylor`](../nodes/thm.taylor.md) Taylor 公式：Taylor 公式取 $n=0$ 就是 Lagrange 中值定理　[proofs/imp.derived-mvt-from-taylor.md](../proofs/imp.derived-mvt-from-taylor.md)

- …另有入边，续页见 [nodes/thm.mvt.2.md](./thm.mvt.2.md)

## 它能推出什么 / 谁在用它
- ⇒ [`thm.mixed-partials`](../nodes/thm.mixed-partials.md) 混合偏导相等

- …另有出边，续页见 [nodes/thm.mvt.3.md](./thm.mvt.3.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 5；Spivak, Calculus, Ch. 11

> 说明见 `notes/thm.mvt.md`

引用：`thm.mvt`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
