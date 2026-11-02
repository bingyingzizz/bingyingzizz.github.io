# 特征子空间　`def.eigenspace`　·　说明
根 `../`

**为什么是「子空间」**：$\ker(T - \lambda I)$ 是核，当然是子空间。关键在于它**不是随便的子空间** —— 它由单个特征值决定，且不同的 $V_{\lambda}$ 之和是**直和**（对应不同特征值的特征向量线性无关）。

**两种重数为什么不同**：$\begin{pmatrix} 1 & 1 \\ 0 & 1\end{pmatrix}$ 的特征值只有 $1$，代数重数 $2$，但 $\ker(T - I)$ 只有一维（几何重数 $1$）—— 差的那一维就是 Jordan 块的来源（`thm.jordan-canonical-form`）。

⭐ **广义特征子空间**是它的推广：把 $\ker(T - \lambda I)^{k}$ 取到稳定为止，维数正好等于代数重数。Jordan 形的分块就是按这个来的（见 `thm.primary-decomposition`）。

⚠️ 记号约定不一致：有书写 $E_{\lambda}$（eigenspace）、有写 $V(\lambda)$。本图用 $V_{\lambda}$，与 `def.eigenvalue` 的记法对齐。
