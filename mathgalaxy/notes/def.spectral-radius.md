# 谱半径　`def.spectral-radius`　·　说明
根 `../`

⚠️ **公式 (3) 在本图只做到有限维**。一般 Banach 代数上的 Gelfand 公式 $\rho(a) = \lim\lVert a^{n}\rVert^{1/n}$（以及「谱非空」「谱半径等于谱的上确界」）需要复分析（Liouville）与算子理论，**留给泛函那一批**，这里不展开成独立节点。

**为什么第 (1) 条成立但常常严格**：取特征对 $Ax = \lambda x$，则 $\lvert\lambda\rvert\lVert x\rVert = \lVert Ax\rVert \le \lVert A\rVert\lVert x\rVert$。

等号不总成立 —— $\begin{pmatrix} 0 & 1 \\ 0 & 0\end{pmatrix}$ 的 $\rho = 0$ 而任何范数都 $> 0$，它是**幂零**的。

⭐ **它的用处比范数更准**：$A^{k}$ 的增长其实由 $\rho$ 控制（Jordan 块的多项式因子只贡献 $k^{m-1}$ 的因子，被 $\rho^{k}$ 的指数压住）。所以「迭代收敛」的判据一律写 $\rho < 1$，而不是 $\lVert A\rVert < 1$。

⚠️ 非方阵没有谱半径（特征值只对方阵有定义）；伪谱（pseudospectrum）是另一回事，本图未收录。

> 续见 notes/def.spectral-radius.2.md
