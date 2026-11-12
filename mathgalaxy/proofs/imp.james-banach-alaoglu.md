# Banach–Alaoglu：自反 $\implies$ $B_X$ 弱紧
`imp.james-banach-alaoglu` · 推出 · strong 边 · 根 `../`

`thm.banach-alaoglu` Banach–Alaoglu 定理 → `thm.james` James 定理

先看 $(\Longrightarrow)$，即自反的情形。设 $X$ 自反，则 $J_X(B_X)=B_{X^{**}}$。由 `thm.banach-alaoglu`，$B_{X^{**}}$ 弱*紧；而 $X$ 的弱拓扑就是沿 $J_X$ 拉回的弱*拓扑，故 $B_X=J_X^{-1}(B_{X^{**}})$ 弱紧。于是任取 $\varphi\in X^{*}$，$|\varphi|$ 在弱紧集 $B_X$ 上达到最大值 $\|\varphi\|$，即存在 $x\in B_X$ 使 $\varphi(x)=\|\varphi\|$。∎
