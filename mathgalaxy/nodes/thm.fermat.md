# Fermat 引理　`thm.fermat`
Fermat 引理：内点极值 $\implies$ 导数为零
layer 17 · 定理 · 微分中值定理与 Taylor · 分析学
[在星图里打开](../#n=thm.fermat)　·　[节点索引](../index.md)

设 $f$ 在 $x_0$ 的某个邻域上有定义、在 $x_0$ 处可导，且 $x_0$ 是 $f$ 的**内点**局部极值点。则

$$f'(x_0) = 0$$

## 为什么成立（入边，证明在 proofs/）
- [`def.local-extremum`](../nodes/def.local-extremum.md) 局部极值 + [`def.derivative`](../nodes/def.derivative.md) 导数：导数与局部极值的定义 $\implies$ Fermat 引理　[proofs/imp.fermat.md](../proofs/imp.fermat.md)

## 它能推出什么 / 谁在用它
- ⇒ [`thm.rolle`](../nodes/thm.rolle.md) Rolle 中值定理

refs: Rudin, Principles of Mathematical Analysis, Ch. 5

> 说明见 `notes/thm.fermat.md`

引用：`thm.fermat`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
