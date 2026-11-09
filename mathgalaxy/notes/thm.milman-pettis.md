# Milman–Pettis 定理　`thm.milman-pettis`　·　说明
根 `../`

⚠ **本节点仍标 skeleton**：证明需要本图没有的弱拓扑工具，这里只钉死缺口。



证明路线（Milman 1938 / Pettis 1939）：设 $X$ 一致凸，任取 $\xi \in X^{**}$、$\|\xi\| = 1$。由 Goldstine 定理，$\xi$ 是单位球的弱*-闭包点，取网 $x_\alpha \in B_X$ 弱*收敛到 $\xi$。用一致凸性可证 $x_\alpha$ 是范数 Cauchy：若 $\|x_\alpha - x_\beta\| \ge \varepsilon$，则中点 $\|(x_\alpha + x_\beta)/2\| \le 1 - \delta(\varepsilon)$，但其弱*极限是 $\xi$、范数 $\ge \|\langle \xi, \varphi\rangle\| - o(1)$，令 $\alpha, \beta$ 沿网取极限得 $1 \le 1 - \delta$ 矛盾。故 $x_\alpha \to x \in X$（范数），从而 $\xi = J_X x$。



缺口：Goldstine 定理（$B_X$ 在 $B_{X^{**}}$ 中弱*稠密）本图无节点；弱*拓扑与网收敛本图无节点。这两条不是本图现有节点能推出的。

📌 本图已有 `cor.lp-reflexive` 直接对 $L^p$ 验证自反；Milman–Pettis 是把「一致凸」这个几何条件转成「自反」的通用桥梁。
