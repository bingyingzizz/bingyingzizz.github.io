# imp.egregium-frame
`imp.egregium-frame` · 推出 · strong 边 · 根 `../`

`def.gauss-curvature` Gauss 曲率 + `def.curvature-tensor` Riemann 曲率张量 + `prop.christoffel-frame` 标架下的联络系数 → `thm.theorema-egregium` 绝妙定理

写 $\omega^{i}_{3} = \sum_{j}h_{ij}\omega^{j}$（$h_{ij}$ 对称），把 $\omega^{3}_{2}\wedge\omega^{1}_{3} = -\omega^{2}_{3}\wedge\omega^{1}_{3}$ 展开：两个交叉项相消，对角项留下 $h_{11}h_{22}-h_{12}^{2}$，所以
$$\mathrm{d}\omega^{1}_{2} = \omega^{3}_{2}\wedge\omega^{1}_{3} = \det(h_{ij})\,\omega^{1}\wedge\omega^{2}.$$
而 $n$ 反号会让整个 $h_{ij}$ 反号、$\det$ 不变，所以 $\det(h_{ij}) = k_{1}k_{2}$ 是法向无关的外在量，正是高斯曲率：$\det(h_{ij}) = K$。于是
$$K\,\omega^{1}\wedge\omega^{2} = \mathrm{d}\omega^{1}_{2},$$
右端只依赖 $I$（第②步），所以 $K$ 只依赖 $I$。
**④ 收尾。** 若 $\varphi$ 是局部等距，则 $I_{1} = \varphi^{*}I_{2}$，故两侧的 $\omega$ 都被拉回、$\mat

> 续见 proofs/imp.egregium-frame.4.md
