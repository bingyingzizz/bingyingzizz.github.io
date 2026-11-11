# Banach–Alaoglu 定理　`thm.banach-alaoglu`　·　说明
根 `../`

**弱*拓扑 = 积拓扑的限制。** 令 $P = \prod_{x \in X} [-\|x\|, \|x\|]$，映射 $\Phi : B_{X^{*}} \to P$，$\Phi(\varphi) = (\varphi(x))_{x \in X}$。由 $|\varphi(x)| \le \|\varphi\|\,\|x\| \le \|x\|$，像落在 $P$ 里；$\Phi$ 是单射，且弱*拓扑正是 $P$ 的积拓扑在 $B_{X^{*}}$ 上拉回的拓扑（每个坐标都是弱*连续的，坐标族又分离点）。

**像闭。** 设 $\Phi(\varphi_\alpha) \to y = (y_x)$ 于 $P$。定义 $\varphi(x) = y_x$。线性：$y_{x + z} = \lim \varphi_\alpha(x + z) = \lim(\varphi_\alpha(x) + \varphi_\alpha(z)) = y_x + y_z$，同理 $y_{tx} = t y_x$。有界：$|y_x| \le \|x\|$，故 $\|\varphi\| \le 1$。于是 $y = \Phi(\varphi) \in \Phi(B_{X^{*}})$，像闭。

**紧。** $P$ 是紧空间的积（每个 $[-\|x\|,\|x\|]$ 紧），由 `thm.tykhonov` 紧；闭子集 $\Phi(B_{X^{*}})$ 紧；$\Phi$ 是到其像上的同胚（连续双射、紧 $\to$ Hausdorff），故 $B_{X^{*}}$ 弱*紧。$\blacksquare$

> 续见 notes/thm.banach-alaoglu.2.md
