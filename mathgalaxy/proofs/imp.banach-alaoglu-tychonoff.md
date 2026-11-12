# Tychonoff：把 $B_{X^{*}}$ 嵌进紧的积空间
`imp.banach-alaoglu-tychonoff` · 推出 · strong 边 · 根 `../`

`thm.tykhonov` Tychonoff 定理 → `thm.banach-alaoglu` Banach–Alaoglu 定理

令 $P=\prod_{x\in X}[-\|x\|,\|x\|]$，$\Phi(\varphi)=(\varphi(x))_{x\in X}$。弱*拓扑正是积拓扑沿 $\Phi$ 拉回的拓扑，$\Phi$ 为单射。像闭：若 $\Phi(\varphi_\alpha)\to y$，则 $\varphi(x):=y_x$ 线性且 $\|\varphi\|\le1$，故 $y=\Phi(\varphi)$ 仍在像中；于是 $B_{X^{*}}$ 同胚于闭子集 $\Phi(B_{X^{*}})\subseteq P$。每个 $[-\|x\|,\|x\|]$ 紧，由 `thm.tykhonov` 得 $P$ 紧，闭子集紧，故 $B_{X^{*}}$ 弱*紧。∎
