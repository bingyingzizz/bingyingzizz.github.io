# Riesz 表示 $\implies$ 伴随算子存在
`imp.fa-riesz-adjoint` · 推出 · strong 边 · 根 `../`

`thm.riesz-hilbert` Riesz 表示定理（Hilbert 版） → `thm.adjoint-hilbert` 伴随算子

固定 $x \in K$，令 $\psi_x(y) := \langle x, u(y)\rangle_K$；它线性、连续且 $|\psi_x(y)| \le \|x\|\,\|u\|\,\|y\|$，故 $\psi_x \in H^*$。
由 Riesz 表示，存在唯一 $u^*(x) \in H$ 使 $\psi_x = \langle \cdot, u^*(x)\rangle$。线性由 $\psi_x$ 对 $x$ 线性 + 表示唯一性得到；有界靠 $\|u^*(x)\| = \|\psi_x\| \le \|u\|\,\|x\|$；$\|u^*\| = \|u\|$ 用两次 sup 交换。$\blacksquare$

> 存在性完全没用到 $u$ 的结构，只用了 $H$ 自对偶。
