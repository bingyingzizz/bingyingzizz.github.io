# 有界逆定理 $\implies$ 闭的代数互补必拓扑互补
`imp.fa-openmap-complemented` · 推出 · strong 边 · 根 `../`

`thm.bounded-inverse` 逆算子定理 → `thm.complemented-subspace-criterion` 可补子空间的判别

设 $E$ Banach，$X, Y$ 闭且代数互补。则 $X, Y$ 是 Banach 空间，$X \times Y$ 是 Banach 空间。
$\Phi : X \times Y \to E$，$\Phi(x, y) = x + y$，是有界线性双射。由逆算子定理，$\Phi^{-1}$ 有界。
于是 $P_X = \pi_X \circ \Phi^{-1}$ 有界（$\pi_X$ 是乘积到第一因子的投影，范数 $\le 1$），即 $X, Y$ 拓扑互补。$\blacksquare$

> 这条正是「闭子空间 + 代数互补 $\implies$ 有界投影」的全部内容；$E$ 的完备性只在这里用到。
