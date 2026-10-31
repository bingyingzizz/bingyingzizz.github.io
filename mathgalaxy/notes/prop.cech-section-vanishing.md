# 带截面的覆盖上 Čech 零调　`prop.cech-section-vanishing`　·　说明
根 `../`

**证明。** 对每个 $n \ge -1$ 取
$$s^{n} := s \times_{X} 1_{X_{n}} : X_{n} \longrightarrow X_{n+1}$$
（$n = -1$ 时它就是 $s$ 本身）。这是「沿截面把次数提高一格」的那一族映射，满足收缩同伦的恒等式
$$1_{X_{n}} = s^{n+1} d_{n} + d_{n+1} s^{n}, \qquad d_{n} := \sum_{i=0}^{n}(-1)^{i} d^{n}_{i}$$
（把两边逐项展开成各面映射 $d^{n}_{i}$ 的复合即可验证）✓。把 $s^{n}$ 线性延拓到自由对象上，同一恒等式说明 $\mathbb{Z}\cdot X^{+}_{\bullet}$ 上的恒等映射**同伦于 0** —— 即这个复形同伦平凡 ✓。
而 $\check{C}^{\bullet} = \operatorname{Hom}_{\mathbb{Z}}\bigl(\mathbb{Z}\cdot X^{+}_{\bullet},\ M\bigr)$，Hom 函子把同伦 $(s^{n})$ 送到同伦 $(\operatorname{Hom}(s^{n}, M))$，故 Čech 复形也同伦平凡，正次数上同调为零 ✓。∎

⭐ **有截面 $\implies$ 没有高次 Čech 上同调**。于是覆盖族里只要有一支映射带截面，整族的 Čech 复形就收缩掉 —— 「同构映射」「有限不交覆盖」这些情形全部自动零调。
