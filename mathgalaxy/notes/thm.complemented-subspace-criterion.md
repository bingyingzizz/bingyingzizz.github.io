# 可补子空间的判别　`thm.complemented-subspace-criterion`　·　说明
根 `../`

**第一部分（不用完备性）。** 由代数互补，$\Phi$ 是线性双射。它有界：$\|\Phi(x, y)\| = \|x + y\| \le \|x\| + \|y\| \le 2\max\{\|x\|, \|y\|\}$（乘积空间用 $\max$ 范数或和范数都等价）。

若 $X, Y$ 拓扑互补，则 $\Phi^{-1} e = (P_X e, P_Y e)$，故

$$\|\Phi^{-1} e\| \le \max\{ \|P_X\|, \|P_Y\| \} \, \|e\| ,$$

即 $\Phi^{-1}$ 有界。

反之若 $\Phi$ 是同胚，则 $P_X = \pi_X \circ \Phi^{-1}$（$\pi_X : X \times Y \to X$ 是投影，范数 $\le 1$）作为有界映射的复合有界，故 $X, Y$ 拓扑互补。

**第二部分（$E$ 完备）。** 若 $X, Y$ 拓扑互补，则 $X = \ker P_Y$、$Y = \ker P_X$ 都是闭子空间。

反之设 $X, Y$ 都闭。$E$ 是 Banach 空间，闭子空间 $X, Y$ 本身是 Banach 空间，故乘积 $X \times Y$ 是 Banach 空间。$\Phi$ 是有界双射，由逆算子定理（`thm.bounded-inverse`，等价于开映射定理），$\Phi^{-1}$ 有界。于是 $P_X = \pi_X \circ \Phi^{-1}$ 有界，即 $X, Y$ 拓扑互补。

> 续见 notes/thm.complemented-subspace-criterion.2.md
