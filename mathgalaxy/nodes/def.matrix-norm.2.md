# 矩阵范数　`def.matrix-norm`　·　续页（第 2 页）
[在星图里打开](../#n=def.matrix-norm)　·　第 1 页 [nodes/def.matrix-norm.md](./def.matrix-norm.md)

## 陈述（续）
**Frobenius 范数**：$\lVert A\rVert_{F} := \bigl(\sum_{i,j}\lvert a_{ij}\rvert^{2}\bigr)^{1/2}$（就是把它当 $mn$ 维向量量长度）。

**基本性质**：两者都是范数；都满足 $\lVert AB\rVert \le \lVert A\rVert\,\lVert B\rVert$（次乘性）；算子范数还额外满足 $\lVert Ax\rVert \le \lVert A\rVert\,\lVert x\rVert$。
**与谱的关系**：$\lVert A\rVert_{2} = \sigma_{\max}(A) = \sqrt{\lambda_{\max}(A^{*}A)}$（谱范数 = 最大奇异值）；$\lVert A\rVert_{F} = \bigl(\sum \sigma_{i}^{2}\bigr)^{1/2}$。

> 续见 [nodes/def.matrix-norm.3.md](./def.matrix-norm.3.md)
