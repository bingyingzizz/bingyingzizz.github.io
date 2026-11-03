# 不变多项式　`def.invariant-polynomial`　·　续页（第 2 页）
[在星图里打开](../#n=def.invariant-polynomial)　·　第 1 页 [nodes/def.invariant-polynomial.md](./def.invariant-polynomial.md)

## 陈述（续）
设 $\mathfrak{g} = \mathfrak{gl}(k, \mathbb{K})$（$\mathbb{K} = \mathbb{R}$ 或 $\mathbb{C}$）。一个多项式函数
$$P : \mathfrak{gl}(k,\mathbb{K}) \longrightarrow \mathbb{K}$$
（取矩阵元的多项式，且**齐次**：$P(\lambda A) = \lambda^{m}P(A)$）叫**不变多项式**，若对一切可逆 $g$ 有

$$P(g^{-1} A\, g) = P(A) .$$
**等价刻画**：$P$ 可写成矩阵 $A$ 的**特征值**的对称多项式。具体地，记 $c_{j}(A)$ 为 $\det(tI + A) = \sum_{j} c_{j}(A)\,t^{k-j}$ 的系数（即初等对称多项式在特征值上的取值），则

$$P\ \text{不变} \iff P\ \text{是}\ c_{1}, \ldots, c_{k}\ \text{的多项式} .$$
**两个最常用的**：$P_{1}(A) = \operatorname{tr} A$（$c_{1}$）与 $P_{k}(A) = \det A$（$c_{k}$）；中间那些是 $\operatorname{tr}(A^{j})$ 的组合。

> 续见 [nodes/def.invariant-polynomial.3.md](./def.invariant-polynomial.3.md)
