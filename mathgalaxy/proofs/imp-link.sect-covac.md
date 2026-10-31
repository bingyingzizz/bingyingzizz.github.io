# 有截面的 Čech 同伦 $\implies$ 任意覆盖上自由复形零调
`imp-link.sect-covac` · 推出 · strong 边 · 根 `../`

`prop.cech-section-vanishing` 带截面的覆盖上 Čech 零调 + `thm.sheafification` 层化 → `lem.covering-free-acyclic` 覆盖给出的自由复形零调

**（一）化到单个满态射。** 令 $X_{0} := \coprod_{i} X_{i}$。满态射 $X_{0} \to X$ 的 Čech 脉的第 $n$ 项正是 $\coprod_{i_{0},\ldots,i_{n}} X_{i_{0}} \times_{X} \cdots \times_{X} X_{i_{n}} = X_{n}$ ✓，所以只需证明 $X_{0} \twoheadrightarrow X$ 的情形。
**（二）$\mathcal{T} = \mathbf{Set}$。** 满射有截面 $s$（选择公理）✓。沿截面取
$$s^{n} := s \times_{X} 1_{X_{n}} : X_{n} \longrightarrow X_{n+1},$$
它满足收缩同伦的恒等式 $1_{X_{n}} = s^{n+1} d_{n} + d_{n+1} s^{n}$ ✓（逐面展开即得），于是增广复形同伦平凡，特别地零调 ✓。这正是「带截面的覆盖上 Čech 零调」那条命题。
**（三）$\mathcal{T} = \widehat{\mathcal{C}}$（预层）。** 由上一条定理，预层范畴里的极限与余极

> 续见 proofs/imp-link.sect-covac.2.md
