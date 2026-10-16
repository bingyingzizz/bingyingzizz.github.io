# Rolle 中值定理　`thm.rolle`
Rolle 中值定理（Rolle's Theorem）
layer 20 · 定理 · 微分中值定理与 Taylor · 分析学
[在星图里打开](../#n=thm.rolle)　·　[节点索引](../index.md)

设 $f$ 在闭区间 $[a, b]$ 上连续、在开区间 $(a, b)$ 内可导，且 $f(a) = f(b)$。则存在 $\xi \in (a, b)$ 使

$$f'(\xi) = 0$$

## 为什么成立（入边，证明在 proofs/）
- [`thm.fermat`](../nodes/thm.fermat.md) Fermat 引理 + [`thm.evt`](../nodes/thm.evt.md) 最值定理：Fermat 引理 + 最值定理 $\implies$ Rolle 中值定理　[proofs/imp.rolle.md](../proofs/imp.rolle.md)

## 它能推出什么 / 谁在用它
- ⇒ [`thm.mvt`](../nodes/thm.mvt.md) Lagrange 中值定理
- ⇒ [`thm.cauchy-mvt`](../nodes/thm.cauchy-mvt.md) Cauchy 中值定理

- …另有出边，续页见 [nodes/thm.rolle.2.md](./thm.rolle.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 5

> 说明见 `notes/thm.rolle.md`

引用：`thm.rolle`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
