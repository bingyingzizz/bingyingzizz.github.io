# 谱半径　`def.spectral-radius`　·　说明
根 `../`

- (1) $\rho(A) \le \lVert A\rVert$：**对任意从属范数**（算子范数）成立，一行：(1) 的算子范数就是「最大放大倍数」，而特征向量满足 $Av = \lambda v$ $\implies$ $\lvert\lambda\rvert\lVert v\rVert \le \lVert A\rVert\lVert v\rVert$。⚠️ 对**非从属**的任意矩阵范数（例如 $\lVert A\rVert = \max_{ij}\lvert a_{ij}\rvert$ 的变体）不一定成立。
- (2) 相似不变：**只用「相似保持特征多项式」**（`def.char-poly`），不需要任何范数。
- (3) $\rho(A) = \lim_{k}\lVert A^{k}\rVert^{1/k}$：**这是全组唯一有真内容的**。$(\le)$ 用 (1) 与谱半径的幂性质；$(\ge)$ 要用 **Jordan 标准形**（`thm.jordan-canonical-form`）+ 一个 $\varepsilon$ 技巧（把 $\rho + \varepsilon$ 当成“放大后的谱半径”，证明 $\lVert(A/(\rho+\varepsilon))^{k}\rVert$ 有界）。**必须有限维**：无穷维时这条公式一般**不**成立（要看算子谱的边界与范数之间的关系）。
- (4) $\rho(A) < 1 \iff A^{k} \to 0$：**只依赖 (3) 或 Jordan 形**。($\Longleftarrow$) 若 $\rho \ge 1$，取模最

> 续见 notes/def.spectral-radius.4.md
