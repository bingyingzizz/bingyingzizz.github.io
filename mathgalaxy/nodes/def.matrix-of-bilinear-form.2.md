# 双线性型的矩阵　`def.matrix-of-bilinear-form`　·　续页（第 2 页）
[在星图里打开](../#n=def.matrix-of-bilinear-form)　·　第 1 页 [nodes/def.matrix-of-bilinear-form.md](./def.matrix-of-bilinear-form.md)

## 陈述（续）
设 $V$ 是 $K$ 上有限维向量空间，$\beta : V \times V \to K$ 双线性，$e_{1}, \ldots, e_{n}$ 是一组基。$\beta$ 在这组基下的**矩阵**是

$$A := \bigl(\beta(e_{i}, e_{j})\bigr)_{1 \le i,j \le n} ,$$
于是对 $x = \sum x_{i}e_{i}$、$y = \sum y_{j}e_{j}$ 有

$$\beta(x, y) = x^{T} A\, y .$$

**换基**：若新基由 $P$ 给出（新基 = 旧基乘以 $P$），则 $\beta$ 的新矩阵是

$$A' = P^{T} A\, P .$$
⚠️ 注意这不是相似（$P^{-1}AP$），而是**合同**（`def.congruent-matrices`）—— 双线性型在换基下的不变量，与线性算子的不变量是**两套**。

> 续见 [nodes/def.matrix-of-bilinear-form.3.md](./def.matrix-of-bilinear-form.3.md)
