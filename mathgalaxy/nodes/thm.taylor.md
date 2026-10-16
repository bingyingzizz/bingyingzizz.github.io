# Taylor 公式　`thm.taylor`
Taylor 公式（带 Lagrange 余项）
layer 22 · 定理 · 微分中值定理与 Taylor · 分析学
[在星图里打开](../#n=thm.taylor)　·　[节点索引](../index.md)

设 $f$ 在 $[a, b]$ 上有 $n$ 阶连续导数、在 $(a, b)$ 内 $n+1$ 阶可导，取 $x_0 \in [a, b]$。则对每个 $x \in [a, b]$，$x \ne x_0$，存在介于 $x_0$ 与 $x$ 之间的 $\xi$，使

$$f(x) = \sum_{k=0}^{n} \frac{f^{(k)}(x_0)}{k!}\,(x - x_0)^{k} + \frac{f^{(n+1)}(\xi)}{(n+1)!}\,(x - x_0)^{n+1}$$

右边第二项叫 **Lagrange 余项**。

## 为什么成立（入边，证明在 proofs/）
- …另有入边，续页见 [nodes/thm.taylor.2.md](./thm.taylor.2.md)

refs: Rudin, Principles of Mathematical Analysis, Ch. 5；Spivak, Calculus, Ch. 20

> 说明见 `notes/thm.taylor.md`

引用：`thm.taylor`（内容 v0.9.1）· CC BY 4.0 [LICENSE.txt](../LICENSE.txt)
