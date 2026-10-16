# Taylor 公式（Peano 余项）　`prop.taylor-peano`
命题：Taylor 公式的 Peano 余项形式
layer 23 · 命题 · 微分中值定理与 Taylor · 分析学
[在星图里打开](../#n=prop.taylor-peano)　·　[节点索引](../index.md)

设 $f$ 在 $x_0$ 的邻域内有 $n$ 阶导数（第 $n$ 阶在 $x_0$ 处连续即可），则当 $x \to x_0$ 时

$$f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(x_0)}{k!}\,(x - x_0)^{k} + o\bigl( (x - x_0)^{n} \bigr)$$

即余项关于 $(x - x_0)^{n}$ 是**高阶无穷小**。

## 为什么成立（入边，证明在 proofs/）
- [`thm.lhopital`](../nodes/thm.lhopital.md) L'Hôpital 法则：L'Hôpital 法则 $\implies$ Peano 余项　[proofs/imp.taylor-peano.md](../proofs/imp.taylor-peano.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 5

> 说明见 `notes/prop.taylor-peano.md`

引用：`prop.taylor-peano`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
