# Lax–Milgram 定理　`thm.lax-milgram`　·　说明
根 `../`

**第五步：$A$ 满射。** 若 $A(H) \ne H$，则 $A(H)$ 是闭真子空间，由正交分解（`thm.projection-subspace`）存在 $0 \ne y \perp A(H)$。于是 $\langle y, A y \rangle = 0$（因为 $A y \in A(H)$），即 $L(y, y) = 0$，与 $\delta \|y\|^{2} > 0$ 矛盾。故 $A$ 满射。

**第六步：$A^{-1}$ 有界。** $A$ 是 Banach 空间之间的有界双射。考察 $A^{-1}$ 的图像：若 $y_n \to y$ 且 $A^{-1} y_n \to x$，则 $A(A^{-1} y_n) = y_n \to y$，由 $A$ 连续得 $A x = y$，即 $x = A^{-1} y$。故 $G(A^{-1})$ 闭；由闭图像定理（`thm.closed-graph`），$A^{-1} \in B(H)$。

**第七步：逆的范数界。** 对任意 $y \in H$，以 $x = A^{-1} y$ 代入第三步的下界：

$$\delta \|A^{-1} y\|^{2} \le |L(A^{-1} y, A^{-1} y)| = |\langle A^{-1} y, y \rangle| \le \|A^{-1} y\| \, \|y\| ,$$

故 $\|A^{-1} y\| \le \delta^{-1} \|y\|$，即 $\|A^{-1}\| \le 1/\delta$。$\blacksquare$

> 续见 notes/thm.lax-milgram.4.md
