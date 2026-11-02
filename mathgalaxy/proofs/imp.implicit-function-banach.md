# 同样的 $\Phi(x,y) = (x, F_0(x,y))$ 构造，换到 Banach 空间
`imp.implicit-function-banach` · 推出 · strong 边 · 根 `../`

`thm.implicit-function` 隐函数定理 + `thm.inverse-function-banach` 逆映射定理（Banach 版） → `thm.implicit-function-banach` 隐函数定理（Banach 版）

与有限维版本（`imp.implicit-function`）逐步对应。

**第一步：$\Phi$ 仍是 $C^{1}$。** $\Phi(x, y) := (x, F_0(x, y))$ 是 $E \times F \to E \times G$ 的 $C^{1}$ 映射（两个分量都是 $C^{1}$）。

**第二步：$D\Phi(a,b)$ 是拓扑同构。** 块矩阵 $\begin{pmatrix} I_E & 0 \\ D_xF_0 & D_yF_0 \end{pmatrix}$ 与它的逆

$$\begin{pmatrix} I_E & 0 \\ -(D_yF_0)^{-1}D_xF_0 & (D_yF_0)^{-1} \end{pmatrix}$$

> 续见 proofs/imp.implicit-function-banach.2.md
