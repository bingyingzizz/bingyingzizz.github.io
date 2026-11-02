# 左不变向量场　`prop.left-invariant-fields`　·　说明
根 `../`

**例子**：$G = \operatorname{GL}(n,\mathbb{R})$ 的 Lie 代数是 $\mathfrak{gl}(n,\mathbb{R})$ 配交换子 —— 因为 $L_{A}$ 是线性映射、$\mathrm{d}(L_{A}) = A$ 本身，左不变向量场就是 $X(A) = AM$（$M$ 固定），括号算出来正是 $[M,N] = MN - NM$。

**「Lie 代数决定 Lie 群」是假的**：$S^{1}$ 与 $\mathbb{R}$ 的 Lie 代数都是一维阿贝尔的，但两者不同构（紧 vs 非紧）。所以从 $\mathfrak{g}$ 回不到 $G$，只能回到单连通的 $G$ —— 这是 Lie 第三定理的内容，本图不展开。

**下一步去哪**：左不变**形式**（对偶版本）给出 Maurer–Cartan 方程，本图不展开；那条线与结构方程（`def.connection-form`）是同一套记账。
