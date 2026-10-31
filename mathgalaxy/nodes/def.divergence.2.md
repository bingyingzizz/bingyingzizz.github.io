# 散度　`def.divergence`　·　续页（第 2 页）
[在星图里打开](../#n=def.divergence)　·　第 1 页 [nodes/def.divergence.md](./def.divergence.md)

## 陈述（续）
设 $(M,g)$ 是定向 $n$ 维黎曼流形，$\mathrm{d}V$ 是体积形式，$X$ 是 $M$ 上的光滑向量场。**散度** $\operatorname{div}X\in C^{\infty}(M)$ 是使

$$\mathcal{L}_{X}\,\mathrm{d}V = (\operatorname{div}X)\,\mathrm{d}V$$
成立的唯一函数，其中 $\mathcal{L}_{X}$ 是沿 $X$ 的 Lie 导数。由 Cartan 公式 $\mathcal{L}_{X} = \mathrm{d}\iota_{X}+\iota_{X}\mathrm{d}$ 与 $\mathrm{d}(\mathrm{d}V) = 0$，等价地

$$\mathrm{d}(\iota_{X}\mathrm{d}V) = (\operatorname{div}X)\,\mathrm{d}V ,$$
其中 $\iota_{X}$ 是内乘（把 $X$ 填进形式的第一个槽）。在保向卡里逐项算出来是

$$\operatorname{div}X = \frac{1}{\sqrt{\det(g_{ij})}}\sum_{i=1}^{n}\partial_{i}\Bigl(\sqrt{\det(g_{ij})}\,X^{i}\Bigr),\qquad X = \sum_{i=1}^{n}X^{i}\partial_{i}.$$
$\mathbb{R}^{n}$ 的标准度量下它退化成 $\sum_{i}\partial_{i}X^{i}$。

> 续见 [nodes/def.divergence.3.md](./def.divergence.3.md)
