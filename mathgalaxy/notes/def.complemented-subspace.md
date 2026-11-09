# 可补子空间　`def.complemented-subspace`　·　说明
根 `../`

**代数互补的直接推论。** 由定义 $P_X + P_Y = I$、$P_X^{2} = P_X$、$P_Y^{2} = P_Y$、$P_X P_Y = P_Y P_X = 0$，且 $P_X(E) = X$、$P_Y(E) = Y$、$\ker P_X = Y$、$\ker P_Y = X$。所以「$X$ 可补」等价于「存在有界投影 $P \in B(E)$ 使 $P(E) = X$」：取 $Y = \ker P$；反之给定 $Y$ 取 $P = P_X$。

**TC 的定义不依赖选 $P_X$ 还是 $P_Y$。** $P_Y = I - P_X$，故 $P_X$ 有界 $\iff$ $P_Y$ 有界。

⚠️ **AC 不自动 TC**：一般赋范空间里 $X, Y$ 代数互补时投影可能无界。$E$ 完备时，若 $X, Y$ 都闭，则由开映射/有界逆定理它们自动拓扑互补（见 `thm.complemented-subspace-criterion`）；但不完备时「闭 + AC」也不够。

⚠️ **可补要求 $Y$ 闭**：由 $Y = \ker P_X$ 与 $P_X$ 连续知 $Y$ 闭；同理 $X$ 闭。所以可补子空间必闭。反过来闭子空间不一定可补：$c_0(\mathbb{N})$ 在 $\ell^{\infty}(\mathbb{N})$ 中闭但不可补（Phillips 1940；证明要用 Banach 极限/超滤子，本图不展开）。

> 续见 notes/def.complemented-subspace.2.md
