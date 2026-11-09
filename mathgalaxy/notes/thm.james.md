# James 定理　`thm.james`　·　说明
根 `../`

⚠ **本节点仍标 skeleton**：($\Longleftarrow$) 方向就是 James 定理本身（本图无节点、且是深定理）；($\Longrightarrow$) 方向可在 Banach–Alaoglu 的前提下写完整，见下。

**($\Longrightarrow$) 方向（模 Banach–Alaoglu）**：设 $X$ 自反，$J_X : X \to X^{**}$ 是满射等距，故 $J_X(B_X) = B_{X^{**}}$。Banach–Alaoglu 定理说 $B_{X^{**}}$ 在弱*拓扑下紧；而 $X$ 的弱拓扑 $\sigma(X, X^*)$ 正是 $J_X$ 拉回的弱*拓扑，所以 $B_X$ 弱紧。任取 $\varphi \in X^*$，$\varphi$ 在弱拓扑下连续，$|\varphi|$ 在弱紧集 $B_X$ 上达到最大值；最大值等于 $\|\varphi\|$（由 $\|\varphi\| = \sup_{x \in B_X}|\varphi(x)|$），故存在 $x \in B_X$ 使 $\varphi(x) = \|\varphi\|$。$\blacksquare$

> 续见 notes/thm.james.2.md
