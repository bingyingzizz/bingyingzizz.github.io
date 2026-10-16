# 伴随函子都加法　`prop.adjoint-additive`　·　说明
根 `../`

**证明。** 记单位 $\eta$、余单位 $\varepsilon$，则双射由 $\varphi(f) := G(f)\circ\eta_{M}$ 给出。
**① 右伴随保积**：$G$ 保极限，特别保积。于是 $G(f\oplus g) = Gf \oplus Gg$（由四角刻画），而 $G(\Delta_{M}) = \Delta_{GM}$、$G(\nabla_{N}) = \nabla_{GN}$：后一条要点一下 —— $G(N\oplus N) \cong GN \times GN$ 作为**积**，而 $G(i_{k})$ 的两个分量是 $G(p_{l})G(i_{k}) = G(\delta_{lk}) = \delta_{lk}$，故 $G(i_{k})$ 就是双积的含入，$G(\nabla_{N})$ 满足 $G(\nabla_{N})G(i_{k}) = 1$，即余对角线 ✓。
**② $G$ 在 $\operatorname{Hom}$ 上保加法**：把关键公式 $f + g = \nabla(f\oplus g)\Delta$ 作用 $G$，用 ①：
$$G(f+g) = G(\nabla_{N})G(f\oplus g)G(\Delta_{M}) = \nabla_{GN}(Gf\oplus Gg)\Delta_{GM} = Gf + Gg ✓$$
**③ 双射是群同态**：由 $\varphi(f) = G(f)\eta_{M}$ 与复合的双线性，
$$\varphi(f+g) = G(f+g)\,\eta_{M} = (Gf + Gg)\,\eta_{M} = Gf\,\eta_{M} + Gg\,\eta_{M} = \varphi(f) + \varphi(g) ✓$$
故 $\varphi$ 是群同态，从而是群同构 ✓

> 续见 notes/prop.adjoint-additive.2.md
