# Cauchy 中值定理　`thm.cauchy-mvt`
Cauchy 中值定理（广义中值定理）
layer 21 · 定理 · 微分中值定理与 Taylor · 分析学
[在星图里打开](../#n=thm.cauchy-mvt)　·　[节点索引](../index.md)

设 $f, g$ 在 $[a, b]$ 上连续、在 $(a, b)$ 内可导，且 $g'(x) \ne 0$ 在 $(a, b)$ 内处处成立。则存在 $\xi \in (a, b)$ 使

$$\frac{f(b) - f(a)}{g(b) - g(a)} = \frac{f'(\xi)}{g'(\xi)}$$

## 为什么成立（入边，证明在 proofs/）
- [`thm.rolle`](../nodes/thm.rolle.md) Rolle 中值定理：Rolle 定理 $\implies$ Cauchy 中值定理　[proofs/imp.cauchy-mvt.md](../proofs/imp.cauchy-mvt.md)

## 它能推出什么 / 谁在用它
- ⇒ [`thm.lhopital`](../nodes/thm.lhopital.md) L'Hôpital 法则
- ⇒ [`thm.taylor`](../nodes/thm.taylor.md) Taylor 公式

refs: Rudin, Principles of Mathematical Analysis, Ch. 5

> 说明见 `notes/thm.cauchy-mvt.md`

引用：`thm.cauchy-mvt`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
