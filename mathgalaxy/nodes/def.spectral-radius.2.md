# 谱半径　`def.spectral-radius`　·　续页（第 2 页）
[在星图里打开](../#n=def.spectral-radius)　·　第 1 页 [nodes/def.spectral-radius.md](./def.spectral-radius.md)

## 陈述（续）
1. $\rho(A) \le \lVert A\rVert$ 对**任意**从属矩阵范数成立；
2. 相似不变：$\rho(P^{-1}AP) = \rho(A)$（特征值不变）；
3. $\rho(A) = \lim_{k\to\infty}\lVert A^{k}\rVert^{1/k}$（这一条在有限维可由 Jordan 形直接验证）；
4. $\rho(A) < 1 \iff A^{k} \to 0$。
**四条里哪条依赖什么**（谱半径这一组最容易被误当成“
都能从定义直推”，其实第 3 条最贵）：
- (1) $\rho(A) \le \lVert A\rVert$：**对任意从属范数**（算子范数）成立，一行：(1) 的算子范数就是「最大放大倍数」，而特征向量满足 $Av = \lambda v$ $\implies$ $\lvert\lambda\rvert\lVert v\rVert \le \lVert A\rVert\lVert v\rVert$。⚠️ 对**非从属**的任意矩阵范数（例如 $\lVert A\rVert = \max_{ij}\lvert a_{ij}\rvert

> 续见 [nodes/def.spectral-radius.3.md](./def.spectral-radius.3.md)
