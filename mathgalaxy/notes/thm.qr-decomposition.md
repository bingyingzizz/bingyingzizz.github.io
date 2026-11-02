# QR 分解　`thm.qr-decomposition`　·　说明
根 `../`

**它其实就是 Gram–Schmidt**：把 $A$ 的列 $a_{1}, \ldots, a_{n}$ 正交化成 $q_{1}, \ldots, q_{n}$（`thm.gram-schmidt`），则 $a_{k} = \sum_{i \le k} r_{ik}q_{i}$，系数拼起来就是上三角 $R$。唯一的差别是 QR 通常要求 $R$ 的对角为正（这固定了 $q_k$ 的符号）。

⭐ **为什么不用 Gram–Schmidt 而用 QR**：数学上等价，但数值上不同 —— Gram–Schmidt 会损失正交性（$Q^{T}Q$ 偏离 $I$），实际算法用 Householder 反射或 Givens 旋转直接算 $Q$。**本图只做数学内容，不展开算法**（数值分析不在收录范围）。

**与最小二乘的关系**：$\lVert Ax - b\rVert^{2} = \lVert Rx - Q^{T}b\rVert^{2} + \lVert (I - QQ^{T})b\rVert^{2}$，最后一项与 $x$ 无关 —— 所以最小二乘解就是解 $Rx = Q^{T}b$（`thm.least-squares`）。这是 QR 在数值上受欢迎的真正原因。

⚠️ **列线性无关**这个前提不能去：否则 $Q$ 的列不全、$R$ 不可逆，分解仍可做但失去意义（那种情形要用列主元 QR 或伪逆）。
