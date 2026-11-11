# James 定理　`thm.james`　·　说明
根 `../`

⚠ **本条仍标 skeleton**：($\Longleftarrow$) 方向就是 James 定理本身（James 1951 可分、1957 一般 Banach 空间），本图没有它，也不打算在这里造一个假证明。($\Longrightarrow$) 方向只用一个外部定理 `thm.banach-alaoglu`。

**($\Longrightarrow$) 方向。** 设 $X$ 自反，即 $J_X : X \to X^{**}$ 是满射等距，于是 $J_X(B_X) = B_{X^{**}}$。

在 $X^{**}$ 上取弱*拓扑；由 `thm.banach-alaoglu`，$B_{X^{**}}$ 弱*紧。$X$ 的弱拓扑 $\sigma(X,X^{*})$ 正是 $J_X$ 从弱*拓扑拉回的拓扑：两者都由半范数 $x \mapsto |\varphi(x)|$（$\varphi \in X^{*}$）生成，且 $J_X$ 是等距满射。因此 $B_X = J_X^{-1}(B_{X^{**}})$ 在弱拓扑下紧。

任取 $\varphi \in X^{*}$。$\varphi$ 在弱拓扑下连续（弱拓扑就是使 $X^{*}$ 全部连续的最弱拓扑），故 $|\varphi|$ 在弱紧集 $B_X$ 上达到最大值。最大值等于 $\|\varphi\|$，因为 $\|\varphi\| = \sup_{x \in B_X} |\varphi(x)|$。于是存在 $x \in B_X$ 使 $\varphi(x) = \|\varphi\|$。$\blacksquare$

> 续见 notes/thm.james.2.md
